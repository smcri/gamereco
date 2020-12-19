const qBank = [ 
{ 
	question: 
	"What style of gameplay do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics", 
	questionId: "099099"
}, 
{ 
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Modern", "Persia","Mesopotamia"], 
	correct: "Rome", 
	questionId: "093909"
}, 
{ 
	question: 
	"Preffered difficulty level?", 
	answers: ["1", "2", "3", "4"], 
	correct: "3", 
	questionId: "009039"
}, 
{ 
	question: 
	"Which genre do you prefer?", 
	answers: ["Strategy", "luck"], 
	correct: "Strategy", 
	questionId: "090089"
}, 
{ 
	question: 
	"Which subgenre do you prefer?", 
	answers: ["Racing", "Family", "Civilization", "Economy","Politics"], 
	correct: "Economy", 
	questionId: "01010101"
}, 
]; 

// n = 5 to export 5 question 
export default (n = 5) => 
Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 

