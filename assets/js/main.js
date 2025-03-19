const filterOpen = document.querySelector('.filter')
const filterModal = document.querySelector('.filter-modal')
const filterClose = document.querySelector('.close-modal')

filterOpen.addEventListener('click', function (){
    filterModal.classList.add('active')
})

filterClose.addEventListener('click', function (){
    filterModal.classList.remove('active')
})

window.addEventListener("click", function(event) {
    if (!filterModal.contains(event.target) && event.target !== filterOpen) {
        filterModal.classList.remove("active");
    }
});