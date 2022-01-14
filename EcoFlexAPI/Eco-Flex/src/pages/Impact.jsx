import React from 'react';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Impact from '../components/Impact';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { searchLinks } from '../data';

const impact = () => {
    return (
        <div>
            <Announcement/>
            <Navbar data= {searchLinks}/>
            <Slider/>
            <Impact/>
            <Newsletter/>
            <Footer/> 
        </div>
    )
}

export default impact;