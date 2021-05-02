const HelpTips = (props) => {
    console.log(props.item)


    return (
        <div className='HelpTips'>
            <tr>
                <td>
                    {props.item.id}
                </td>
                <td>
                    {props.item.title}
                </td>
            </tr>
        </div>
    );
};

export default HelpTips