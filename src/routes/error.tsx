import './error.scss'

export default function Error() {
	/* Set width of all animated text to match container */
	const parent: NodeListOf<Element> = document.querySelectorAll('.animate-text')
	for (let i = 0; i < parent.length; i++) {
		;(parent[i] as HTMLElement).style.width = parent[i].children[0].clientWidth + 'px'
	}

	return (
		<div className='error-page'>
			<div className='bg-text-container'>
				<div className='animate-text'>
					<span>oops!&nbsp;404&nbsp;</span>
					<span>oops!&nbsp;404&nbsp;</span>
				</div>
				<div className='animate-text left'>
					<span>oops!&nbsp;404&nbsp;</span>
					<span>oops!&nbsp;404&nbsp;</span>
				</div>
			</div>

			<div className='container'>
				<div className='col'>
					<h1>Sorry…</h1>
					<p>
						It looks like you might have lost your way. Feel free to go check out my{' '}
						<a href='/portfolio' aria-label='portfolio'>
							portfolio
						</a>{' '}
						or head to the{' '}
						<a href='/home' aria-label='home'>
							homepage
						</a>
						.
					</p>
					<br />
					<p className='signature'>Elizabeth Means</p>
				</div>
			</div>
		</div>
	)
}
