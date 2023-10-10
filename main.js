const outerListItems = document.querySelectorAll('#outer-ul>li')
const innerLists = document.querySelectorAll('.inner-ul')
const main = document.querySelector('main')

outerListItems.forEach( li => li.addEventListener('mouseover', e => {
    e.currentTarget.children.item(0).nextElementSibling.classList.add('active')
    e.currentTarget.children.item(0).style.display = 'none'
}))

innerLists.forEach( ul => ul.addEventListener('mouseleave', e => {
    // console.log(e.currentTarget.classList.value);
    e.currentTarget.classList.remove('active')
    e.currentTarget.previousElementSibling.style.display = 'block'
}))

main.addEventListener('click', e => {
    innerLists.forEach( ul => { 
        ul.classList.remove('active')
        ul.previousElementSibling.style.display = 'block'
    })
} )
