import React, { useState } from 'react';
import PriceBox from 'components/price-box';

const GetQuote = (props) => {

	const [info, setInfo] = useState();
	const [spot, setSpot] = useState(0);
	const [definition, setDef] = useState("");

	const next = () => {
		if (spot < 3) {
			setSpot(spot + 1);
			setDef("");
		}
	}

	const prev = () => {
		if (spot > 0) {
			setSpot(spot - 1);
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
			<div className="col-12 col-md-8">
				<div>
					<h4>
						Step {spot + 1} of {cards.length}
					</h4>
				</div>
				{cards[spot]}
				<div>
					{definition}
				</div>
				<div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
					{spot !== 0 ? <button onClick={prev}>Previous</button> : null}
					{spot !== cards.length - 1 ? <button onClick={next}>Next</button> : null}
				</div>
			</div>
			<PriceBox lineItems={lineItems} total={total} />
		</div>
	);
}

export default GetQuote