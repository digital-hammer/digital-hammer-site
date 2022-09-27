import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import services from "@/data/services"

export default (props) => {
  const { 
    header="Hosting With Us", 
    subheader = "low cost quality hosting built With next.js speed",
    options = ["hosting", "cms", "ssl"],
    linkAll=false,
    links={}
  } = props || {}
  return (
    <section className="services">
      <header className="major">
        <h2>{header}</h2>
        <p>{typeof subheader === "string" ? subheader : subheader.map((el)=> <>{el}<br/></>)}</p>
      </header>
      <div className="content">
        {options.map((el, idx)=> {
          if (!services[el]) return console.error(`No services element with name ${el}.`)
          const {title, body, icon} = services[el]
          const link = linkAll || links[el]
          return (
            <a 
              key={header + idx} 
              className={`service ${link && 'link'}`}
              href={link && `#${el}`}
            >
              <div className="icon-wrapper">
                <FontAwesomeIcon 
                  size="2xl"
                  icon={icon} 
                />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}