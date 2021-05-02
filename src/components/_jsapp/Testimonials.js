const Testimonials = (props) => {
    return (
        <div className='testimonial'>
            <h1>
                {props.item.by}
            </h1>
            <p>{props.item.testimony}</p>
        </div>
    );
};

export default Testimonials