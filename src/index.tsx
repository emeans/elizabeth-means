import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app'
import reportWebVitals from './reportWebVitals'
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom'
import About from './routes/about'
import Home from './routes/home'
import Error from './routes/error'
import Portfolio from './routes/portfolio'
import UnderConstruction from './routes/under-construction'
import Playground from './routes/playground'
import { ThemeProvider } from './ThemeContext'

ReactDOM.render(
	<React.StrictMode>
        <ThemeProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Navigate replace to='underconstruction' />} />
                        {/* <Route index element={<Navigate replace to='home' />} /> */}
                        <Route path='home' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='portfolio' element={<Portfolio />} />
                        <Route path='playground' element={<Playground />} />

                        <Route path='underconstruction' element={<UnderConstruction />} />
                    </Route>
                    <Route path='*' element={<Error />} />

                </Routes>
            </HashRouter>
        </ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
