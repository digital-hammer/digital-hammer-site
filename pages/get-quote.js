import { useEffect, useState, useRef } from 'react'
import quoteData from '@/data/quote'
import PriceBox from '@/components/quote/price-box'
import PositionHolder from '@/components/quote/position-holder'
import WebType from '@/components/quote/web-type'
import Design from '@/components/quote/design'
import Pages from '@/components/quote/pages'
import Content from '@/components/quote/content'
import Programming from '@/components/quote/programming'
import ContactForm from '@/components/quote/contact'

const GetQuote = (props) => {

	const [selections, setSelections] = useState({})
	const [position, setPosition] = useState(0)
	const [definition, setDefinition] = useState(false)
	const [lineItems, setLineItems] = useState({
		webType: {
			text: "Website Type",
			total: 0
		},
		design: {
			text: "Design",
			total: 0
		},
		content: {
			text: "Additional Content",
			total: 0
		},
		pages: {
			text: "Advanced Pages",
			total: 0
		},
		programming: {
			text: "Programming",
			total: 0
		},
		contact: {
			text: "Get Itemized Quote",
			total: false
		},
	})
	const [totalPrice, setTotalPrice] = useState(0)
	const [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		phone: "",
		message: ""
	})

	const [formattedInfo, setFormattedInfo] = useState({})
	const form = useRef(false)
	useEffect(() => {
		for (let section in quoteData) {
			selections[section] = {}
			for (let item in quoteData[section]) {
				selections[section][item] = false
			}
		}
	}, [])

	const changePosition = (p) => {
		setPosition(p)
		setDefinition(false);
		updateInfo()
	}

	const next = () => {
		//checkCurrentFields()
		changePosition(position + 1)
	}

	const prev = () => changePosition(position - 1)

	const changeSelections = (section, key, newValue, fullUpdate = true) => {
		selections[section][key] = newValue
		setSelections(selections)
		if (fullUpdate) {
			updatePrice()
			setDefinition(quoteData[section][key])
		}
	}

	const updatePrice = () => {
		const n = { ...lineItems }
		Object.entries(selections).forEach(([section, _]) => {
			const val = Object
				.entries(quoteData[section])
				.filter(([key, _]) => selections[section][key] === true)
				.map(([_, val]) => val.price)
			n[section].total = val.length > 0 ? val.reduce((a, b) => a + b) : 0
		})

		setLineItems(n)
		setTotalPrice(
			Object.values(n)
				.filter((a) => a.total !== false)
				.map((a) => a.total)
				.reduce((a, b) => a + b)
		)
	}

	const updateInfo = () => {
		let items = {
			contactInfo,
			pricing: {
				...lineItems,
				totalPrice
			}
		}
		Object.entries(selections).forEach(([key, val]) => {
			items[key] = val
		})
		setFormattedInfo(Object.entries(items).map(([key, val]) => {
			let str = `${key}: \n`
			Object.entries(val).forEach(([k, v]) => {
				str += `\t${k}: ${v || 'false'}\n`
			})
			return str
		}).reduce((a, b) => a + b))
	}

	const updateContactInfo = (e) => {
		const { id, value } = e.target
		setContactInfo({ ...contactInfo, [id]: value })
	}

	const submit = () => {
		updateInfo()
		form.current && form.current.submit()
	}

	const forms = [
		<WebType currentValues={selections.webType} onChange={changeSelections} />,
		<Design currentValues={selections.design} onChange={changeSelections} />,
		<Content currentValues={selections.content} onChange={changeSelections} />,
		<Pages currentValues={selections.pages} onChange={changeSelections} />,
		<Programming currentValues={selections.programming} onChange={changeSelections} />,
		<ContactForm currentValues={contactInfo} onChange={updateContactInfo} />,
	]

	const items = Object.entries(lineItems).map(([_, val]) => val)

	return (
		<div id="quote-section">
			<h4>Step {position + 1} of {forms.length}</h4>
			<PositionHolder total={forms.length} position={position} setPosition={changePosition} />
			<div className="card">
				<div id="quote-builder">
					<h2>{items[position].text}</h2>
					<form ref={form} name="quote" action="/success" method="POST" data-netlify="true">
						<input type="hidden" name="quote" value="quote" />
						{forms[position]}
						<textarea className="hidden" name="Info" value={formattedInfo} />
						<textarea className="hidden" name="Json Info" value={JSON.stringify({ contactInfo, selections, lineItems, totalPrice })} />
						{definition && (
							<div className="definition">
								<h4>
									{definition.title}
								</h4>
								<p>
									{definition.info}
								</p>
							</div>
						)}
						<div className="position-buttons">
							{position > 0 && <input type="button" onClick={prev} value="Previous" />}
							{position !== forms.length - 1
								? <input type="button" onClick={next} value="Next" />
								: <input type="button" onClick={submit} value="Send" />
							}
						</div>
					</form>
				</div>
				<PriceBox lineItems={items} total={totalPrice} />
			</div>
		</div>
	);
}

export default GetQuote