
function more1(){
	let myPara = document.getElementById("more1-p");
	let myClick = document.getElementById("click1");
	
	if (myPara.classList.contains("hidden")){
		myPara.classList.remove("hidden");
		myClick.innerHTML = "Show Less";
	}
	
	else{
		myPara.classList.add("hidden");
		myClick.innerHTML="Show More";
	}
return false;}

function more2(){
	let myPara = document.getElementById("more2-p");
	let myClick = document.getElementById("click2");
	
	if (myPara.classList.contains("hidden")){
		myPara.classList.remove("hidden");
		myClick.innerHTML = "Show Less";
	}
	
	else{
		myPara.classList.add("hidden");
		myClick.innerHTML="Show More";
	}
return false;
}

/*Quiz*/

function submit1(){
	
	let result=document.getElementById("result");
	result.classList.remove("hidden");
	let question1=document.getElementById("question1").value.toLowerCase();
	let question2=document.getElementById("question2").value.toLowerCase();
	let question3=document.getElementById("question3").value.toLowerCase();
	let question4=document.getElementById("question4").value.toLowerCase();
	
	let answer1=document.getElementById("answer1");
	let answer2=document.getElementById("answer2");
	let answer3=document.getElementById("answer3");
	let answer4=document.getElementById("answer4");
	let score=document.getElementById("count");
	let total=0;
	
	let firstans="Incorrect";
	let secondans="Incorrect";
	let thirdans="Incorrect";
	let fourthans="Incorrect";
	
	if (question1=="cascading style sheets"){
		firstans="Correct";
		total++;
	}
	
	if (question2=="<b>"){
		secondans="Correct";
		total++;
	}
	
	if (question3=="numbers"){
		thirdans="Correct";
		total++;
	}
	
	if (question4=="a written description of the image"){
		fourthans="Correct";
		total++;
	}
	

	
	answer1.innerHTML= "Question 1-" + firstans;
	answer2.innerHTML="Question 2-" + secondans;
	answer3.innerHTML="Question 3-" + thirdans;
	answer4.innerHTML="Question 4-" + fourthans;
	score.innerHTML="Score:" + total +"/4";
}

/*Slideshow*/

setInterval(changeSlide, 10000);


function changeSlide(){
	let image1=document.getElementById("ocean");
	let image2=document.getElementById("aloha");
	let image3=document.getElementById("greece");
	let image4=document.getElementById("lights");
	
	if(!image1.classList.contains("hidden")){
	image1.classList.add("hidden");
	image2.classList.remove("hidden");
	}
	
	else if(!image2.classList.contains("hidden")){
		
	image2.classList.add("hidden");
	image3.classList.remove("hidden");
}

	else if(!image3.classList.contains("hidden")){
	image3.classList.add("hidden");
	image4.classList.remove("hidden");
	}
	
	else if(!image4.classList.contains("hidden")){
	image4.classList.add("hidden");
	image1.classList.remove("hidden");
}

}