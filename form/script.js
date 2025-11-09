//this is the javascript code  for theform validation.


let userName = document.querySelector('#username');
let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#password');
let userPassword2 = document.querySelector("#passwordTwo");
let button = document.querySelector('button');
let form = document.querySelector('form');
//console.log(userName, userEmail, userPassword, userPassword2, button,form);

   form.addEventListener('submit', (e)=>{
           e.preventDefault();
           checkInputs();
   })
  //this is called the user validation function.


   function checkInputs()
   {
    const username = userName.value.trim();
    const useremail = userEmail.value.trim();
    const userpassword = userPassword.value.trim();
    const userpasswordTwo = userPassword2.value.trim();
       console.log(username, useremail, userpassword, userpasswordTwo)

    if(username === '')
    {
        //setThe error class and
        //show the error message 
        setErrorFor(userName, "User name can not be empty.")
    }
    else{
        setSuccessFor(userName);
    }

    if(useremail ==='')
    {
        setErrorFor(userEmail, "User name can not be empty.")
    }
    else if(!isEmail(useremail))
    {
          setErrorFor(userEmail, "Enter a  valid email.")
    }
    else{
        setSuccessFor(userEmail);
    }

    if(userpassword ==='')
        {
 setErrorFor(userPassword, "Password can not be empty.")
        }
        else{
            setSuccessFor(userPassword);
        }

    if(userpasswordTwo ==='')
        {
      setErrorFor(userPassword2, "Password can not be empty.")
        }
        else if(userpassword != userpasswordTwo)
        {
            setErrorFor(userPassword2,"password does notmatch")
        }
        else{
            setSuccessFor(userPassword2);
        }

        if(userName.parentElement.classList.contains('success')&& userEmail.parentElement.classList.contains('success') && userPassword.parentElement.classList.contains('success') && userPassword2.parentElement.classList.contains('success'))
        {
            alert("You have logged in sucessfully.")
             form.reset();
        userName.parentElement.classList.remove('success');
        userEmail.parentElement.classList.remove('success');
        userPassword.parentElement.classList.remove('success');
         userPassword2.parentElement.classList.remove('success');
        }

       
   }






   function setErrorFor(input, message)
   {
    const mother = input.parentElement;
    let small = mother.querySelector('small');
    //add the error message inside  the error class
    small.innerText= message;
    mother.classList.add('error');
   }

   function  setSuccessFor(input)
   {
     const mother = input.parentElement;
    mother.classList.add('success');
   }
function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}