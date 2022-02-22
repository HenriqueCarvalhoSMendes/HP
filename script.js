window.addEventListener("load", function loading(){
    document.getElementsByClassName('box')[0].style.display="none"
    document.getElementsByClassName('content')[0].style.display="block"
})

function openPage(x, y){
    var indice = x
    var target = y
    var url = 'page'+indice+'.html'

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == 200){
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
   
}


