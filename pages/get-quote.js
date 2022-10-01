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
	const [definition, setDefinition] = useState("")
	const [linePrices, setLinePrices] = useState({})
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
			setDefinition("");
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
			setDefinition(quoteData[section][key].info)
		}
	}

	const updatePrice = () => {
		const n = {}
		Object.entries(selections).forEach(([section, el]) => {
			const val = Object
				.entries(quoteData[section])
				.filter(([key, val]) => selections[section][key] === true)
				.map(([_, val]) => val.price)
			n[section] = val.length > 0 ? val.reduce((a, b) => a + b) : 0
		})
		setLinePrices(n)
		setTotalPrice(Object.values(n).reduce((a, b) => a + b))
	}

	const updateInfo = () => {
		let items = {
			"Contact Info": contactInfo,
			"Pricing": {
				...linePrices,
				totalPrice
			}
		}
		Object.entries(selections).forEach(([key, val])=> {
			items[key] = val
		})
		console.log(items)
		setFormattedInfo(Object.entries(items).map(([key, val])=> {
			let str = `${key}: \n`
			Object.entries(val).forEach(([k, v])=> {
				str+= `\t${k}: ${v || 'false'}\n`
			})
			return str
		}))
	}

	const updateContactInfo = (e) => {
			const { id, value }= e.target
			setContactInfo({...contactInfo, [id]: value})
	}
	
	const submit = () => {
		updateInfo()
		form.current && form.current.submit()
	}

	const forms = [
		<WebType currentValues={selections.webType} onChange={changeSelections} />,
		<Design currentValues={selections.design} onChange={changeSelections} />,
		<Pages currentValues={selections.pages} onChange={changeSelections} />,
		<Content currentValues={selections.content} onChange={changeSelections} />,
		<Programming currentValues={selections.programming} onChange={changeSelections} />,
		<ContactForm currentValues={contactInfo} onChange={updateContactInfo}/>,
	]

	return (
		<div id="quote-section">
			<h4>Step {position + 1} of {forms.length}</h4>
			<PositionHolder total={forms.length} position={position} setPosition={changePosition} />
			<div id="quote-builder">
				<div className="card">
					<form ref={form} name="quote" action="/success" method="POST" data-netlify="true">
						<input type="hidden" name="quote" value="quote" />
						{forms[position]}
						<textarea className="hidden" name="Info" value={formattedInfo} />
						<textarea className="hidden" name="Json Info" value={JSON.stringify({contactInfo, selections, linePrices, totalPrice})} />
						<div className="definition">
							{definition}
						</div>
						<div className="position-buttons">
							{position > 0 && <input type="button" onClick={prev} value="Previous" />}
							{position !== forms.length - 1 
								? <input type="button" onClick={next} value="Next" /> 
								: <input type="button" onClick={submit} value="Send" /> 
							}
						</div>
					</form>

				</div>
				<PriceBox linePrices={linePrices} total={totalPrice} />
			</div>
		</div>
	);
}

export default GetQuote