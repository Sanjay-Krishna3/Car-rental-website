// OPENING LOGIN FORM
document.querySelector('#navbar #log').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
//CLOSING LOGIN FORM
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}
//OPENING REGITER FORM
document.querySelector('#navbar #reg').onclick = () =>{
    document.querySelector('.register-form-container').classList.toggle('active');
}
//CLOSING REGISTER FORM
document.querySelector('#close-register-form').onclick = () =>{
    document.querySelector('.register-form-container').classList.remove('active');
}

//VALIDATION FOR LOGIN FORM
function LOG_FORM_VALIDATION(){
    var email =
    document.forms["logform"]["Email"];
    var password =
    document.forms["logform"]["Password"];
   
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    }

        
    var paswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!paswd.test(password.value)){
        alert('Password should be between 8 to 15 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
        password.focus();
        return false;
    }
}
    
//VALIDATION FOR REGISTRATION FORM
function REG_FORM_VALIDATION(){
    var email =
    document.forms["regform"]["Email"];
    var password =
    document.forms["regform"]["Password"];
    var cpassword =
    document.forms["regform"]["Cpassword"];

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    }

    var paswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!paswd.test(password.value)){
        alert('Password should be between 8 to 15 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
        password.focus();
        return false;
    }

    if(cpassword.value != password.value){
        alert("The confirm password is not the same as password")
        cpassword.focus();
        return false;
    }
}

function isFutureDate(idate){
    var today = new Date().getTime(),
        idate = idate.split("/");

    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
    return (today - idate) < 0;
}


function isCompareDate(pdate,rdate){
    var pdate = pdate.split("/");
    var rdate = rdate.split("/");

    pdate = new Date(pdate[2], pdate[1] - 1, pdate[0]).getTime();
    rdate = new Date(rdate[2], rdate[1] - 1, rdate[0]).getTime();
    return (pdate - rdate) < 0;
}
//Date Validation
function validatedate(dateString){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
          
    // Match the date format through regular expression      
    if(dateString.match(dateformat)){      
        let operator = dateString.split('/');      
      
        // Extract the string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            pdatepart = dateString.split('/');      
        }      
        let month= parseInt(datepart[0]);      
        let day = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month==1 || month>2){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out of its range      
                return false;      
            }      
        }else if (month==2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear == false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear==true) && (day>29)){      
                return false;      
            }      
        }      
    }else{            
        return false;      
    }      
    return true;      
}   


////VALIDATION FOR LOCATION FORM
function LOC_FORM_VALIDATION(){
    var location = 
        document.forms["locform"]["Location"];
    var pdate = 
        document.forms["locform"]["Pdate"];
    var rdate =
        document.forms["locform"]["Rdate"]
        

    if (location.value==null || location.value==""){  
        alert("Name can't be blank"); 
        location.focus(); 
        return false;  
    }

    if(validatedate(pdate.value)){
    }else{
        alert("Enter a valid pick-up date"); 
        pdate.focus(); 
        return false;            
    } 

    if(isFutureDate(pdate.value)){
    } else {
        alert("Enter a valid pick-up date"); 
        pdate.focus(); 
        return false;
    }


    if(isCompareDate(pdate.value,rdate.value)){
    } else {
        alert("Enter a valid return date"); 
        pdate.focus(); 
        return false;
    }

    if(validatedate(rdate.value)){
    }else{
        alert("Enter a valid return date"); 
        pdate.focus(); 
        return false;            
    }
}

//VALIDATION FOR CONTACT FORM

function CON_FORM_VALIDATION(){
    var name = 
        document.forms["conform"]["Name"];
    var email = 
        document.forms["conform"]["Email"];
    var phone =
        document.forms["conform"]["Number"]
    var msg =
        document.forms["conform"]["Message"]
    

    if (name.value==null || name.value==""){  
        alert("Name can't be blank"); 
        name.focus(); 
        return false;  
    }

    if(!isNaN(name.value)){
        alert("Name Should Only Contain Characters");
        name.focus();
        return false;
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    }


    var phoneno = /^\d{10}$/;
    if(!phoneno.test(phone.value)){
        alert("Enter a valid Phone number")
        phone.focus();
        return false;
    }

    if (msg.value==null || msg.value==""){  
        alert("Message can't be blank"); 
        msg.focus(); 
        return false;  
  }
}
//Scroll Revel
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.location-form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container ',{delay:600,origin:'top'})
sr.reveal('.reviws-container .box',{delay:600,origin:'top'})
sr.reveal('.row',{delay:600,origin:'bottom'})

