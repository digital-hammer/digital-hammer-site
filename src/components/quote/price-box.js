
export default (props)=> {
	const {
		linePrices = {},
		total = 0
	} = props || {}
	const titles = {
		webType: "Website Type",
		design: "Design Needs",
		pages: "Additional Pages",
		content: "Content Needs",
		programming: "Additional Programming",
		seo: "SEO needs",
	}
	return (
		<div id="price-box">
			{Object.entries(linePrices).map(([text, total])=> {
				return total.toFixed(0) > 0 && (
					<h5 key={text}>
							{titles[text] || text}: <span className="float-right">$ {total}</span>
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
	
