setTimeout(() => {
    alert('Hello World!')
}, 3000);

setInterval(() => {
    console.log('Executando a cada 4 segundos.')
}, 4000);

let idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos.')
                    }, 2000)

clearInterval(idDoIntervalo)