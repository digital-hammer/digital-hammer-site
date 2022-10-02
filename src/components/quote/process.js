export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const radioButtons = {
    basic: "Basic",
    intermediate: "Mid-level",
    advanced: "Advanced"
  }

  const radioSwitch = (e) => {
    Object.entries(radioButtons).forEach(([key, _]) => onChange('process', key, false, false))
    onChange('process', e.target.value, true)
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
    <div id="process">
      <h3>What sort of develepment process are you looking for?</h3>
      <div className="switches">
        {Object.entries(radioButtons).map(([key, val]) => createInput(key, val, radioSwitch, "radio"))}
      </div>

    </div>
  )
}