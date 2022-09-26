import React from 'react';

export default ()=> {
	const {
		lineItems = [],
		total = 0
	} = props || {}
	return (
		<div id="price-box">
			{lineItems.map((el)=> {
				const {text, total} = el
				return (
					<h5 key={text}>
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
	
