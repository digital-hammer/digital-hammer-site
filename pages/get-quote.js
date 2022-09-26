import { useState } from 'react';
import PriceBox from 'components/price-box';
import QuoteCard from 'components/quote-card';

const GetQuote = (props) => {

	const [info, setInfo] = useState();
	const [position, setposition] = useState(0);
	const [definition, setDef] = useState("");
	const [lineItems, setLineItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const content = []

	const next = () => {
		if (position < content.length) {
			setposition(position + 1);
			setDef("");
		}
	}

	const prev = () => {
		if (position > 0) {
			setposition(position - 1);
			setDef("");
		}
	}

	const changeInfo = (newInfo, el, def) => {
		let updatedInfo = { ...info }
		updatedInfo[el] = { ...newInfo }
		setInfo(updatedInfo);
		setDef(def)
	}

	const submitForm = () => {
		window.open("/thanks", "_self");
	}

	
	return (
		<div id="quote-machine">
			<div className="inner">
				<div id="quote-builder">
					<div>
						<h4>
							Step {position + 1} of {content.length}
						</h4>
					</div>
					<QuoteCard content={content} position={position} />
					<div>
						{definition}
					</div>
					<div className="">
						{position !== 0 ? <button onClick={prev}>Previous</button> : null}
						{position !== content.length - 1 && <button onClick={next}>Next</button>}
					</div>
				</div>
			<PriceBox lineItems={lineItems} total={totalPrice} />
			</div>
		</div>
	);
}

export default GetQuote