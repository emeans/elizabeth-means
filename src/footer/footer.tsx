import ContactForm from './contact-form'
import './footer.scss'

export default function Footer() {
	return (
		<footer>
            <div className='hero-rip'></div>

			<div className='footer-content'>
                <div className='column-left'>

				    <h1>Let&apos;s connect!</h1>
                    <p>
                        Here are few other places you can find me on the web and peruse my work.
                        If you are interested in working together, or just want to drop me a
                        friendly hello, feel free to send a message.
                    </p>
                    <div className='social-media-links'>
                        <a
                            href='https://www.linkedin.com/in/elizabeth-a-means/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='LinkedIn'>
                            <div className='linkedin'></div>
                        </a>
                        <a
                            href='https://github.com/emeans'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Github'>
                            <div className='github'></div>
                        </a>
                        <a
                            href='https://codepen.io/emeans'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Codepen'>
                            <div className='codepen'></div>
                        </a>
                        <a
                            href='https://www.behance.net/emeans'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Behance'>
                            <div className='behance'></div>
                        </a>
                        <a
                            href='https://dribbble.com/emeans'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Dribbble'>
                            <div className='dribbble'></div>
                        </a>
                        <a
                            href='https://www.instagram.com/emeans.ux'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Instagram'>
                            <div className='instagram'></div>
                        </a>
                    </div>
                </div>

                <div className='column-right'>
                    <ContactForm></ContactForm>
                </div>
			</div>
            <p className='copyright'>© Elizabeth Means 2022</p>
		</footer>
	)
}
