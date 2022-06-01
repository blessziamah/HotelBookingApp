import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Luxurious Rooms" subtitle="with an astounding beach view" >
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
