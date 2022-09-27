import { useState, useEffect, useRef } from 'react'
import Cta from 'sections/cta'
import Services from 'sections/services'
import Solutions from 'sections/solutions'
import { faGem, faCommentsDollar, faPenNib, faGears, faShield, faStore} from '@fortawesome/free-solid-svg-icons'

const ServicesPage = () => {
  const content = [
    {
      icon: faGem,
      image: '/images/undraw/server_down.svg',
      id: "hosting",
      title: 'Low Cost Hosting',
      body: 'We offer the best pricing available for fast reacting websites.',
      bodyFull: 'We understand the biggest selling point is the final price of the product. We offer the best pricing with top-level production. ',
    },
    {
      icon: faGears,
      image: '/images/undraw/website_builder.svg',
      id: "cms",
      title: 'Built In CMS',
      body: 'You will be able to control the content management system without having to code anything!',
      bodyFull: 'With an easy login and setup you can start building different types of content to customize your website to your choosing. ',
    },
    {
      icon: faShield,
      image: '/images/undraw/security.svg',
      id: "ssl",
      title: 'Free SSL Certificate',
      body: 'Authenticating your websites identity for free!',
      bodyFull: 'SSL certificates are a digital certificate that authenticate a website\'s identity by enabling an encrypted connection. ' +
      'Many other companies offer this at a premium, but we include it for free.',
    },
    {
      icon: faCommentsDollar,
      image: '/images/undraw/savings.svg',
      id: "cost-efficient",
      title: 'Cost Efficient Sites',
      body: 'Other website types, offered at low costs with high quality.',
      bodyFull: 'If you are looking to build another type of website we have a wide range of options at different price ranges all being very competitive. ',
    },
    {
      icon: faPenNib,
      image: '/images/undraw/building_websites.svg',
      id: "custom",
      title: 'Custom Designed Sites',
      body: 'Custom designed websites that are built to your needs.',
      bodyFull: 'Communication is vital for building customized sites and ' +
      'offering the agile methodology will guarantee we are all on the same page for how you want your website to look like',
    },
    {
      icon: faStore,
      image: '/images/undraw/web_shopping.svg',
      id: "shopify",
      title: 'eCommerce Through Shopify',
      body: 'A way to make money off of your websites!',
      bodyFull: 'Need a website for selling products or services? Using Shopify, the most modern SaaS, we will create a profit making website for your needs',
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