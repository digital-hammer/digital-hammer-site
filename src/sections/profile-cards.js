export default (props) => {
  const { 
    profiles = [
      {
        image: "images/profile/ellis.jpg",
        name: "Ellis Hogan",
        title: "Co-Founder",
        info: "I'm a self taught developer of 6 years, with skills in all things frontend. I have a strong HTML, CSS, Javascript, React, Shopify, as well as best practices for web design, development, and hosting.",
        links: []
      },
      {
        image: "images/profile/joseph.jpg",
        name: "Joseph Chica",
        title: "Co-Founder",
        info: "As a UNCC alumnus, I graduated with a Bachelor of Science in Computer science with a concentration in Software, Systems, and Networks. I have been developing software as a professional for a year.",
        links: []
      }
    ]
  } = props || {}
  return profiles && (
    <div id="profiles">
      <div className="inner container">

        {profiles.map((profile) => {
          const {title, name, image, info, links} = profile || {}
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
                    {links}
                  </div>
                </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}