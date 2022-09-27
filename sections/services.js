import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
  const { 
    content = [
      {
        icon: faGem,
        title: 'Low Cost Hosting',
        body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      },
      {
        icon: faGem,
        title: 'Built In CMS',
        body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      },
      {
        icon: faGem,
        title: 'Free SSL Certificate',
        body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      },
    ], 
    header="Hosting With Us", 
    subheader = "low cost quality hosting built With next.js speed" 
  } = props || {}
  return (
    <section id="one" className="features">
      <header className="major">
        <h2>{header}</h2>
        <p>{typeof subheader === "string" ? subheader : subheader.map((el)=> <>{el}<br/></>)}</p>
      </header>
      <div className="content">
        {content.map((data, idx)=> {
          const {title, body, icon, link=false} = data
          return (
            <a 
              key={header + idx} 
              className={`feature ${link && 'link'}`}
              href={link && link}
            >
              <div className="icon-wrapper">
                <FontAwesomeIcon 
                  size="xl"
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