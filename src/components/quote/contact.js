export default (props) => {
  return (
    <>
      <div className="fields">
        <div className="field half">
          <label>Name</label>
          <input name="name" id="name" type="text" placeholder="Name" required={true} />
        </div>
        <div className="field half">
          <label>Phone</label>
          <input name="phone" id="phone" type="tel" placeholder="Phone" required={true} />
        </div>
        <div className="field">
          <label>Email</label>
          <input name="email" id="email" type="email" placeholder="Email" required={true} />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
        </div>
      </div>
    </>
  )
}

