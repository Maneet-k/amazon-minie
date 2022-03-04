import React from 'react'
import Product from './Product'
import Booklover2 from './Images/studyBoy.svg'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <div className="leftPartDescription">
                    <h2>Welcome to Pushtak Store📚</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum pariatur cum. Doloremque fugiat perspiciatis rerum cupiditate, dolorem veritatis aliquam praesentium velit eius voluptatum laudantium nulla, minima facilis optio blanditiis?</p>
                    <Button variant="primary" size="sm" id='button'>Explore!</Button>{' '}
                </div>
                <div className="rightPartVector">
                    <img src={Booklover2} alt=""/>
                </div>
            </div>
            <div className="main__content">
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Home;