showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addTxt');
    // console.log(addText.value);
    let notes = localStorage.getItem("notesBlocks");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notesBlocks", JSON.stringify(notesObj));
    addText.value = "";
    // console.log(notesObj);
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notesBlocks");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard card my-1 mx-1" style="width: 16rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteBlock(this.id);" class="btn btn-primary">Delete Note</button>
    </div>
    </div>`;
    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `<h3>Here are no any Notes</h3`;
    }

}

// Function to Delete a note

function deleteBlock(index) {
    // console.log("this will delete", index);
    let notes = localStorage.getItem("notesBlocks");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notesBlocks", JSON.stringify(notesObj));
    showNotes();
}


// Search cards by Input Search

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputVal = search.value;
    // console.log('Fired' , search.value);
    let noteCards = document.getElementsByClassName('noteCard');
    
   Array.from(noteCards).forEach(function(element){
       let cardTxt = element.getElementsByTagName('p')[0].innerText;
    // console.log(cardTxt);
    if(cardTxt.includes(inputVal)){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }

    });
    

});