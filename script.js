let input = document.querySelector('input')
let piechart = document.querySelector('.piechart')
let val = document.querySelector('p')
input.addEventListener('input', (e) => {
    piechart.style = `--percentage:${e.target.value}%`
    val.innerText = `${e.target.value}%`
})