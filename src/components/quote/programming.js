export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props


  const programming = {
    products: "Products/Services",
    giftCards: "Gift Cards",
    tickets: "Event Tickets",
    donations: "Accepting Donations",
    payments: "Accept Invoice Payments",
  }

  const radioChange = (e, fullUpdate = true) => {
    const {value, checked} = e.target
    onChange('programming', value, checked, fullUpdate)
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
        <div className="eCommerce-services">
          <h3>What types of products would you be selling?</h3>
          {Object.entries(programming).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
        </div>
    </div>
  )
}