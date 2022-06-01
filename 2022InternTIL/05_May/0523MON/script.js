// const body = document.body
// body.append('Hello World~!')

// const div = document.createElement("div")
// div.innerText = "I'm sleepy"
// div.textContent = "I wanna go home"
// body.append(div)

const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye');

spanBye.remove()
console.log(spanHi.getAttribute('id'))