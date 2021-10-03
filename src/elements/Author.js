import './Author.css'
const Author = (props) => {
    return(
        <p style={{color: props.color}} className='auth'>- {props.author_name}</p>
    );
}

export default Author;