import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Testimonials from './Testimonials'

const Body3 = () => {

    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            await axios
                .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
                .then(res => {
                    const items = JSON.stringify(res.data)
                    console.log(items)
                    items.forEach((item, i) => {
                        // testi.push(<Testimonials
                        //     key={'testimonial-' + i}
                        //     item={item} />)
                        setTestimonial(item)
                    });
                })
                .catch(err => {
                    console.error(err)
                })

        }
        fetchUsers()

    }, []);




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