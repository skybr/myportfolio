import React, {Component} from 'react';
import Title from './Title';
import Slider from 'react-slick';

class Portfolio extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="portfolio_slider_area" id="portfolio">
                <div className="container">
                    <Title tCenter="text-center" stitle="My Portfolio" btitle="Some of my latest works."/>
                    <Slider {...settings} className="portfolio_slider">
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/new1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>John Portfolio Site</h4></a>
                                    <a href="Portfolio#">Fullstack Web Development</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/portfolio1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>Web APP Development</h4></a>
                                    <a href="Portfolio#">React Animation Development</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/portfolio2.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="Portfolio"><h4>Creative Design</h4></a>
                                    <a href="Portfolio#">App Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="Portfolio"><img src={require('../image/portfolio1.jpg')} alt=""/></a>
                                <div className="text">
                                <a href="Portfolio"><h4>Animated Web APP</h4></a>
                                    <a href="Portfolio#">GSAP Animation Development</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Portfolio;
