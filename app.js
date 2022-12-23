// define buttons/elements
const result = document.getElementById('result');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');


// add event listeners 'onlick'
button3.addEventListener("click", () => {
    result.innerHTML = result.innerHTML + '3'
})
button4.addEventListener("click", () => {
    result.innerHTML = result.innerHTML + '4'
})
button1.addEventListener("click", () => {
    result.innerHTML = result.innerHTML + '1'
})
button2.addEventListener("click", () => {
    result.innerHTML = result.innerHTML + '2'
})

// on action(+ - * /) save current result to variable and clear result

// будут 3 переменные: результат 1, действие(+ -), результат2. Они будут строковые
// по клику на действия определить если результат1 не пустой if (res1 !== '') {} и если нет, 

// расписать порядок действий
// 1) по клику на цифру любую всегда писать ее в "результат"
// 2) по клину на "=" выполнять дейтсвие с двумя результатами
// 2.1) если результат1 или результат2 или действие пустые - тупо игнорим
// 2.2) вписать в результат ответ если все переменные заполнены
// 3) копнка удалить по клику откусить последний элемент из результата
// 4) копнка С очистить результат(и все переменные рез1, дейтсвие, и рез2)
// 5) копнки дейтствий ----
// 5.1) по клику на клавишу "-", при наличии содержимого в "результате", сохранить рез1 и очистить "результат". При отсутствии содержимого в "результате", ничего не делать.  



