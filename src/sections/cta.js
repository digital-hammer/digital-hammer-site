import { Fragment } from "react"

export default (props) => {
  const {
    title="Want a Free Quote?",
    content = ["Check out our online quote builder get a free quote for your website in just minutes.", "Click the button below to get started."],
    action = {
      text: "Get Quote",
      href: "/quote-builder"
    }
  } = props || {}
  return (
    <section className="cta">
      <header>
        <h2>{title}</h2>
        <p>{content.map((el) => {
          return (
            <Fragment key={el}>
              {el}
              <br/>
            </Fragment>
          )
        })}</p>
      </header>
      <ul className="actions special">
        <li><a href={action.href} className="button large">{action.text}</a></li>
      </ul>
    </section>
  )
}