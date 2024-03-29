import cx from 'classnames'

export default (props) => {
  const {
    questions = [],
    header=false,
    onChange,
  } = props || {}

  return (
    <form>
      {header && <h4>{header}</h4>}
      {questions.map((item) => {
        const {
          question = "",
          options
        } = item;
        return (
          <>
            <label>{question}</label>
            {options.map((data) => {
              const {type} = data
              switch (type.toLowerCase()) {
                case "select": {
                  const { name, options } = data
                  return (
                    <select name={name} onChange={(e) => onChange({})}>
                      {options.map((el) => {
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

                case "button-full": {
                  const {text} = data
                  return (
                    <input className="full" type="button" value={text} />
                  )
                }

                case "multi-select": {
                  const {text} = data
                  return (
                    <input className={cx("full", )} type="button" value={text} />
                  )
                }

                case "text":
                default: {

                  return <input />
                }
              }
            })}
          </>
        )
      })}
    </form>
  )
}