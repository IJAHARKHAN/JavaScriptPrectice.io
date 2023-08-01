// console.log('Ajax Tutorials in one video');


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
console.log('You have click the buttonClickHandler');

// instantiate an xhr object
let xhr = new XMLHttpRequest();



// POST Request
 xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
 xhr.getResponseHeader("Content-Type", "application/json");


// what to do on progress
xhr.onprogress = function(){
    console.log('work is progress!');
}

// what to do on load
xhr.onload = function(){
    if(this.status === 200){
console.log(this.responseText);
}
else{
    console.log('Some Error Occured!');
}
}


// POST Request
 parmas = `{"name":"test","salary":"123","age":"23"}`
 xhr.send(parmas);

}


///// populate list

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popClickHandler);

function popClickHandler(){
console.log('You have click the popClickHandler');

// instantiate an xhr object
let xhr = new XMLHttpRequest();

// open the object
// xhr.open('GET', 'moon.txt', true);
xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

// what to do on progress
xhr.onprogress = function(){
    console.log('work is progress!');
}

// what to do on load
xhr.onload = function () {
    if(this.status === 200){
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let fetchList = document.getElementById('list');
        str = "";
        for (key in obj)
        {
            str += `<li>${obj[key].employee_salary} </li>`;
        }
        fetchList.innerHTML = str;
    }
    else{
        console.log("Some error occured")
    }
}


// Get Request 
 xhr.send();

}