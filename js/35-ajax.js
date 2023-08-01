console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    xhr.open('GET', 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', true);   


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log('helloData', obj);
            let list = document.getElementById('list');
            let table = document.getElementById('table');
            str = "";
            tableStr = "";
            for (key in obj)
            {
                str += `<li>${obj[key].firstName} ${obj[key].lastName} </li>`;
                tableStr += `<tr><td>${obj[key].firstName} ${obj[key].lastName}</td><td>${obj[key].email}<td><img src="${obj[key].imageUrl}" style="
                width: 35%;"/></td></tr>`;
            }
            list.innerHTML = str;
            table.innerHTML = tableStr;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

