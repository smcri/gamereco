const qBank = [ 
{ 
	question: 
	"What do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics", 
	questionId: "099099"
}, 
{ 
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Mesopotamia", "Persia"], 
	correct: "Rome", 
	questionId: "093909"
}, 
{ 
	question: 
	"Preffered difficulty level?", 
	answers: ["1", "2", "3", "4"], 
	correct: "Tactics", 
	questionId: "009039"
}, 
{ 
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Mesopotamia", "Persia"], 
	correct: "Rome", 
	questionId: "090089"
}, 
{ 
	question: 
	"What do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics", 
	questionId: "01010101"
}, 
{ 
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Mesopotamia", "Persia"], 
	correct: "Rome", 
	questionId: "092299"
}, 
{ 
	question: 
	"Preffered difficulty level?", 
	answers: ["1", "2", "3", "4"], 
	questionId: "099099"
}, 
{ 
	question: 
	"What do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics", 
	questionId: "222099"
}, 
{  
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Mesopotamia", "Persia"], 
	correct: "Rome",
	questionId: "2222099"
}, 
{ 
	question: 
	"What do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics", 
	questionId: "09922099"
}, 
{ 
	question: 
	"Preffered difficulty level?", 
	answers: ["1", "2", "3", "4"], 
	questionId: "222292099"
}, 
{ 
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Mesopotamia", "Persia"], 
	correct: "Rome", 
	questionId: "0998999099"
}, 
{ 
	question: 
	"What do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics", 
	questionId: "099099"
}, 
{ 
	question: 
	"Preffered difficulty level?", 
	answers: ["1", "2", "3", "4"],
	questionId: "099099"
}, 
{ 
	question: 
	"What do you prefer?", 
	answers: ["Luck", "Tactics", "Memory", "Reflexes"], 
	correct: "Tactics",
	questionId: "099099"
}, 
{ 
	question: 
	"Which civilization so you want to be immersed in?", 
	answers: ["Rome", "Egypt", "Mesopotamia", "Persia"], 
	correct: "Rome",
}, 
{ 
	question: 
	"Preffered difficulty level?", 
	answers: ["1", "2", "3", "4"], 
	questionId: "0912219099"
}, 

]; 

// n = 5 to export 5 question 
export default (n = 5) => 
Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 

