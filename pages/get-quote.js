import { useState, useEffect, useRef } from 'react'
import QuoteMachine from 'sections/quoteMachine'

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
				<QuoteMachine />
			</div>
		</section>
	)
}

export default ContactUs