import React, { useEffect } from 'react'
import axios from 'axios'
import Testimonials from './Testimonials.js'

const Body3 = () => {

    var testi = []
    useEffect(() => {
        const fetchUsers = async () => {
            await axios
                .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
                .then(res => {
                    const items = res.data
                    // setTestimonial(items)
                    items.forEach((item, i) => {
                        testi.push(<Testimonials
                            key={'testimonial-' + i}
                            item={item} />)
                    });
                    console.log(testi)

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
                    {testi}
                </label>
            </div>
        </div>
    )
}

export default Body3