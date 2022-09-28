import Cta from '@/sections/cta'
import Services from '@/sections/services'
import Solutions from '@/sections/solutions'

const ServicesPage = () => {
  const options = ["hosting", "cms", "ssl", "efficient", "custom", "shopify"]
  return (
    <div className="container">
        <Services 
          header="Our Services" 
          subheader="Great development at an even better price"
          options={options}
          linkAll={true}
        />
        <Solutions options={options} />
        <Cta />
      </div>
  )
}
export default ServicesPage