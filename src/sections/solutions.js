import services from "src/data/services"

export default (props) => {
  const { 
    options = ["efficient", "custom", "shopify"]
  } = props
  return (
    <>
      {options.map((el, idx) => {
        if (!services[el]) return console.error(`No services element with name: ${el}.`)
        const { title, bodyFull, image, id} = services[el]
        return (
          <section id={id} key={"card" + idx} className={`spotlight ${idx % 2 === 1 && "alt"}`}>
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h2>{title}</h2>
              <p>{bodyFull}</p>
            </div>
          </section>
        )
      })}
    </>
  )
}