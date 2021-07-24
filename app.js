'use strict';
Cars.globalArray = [];

function Cars(name, model, year, image) {
    
    this.name = name;
    this.model = model;
    this.year = year;
    this.image = image;

    Cars.globalArray.push(this);

}



let parentDiv = document.getElementById('myCars')

Cars.prototype.renderTable = function(){
    let table = document.createElement('table');
    parentDiv.appendChild(table);
    
    let carRow = document.createElement('tr');
    table.appendChild(carRow);

    let td1 = document.createElement('td');
    carRow.appendChild(td1);

    let img = document.createElement('img');
    img.src = this.image;
    td1.appendChild(img);

    let td2 = document.createElement('td');
    carRow.appendChild(td2);
    td2.textContent = this.name;

    let td3 = document.createElement('td');
    carRow.appendChild(td3);
    td3.textContent = this.model;
    
    let td4 = document.createElement('td');
    carRow.appendChild(td4);
    td3.textContent = this.year;  
    


}


let removeBtn;
function rendering(){
    let table = document.createElement('table');
    parentDiv.appendChild(table);
    
    for (let i = 0; i < Cars.globalArray.length; i++) {
        
        
        let carRow = document.createElement('tr');
        table.appendChild(carRow);
    
        let td1 = document.createElement('td');
        carRow.appendChild(td1);
    
        let img = document.createElement('img');
        img.src = `imgs/${Cars.globalArray[i].model}.png`;
        td1.appendChild(img);
    
        let td2 = document.createElement('td');
        carRow.appendChild(td2);
        td2.textContent = Cars.globalArray[i].name;
    
        let td3 = document.createElement('td');
        carRow.appendChild(td3);
        td3.textContent = Cars.globalArray[i].model;
        
        let td4 = document.createElement('td');
        carRow.appendChild(td4);
        td3.textContent = Cars.globalArray[i].year;

        removeBtn = document.createElement('input');
        removeBtn.type = 'button';
        removeBtn.value = 'Remove Item';
        carRow.appendChild(removeBtn);
        removeBtn.addEventListener('click', handleRemove);

        function handleRemove(event, i){
            
            Cars.globalArray.splice(i, 1);
            location.reload();
            saveToLocal();
        }
    }

}




// adding event
let myCarForm = document.getElementById('itemsForm')

myCarForm.addEventListener('submit', handleClick);
let myNewCar;
function handleClick(event){
    // event.preventDefault();

    let carName = event.target.carName.value;

    let carModel = event.target.carModel.value;

    let modelYear = event.target.modelYear.value

    new Cars(carName, carModel, modelYear, `imgs/${carModel}.png`);
    saveToLocal();
    // rendering();
    console.log(Cars.globalArray);
    
    
}


// clear event

let clearbtn = document.getElementById('clear');
clearbtn.addEventListener('click', handleClear);

function handleClear(){

    if (confirm('Are you sure you want to delete all items?')) {
        localStorage.clear();
        location.reload();
        
    }else{
        return;
    }
}


// set and get items
function saveToLocal(){
    localStorage.setItem('Cars', JSON.stringify(Cars.globalArray))
}

function getFromLocal(){
    let convertedData = JSON.parse(localStorage.getItem('Cars'))

    if (convertedData !== null) {
        Cars.globalArray = convertedData;
        
        rendering(); 
    }
    
}

getFromLocal();
console.log(Cars.globalArray);

