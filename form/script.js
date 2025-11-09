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
          setErrorFor(userEmail, "User name can not be empty.")
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
 setErrorFor(userpasswordTwo, "Password can not be empty.")
        }
        else if(userpassword != userPassword2)
        {
            setErrorFor(userpasswordTwo,'password does notmatch')
        }
        else{
            setSuccessFor(userpasswordTwo);
        }
   }






   function setErrorFor(input, message)
   {
    const mother = input.parentElement;
    let small = mother.querySelector('small');
    //add the error message inside  the error class
    small.innerText= message;
    mother.className = 'form-control error';
   }

   function  setSuccessFor(userName)
   {
     const mother = input.parentElement;
     mother.className = 'form-control success';
   }
function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}