
function showDetailAction () {
    const imgMain = document.querySelector('.sanphamlon-img')
    const imgExtra = document.querySelectorAll('.sanphamnho-img-item')
    
    imgExtra.forEach((item) => {
        item.onclick = () => {
            if (imgMain && item) {
                imgMain.src = item.src
            }
        }
    })
}


