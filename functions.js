class Plakat {
    constructor(tytul, sciezkaDoPliku) {
        this.tytul = tytul;
        this.sciezkaDoPliku = sciezkaDoPliku;
    }
}

function getPlakatyContent() {
    // <a href="./obrazki/plakaty/Glotowo 2024.jpg" target="_blank"><img src="./obrazki/plakaty/Glotowo 2024.jpg" alt="Głotowo 2024"></a>
    // <a href="./obrazki/plakaty/Wielki post 2024.jpg" target="_blank"><img src="./obrazki/plakaty/Wielki post 2024.jpg" alt="Wielki Post 2024 w Głotowie"></a>
    let szerokoscTag = szerokosc != null ? `style="width: ${szerokosc}"` : '';
    let content = plakaty.map(v => `<a href="${v.sciezkaDoPliku}" target="_blank"><img src="${v.sciezkaDoPliku}" alt="${v.tytul}" ${szerokoscTag}></a>`).join('');
    return content;
}

class Aktualnosc {
    constructor(data, tytul, wiersze) {
        this.data = data;
        this.tytul = tytul;
        this.wiersze = wiersze;
    }
}

function getAktualnosciNaglowek() {
    return aktualnosciNaglowek;
}

function getAktualnosciContent() {
    // <p>
    //     <B><span id="aktualnosci-header"></span></b>
    // </p>
    // <p class="aktualnosci-header">
    //     <b>PIĄTKI WIELKIEGO POSTU 2024 - <span class="aktualnosc-title">GODZINY MIŁOSIERDZIA BOŻEGO</span></b>
    // </p>
    // <p class="aktualnosc-content">
    //     17.00 - DROGA KRZYŻOWA NA KALWARII WARMIŃSKIEJ, <br>
    //     18.00 - MSZA ŚW Z MODLITWĄ O UZDROWIENIE DUSZY I CIAŁA.
    // </p>
    let content = aktualnosci.map(v => {
        let aktualnoscHeader = `<p class="aktualnosci-header"><b>${v.data} - <span class="aktualnosc-title">${v.tytul}</span></b></p>`;
        let aktualnoscContent = `<p class="aktualnosc-content">${v.wiersze.join('<br>')}</p>`;
        return aktualnoscHeader + aktualnoscContent;
    }).join('');
    let header = `<p style="text-align: center"><B>${aktualnosciNaglowek}</b></p>`
    return header + content;
}

function getOgloszeniaNaglowek() {
    return ogloszeniaNaglowek;
}

function getOgloszeniaContent() {
    return ogloszenia.map(v => `<li>${v}</li>`).reduce((sum, v) => sum += v);
}

function copyOgloszenia() {
    let content = `${ogloszeniaNaglowek}\n\n${ogloszenia.map((v, i) => `${i+1}. ${v}`).join('\n')}`;
    unsecuredCopyToClipboard(content);
}

// workaround
function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      alert('Ogłoszenia skopiowane do schowka');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
}

class Rekolekcje {
    constructor(data, tytul) {
        this.data = data;
        this.tytul = tytul;
    }
}

function getRekolekcjeNaglowek() {
    return rekolekcjeNaglowek;
}

function getRekolekcjeContent() {
    // <p>
    //     <B><span id="aktualnosci-header"></span></b>
    // </p>
    // <p class="aktualnosci-header">
    //     <b>21-23.03.2024 r. - <span class="aktualnosc-title">REKOLEKCJE WIELKOPOSTNE W GŁOTOWIE. MSZE Z NAUKAMI O 11.00 I 18.00.</span></b>
    // </p>
    let zgloszeniaHtml = `<p class="rekolekcje-entry">${zgloszenia}</p>`;
    let content = rekolekcje.map(v => `<p class="rekolekcje-entry">${v.data} - <span class="rekolekcje-title">${v.tytul}</span></p>`).join('');
    let header = `<p class="rekolekcje-header"><b>${rekolekcjeNaglowek}</b></p>`
    return header + content + zgloszeniaHtml;
}