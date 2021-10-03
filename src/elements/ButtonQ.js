import React, {useState} from "react";
import './ButtonQ.css';
import TextQ from "./TextQ";
import Author from "./Author";
import { txt_qotes } from "./Consts";
const ButtonQ = (props) => {
  const [index, setindx] = useState(props.indx);
  const clickHandler = () => {
    setindx(Math.floor(Math.random()*txt_qotes.length));
    console.log(index);
  }
  const colors = ['red', 'green', 'blue', 'orange', 'brown']; 
  return(
    <div style={{backgroundColor: colors[index]}} className='main__box'>
      <div className='child__box'>
        <TextQ TextQote={txt_qotes[index].qote} color={colors[index]}/>
        <Author author_name = {txt_qotes[index].author} color ={colors[index]}/>
        <div className='button__box'>
          <div className='b2__box'>
            <a href="https://twitter.com/ZakariaDani20" target='_blank' rel="noreferrer"><button style={{backgroundColor: colors[index]}} className='button b2'><i class="fa fa-twitter"></i></button></a>
            <a href="https://www.facebook.com/profile.php?id=100005896398658" target='_blank' rel="noreferrer"><button style={{backgroundColor: colors[index]}} className='button b2'><i class="fa fa-facebook"></i></button></a>
          </div>
          <button onClick={clickHandler} style={{backgroundColor: colors[index]}} className='button'>New quote</button>
        </div>
      </div>
    </div>
  );
}


export default ButtonQ;