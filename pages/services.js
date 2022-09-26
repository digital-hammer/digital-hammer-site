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
              title: 'Cost Efficient Sites',
              body: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
              image: '/images/undraw/savings.svg'
            },
            {
              title: 'Custom Designed Sites',
              body: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
              image: '/images/undraw/website_builder.svg'
            },
            {
              title: 'eCommerce Through Shopify',
              body: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
              image: '/images/undraw/web_shopping.svg'
            },
          ]}
        />
        <Cta />
      </div>
  )
}
export default ServicesPage