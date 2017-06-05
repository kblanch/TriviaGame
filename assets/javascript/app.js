var questionCount = 0;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;		

var q = {
	questions : ['What month is the Earth closest to the Sun?','How many chromosomes does a human typically have?','Which country has hosted the most olympics?','Which NBA franchise has one the most championships?'],
	answer : ['January', 46,'United States','Boston Celtics'], 
	option1 : ['July', 23, 'France','Chicago Bulls'],
	option2 : ['September', 56, 'Germany','Los Angeles Lakers'],
	option3 : ['November', 72, 'Greece','San Antonio Spurs']
};

var ansList = [];
var ansListKey = [];

var currentTime = 30;

var timer;
var timeUp;


//Create Start button
$(document).ready(function(){

	var btn = $('<button>').html("Start Game");
	btn.attr('id','start-btn');
	btn.css('background-color','blue');
	btn.css('font-size','medium');
	btn.css('font-weight','bold');
	btn.css('padding','2px');
	$("#game-container").append(btn);
});

$(document).on("click","#start-btn",function(){
//$('#start-btn').click(function() {
	// alert("it worked!");
	setupGameScreen();
	buildAnsList(questionCount);
	shuffleQuestions(ansList,ansListKey);
	newQuestion();

	// timer = setInterval(function(){ 
	// 	currentTime--;
	// 	console.log(currentTime);
	// 	$('#count-down').html(currentTime); 
	// }, 1000);

	// timeUp = setTimeout(function(){
	// 	clearInterval(timer);
	// }, 31500) 

});


function setupGameScreen(){
	$('#start-btn').css('display','none');
	
	var timeDiv = $('<div>').html("Time Remaining: <span id='count-down'></span>");
	timeDiv.attr('id','time-remaining');
	$('#game-container').append(timeDiv);

	var qDiv = $('<div>').attr('id','question-container');
	$('#game-container').append(qDiv);

	var answerUL = $('<ul>').attr('class','answer-list');


	for(i=1;i<5;i++){
		var li = $('<li>').attr('class','answer');
		li.attr('id','a' + i);
		answerUL.append(li);
	}
	
	$('#game-container').append(answerUL);	

}


function newQuestion(){

	// currentTime = 30;
	// timer = setInterval(function(){ 
	// 	$('#count-down').html(currentTime--); 
	// }, 1000);

	// timeUp = setTimeout(function(){
	// 	clearInterval(timer);
	// }, 31500) 

	// $('#count-down').html(currentTime);



	// setInterval(function(){ 
	// 	currentTime--;
	// 	$('#count-down').html(currentTime); 
	// }, 1000);	
	timer = setInterval(function(){ 
		
		console.log(currentTime);
		$('#count-down').html(currentTime); 
		currentTime--;
	}, 1000);

	timeUp = setTimeout(function(){
		clearInterval(timer);
		unansweredCount++;
		answerScreen(false);
	}, 31500) 	

	$('#question-container').html(q.questions[questionCount]);

	$('#a1').html(ansList[0]);//
	$('#a1').val(ansListKey[0]);

	$('#a2').html(ansList[1]);
	$('#a2').val(ansListKey[1]);

	$('#a3').html(ansList[2]);
	$('#a3').val(ansListKey[2]);

	$('#a4').html(ansList[3]);
	$('#a4').val(ansListKey[3]);

	// setInterval(function(){ 
	// 	$('#count-down').html(currentTime--); 
	// }, 1000);	


}

function buildAnsList(qCount){
	ansList = [];
	ansListKey = [];
	ansList.push(q.answer[qCount]);
	ansList.push(q.option1[qCount]);
	ansList.push(q.option2[qCount]);
	ansList.push(q.option3[qCount]);

	 for (var i = 0; i < ansList.length; i++) {
	 	ansListKey.push(i);
	 }
}

