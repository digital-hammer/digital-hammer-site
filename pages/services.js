import { useState, useEffect, useRef } from 'react'
import Cta from 'sections/cta'
import Services from 'sections/services'
import Solutions from 'sections/solutions'

const ServicesPage = () => {
  const content = [
    {
      icon: 'fa-gem',
      image: '/images/undraw/server_down.svg',
      id: "hosting",
      title: 'Low Cost Hosting',
      body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      bodyFull: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
    },
    {
      icon: 'fa-gem',
      image: '/images/undraw/website_builder.svg',
      id: "cms",
      title: 'Built In CMS',
      body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      bodyFull: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
    },
    {
      icon: 'fa-gem',
      image: '/images/undraw/security.svg',
      id: "ssl",
      title: 'Free SSL Certificate',
      body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      bodyFull: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
    },
    {
      icon: 'fa-gem',
      image: '/images/undraw/savings.svg',
      id: "cost-efficient",
      title: 'Cost Efficient Sites',
      body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      bodyFull: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
    },
    {
      icon: 'fa-gem',
      image: '/images/undraw/building_websites.svg',
      id: "custom",
      title: 'Custom Designed Sites',
      body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      bodyFull: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
    },
    {
      icon: 'fa-gem',
      image: '/images/undraw/web_shopping.svg',
      id: "shopify",
      title: 'eCommerce Through Shopify',
      body: 'Praesent egestas quam at lorem imperdiet lobortis.',
      bodyFull: 'Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.',
    },
  ]
  return (
    <div id="main">
        <Services 
          header="Our Services" 
          subheader="Great development at an even better price"
          content={content.map((el)=> {
            return {
              ...el,
              link: `#${el.id}`
            }
          })}
        />
        <Solutions 
          content={content.map((el)=> {
            return {
              ...el,
              body: el.bodyFull
            }
          })}
        />
        <Cta />
      </div>
  )
}
export default ServicesPage