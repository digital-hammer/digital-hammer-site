import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const {
    profiles = [
      {
        image: "images/profile/ellis.jpg",
        name: "Ellis Hogan",
        title: "Co-Founder",
        info: "I'm a self taught developer of 6 years, with skills in all things frontend. I have a strong HTML, CSS, Javascript, React, Shopify, as well as best practices for web design, development, and hosting.",
        links: {
          facebook: "https://www.facebook.com/ellis.hogan.1",
          instagram: "https://www.instagram.com/dev.icarus/",
          linkedIn: "https://www.linkedin.com/in/ellis-hogan-99a646161/"
        }
      },
      {
        image: "images/profile/joseph.jpg",
        name: "Joseph Chica",
        title: "Co-Founder",
        info: "As a UNCC alumnus, I graduated with a Bachelor of Science in Computer science with a concentration in Software, Systems, and Networks. I have been developing software as a professional for a year.",
        links: {
          facebook: "https://www.facebook.com/mr.jnc/",
          instagram: "https://www.instagram.com/mr_jnc/",
          linkedIn: "https://www.linkedin.com/in/mrjosephchica/"
        }
      }
    ]
  } = props || {}
  return profiles && (
    <div id="profiles">
      <div className="inner container">

        {profiles.map((profile) => {
          const { title, name, image, info, links } = profile || {}
          return (
            <div className="card" >
              <div className="img-avatar">
                <img src={image} />
              </div>
              <div className="portada" />
              <div className="content">
                <div className="title">{title}</div>
                <h3>{name}</h3>
                <div className="info">{info}</div>
                <div className="actions">
                  <a className="icon"
                    href={links.facebook}>
                    <FontAwesomeIcon
                      size="xl"
                      icon={faFacebook}
                    />
                  </a>
                  <a className="icon"
                    href={links.instagram}>
                    <FontAwesomeIcon
                      size="xl"
                      icon={faInstagram}
                    />
                  </a>
                  <a className="icon"
                    href={links.linkedIn}>
                    <FontAwesomeIcon
                      size="xl"
                      icon={faLinkedin}
                    />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}