
export default (props)=> {
	const {
		lineItems = {},
		total = 0
	} = props || {}
	return (
		<div id="price-box">
			{Object.entries(lineItems).map(([text, total])=> {
				
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
	
