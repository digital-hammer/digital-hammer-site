export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const design = {
    template: "Template",
    customBasic: "Custom | Basic",
    customAdvanced: "Custom | Advanced",
  }

  const productTypes = {
    products: "Products/Services",
    giftCards: "Gift Cards",
    tickets: "Event Tickets",
    donations: "Accepting Donations",
    payments: "Accept Invoice Payments",
  }

  const radioSwitch = (e, reset) => {
    reset && Object.entries(reset).forEach(([key, _]) => onChange('design', key, false, false))
    onChange('design', e.target.value, true)
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('design', value, checked, fullUpdate)
  }
  const createInput = (key, text, el, type) => {
    return (
      <>
        <input
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={(e)=> radioSwitch(e, el)}
        />
        <label htmlFor={key}>{text}</label>
      </>
    )
  }
  return (
    <div id="design">
      <h2>Design</h2>
      <h3>What type of website are you looking for?</h3>
      <div className="switches">
        {Object.entries(design).map(([key, val]) => createInput(key, val, design, "radio"))}
      </div>
      {currentValues.eCommerce && (
        <div className="eCommerce-services">
          <h3>What types of products would you be selling?</h3>
          {Object.entries(productTypes).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
        </div>
      )}

    </div>
  )
}