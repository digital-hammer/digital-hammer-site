export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const websiteType = {
    website: "Website",
    eCommerce: "eCommerce",
  }

  const productTypes = {
    products: "Products/Services",
    giftCards: "Gift Cards",
    tickets: "Event Tickets",
    donations: "Accepting Donations",
    invoicePayments: "Accept Invoice Payments",
    other: "Other",
  }

  const cart = {
    cartNo: "No",
    cartYes: "Yes",
  }

  const radioSwitch = (e, reset) => {
    Object.entries(reset).forEach(([key, _]) => onChange('webType', key, false, false))
    onChange('webType', e.target.value, true)
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('webType', value, checked, fullUpdate)
  }

  const createInput = (key, text, onChange, type) => {
    return (
      <div>
        <input
          key={key}
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={onChange}
        />
        <label htmlFor={key}>{text}</label>
      </div>
    )
  }
  return (
    <div id="web-type">
      <h3>What type of website are you looking for?</h3>
      <div className="switches">
        {Object.entries(websiteType).map(([key, val]) => createInput(key, val, (e)=> radioSwitch(e, { ...websiteType, ...productTypes, ...cart }), "radio"))}
      </div>
      {currentValues.eCommerce && (
        <>
          <h3>Will you need a cart for your site?</h3>
          <div className="switches">
            {Object.entries(cart).map(([key, val]) => createInput(key, val, (e) => radioSwitch(e, cart), "radio"))}
          </div>
          <h3>What types of services will this eCommerce site offer?</h3>
          <div className="grid">
            {Object.entries(productTypes).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
          </div>
        </>
      )}
    </div>
  )
}