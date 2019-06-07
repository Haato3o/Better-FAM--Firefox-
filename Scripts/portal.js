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

function RunExtension() {
    UpdateTopBanner();
    fixHardcodedShit();
}
RunExtension();