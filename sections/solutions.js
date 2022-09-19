export default (props) => {
  const { content = [] } = props || {}
  return (
    <>
      {content.map((data, idx) => {
        const {title, info, image} = data
        return (
          <section key={"card" + idx} id={idx} className={`spotlight ${idx % 2 === 1 && "alt"}`}>
            <div className="image"><img src={image} alt="" /></div><div className="content">
              <h2>{title}</h2>
              <p>{info}</p>
            </div>
          </section>
        )
      })}
    </>

  )
}