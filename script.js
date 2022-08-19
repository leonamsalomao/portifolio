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
