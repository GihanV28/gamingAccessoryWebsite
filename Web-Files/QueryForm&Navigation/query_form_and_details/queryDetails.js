var details = new Array(); // Defined a global array

/*To fetch the user entering details from the queryform to queryDetails forms*/

window.addEventListener('load',()=>{
	
	const params = (new URL (document.location)).searchParams;
	const name = params.get('name');
	const email= params.get('email');
	const Sub= params.get('Sub');
	const message= params.get('message');
	
    details=[name,email,Sub,message,true]; //Add data to the array
	
	
	
	document.getElementById('result-name').innerHTML = name;
	document.getElementById('result-email').innerHTML = email;
	document.getElementById('result-Sub').innerHTML = Sub;
	document.getElementById('result-message').innerHTML = message;
	
	
})




function send() //Send function to functionate the send button
{
	var email="mailto:thushini.20210156@iit.ac.lk"
	          
	// To confirm whether the email need to be send or not
	if(confirm("Do you want to send an email")){
		window.location.href=email;
	}else{
		alert("Mail did not send to the required email address ! ")
	}
}



function edit()//Edit function to functionate the edit button
{

	try{
		if(details[4]){
			window.history.go(-1); //go the previous page
		}
	}catch(e){
		window.location.href="queryForm.html";
	}
	
	
	console.log(details);
	
}



