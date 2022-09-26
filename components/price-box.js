import React from 'react';

const PriceBox = (props) =>  {
	const {
		lineItems = [],
		total = 0
	} = props || {}
	return (
		<div id="price-box">
			{lineItems.map((el)=> {
				const {text, total} = el
				return (
					<h5>
							{text}: <span className="float-right">$ {total}</span>
					</h5>
				)
			})}
			<hr />
			<h4>
				Subtotal:  <span className="float-right">$ {total}</span>
			</h4>				
		</div>
	);
}
	
export default PriceBox