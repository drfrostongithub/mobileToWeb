const Testimonials = () => {

    const testi = this.props.item
    console.log(this.props.item)
    return (
        <div className='Testimonials'>
            <p>Hi@</p>
            <tr>
                <td>
                    {testi.id}
                </td>
                <td>
                    {testi.testimonial}
                </td>
            </tr>
        </div>
    );
};

export default Testimonials