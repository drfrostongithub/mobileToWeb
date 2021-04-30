import * as React from 'react';
import Lego from '../img/lego.png'
const Body = () => {

    return (
        <main>
            <div className="background">
                <div className='jumbotron'>
                    <h1>WEEKEND FROM HOME</h1>
                    <p>
                        <i>Stay active with a little workout.</i>
                    </p>
                    <a href='/' className='start-lego'>
                        <img src={Lego} alt='img' />
                        <p>
                            <span>
                                Let's Go!
                            </span>
                        </p>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Body