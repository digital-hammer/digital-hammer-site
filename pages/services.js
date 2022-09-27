import { useState, useEffect, useRef } from 'react'
import Cta from 'src/sections/cta'
import Services from 'src/sections/services'
import Solutions from 'src/sections/solutions'

const ServicesPage = () => {
  const options = ["hosting", "cms", "ssl", "efficient", "custom", "shopify"]
  return (
    <div id="main">
        <Services 
          header="Our Services" 
          subheader="Great development at an even better price"
          options={options}
        />
        <Solutions options={options} />
        <Cta />
      </div>
  )
}
export default ServicesPage