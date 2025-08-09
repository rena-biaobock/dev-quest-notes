const arrows = document.querySelectorAll('.arrow')
const main = document.querySelector('main')
const imgTitle = document.querySelector('.img-description h2')
const imgDescription = document.querySelector('.img-description p')
const imgKnowMore = document.querySelector('#know-more')
const rightArrow = document.querySelector('.arrow.right')
const leftArrow = document.querySelector('.arrow.left')

const imgs = {
    imgURL: ["url('src/images/imagem_1.png'", "url('src/images/imagem_2.png'", "url('src/images/imagem_3.png'", "url('src/images/imagem_4.png'"],
    imgTitle: ["Título imagem 1", "Título imagem 2", "Título imagem 3", "Título imagem 4"],
    imgDescription: [
    'Lorem 1 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt reiciendis, suscipit ut, repellendus dolorem quaerat omnis in sed, debitis ab esse voluptatem ratione cumque excepturi modi aspernatur? Delectus, molestiae dolore!',
    'Lorem 2 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt reiciendis, suscipit ut, repellendus dolorem quaerat omnis in sed, debitis ab esse voluptatem ratione cumque excepturi modi aspernatur? Delectus, molestiae dolore!',
    'Lorem 3 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt reiciendis, suscipit ut, repellendus dolorem quaerat omnis in sed, debitis ab esse voluptatem ratione cumque excepturi modi aspernatur? Delectus, molestiae dolore!',
    'Lorem 4 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt reiciendis, suscipit ut, repellendus dolorem quaerat omnis in sed, debitis ab esse voluptatem ratione cumque excepturi modi aspernatur? Delectus, molestiae dolore!',
    ],
    imgLinkColor: ["#C50000", "#D9DD10", "#A63A17", "#10ACDD"]
}

function changeImg (imgIndex) {
    main.style.backgroundImage = imgs.imgURL[imgIndex];
    imgTitle.innerHTML = imgs.imgTitle[imgIndex];
    imgDescription.innerHTML = imgs.imgDescription[imgIndex]
    imgKnowMore.style.color = imgs.imgLinkColor[imgIndex]

    if (imgIndex == imgs.imgURL.length - 1) {
        rightArrow.classList.add('no-item');
        leftArrow.classList.remove('no-item');
    } else if (imgIndex == 0) {
        rightArrow.classList.remove('no-item');
        leftArrow.classList.add('no-item');
    } else {
        rightArrow.classList.remove('no-item');
        leftArrow.classList.remove('no-item');
    }
}

let imgIndex = 0

arrows.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('left')) {
            if (imgIndex > 0) {
                imgIndex--
            }
        } else if (element.classList.contains('right')) {
            if (imgIndex < imgs.imgURL.length - 1) {
                imgIndex++
            }
        }
    
    changeImg(imgIndex)
    });
});