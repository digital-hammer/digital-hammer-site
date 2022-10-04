
export default (props)=> {
	const {
		lineItems = [],
		total = 0
	} = props || {}
	return (
		<div id="price-box">
			{lineItems.map(({text, total=0})=> {
				return total && total.toFixed(0) > 0 ? (
					<h5 key={text}>
							{text}: <span>$ {total}</span>
					</h5>
				) : ""
			})}
			<hr />
			<h4>
				Subtotal:  <span>$ {total}</span>
			</h4>				
		</div>
	);
}
	
