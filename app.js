// if user add a note , save it to local storage
showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", (e) => {


    let addTxt = document.getElementById('addText');
    let addTitle = document.getElementById('addTitle');


    let notes = localStorage.getItem("notes");
    // let tr  = localStorage.getItem("ramiz");

    // if(tr == null){
    //     robj = [];
    // }else{
    //     robj = JSON.parse(tr);
    // }
    // robj.push(addTxt.value);
    // localStorage.setItem("ramiz", JSON.stringify(robj));
    // addTxt.value="";
    // ----------------------------------------------
    if (notes == null) {
        notesObj = [];

    } else {

        notesObj = JSON.parse(notes);
    }

    let myObj = {
        titile: addTitle.value,
        text: addTxt.value

    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {

        html += `
        <div class="noteCard" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">${element.titile}</h5>
          <p class="card-text">${element.text}.</p>
          <a id=${index} onclick="deleteNotes(this.id)" class="btn btn-primary">Delete</a>
        </div>
      </div>
        `
    });


    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `Nothing to show , Add your first Note`;

    }
}

// Delete Note 

function deleteNotes(index) {
    console.log("im deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}

let search = document.getElementById('searchTxt');
search.addEventListener('input', () => {

    let inputVal = search.value;
    // console.log('input event fired',inputVal);

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {

        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }

    })

})