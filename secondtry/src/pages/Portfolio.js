import React from 'react';
import Card from '../components/card';
import img1 from '../Assets/images/portfolioImages/lights.jpg';
import img2 from '../Assets/images/portfolioImages/mountains.jpg';
import img3 from '../Assets/images/portfolioImages/nature.jpg';
import img4 from '../Assets/images/portfolioImages/p1.jpg';
import img5 from '../Assets/images/portfolioImages/p2.jpg';
import img6 from '../Assets/images/portfolioImages/p3.jpg';

function Portfolio() {
  return (
    <div>
      <div className="container">

        <h1 className='mt-4 mb-5'>My Portfolio</h1>
        <div className="col-lg-12 row" >
          <Card Img= {img1} title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
          <Card  Img= {img2}title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
          <Card Img= {img3} title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
          <Card Img= {img4} title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
          <Card Img= {img5} title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
          <Card Img= {img6} title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
        </div>
      </div>
    </div>
  )
}

export default Portfolio