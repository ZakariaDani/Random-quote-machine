import './TextS.css'
const TextQ = (props) => {
    return (
        <div className='container'>
            <i class="fa fa-quote-left" style={{color: props.color}}></i>
            <p style={{color: props.color}} className='txt'>{props.TextQote}</p>
        </div>
    );
}

export default TextQ;