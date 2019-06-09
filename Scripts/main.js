// Variables
let DarkMode = false;


function DarkModeCheck() {
    // Check if site is in dark mode
    let Regex = /style=C/g;
    DarkMode = Regex.exec(document.URL) != null;
}


function UpdateTopBanner() {
    // Gets top banner and changes its properties
    let topBanner = document.getElementsByTagName("table").valueOf()[0];
    topBanner.style.width = "100%";
    topBanner.style.margin = "0px auto";
    
}

function UpdateMarginDarkMode() {
    // I forgot what this function does, but it might fix something LUL
    let table = document.getElementsByClassName("fundo_meio")[0];
    table.style.margin = "0px auto";
}

function UpdateTextColor() {
    // Update text color in the site footer
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

function fixThemeButton() {
    let linkElements = document.getElementsByTagName("a");
    let Regex = /style=C/g;
    if (DarkMode) {
        for (let element in linkElements) {
            if (Regex.exec(linkElements[element].href) != null) {
                linkElements[element].href = "index.php";
            }
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

function fixCFAImageDark() {
    let siteImages = document.getElementsByTagName("img");
    for (let img in siteImages) {
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

function fixFAMLogo() {
    let logo = document.getElementsByClassName("topo_logo")[0];
    let LOGO_IMAGE = browser.runtime.getURL("Images/FAM_Logo.png");
    logo.src = LOGO_IMAGE;
    logo.style.width = "160px";
    logo.style.height = "60px";
    logo.style.marginLeft = "1.2%";
    logo.style.marginTop = "1.2%";
}

function RunExtension() {
    fixFAMLogo();
    DarkModeCheck();
    UpdateTopBanner();
    fixThemeButton();
    // Dark mode shit
    UpdateMarginDarkMode();
    UpdateTextColor();
    fixCFAImageDark();
}

RunExtension();
