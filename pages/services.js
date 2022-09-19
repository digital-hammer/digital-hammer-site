import { useState, useEffect, useRef } from 'react'
import Cta from 'sections/cta'
import Services from 'sections/services'
import Solutions from 'sections/solutions'


const ServicesPage = () => {
  return (
    <div id="main">
        <Services />
        <Solutions 
          content={[
            {
              title: 'Cost Efficient Solutions',
              info: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
              image: '/images/pic02.jpg'
            },
            {
              title: 'Custom Designed Sites',
              info: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
              image: '/images/pic01.jpg'
            },
            {
              title: 'eCommerce Through Shopify',
              info: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
              image: '/images/pic03.jpg'
            },
          ]}
        />
        <Cta />
      </div>
  )
}
export default ServicesPage