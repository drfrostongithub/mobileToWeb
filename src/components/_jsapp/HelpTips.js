const HelpTips = (props) => {
    console.log(props.item)


    return (
        <div className='HelpTips'>
            <p>{props.item.title}</p>
        </div>
    );
};

export default HelpTips