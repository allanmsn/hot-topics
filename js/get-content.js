let url = './partials/home.html';
let dd = document.getElementById('dynamic-data');
let btns = document.querySelectorAll('nav ul li a');

function handleAjax(urlVar) {
    fetch(urlVar)
    .then(function (rsp) { 
        return rsp.text();
    })
    .then(function (data) { 
        dd.innerHTML = data;
    });
}

handleAjax(url);

function handleClick(e){

    e.preventDefault();

    let currentClick = e.target;

   handleAjax(currentClick.href);

}

for (let btn of btns){
    btn.addEventListener("click",handleClick)
}

