import React from 'react';
import '../components/Footer.css';
function Footer() {
    return (
    <div>
        <div className='container bg'>
            <div className="col-lg-12 row justify-content-center ps-5 footer">
                <div className="col-lg-4 footerContent">
                    <h3>FOOTER</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, velit! Impedit a, fuga, quis aperiam harum illo voluptas odio, exercitationem magni illum sapiente doloremque eos atque tempora sint sit velit.</p>
                </div>
                <div className="col-lg-4 footerContent">
                    <h3>BLOG POSTS</h3> 
                    <div className="col-lg-12 footerContent">
                        <div className="col-lg-6 footerContent">
                        {/* <img src={Lorem} alt="Lorem" /> */}
                        <h4>Lorem</h4>
                        <p>Sed mattis nunc</p>
                        </div>
                        <hr />
                        <div className="col-lg-6 footerContent">
                        {/* <img src={Lorem} alt="Lorem" /> */}
                        <h4>Ipsum</h4>
                        <p>Praes tinci sed</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 footerContent ">
                    <h3>POPULAR TAGS</h3>
                    <div>
                        <p className='font-weight'><span className='tags bg-dark'>Travel</span>  <span className='tags'>New York</span> <span className='tags'>London</span> <span className='tags'>IKEA</span> <span className='tags'>NORWAY</span> <span className='tags'>DIY</span> <span className='tags'>Ideas</span> <span className='tags'>Baby</span> <span className='tags'>Family</span> <span className='tags'>News</span> <span className='tags'>Clothing</span> <span className='tags'>Shopping</span> <span className='tags'>Sports</span> <span className='tags'>Games</span>  </p>
                    </div> 
                </div>

            </div>

        </div>
        <div className="container d-flex justify-content-center align-items-center p-5 bg-dark Footer2">
            <p>powered by <a href="https://www.w3schools.com">w3schools</a></p>
        </div>
    </div>
    )
}

export default Footer