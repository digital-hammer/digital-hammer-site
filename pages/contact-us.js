import { useState, useEffect, useRef } from 'react'

const ContactUs = (props) => {
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

export default ContactUs