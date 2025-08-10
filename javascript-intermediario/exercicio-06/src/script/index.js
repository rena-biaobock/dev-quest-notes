const questions = document.querySelectorAll('.question')

function cleanClicked() {
    let clickedQuestion = document.querySelector('.question.clicked');
    if (clickedQuestion) {
        clickedQuestion.classList.remove('clicked')
    };
};

questions.forEach(question => {
    question.addEventListener('click', () => {
        if (question.classList.contains('clicked')) {
            question.classList.remove('clicked')
        } else {
            cleanClicked()
            question.classList.add('clicked')
        }
    });
});