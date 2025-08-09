const questions = document.querySelectorAll('.question')

function cleanClicked() {
    let clickedQuestion = document.querySelector('.question.clicked');
    if (clickedQuestion) {
        clickedQuestion.classList.remove('clicked')
    };
};

function borderWhenAllHide() {
    let clicked = document.querySelectorAll('.clicked')
    if (clicked.length == 0) {
        questions.forEach(question => {
            question.classList.add('borders')
        });
    } else {
        questions.forEach(question => {
            question.classList.remove('borders')
        });
    }
}

questions.forEach(question => {
    question.addEventListener('click', () => {
        if (question.classList.contains('clicked')) {
            question.classList.remove('clicked')
        } else {
            cleanClicked()
            question.classList.add('clicked')
        }
        borderWhenAllHide()
    });
});