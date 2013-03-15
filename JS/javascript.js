//validates the input for street address 1
function validateForm()
{
	validateAddress();
	validateCity();
	validateState();
	validateEmail();
}
function validateAddress()
{
	var x=document.forms["input"]["street1"].value;
	if (x==null || x=="")
		{
		alert("Street Address 1 must be filled out!");
		return false;
		}
}
//made with help from Reyna Dawkins! (:

//validates the input for city
function validateCity()
{
	var x=document.forms["input"]["city"].value;
	if (x==null || x=="")
		{	
		alert("City must be filled out!");
		return false;
		}
}

//validates the input for state
function validateState()
{
	var x=document.forms["myForm"]["state"]
	if (x==null || x==""
		{
		alert("Please select a state!");
		return false;
		}
}

//validates the input for email
function validateEmail()
{
	var x=document.forms["myForm"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		{
		alert("Not a valid e-mail address");
		}
}

		