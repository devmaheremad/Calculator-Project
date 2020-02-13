let clearAll = document.getElementById('clearall');
let clearlastOne = document.getElementById('clear');
let finalRes = document.getElementById('res-text');
let equal = document.getElementById('equal');
let numbersBtn = document.querySelectorAll('.container #buttons button[value]');
let operatorBtn = document.querySelectorAll('.container #buttons button[class="operator"]');
let equalBtn = document.getElementById('equal');

// Function That Clear All
clearAll.onclick = function getClearedAll() {

    finalRes.textContent = '';

};

// Function That Clear Just One From The last
clearlastOne.onclick = function getClearedOneFromLast() {

    finalRes.textContent = finalRes.textContent.slice(0, document.getElementById('res-text').textContent.length - 1);

};

//That For Put Numbers In The Field
numbersBtn.forEach(item => {

    item.onclick = function getNumber() {
        finalRes.textContent += this.textContent;
    };
});

//That For Put Operators In The Field
operatorBtn.forEach(item => {

    item.onclick = function getOperator() {
        finalRes.textContent += this.textContent;
    };

});

equalBtn.onclick = function getResult() {

    finalRes.textContent = eval(finalRes.textContent);

};