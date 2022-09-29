import { useState } from 'react'
import PriceBox from '@/components/price-box'
import QuoteCard from '@/components/quote-card'
import PositionHolder from '@/components/position-holder'
import formData from '@/data/quote-form'
const GetQuote = (props) => {

	const [info, setInfo] = useState();
	const [position, setPosition] = useState(0);
	const [currentForm, setCurrentForm] = useState('single')
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

	const finish = () => {
		if (position < Object.keys(formData).length) {
			setPosition(position + 1);
			setDefinition("");
		}
	}

	const changeInfo = (newInfo, el, def) => {
		let updatedInfo = { ...info }
		updatedInfo[el] = { ...newInfo }
		setInfo(updatedInfo);
		setDefinition(def)
	}

	const updatePrice = (key, val = 0) => {
		const n = { ...lineItems }
		val === 0 ? delete n[key] : n[key] = val
		setLineItems(n)
		setTotalPrice(Object.values(n).reduce((a, b) => a + b))
	}

	const onQuoteCardChange = ({ definition, lineItems }) => {
		setDefinition(definition)
		lineItems.map((val, key) => updatePrice(key, val));
	}
	return (
		<div id="quote-section">
			<PositionHolder />
			<div id="quote-builder">
				<div className="card">
					<QuoteCard questions={formData[position].questions} onChange={onQuoteCardChange} />
					<div className="definition">
						{definition}
					</div>

					<div className="position-buttons">
						{position > 0 && <button onClick={prev}>Previous</button>}
						{position !== formData.length - 1 ? <button onClick={next}>Next</button> : <button onClick={finish}>Finish</button>}
					</div>
				</div>
				<PriceBox lineItems={lineItems} total={totalPrice} />
			</div>
		</div>
	);
}

export default GetQuote