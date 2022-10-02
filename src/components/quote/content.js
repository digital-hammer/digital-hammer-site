export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const content = {
    customCopy: {
      info: "",
      price: 1000,
    },
    selfCopy: {
      info: "",
      price: 0,
    },
    hybridCopy: {
      info: "",
      price: 0,
    },
    hybridNumber: {
      info: "",
      price: 100,
    },
    photography: {
      info: "",
      price: 700,
    },
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('content', value, checked, fullUpdate)
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
    <div id="content">
      <h3>What types of products would you be selling?</h3>
      {Object.entries(content).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
    </div>
  )
}