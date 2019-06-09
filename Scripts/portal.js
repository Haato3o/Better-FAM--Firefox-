// Variables
let DarkMode = false;

function UpdateTopBanner() {
    // Updates the banner to remove the white borders around it
    let topBanner = document.getElementsByTagName("table").valueOf()[0];
    topBanner.style.width = "100%";
    topBanner.style.margin = "0px auto";
    
}

function fixHardcodedShit() {
    // Fixes the hardcoded line break in the side menu
    let links = document.getElementsByTagName("a");
    for (let i in links) {
        if (links[i].href.endsWith("ficha_financeira.php")) {
            links[i].innerHTML = "Emissão de Boleto / Ficha Financeira";
            return;
        }
    }
}

function removeUglyCharFromButton() {
    // Remove the << and >> from the buttons
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
    // Remove the ugly background image from the tabs
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
    // Remove the side tab border image
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
    // Fixes text left margin
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
    let icon;
    if (DarkMode) {
        icon = browser.runtime.getURL("Images/sun_icon.png");
    } else {
        icon = browser.runtime.getURL("Images/moon_icon.png");
    }
    element.src = icon;
}

function fixCFAImage() {
    // Fix the CFA alert image on the site footer
    let siteImages = document.getElementsByTagName("img");
    for (let img in siteImages) {
        if (siteImages[img].src == undefined) {
            continue;
        }
        if (siteImages[img].src.endsWith("uploads/bnr_0021.png")) {      
            if (DarkMode) {
                let CFA_DARK = browser.runtime.getURL("Images/CFA_Warning_Dark.png");
                siteImages[img].src = CFA_DARK;
                siteImages[img].width = 700;
            } else {
                let CFA_LIGHT = browser.runtime.getURL("Images/CFA_Warning_Light.png");   
                siteImages[img].src = CFA_LIGHT;
                siteImages[img].width = 700;
            }
        }
        else if (siteImages[img].src.endsWith("acessibilidade_altocontraste.png")) {    
            fixThemeButtonImage(siteImages[img])
        }
    }
}

function UpdateTextColor() {
    // Fixes the password alert on the site footer
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
    // Changes FAM logo for an image with better quality
    let logo = document.getElementsByClassName("topo_logo")[0];
    let LOGO_IMAGE = browser.runtime.getURL("Images/FAM_Logo.png");
    logo.src = LOGO_IMAGE;
    logo.style.width = "160px";
    logo.style.height = "60px";
    logo.style.marginLeft = "1.2%";
    logo.style.marginTop = "1.2%";
}

function removeTableSpacing() {
    let tables = document.getElementsByClassName("GradeNotas")[0];
    tables.parentElement.parentElement.parentElement.parentElement.cellPadding = 1;
}

function fixNotasPadding() {
    let regex = /notas.php/g;
    if (regex.exec(document.URL) != null) {
        let Notas = document.getElementsByClassName("LinhaPar");
        for (let i in Notas) {
            let Nota = Notas[i];
            if (Nota.children != undefined) {
                if (Nota.children[0] != undefined && Nota.children[0].nodeName == "TD") {
                    Nota.children[0].style.paddingLeft = 25;
                    Nota.style.backgroundColor = "transparent";
                } else if (Nota.nodeName == "TD") {
                    Nota.style.backgroundColor = "transparent";
                    Nota.style.paddingLeft = 25;
                }
            }
        }
    }
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
    removeTableSpacing();
    UpdateTextColor(); 
    fixNotasPadding();
}

RunExtension();