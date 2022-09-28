import { useState } from 'react'
import PriceBox from '@/components/price-box'
import QuoteCard from '@/components/quote-card'
import formData from '@/data/quote-form'
const GetQuote = (props) => {

	const [info, setInfo] = useState();
	const [position, setPosition] = useState(0);
	const [currentForm, setCurrentForm] = useState('first')
	const [definition, setDefinition] = useState("");
	const [lineItems, setLineItems] = useState({});
	const [totalPrice, setTotalPrice] = useState(0);
	const next = () => {
		if (position < Object.keys(formData).length) {
			setPosition(position + 1);
			setDefinition("");
		}
	}

	const prev = () => {
		if (position > 0) {
			setPosition(position - 1);
			setDefinition("");
		}
	}

	const changeInfo = (newInfo, el, def) => {
		let updatedInfo = { ...info }
		updatedInfo[el] = { ...newInfo }
		setInfo(updatedInfo);
		setDefinition(def)
	}

	const updatePrice = (key, val=0) => {
		const n = {...lineItems}
		val === 0 ? delete n[key] : n[key] = val
		setLineItems(n)
		setTotalPrice(Object.values(n).reduce((a, b)=> a + b))
	}
	
	const onQuoteCardChange = ({definition, lineItems}) => {
		setDefinition(definition)
		lineItems.map((val, key)=> updatePrice(key, val));
	}
	return (
		<div id="quote-machine">
			<div className="inner">
				<div id="quote-builder">
					{formData[currentForm].header && <h4>{formData[currentForm].header}</h4>}
					<QuoteCard options={formData[currentForm].options} onChange={onQuoteCardChange} />
					<div className="definition">
						{definition}
					</div>
					<h4 className="step">
						Step {position + 1} of {formData.length}
					</h4>
					<div className="">
						{position !== 0 && <button onClick={prev}>Previous</button>}
						{position !== Object.keys(formData).length - 1 && <button onClick={next}>Next</button>}
					</div>
				</div>
			<PriceBox lineItems={lineItems} total={totalPrice} />
			</div>
		</div>
	);
}

export default GetQuote