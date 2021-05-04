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
                        <img src={Lego} alt='img' />
                        <p>
                            <span>
                                <a href="/" onClick=''>
                                    Let's Go!
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Body