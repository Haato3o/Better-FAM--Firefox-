// Made by Matheus

let DarkMode = false;

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
    try {
        for (let i in btn) {
            let button = btn[i];
            if (button.value != " << " && button.value != " >> ") {
                button.value = button.value.replace("<< ", "").replace(" >>", "")
            } else {
                button.value = button.value.replace("<<", "⮜").replace(">>", "⮞")
            }
        }
        return;
    } catch {}
}

function removeAbaBGImage() {
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

function removeAbaImage() {
    let img = document.getElementsByTagName("img");
    try {
        for (let i in img) {
            let image = img[i];
            if (["images/abae.png", "images/abade.png", "images/abaed.png", "images/abad.png"].includes(image.src.replace("https://www.famportalacademico.com.br/fam/", ""))) {
                image.src = "";
                image.alt = "";
                image.className = ""
            }
        }
    } catch {}
}

function fixTextSpacing() {
    let fonts = document.getElementsByTagName("font");
    for (let i in fonts) {
        try {
            let f = fonts[i];
            if (i == 4) {
                f.parentElement.parentElement.style.backgroundColor = "white";
                f.style.color = "#036582";
                break;
            }
            if (i % 2) {
                f.style.fontWeight = "normal";
            } else {
                f.style.color = "#036582";
            }
            f.style.marginLeft = "25px";
        } catch {
            continue;
        }
        
    }
}

function fixThemeButtonImage(element) {
    element.src = "https://i.imgur.com/UtKLylb.png";
}

function fixCFAImage() {
    let siteImages = document.getElementsByTagName("img");
    for (let img in siteImages) {
        if (siteImages[img].src != undefined && siteImages[img].src.endsWith("uploads/bnr_0021.png")) {      
            if (DarkMode) {
                siteImages[img].src = "https://i.imgur.com/x3z8Vfw.png";
                siteImages[img].width = 700;
            } else {
                siteImages[img].src = "https://i.imgur.com/z23KQGO.png";
                siteImages[img].width = 700;
            }
        }
        else if (siteImages[img].src != undefined && siteImages[img].src.endsWith("acessibilidade_altocontraste.png")) {         
            fixThemeButtonImage(siteImages[img])
        }
    }
}

function UpdateTextColor() {
    let textColor;
    if (DarkMode) {
        textColor = "#FFFFFF";
    } else {
        textColor = "#262626";
    }
    let table = document.getElementsByTagName("span");
    for (let i = 2; i < table.length - 1; i++) {
        table[i].style.color = textColor;
    }
    table[1].style.color = "#DD2D2D";
    table[table.length - 1].style.color = "#DD2D2D";
} 

function fixFAMLogo() {
    let logo = document.getElementsByClassName("topo_logo")[0];
    logo.src = "https://i.imgur.com/SFPASn7.png";
    logo.style.width = "160px";
    logo.style.height = "60px";
    logo.style.marginLeft = "1.2%";
    logo.style.marginTop = "1.2%";
}

function RunExtension() {
    fixFAMLogo();
    UpdateTopBanner();
    fixHardcodedShit();
    removeAbaBGImage();
    fixTextSpacing();
    removeUglyCharFromButton();
    removeAbaImage();
    fixCFAImage();
    UpdateTextColor();

}
RunExtension();