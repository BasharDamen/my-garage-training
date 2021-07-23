'use strict';

Cars.globalArray = [];

function Cars(name, model, year, path){
    this.name = name
    this.model = model;
    this.year = year;
    this.path = path;

    Cars.globalArray.push(this);
}

// function question2() {
//     let x = "*"
//     for (let i = 0; i < 5; i++) {
//         console.log(x);
//         x = x + "*";
//     }
    
// }
// question2();

// new Cars('BMW', 'imgs/bmw.png');
// new Cars('Lexus', 'imgs/lexus.png');
// new Cars('Toyota', 'imgs/toyota.png');
// new Cars('Tesla', 'imgs/tesla.png');
// new Cars('Chevrolet', 'imgs/chevrolet.png');
// new Cars('Hyundai', 'imgs/hyundai.png');
// new Cars('Kia', 'imgs/hyundai.png');

console.log(Cars.globalArray);

let myCarsForm = document.getElementById('itemsForm');
// let nameInput = document.getElementById('carName');
// let modelSelect = document.getElementById('carModel');
// let addBtn = document.getElementById('addItem')
// ................................





myCarsForm.addEventListener('submit', handleClick);







function handleClick(event) {
    event.preventDefault();

    console.log(event);
    
        
    let nameField = event.target.carName.value;
    console.log(nameField);

    let modelField = event.target.carModel.value;
    console.log(modelField);


    let yearField = event.target.modelYear.value;
    console.log(yearField);

    let newCar = new Cars(nameField, modelField, yearField, `imgs/${modelField}.png` );

    console.log(newCar);
    
    renderList();
    saveToLocal();
    // Cars.globalArray = [];
    console.log(Cars.globalArray);
}




let carsDiv = document.getElementById('myCars');


function renderList(){
    let ul = document.createElement('ul')
    carsDiv.appendChild(ul)
    for (let i = 0; i < Cars.globalArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        
        let img = document.createElement('img');
        img.src = Cars.globalArray[i].path
        li.appendChild(img);
        
        let info = document.createElement('p');
        li.appendChild(info);
        info.textContent = `${Cars.globalArray[i].name} - ${Cars.globalArray[i].model} - ${Cars.globalArray[i].year}`
    }
    // myCarsForm.removeEventListener('submit', handleClick)

}

function saveToLocal() {
    localStorage.setItem('Cars',JSON.stringify( Cars.globalArray))
    
}

function getFromLocal() {
    let ConvertedData= JSON.parse(localStorage.getItem('Cars'))
    if(ConvertedData!==null){
        Cars.globalArray=ConvertedData
        renderList();
    }
}
getFromLocal();
