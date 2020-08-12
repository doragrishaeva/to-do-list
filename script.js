//-когда input.value.length() > 0 и input не в focus, добавляем чек бокс
//-когда чекбокс нажат, содержимое input зачеркивается
//+когда нажимается + то клонируется input пустой 
//-если содержимое строки стирается то чек бокс убирается

// input.onblur = function() {
//     if (!input.value.includes('@')) { // не email
//       input.classList.add('invalid');
//       error.innerHTML = 'Пожалуйста, введите правильный email.'
//     }
//   };

//add new empty string 
const addNewButton = document.getElementById('add-new');
addNewButton.onclick = function() {
    let linesContainer = document.querySelector('.inputs-container');
    let input = document.getElementById('input');
    let clone = input.cloneNode(true);
    clone.value="";
    linesContainer.append(clone)
};

//add empty checkbox
const input = document.getElementById('line')
input.onchange = function(event) {
    let emptyBox = document.querySelector('.empty-box')
    //add checkbox when new task had been added in a row
    if (event.target.value.length >0) {
        emptyBox.style.display = "inline-block";
    //remove checkbox when row is empty
    } else {
        emptyBox.style.display = "none";
    }
}

//add checked symbol
const checkBox = document.getElementById('empty-box')
checkBox.onclick = function() {
    let checkedSymbol = document.getElementById('checked')
    if (checkedSymbol.style.display === 'none') {
        checkedSymbol.style.display = 'inline-block'
    } else {
        checkedSymbol.style.display = 'none'
    }
}

