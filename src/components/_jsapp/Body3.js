import { useEffect, useState } from 'react'
import axios from 'axios'
import Testimonials from './Testimonials.js'
import HelpTips from './HelpTips.js'
import Slider from 'react-slick'

const Body3 = () => {

    const [testimonial, setTesti] = useState([])
    const [helpTips, setHelpTips] = useState([])
    useEffect(() => {
        const fetchDatas = async () => {
            await axios
                .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
                .then(res => {
                    const items = res.data
                    setTesti(items)
                })
                .catch(err => {
                    console.error(err)
                })
            await axios
                .get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
                .then(res => {
                    const items = res.data
                    setHelpTips(items)
                })
                .catch(err => {
                    console.error(err)
                })
        }
        fetchDatas()

    }, []);

    const testi = testimonial.map((item, i) => {
        return (<Testimonials
            key={'testimonial-' + i}
            item={item} />)
    });

    const helpandtips = helpTips.map((item, i) => {
        return (<HelpTips
            key={'help&tips-' + i}
            item={item} />)
    });

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        // className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // Responsive
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
                breakpoint: 600,
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
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='body3'>
            <div className="list">
                <div className="lower-body">

                    <label>
                        <h1>
                            Testimonial
                    </h1>
                        <Slider {...settings}>
                            {testi}
                        </Slider>
                    </label>

                    <label>
                        <h1>
                            POV
                    </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    </label>

                    <label>
                        <h1>
                            Testimonial
                    </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </label>

                    <label>
                        <h1>
                            Resource
                    </h1>
                        <p>
                            These cases are perfectly simple and easy to distinguish.
                            In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                    </p>
                    </label>

                    <label>
                        <h1>
                            Help & Tips
                    </h1>
                        {helpandtips}
                    </label>

                    <label>
                        <h1>
                            You're all set!
                    </h1>
                        <p>
                            The wise man therefore always holds in these matters to this principle of selection.
                    </p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Body3