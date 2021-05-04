const HelpTips = (props) => {
    return (
        <div
            className='card'
            style={{
                backgroundImage: `url(${props.item.image})`
            }}
        >
            <div className="title">
                <p>{props.item.title}</p>
                <a href="/">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
};

export default HelpTips