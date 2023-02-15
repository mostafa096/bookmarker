var bmName = document.getElementById("bname");
var bmUrl = document.getElementById("burl");
var submit = document.getElementById("submit");
var tbody = document.getElementById("tbody");
var deleteBtn = document.getElementById("del");
console.log(deleteBtn);

var mainArr = [];

// to load data from localstorage

if (localStorage.getItem("data")) {
  mainArr = JSON.parse(localStorage.getItem("data"));
  display();
}

function add() {
  mainArr.push({
    name: bmName.value,
    url: bmUrl.value,
  });
}

function display() {
  var container = ``;
  mainArr.forEach(function (e, i) {
    container += `
        <tr class=" fs-5 border-dark ">
        <td>${e.name}</td>
        <td><a class="btn btn-secondary" href="${e.url}" target="_blank">Visit </a></td>
  <td><button class="btn btn-danger" onclick="deletebtn(${i})" >Delete</button></td></tr>
        `;
  });
  tbody.innerHTML = container;
}
function clearForm() {
  bmName.value = "";
  bmUrl.value = "";
}
function deletebtn(index) {
  mainArr.splice(index, 1);
  display();
  localStorage.setItem("data", JSON.stringify(mainArr));
}

submit.addEventListener("click", function (e) {
  e.preventDefault();

  add();
  display();
  localStorage.setItem("data", JSON.stringify(mainArr));
  clearForm();
});


var x = /(https)?:\/\/[^\s\/$.?#].[^\s]*/;