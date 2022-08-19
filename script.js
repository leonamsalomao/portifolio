/* Menu */

const svgs = document.querySelectorAll('svg')

  function reset(){
    for (let svg of svgs) {
      svg.classList.remove('active')
      }
  }

for (let svg of svgs) {
  svg.addEventListener('click', function () {
    reset()
    svg.classList.add('active')
  })
}

/* Toggle */

var acc = document.getElementsByClassName('toggle')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('active')

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}

