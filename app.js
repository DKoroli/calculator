const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const nashdiv = document.getElementById('nashdiv');

button3.addEventListener("click", () => {
        nashdiv.innerHTML = '3' + nashdiv.innerHTML
})
button4.addEventListener("click", () => {
    nashdiv.innerHTML = button4.innerHTML + nashdiv.innerHTML
})