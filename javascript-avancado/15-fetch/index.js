document.getElementById('btn-tirar-carta').addEventListener('click', () => {
    tirarUmaCartaDobaralho()
})

async function criarBaralhoEmbaralhado () {
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const response = await fetch(url)
    return await response.json()
}

async function tirarUmaCarta (deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url)
    return await response.json()
}

async function tirarUmaCartaDobaralho () {
    const deck = await criarBaralhoEmbaralhado()
    const cards = await tirarUmaCarta(deck.deck_id)
    const card = cards.cards[0]

    console.log(card)

    const cardImgLink = card.image

    const cardImg = document.getElementById('card')
    cardImg.src = cardImgLink
}

tirarUmaCartaDobaralho()