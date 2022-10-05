export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const content = {
    copySelf: "Myself",
    copyBasic: "Basic Package",
    copyAdvanced: "Advanced Package",
  }

  const photography = {
    photoNo: "No",
    photoYes: "Yes",
  }

  const radioSwitch = (e, reset) => {
    reset && Object.entries(reset).forEach(([key, _]) => onChange('content', key, false, false))
    onChange('content', e.target.value, true)
  }

  const createInput = (key, text, el, type) => {
    return (
      <div>
        <input
          key={key}
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={(e) => radioSwitch(e, el)}
        />
        <label htmlFor={key}>{text}</label>
      </div>
    )
  }
  return (
    <div id="content">
      <h3>How will you create the copy (text) for your website?</h3>
      <div className="switches">
        {Object.entries(content).map(([key, val]) => createInput(key, val, content, "radio"))}
      </div>
      <h3>Do you need any professional photography?</h3>
      <div className="switches">
        {Object.entries(photography).map(([key, val]) => createInput(key, val, photography, "radio"))}
      </div>
    </div>
  )
}