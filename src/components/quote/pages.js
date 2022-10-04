export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const pages = {
    products: "Products/Services",
    giftCards: "Gift Cards",
    tickets: "Event Tickets",
    donations: "Accepting Donations",
    payments: "Accept Invoice Payments",
  }

  const radioSwitch = (e) => {
    Object.entries({ ...radioButtons, ...productTypes }).forEach(([key, _]) => onChange('pages', key, false, false))
    onChange('pages', e.target.value, true)
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('pages', value, checked, fullUpdate)
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
    <div id="pages">
      <h2>Pages</h2>
      <h3>Are you looking for any of the following pages?</h3>
      {Object.entries(pages).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
    </div>
  )
}