function shuffleQuestions(arrayQs, arrayAs){
	var index = arrayQs.length;
	var temp;
	var random;
	var liCount = 1;

	while(index > 0){
		random = Math.floor(Math.random() * index);
		index--;

		temp = arrayAs[index];
		arrayAs[index] = arrayAs[random];
		arrayAs[random] = temp;

		temp = 0;
		temp = arrayQs[index];
		arrayQs[index] = arrayQs[random];
		arrayQs[random] = temp;

	}
}



$(document).on("click","#a1",function(){
//$('#a1').on('click',function(){ //Why does this not work?
	if($("#a1").val() === 0){
		// alert('Win');
		correctCount++;
		answerScreen(true);
	}	
	else{
		// alert('wrong');
		incorrectCount++;
		answerScreen(false);
	}
	// questionCount++;
	// buildAnsList(questionCount);
	// shuffleQuestions(ansList,ansListKey);
	// newQuestion();
});

$(document).on("click","#a2",function(){
//$('#a1').on('click',function(){ //Why does this not work?
	if($("#a2").val() === 0){
		// alert('Win');
		correctCount++;
		answerScreen(true);
	}
	else{
		// alert('wrong');
		incorrectCount++;
		answerScreen(false);
	}	

	// questionCount++;
	// buildAnsList(questionCount);
	// shuffleQuestions(ansList,ansListKey);
	// newQuestion();

});

$(document).on("click","#a3",function(){
//$('#a1').on('click',function(){ //Why does this not work?
	if($("#a3").val() === 0){
		// alert('Win');
		correctCount++;
		answerScreen(true);
	}	
	else{
		// alert('wrong');
		incorrectCount++;
		answerScreen(false);
	}

	// questionCount++;
	// buildAnsList(questionCount);
	// shuffleQuestions(ansList,ansListKey);
	// newQuestion();
});

$(document).on("click","#a4",function(){
//$('#a1').on('click',function(){ //Why does this not work?
	if($("#a4").val() === 0){
		// alert('Win');
		correctCount++;
		answerScreen(true);
	}	
	else{
		// alert('wrong');
		incorrectCount++;
		answerScreen(false);
	}
	// questionCount++;
	// buildAnsList(questionCount);
	// shuffleQuestions(ansList,ansListKey);
	// newQuestion();
});

function answerScreen(correct){
	if(correct){
		$('#question-container').html('Correct');
	$('.answer-list').css('display','none');
	clearInterval(timer);
	clearTimeout(timeUp);
	}
	else{
		$('#question-container').html('Incorrect');
		$('.answer-list').css('display','none');
		clearInterval(timer);
		clearTimeout(timeUp);
	}

	setTimeout(function() {
		if(questionCount === 3){
			$('#question-container').html('All done, heres how you did!');

			var divCorrect = $('<div>').html("Correct Answers: " + correctCount);
		divCorrect.attr('id','correct-count');
		$("#game-container").append(divCorrect);

		var divIncorrect = $('<div>').html("Incorrect Answers: " + incorrectCount);
		divIncorrect.attr('id','incorrect-count');
		$("#game-container").append(divIncorrect);

		var divUnanswered = $('<div>').html("Unanswered: " + unansweredCount);
		divUnanswered.attr('id','unanswered-count');
		$("#game-container").append(divUnanswered);

			var divSO = $('<div>').html("Start Over");
		divSO.attr('id','start-over');
		$("#game-container").append(divSO);

		}
		else{
			currentTime = 30;

			questionCount++;
			$('.answer-list').css('display','inline');
		buildAnsList(questionCount);
		shuffleQuestions(ansList,ansListKey);
		newQuestion();
		}
	}, 2000);
}

$(document).on("click","#start-over",function(){
	clearTimeout(timeUp);
	clearInterval(timer);
	currentTime = 30;
	questionCount = 0;
	correctCount = 0;
	incorrectCount = 0;
	unansweredCount = 0;		
	ansList = [];
	ansListKey = [];

	$('#correct-count').remove();
	$('#incorrect-count').remove();
	$('#unanswered-count').remove();
	$('#start-over').remove();

	$('.answer-list').css('display','inline');
	buildAnsList(questionCount);
	shuffleQuestions(ansList,ansListKey);
	newQuestion();

});