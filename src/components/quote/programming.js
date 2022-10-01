export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const radioButtons = {
    website: "Website",
    eCommerce: "eCommerce",
  }

  const productTypes = {
    products: "Products/Services",
    giftCards: "Gift Cards",
    tickets: "Event Tickets",
    donations: "Accepting Donations",
    payments: "Accept Invoice Payments",
  }

  const radioSwitch = (e) => {
    Object.entries({...radioButtons, ...productTypes}).forEach(([key, _])=> onChange('webType', key, false, false))
    onChange('webType', e.target.value, true)
  }

  const radioChange = (e, fullUpdate = true) => {
    const {value, checked} = e.target
    onChange('webType', value, checked, fullUpdate)
  }
  const createInput = (key, text, onChange, type) => {
    return (
      <>
        <input
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={onChange}
        />
        <label htmlFor={key}>{text}</label>
      </>
    )
  }
  return (
    <div id="web-type">
      <h3>What type of website are you looking for?</h3>
      <div className="switches">
      {Object.entries(radioButtons).map(([key, val]) => createInput(key, val, radioSwitch, "radio"))}

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