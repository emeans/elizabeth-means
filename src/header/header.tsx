import PopOutPortrait from '../portrait/pop-out-portrait'
import './header.scss'

export default function Header() {
	return (
		<header>
			<section className='hero'>
				<div className='introduction'>
					<div className='intro-text'>
						<h1>Hey there, I&apos;m Elizabeth… </h1>
						<p>
							Pommy ipsum smeg head whizz morris dancers come hither, bugger
							codswallop gob. Taking the mick middle class bog roll bow ties are cool
							posh nosh off t&apos;shop, stew and dumps taking the mick know your
							onions pulled a right corker &apos;tis, anorak mince pies tosser warts
							and all knackered, complete mare stupendous proper on the beat.
						</p>
					</div>
					<PopOutPortrait></PopOutPortrait>
				</div>
				<div className='hero-rip'></div>
			</section>
		</header>
	)
}
