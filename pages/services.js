import Cta from '@/sections/cta'
import Services from '@/sections/services'
import Solutions from '@/sections/solutions'

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