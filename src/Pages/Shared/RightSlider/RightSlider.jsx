import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import download from '../../../../public/download (1).jpg'
import download1 from '../../../../public/download.jpg'
const RightSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img 
                        className="d-block w-100"
                        src={download}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={download1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default RightSlider;