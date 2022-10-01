export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props
  return (
    <>
      <div className="fields">
        <div className="field half">
          <label>Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            required={true}
            value={currentValues.name}
            onChange={onChange}
          />
        </div>
        <div className="field half">
          <label>Phone</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            placeholder="Phone"
            required={true}
            value={currentValues.phone}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            required={true}
            value={currentValues.email}
            onChange={onChange}

          />
        </div>
        <div className="field">
          <label>Additional Info</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Message"
            value={currentValues.meassage}
            onChange={onChange}
          ></textarea>
        </div>
      </div>
    </>
  )
}

