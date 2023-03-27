function validation()
{
	var name=document.forms["frm"]["name"].value;
	var email=document.forms["frm"]["email"].value;
	var Sub=document.forms["frm"]["Sub"].value;
	var message=document.forms["frm"]["message"].value;
	
	//if name and email both fiels are missing
	if(name=="" && email=="")
	{
		alert("Please fill all the fields to continue..!")
		return false;
	}
	
	// name validation
	
	if(name=="")
	{
		alert("Please enter the name to continue")
		return false;
	}
	if(!isNaN(name))
	{
		alert("The name should have to include only characters")
		return false;
	}
	
   

	// email field validation
	
	if(email=="")
	{
		alert("Please enter the email address to continue")
		return false;
	}
	
	var at = email.indexOf("@");
	var dot=email.lastIndexOf(".");
	if(at<1||dot<at+2||dot+2>=email.length)
	{
		alert("Not a valid email")
        return false;
    }	
    // select validation
    
    if(document.frm.Sub.value=="Select option")
    {
        alert("Please select an option to continue");
        return false;
    }
 
    //text field  validation
	if(message=="")
	{
		alert("Please enter a detailed message to continue")
		return false;
		
	}
	
	
	
	
	
	return(true)
}
