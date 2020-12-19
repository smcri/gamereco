import React, {Component} from "react"; 
import ReactDOM from "react-dom"; 
import "./style.css"; 
import questionAPI from './question'; 
import QuestionBox from './components/QuestionBox'; 
import Result from './components/ResultBox'; 
import gameAPI from './games'

class Quiz extends Component { 
constructor() { 
	super(); 
	this.state = { 
	questionBank: [], 
	score: 0, 
	responses: 0,
	recommendationBank: [] 
	}; 
} 

// Function to get question from ./question 
getQuestions = () => { 
	questionAPI().then(question => { 
	this.setState({questionBank: question}); 
	}); 
}; 

// Set state back to default and call function 
playAgain = () => { 
	this.getQuestions(); 
	this.setState({score: 0, responses: 0}); 
}; 

// Function to compute scores 
computeAnswer = (answer, correctAns) => { 
	if (answer === correctAns) { 
	this.setState({ 
		score: this.state.score + 1 
	}); 
	} 
	this.setState({ 
	responses: this.state.responses < 5 
		? this.state.responses + 1 
		: 5 
	}); 
}; 

// componentDidMount function to get question 
componentDidMount() { 
	this.getQuestions(); 
}

getRecommendation = () => {
	gameAPI().then(recommendation => {
	this.setState({recommendationBank: recommendation});
	});

}; 

render() { 
	return (<div className="container"> 
	<div className="title"> 
		Game recommendation engine
	</div> 

	{this.state.questionBank.length > 0 && 
	this.state.responses < 5 && 
	this.state.questionBank.map(({question, answers, 
	correct, questionId}) => <QuestionBox question= 
	{question} options={answers} key={questionId} 
	selected={answer => this.computeAnswer(answer, correct)}/>)} 

	{ 
		
		this.state.responses === 5 
		? (	this.getRecommendation,
			<Result score={this.state.score} 
			playAgain={this.playAgain}/>) 
		: null
	} 

	</div>) 
} 
} 

ReactDOM.render(<Quiz/>, document.getElementById("root")); 

