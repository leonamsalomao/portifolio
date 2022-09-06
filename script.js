/* Menu */
/* 
const svgs = document.querySelectorAll('svg')

function reset() {
  for (let svg of svgs) {
    svg.classList.remove('active')
  }
}

for (let svg of svgs) {
  svg.addEventListener('click', function () {
    reset()
    svg.classList.add('active')
  })
} */

/* Buttons */


var acc = document.getElementsByClassName('skill')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.skill('active')

    var showMe = this.nextElementSibling
    if (showMe.style.display === 'flex') {
      showMe.style.display = 'none'
    } else {
      showMe.style.display = 'flex'
    }
  })
}


