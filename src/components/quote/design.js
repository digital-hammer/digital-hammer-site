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

  const radioSwitch = (e, reset) => {
    reset && Object.entries(reset).forEach(([key, _]) => onChange('design', key, false, false))
    onChange('design', e.target.value, true)
  }

  const createInput = (key, text, el, type) => {
    return (
      <>
        <input
          key={key}
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={(e) => radioSwitch(e, el)}
        />
        <label htmlFor={key}>{text}</label>
      </>
    )
  }
  return (
    <div id="design">
      <h3>What type of website are you looking for?</h3>
      <div className="switches">
        {Object.entries(design).map(([key, val]) => createInput(key, val, design, "radio"))}
      </div>

    </div>
  )
}