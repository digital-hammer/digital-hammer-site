import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <section id="footer">
      <div className="inner">
        <section className="about">
          <h3>Want a Free Online Quote?</h3>
          <p>Check out our online quote builder, where you can get a free quote for your website in just minutes. Click the button below to get started.</p>
          <ul className="actions">
            <li><a href="/quote-builder" className="button">Get Quote</a></li>
            <li><a href="/contact-us" className="button">Contact Us</a></li>
          </ul>
        </section>
        <section>
          <h3>Get in Touch</h3>
          <ul className="contact">
            <li className="icon solid fa-phone"><a href="tel:7042751425">(704) 275-1425</a></li>
            <li className="icon solid fa-envelope"><a href="email:info@thedigitalhammer.com">info@thedigitalhammer.com</a></li>
            <li className="social">
              <a 
                className="icon brands" 
                href={"https://www.facebook.com/thedigitalhammer/"}
              >
                <FontAwesomeIcon
                  size="lg"
                  icon={faFacebook}
                />
              </a>
              <a 
                className="icon brands" 
                href={"https://www.instagram.com/thedigitalhammer/"}
              >
                <FontAwesomeIcon
                  size="lg"
                  icon={faInstagram}
                />
              </a>
              <a 
                className="icon brands" 
                href={"https://www.linkedin.com/company/the-digital-hammer/about/?viewAsMember=true"}
              >
                <FontAwesomeIcon
                  size="lg"
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Mailing Address</h3>
          <p>305 Bay St.<br />
            Monroe, NC 28079<br />
            USA</p>
        </section>
      </div>
      <div className="copyright">
        <p>Copyright &copy; Digital Hammer LLC. All rights reserved.</p>
      </div>
    </section>
  )
}