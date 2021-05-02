import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Testimonials from './Testimonials'

const Body3 = () => {

    const [testimonial, setTestimonial] = useState([])
    const testi = []
    useEffect(() => {
        const fetchUsers = async () => {
            await axios
                .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
                .then(res => {
                    const item = JSON.stringify(res.data)
                    setTestimonial(item)
                    // console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })

        }
        fetchUsers()

    }, []);

    if (testimonial.length > 0) {
        testimonial.forEach((item, i) => {
            console.log(item)
            // testi.push(<Testimonials
            //     key={'testimonial-' + i}
            //     item={item} />)
        });
    }
    return (
        <div className='body3'>
            <div>
                <label>
                    <h1>
                        Testimonial
                    </h1>
                    {testimonial}
                </label>
            </div>
        </div>
    )
}

export default Body3