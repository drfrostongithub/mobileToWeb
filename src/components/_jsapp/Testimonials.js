const Testimonials = (props) => {
    return (
        <div className='testimonial-group'>
            <div className='testimony'>
                <h1>
                    {props.item.by}
                </h1>
                <p>{props.item.testimony}</p>
            </div>
        </div>
    );
};

export default Testimonials