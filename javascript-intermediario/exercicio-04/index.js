const input = document.querySelectorAll('.input-text')


input.forEach(element => {
    element.addEventListener('change', () =>{
        if (element.value !== '') {
            element.classList.add('filled')
        } else {
            element.classList.remove('filled')
        }
    });
});