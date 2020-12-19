
import React from 'react'; 
import "../style.css";
  
const Result = ({score, playAgain}) => {
  if(score===1) {
    return(
  <div className="score-board"> 
    <div className="score"> Recommendation is Mancala ! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> 
    )
  }
  else if(score===2){
    return(
    <div className="score-board"> 
    <div className="score"> Recommendation is Jackal and Hounds ! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> )
  }
  else if(score===3){
    return(
    <div className="score-board"> 
    <div className="score"> Recommendation is Game of Life ! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> 
    )
  }
  else if(score===4){
    return(
    <div className="score-board"> 
    <div className="score"> Recommendation is Yahtzee ! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> )
  }
  else if(score===5){
    return(
    <div className="score-board"> 
    <div className="score"> Recommendation is Euphoria: Build a Better Dystopia ! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> )
  }
  else {
    return(
    <div className="score-board"> 
    <div className="score"> Recommendation is Golmaal Returns! </div> 
    <button className="playBtn" onClick={playAgain} > Play Again </button> 
  </div> )
  }

}
  
export default Result; 

