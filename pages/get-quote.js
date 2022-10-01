import { useEffect, useState } from 'react'
import quoteData from '@/data/quote'
import PriceBox from '@/components/quote/price-box'
import PositionHolder from '@/components/quote/position-holder'
import WebType from '@/components/quote/web-type'
import Design from '@/components/quote/design'
import Pages from '@/components/quote/pages'
import Content from '@/components/quote/content'
import Programming from '@/components/quote/programming'
import SEO from '@/components/quote/seo'
import ContactForm from '@/components/contact-form'

const GetQuote = (props) => {

	const [selections, setSelections] = useState({})
	const [position, setPosition] = useState(0)
	const [definition, setDefinition] = useState("")
	const [linePrices, setLinePrices] = useState({})
	const [totalPrice, setTotalPrice] = useState(0)
	useEffect(()=> {
		for (let section in quoteData) {
			selections[section] = {}
			for (let item in quoteData[section]) {
				selections[section][item] = false
			}
		}
	}, [])	

	const next = () => {
		if (position < forms.length) {
			setPosition(position + 1)
			setDefinition("");
		}
	}
	
	const prev = () => {
		if (position > 0) {
			setPosition(position - 1)
			setDefinition("");
		}
	}
	
	const changeSelections = (section, key, newValue, fullUpdate=true) => {
		selections[section][key] = newValue
		setSelections(selections)		
		if (fullUpdate) {
			updatePrice()
			setDefinition(quoteData[section][key].info)
		}
	}
	
	const updatePrice = () => {
		const n = {}
		Object.entries(selections).forEach(([section, el])=> {
			const val = Object
				.entries(quoteData[section])
				.filter(([key, val])=> selections[section][key] === true)
				.map(([_, val])=> val.price)
			n[section] = val.length > 0 ? val.reduce((a, b)=> a + b) : 0
		})
		console.log(n)
		setLinePrices(n)
		setTotalPrice(Object.values(n).reduce((a, b) => a + b))
	}
	
	const forms = [
		<WebType currentValues={selections.webType} onChange={changeSelections} />,
		<Design currentValues={selections.design} onChange={changeSelections} />,
		<Pages currentValues={selections.pages} onChange={changeSelections} />,
		<Content currentValues={selections.content} onChange={changeSelections} />,
		<Programming currentValues={selections.programming} onChange={changeSelections} />,
		<SEO currentValues={selections.seo} onChange={changeSelections} />,
		<ContactForm additionalInfo={{selections, linePrices, totalPrice}} form="Get Quote" />
	]

	return (
		<div id="quote-section">
			<h4>Step {position+1} of {forms.length}</h4>
			<PositionHolder total={forms.length} position={position} setPosition={setPosition} />
			<div id="quote-builder">
				<div className="card">
					{forms[position]}
					<div className="definition">
						{definition}
					</div>
					<div className="position-buttons">
						{position > 0 && <button onClick={prev}>Previous</button>}
						{position !== forms.length - 1 && <button onClick={next}>{position < forms.length - 2 ? "Next" : "Finish"}</button>}
					</div>
				</div>
				<PriceBox linePrices={linePrices} total={totalPrice} />
			</div>
		</div>
	);
}

export default GetQuote