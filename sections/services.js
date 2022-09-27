import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faCommentsDollar, faPen, faGears, faShield } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
  const { 
    content = [
      {
        icon: faGem,
        title: 'Low Cost Hosting',
        body: 'We offer the best pricing available for fast reacting websites',
      },
      {
        icon: faGears,
        title: 'Built In CMS',
        body: 'You will be able to control the content management system without having to code anything!',
      },
      {
        icon: faShield,
        title: 'Free SSL Certificate',
        body: 'Authenticating your websites identity for free!',
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
              <center>
              <div className="icon-wrapper">
                <FontAwesomeIcon 
                  size="2xl"
                  icon={icon} 
                />
              </div>
              
              <h3>{title}</h3>
              </center>
                <p>{body}</p>
              
            </a>
          )
        })}
      </div>
    </section>
  )
}