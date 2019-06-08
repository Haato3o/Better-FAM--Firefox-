let DarkMode = false;

// Check if site is in dark mode
function DarkModeCheck() {
    let Regex = /style=C/g;
    DarkMode = Regex.exec(document.URL) != null;
}

// Gets top banner and changes its properties
function UpdateTopBanner() {
    let topBanner = document.getElementsByTagName("table").valueOf()[0];
    topBanner.style.width = "100%";
    topBanner.style.margin = "0px auto";
    
}

function UpdateMarginDarkMode() {
    let table = document.getElementsByClassName("fundo_meio")[0];
    table.style.margin = "0px auto";
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
    element.src = "https://i.imgur.com/UtKLylb.png";
}

function fixCFAImageDark() {
    let siteImages = document.getElementsByTagName("img");

    for (let img in siteImages) {
        if (siteImages[img].src.endsWith("uploads/bnr_0021.png")) {      
            if (DarkMode) {
                siteImages[img].src = "https://i.imgur.com/x3z8Vfw.png";
                siteImages[img].width = 700;
            } else {
                siteImages[img].src = "https://i.imgur.com/z23KQGO.png";
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
    logo.src = "https://i.imgur.com/SFPASn7.png";
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
