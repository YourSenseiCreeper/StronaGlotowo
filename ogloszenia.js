var naglowek = '2 NIEDZIELA WIELKIEGO POSTU - 25.02.2024 R.';
var ogloszenia = [
    'W najbliższy piątek Droga Krzyżowa na Kalwarii o 17.00, po niej Msza z nabożeństwem o uzdrowienie duszy i ciała. Bóg zapłać za przygotowanie Kaplic do nabożeństw wielkopostnych',
    'Dziś po Sumie Gorzkie Żale.',
    'W tym tygodniu wypada I piątek i I sobota miesiąca. Msze z nabożeństwami o 18.00.',
    'W następną niedzielę Msza w intencji Żywego Różańca i parafian o 8.30, po niej Adoracja Eucharystyczna, Gorzkie Żale i zmiana tajemnic.',
    'Zapraszam aby składać ofiary na kwiaty do grobu Pańskiego do skarbonki na ołtarzu Matki Bożej.ogłoszenie na prośbę',
];

function getOgloszeniaNaglowek() {
    return naglowek;
}

function getOgloszeniaContent() {
    return ogloszenia.map(v => `<li>${v}</li>`).reduce((sum, v) => sum += v);
}

function copyOgloszenia() {
    let content = `${naglowek}\n\n${ogloszenia.map((v, i) => `${i+1}. ${v}`).join('\n')}`;
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
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
}