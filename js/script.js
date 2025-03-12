
let submit = document.getElementById('check');
submit.addEventListener('click',(e)=>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let answer = document.getElementById('answer');
    let NameRegex =/^[a-zA-Z0-9]/;
let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
answer.innerHTML="";
    if(!NameRegex.test(name)){
        answer.classList.add("fail")

answer.innerHTML += `<p> the name not include special characters</p>`
    }
   else if(String(name).length<3||String(name).length>10){
    answer.classList.add("fail")
   
    answer.innerHTML += `<p> the name need to be between 3 to 10 characters</p>`

    }
    if(!EmailRegex.test(email)){
        answer.classList.add("fail")

answer.innerHTML += `<p> Email: Must follow standard email format</p>`
    }
    if(String(phone).length!==10){
        answer.classList.add("fail")

answer.innerHTML += `<p> Phone: Exactly 10 digits</p>`
    }

    else{
        answer.classList.add("success")
        answer.innerHTML += `<p>Form submitted successfully</p>`
    }


    
e.preventDefault();
}
)