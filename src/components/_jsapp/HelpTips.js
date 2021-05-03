const HelpTips = (props) => {
    // console.log(props)
    return (
        <div
            className='card'
            style={{
                backgroundImage: `url(${props.item.image})`
            }}
        >
            <div
                className="title">
                <p>{props.item.title}</p>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default HelpTips