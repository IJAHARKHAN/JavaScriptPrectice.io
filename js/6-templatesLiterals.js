const name1 = "Mohsin Khan";
let name2 = "Israr Khan";

let temPlate = `<h1>My Company owner is <span style="color:red;">"${name1}"</span></h1>
                 <p>My Department Boss is ${name2}</p>
                 <div>And our team strenght are alomost 40 members.</di>`;

document.body.innerHTML = temPlate;

let a = window;
// let a = window.document;
// a = alert("mmon khan");
// a = prompt();
// a = confirm();

console.log(a);