export default (props) => {
  const {
    form="contact",
    additionalInfo = false,
  } = props

	return (
      <form name={form} action="/success" method="POST" data-netlify="true">
        <input type="hidden" name={form} value={form} />
        {additionalInfo && <textarea className="hidden" value={JSON.stringify(additionalInfo)} />}
        <div className="fields">
          <div className="field half">
            <label>Name</label>
            <input name="name" id="name" type="text" placeholder="Name" required={true}/>
          </div>
          <div className="field half">
            <label>Phone</label>
            <input name="phone" id="phone" type="tel" placeholder="Phone" required={true} />
          </div>
          <div className="field">
            <label>Email</label>
            <input name="email" id="email" type="email" placeholder="Email" required={true}/>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
          </div>
        </div>
        <ul className="actions">
          <li><input name="submit" value="Send Message" className="button large" type="submit" /></li>
        </ul>
      </form>
	)
}

