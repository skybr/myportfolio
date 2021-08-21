import React, {Component} from 'react';
import Title from './Title';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Title stitle="Customer feedback" btitle="What my customers say about me.."/>
                            <Fade bottom cascade>
                                <div className="wow fadeInUp" data-wow-delay="0.3s">
                                    <p>"Very fast and good work. He was responsive with good communication, and quick grasping what was core of task. I recommend Aleksa to similar jobs."</p>
                                </div>
                                <div className="slider_nav">
                                    <i className="arrow_carrot-left_alt2 prev" onClick={this.previous}></i>
                                    <i className="arrow_carrot-right_alt2 next" onClick={this.next}></i>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info">
                                <div className="stratup_testimonial_info d-flex align-items-center">
                                    <Slider ref={c => (this.slider = c)}
                                            className="testimonial_slider_four" {...settings}>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonial_man.png')} alt=""/>
                                            </div>
                                            <p>"Very fast and good work. He was responsive with good communication, and quick grasping what was core of task. I recommend Aleksa to similar jobs."</p>
                                            <h5>Rafael Diaz</h5>
                                            <h6>ACQhq, LLC</h6>
                                        </div>
                                        <div className="item">
                                            <div className="author_img">
                                                <img src={require('../image/testimonial_man.png')} alt=""/>
                                            </div>
                                            <p>"Very fast and good work. He was responsive with good communication, and quick grasping what was core of task. I recommend Aleksa to similar jobs."</p>
                                            <h5>Rafael Diaz</h5>
                                            <h6>ACQhq, LLC</h6>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;
