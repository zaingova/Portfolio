// MainRouter.jsx - Zain Gova - 301018602 - September 22, 2024

import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Services from './src/components/Services'
import Project from './src/components/Project'
import Layout from './src/components/Layout'

const MainRouter = () => {
    return (<div className='portfolio'>
        <Layout />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </div>
    )
}
export default MainRouter



