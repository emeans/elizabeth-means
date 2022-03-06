import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return(
        <footer>
            <div className='rotated'>
                <div className='hero-rip'></div>
            </div>
            
            <div className='footer-content'>
                <div>
                    <h2>Let's connect!</h2>
                    <div className='social-media-links'>
                        <a
                            href="https://www.linkedin.com/in/elizabeth-a-means/"
                            target='_blank'
                            rel="noopener"
                            aria-label='LinkedIn'>
                                <div className='linkedin'></div>
                        </a>
                        <a
                            href="https://github.com/emeans"
                            target='_blank'
                            rel="noopener"
                            aria-label='Github'>
                                <div className='github'></div>
                        </a>
                        <a
                            href="https://codepen.io/emeans"
                            target='_blank'
                            rel="noopener"
                            aria-label='Codepen'>
                                <div className='codepen'></div>
                        </a>
                        {/* Behance */}
                        {/* Dribbble */}
                        {/* Instagram */}
                    </div>
                </div>
                <div className='contact-form'>
                    a form will go here
                </div>
            </div>
            
        </footer>
    );
}
