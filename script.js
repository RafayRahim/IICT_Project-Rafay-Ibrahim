
let slideIndex = 0;
        showSlides();

        function showSlides() {

            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
function validatecontactForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "" || x == null) {
    alert("First Name must be filled out");
    return false;
  }

  var y = document.forms["myForm"]["lastname"].value;
  if (y == "" || y == null) {
    alert("Last Name must be filled out");
    return false;
  }

  var z = document.forms["myForm"]["emailaddress"].value;
  if (z == "" || z == null) {
    alert("Email Address must be filled out");
    return false;
  }
  else{
     alert("Your Message Has Been Successfully Send To Our Customer Cair And Soon You Will Get A Response") 
  }
}
function validateloginForm() {
  var x = document.forms["myForm"]["loginemailaddress"].value;
  if (x == "" || x == null) {
    alert("Email Address must be filled out");
    return false;
  }

  var y = document.forms["myForm"]["password"].value;
  if (y == "" || y == null) {
    alert("Password must be filled out");
    return false;
  }
  else{
    alert("Welcome Back Sir !");   
  }
  
}
function validateregisterForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "" || x == null) {
    alert("First Name must be filled out");
    return false;
  }

  var y = document.forms["myForm"]["lastname"].value;
  if (y == "" || y == null) {
    alert("Last Name must be filled out");
    return false;
  }

  var z = document.forms["myForm"]["emailaddress"].value;
  if (z == "" || z == null) {
    alert("Email Address must be filled out");
    return false;
  }
  var a = document.forms["myForm"]["password"].value;
  if (a == "" || a == null) {
    alert("Password must be filled out");
    return false
  }
  var b = document.forms["myForm"]["dob"].value;
  if (b == "" || b == null) {
    alert("Date of Birth must be filled out");
    return false
  }
  else{
     alert("Your Account Has Been Created Successfully") 
  }
}
function validateorder() {
  var x = document.forms["myForm"]["itemcode"].value;
  if (x == "" || x == null) {
    alert("Item Code must be filled out");
    return false;
  }

  var y = document.forms["myForm"]["number"].value;
  if (y == "" || y == null) {
    alert("Account Number must be filled out");
    return false;
  }
  else{
    alert("Your Order Has Been Placed");   
  }
  
}