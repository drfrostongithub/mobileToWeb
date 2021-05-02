import Lego from '../img/lego.png'

const Body = () => {

    return (
        <main>
            <div className="main">
                <div className='jumbotron'>
                    <div className="title">
                        <h1>WEEKEND FROM HOME</h1>
                        <p>
                            <i>Stay active with a little workout.</i>
                        </p>
                    </div>
                    <div className="welcome-lego">
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
            </div>
        </main>
    )
}

export default Body