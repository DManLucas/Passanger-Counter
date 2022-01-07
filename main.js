let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0
//increment button
function increment() {
  count += 1
  countEl.innerText = count
}

function save() {
  let show = ' ' + count + ' - '
  saveEl.textContent += show
  count = 0
  countEl.textContent = count
}
