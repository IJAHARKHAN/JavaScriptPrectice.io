// console.log('Editable Dive');

// Create a new element
let divElem = document.createElement('div');

// Create a text Node
let val = localStorage.getItem('text');
let text;
if(val == null){
 text = document.createTextNode('This is my element, click to edit it');
}else{
     text = document.createTextNode(val); 
}

// Insert text into element
divElem.appendChild(text);

// Set attribute into element
divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border:1px solid black; width:250px; margin:20px;padding:5px;');

// get element by document selectors
let container = document.querySelector('.container');
let first = document.getElementById('myFirst');
// console.log(divElem,container,first);


// Insert the element before id first
 container.insertBefore(divElem, first);

// add event in editable div
divElem.addEventListener('click', function(){
let noOfText = document.getElementsByClassName('textarea').length;
if(noOfText == 0){
// console.log(noOfText);
let html = elem.innerHTML;
divElem.innerHTML = `<textarea class="textarea" id="textarea" rows="3" style="resize: none;">${html}</textarea>`;
}
// add blur event in textarea
let textArea = document.getElementById('textarea');
textArea.addEventListener('blur', function(){
     elem.innerHTML = textArea.value;
     localStorage.setItem("text", elem.innerHTML);
});
});

