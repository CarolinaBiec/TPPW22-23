var btnAdmin = document.querySelector("#btnAdmin")
var btnBasic = document.querySelector("#btnBasic")
var btnGuest = document.querySelector("#btnGuest")

const sezioneUtenti = document.querySelector("#sezioneUtenti");

btnAdmin.addEventListener('click', function(){

    sezioneUtenti.innerHTML = "";
    fetch("http://localhost:3000/users?role=Admin")
    .then(data =>{return data.json()})
    .then(response =>{
        response.forEach(user => {
            
            sezioneUtenti.innerHTML += `<li>  ${user.nome} - ${user.id} - ${user.role} </li>`
        });
        console.log(response);
    });
    
})


btnBasic.addEventListener('click', function(){

    sezioneUtenti.innerHTML = "";

fetch("http://localhost:3000/users?role=UserBasic")
.then(data =>{return data.json()})
.then(response =>{
    response.forEach(user => {
        
        sezioneUtenti.innerHTML += `<li> ${user.nome} - ${user.id} - ${user.role} </li>`
    });
    console.log(response);
})
});


btnGuest.addEventListener('click', function(){
    sezioneUtenti.innerHTML = "";

fetch("http://localhost:3000/users?role=Guest")
.then(data =>{return data.json()})
.then(response =>{
    response.forEach(user => {
        
        sezioneUtenti.innerHTML += `<li>  ${user.nome} - ${user.id} - ${user.role}  </li>`
    });
    console.log(response);
})
});