export default () => {
  return (
    <section id="contact-us">
      <div className="inner">
        <ul className="contact">
          <li className="icon solid fa-home">
            <strong>Address</strong>
            1234 Fictional Avenue<br />Nashville, TN 00000
          </li>
          <li className="icon solid fa-phone">
            <strong>Phone</strong>
            (000) 000-0000
          </li>
          <li className="icon solid fa-envelope">
            <strong>Email</strong>
            information@untitled.tld
          </li>
        </ul>
        <form action="#" method="post">
          <h4>Get in touch</h4>
          <div className="fields">
            <div className="field half">
              <label for="name">Name</label>
              <input name="name" id="name" type="text" placeholder="Name" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
              <input name="email" id="email" type="email" placeholder="Email" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li><input value="Send Message" className="button large" type="submit" /></li>
          </ul>
        </form>
      </div>
    </section>
  )
}