import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Home Page</h1>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} className="carousel">
        <div>
          <img src="/meochanngan.jpg" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src="/meochanngan1.jpg" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src="/meochanngan2.png" alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;