import {useRef} from 'react'
import ReactGA from 'react-ga'

const ContactUs = (props) => {
	const form = useRef(false)
	const onClick = () => {
		ReactGA.event({
			action: 'submit-form',
			category: 'form-category',
			label: 'form_label',
			value: 'xxxxxx',
		})
		form.current && form.current.submit()
	}

	return (
		<section id="contact-us">
			<div className="inner">
				<ul className="contact">
					<li className="icon solid fa-home">
						<strong>Address</strong>
						305 Bay St.<br />
						Monroe, NC 28079
					</li>
					<li className="icon solid fa-phone">
						<strong>Phone</strong>
						<a href="tel:7042751425">(704) 275-1425</a>
					</li>
					<li className="icon solid fa-envelope">
						<strong>Email</strong>
						<a href="email:info@thedigitalhammer.com">info@thedigitalhammer.com</a>
					</li>
				</ul>
				<div className="form">
					<h4>Get in touch</h4>
					<form name="contact" action="/success" method="POST" data-netlify="true" ref={form}>
						<input type="hidden" name="contact" value="contact" />
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
						<ul className="actions">
							<li><input name="submit" value="Send Message" className="button large" type="button" onClick={onClick}/></li>
						</ul>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactUs