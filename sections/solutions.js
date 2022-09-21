export default (props) => {
  const { content = [
    {
      title: 'Cost Efficient Sites',
      body: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
      image: '/images/pic02.jpg'
    },
    {
      title: 'Custom Designed Sites',
      body: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
      image: '/images/pic01.jpg'
    },
    {
      title: 'eCommerce Through Shopify',
      body: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
      image: '/images/pic03.jpg'
    },
  ]} = props || {}
  return (
    <>
      {content.map((data, idx) => {
        const {title, body, image} = data
        return (
          <section key={"card" + idx} id={idx} className={`spotlight ${idx % 2 === 1 && "alt"}`}>
            <div className="image"><img src={image} alt="" /></div><div className="content">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </section>
        )
      })}
    </>
  )
}