export default (props) => {
  const { 
    content = [
      {
        icon: 'fa-gem',
        title: 'Low Cost Hosting',
        body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      },
      {
        icon: 'fa-gem',
        title: 'Built In CMS',
        body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      },
      {
        icon: 'fa-gem',
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
          const {title, body, icon} = data
          return (
            <section key={header + idx} className="feature">
              <span className={`icon major ${icon}`}></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </section>
          )
        })}
      </div>
    </section>
  )
}