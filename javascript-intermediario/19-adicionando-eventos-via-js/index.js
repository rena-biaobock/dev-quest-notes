let selectEstado = document.querySelector('select[name="estado"]');

selectEstado.addEventListener('change', function (event) {
    console.log('mudou o select')
    console.log(event.target.value)
})