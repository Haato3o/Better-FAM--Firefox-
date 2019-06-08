// Made by Matheus

function UpdateTopBanner() {
    let topBanner = document.getElementsByTagName("table").valueOf()[0];
    topBanner.style.width = "100%";
    topBanner.style.margin = "0px auto";
    
}

function fixHardcodedShit() {
    let links = document.getElementsByTagName("a");
    for (let i in links) {
        if (links[i].href.endsWith("ficha_financeira.php")) {
            links[i].innerHTML = "Emissão de Boleto / Ficha Financeira";
            return;
        }
    }
}

function removeUglyCharFromButton() {
    let btn = document.getElementsByClassName("dados_botao_boleto");
    for (let i in btn) {
        let button = btn[i];
        if (button.value != " << " && button.value != " >> ") {
            button.value = button.value.replace("<< ", "").replace(" >>", "")
        } else {
            button.value = button.value.replace("<<", "⮜").replace(">>", "⮞")
        }
    }
    return;
}

function removeAbaImage() {
    let td = document.getElementsByTagName("td");
    for (let i in td) {
        let tData = td[i];
        try {
            if (tData.attributes.background.value == "images/abal.png") {
                tData.attributes.background.value = null;
                return;
            }
        } catch {}
        
    }
}

function RunExtension() {
    UpdateTopBanner();
    fixHardcodedShit();
    removeAbaImage();
    removeUglyCharFromButton();
}
RunExtension();