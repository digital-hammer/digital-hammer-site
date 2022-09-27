export default (props) => {
  const {
    options=[],
    onChange
  } = props || {}

  return (
    <form>
      {options.map((item) => {
        const {
          type = "",
          data
        } = item;
        switch (type.toLowerCase()) {
          case "select": {
            const {name, options} = data
            return (
              <select name={name} onChange={(e) => onChange({})}>
                {options.map((el)=> {
                  <option value={el.value}>{el.value}</option>
                })}
              </select>
            )
          }

          case "date": {

            return <input />
          }


          case "radio": {

            return (
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            )
          }
          
          case 'service box': {

            return (
              <div className="service-box">

              </div>
            )

          }

          case "text":
          default: {

            return <input />
          }
        }
      })}
    </form>
  )
}