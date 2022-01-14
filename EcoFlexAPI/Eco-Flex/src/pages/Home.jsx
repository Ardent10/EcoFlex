import React from 'react';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Impact from '../components/Impact';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Materials from '../components/Materials';
import Footer from '../components/Footer';
import { searchLinks } from '../data';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar data= {searchLinks}/>
            <Slider/>
            <Impact/>
            <h1 style={{margin:"15px 0",fontSize:"50px", textAlign:"center"}}>CATEGORIES</h1>
            <Categories/>
            <h1 style={{margin:"15px 0",fontSize:"50px", textAlign:"center"}}>TOP TRENDS</h1>
            <Products/>
            <Materials/>
            <Newsletter/>
            <Footer/> 
        </div>
    )
}

export default Home;
