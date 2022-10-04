
export default (props)=> {
	const {
		linePrices = {},
		titles = {},
		total = 0
	} = props || {}
	return (
		<div id="price-box">
			{linePrices.map(({text, total})=> {
				return total.toFixed(0) > 0 && (
					<h5 key={text}>
							{titles[text] || text}: <span>$ {total}</span>
					</h5>
				)
			})}
			<hr />
			<h4>
				Subtotal:  <span>$ {total}</span>
			</h4>				
		</div>
	);
}
	
