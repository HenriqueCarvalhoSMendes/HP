window.addEventListener("load", function loading(){
    document.getElementsByClassName('box')[0].style.display="none"
    document.getElementsByClassName('content')[0].style.display="block"
})

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createCard(char){
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const img = document.createElement("img")
    img.src = `${char.image}`
    h1.innerHTML = char.name
    h2.innerHTML = char.house
    
    div.classList.add(`card`)
    div.classList.add(`${char.house}`)
    div.classList.add(`houses`)
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h2)

    return div
}

function main(){
    let data = fazGet("http://hp-api.herokuapp.com/api/characters/students")
    let char = JSON.parse(data)
    let conteudo =  document.getElementById('container')
    char.forEach(element => {
        let card = createCard(element)
        conteudo.appendChild(card)
    });

    
}

main()



