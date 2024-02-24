class Aktualnosc {
    constructor(data, tytul, wiersze) {
        this.data = data;
        this.tytul = tytul;
        this.wiersze = wiersze;
    }
}

var naglowek = 'AKTUALNOŚCI 2024 R.';
var aktualnosci = [
    new Aktualnosc('PIĄTKI WIELKIEGO POSTU 2024', 'GODZINY MIŁOSIERDZIA BOŻEGO',
    [
        '17.00 - DROGA KRZYŻOWA NA KALWARII WARMIŃSKIEJ,',
        '18.00 - MSZA ŚW Z MODLITWĄ O UZDROWIENIE DUSZY I CIAŁA.'
    ]),
    new Aktualnosc('21-23.03.2024', 'REKOLEKCJE WIELKOPOSTNE',
    [
        '- 11.00 - Msza Św. z nauką rekolekcyjną.',
        '- 18.00 - Msza Św. z nauką rekolekcyjną.'
    ]),
    new Aktualnosc('28-31.03.2024', 'Triduum Paschalne w Głotowie',
    [
        'To rekolekcje dla dorosłych pogłębiające przeżycie Świętych Dni przez dodatkowe katechezy, spotkania w grupach, nabożeństwa i modlitwy.',
        'Początek w Wielki Czwartek o godz. 16.00.',
        'Zakończenie w Niedzielę Wielkanocną po Rezurekcjach.'
    ]),
    new Aktualnosc('18.05.2024', '130 ROCZNICA POŚWIĘCENIA KALWARII WARMIŃSKIEJ I PIELGRZYMKA SOLIDARNOŚCI W HOŁDZIE śW. JANOWI PAWŁOWI II.',
    [
        '- 11.00 - Uroczysta Msza Święta',
        '- 12.00 - Droga Krzyżowa'
    ]),
    new Aktualnosc('2.06.2024', 'Odpust diecezjalny w Głotowie.',
    [
		'- 8.30 - Msza Św. z kazaniem',
        '- 10.00 - Droga Krzyżowa',
        '- 11.00 - Adoracja Najświętszego Sakramentu',
        '- 12.00 - Suma odpustowa'
    ]),
    new Aktualnosc('15.09.2024', 'Odpust diecezjalny w Głotowie',
    [
        '- 8.30 - Msza Św. z kazaniem',
        '- 10.00 - Droga Krzyżowa',
        '- 11.00 - Adoracja Najświętszego Sakramentu',
        '- 12.00 - Suma odpustowa'
    ]),
    new Aktualnosc('22.09.2024', 'Dożynki parafialne - Msza Św. o 11.00.', []),
    new Aktualnosc('21.12.2024', 'ADWENTOWY DZIEŃ REKOLEKCYJNY.',
    [
        '- Okazja do spowiedzi w czasie Mszy Świętych.',
        '- 11.00 - Msza Św. i nauka rekolekcyjna.',
        '- 18.00 - Msza Św. i nauka rekolekcyjna.'
    ]),
];

function getAktualnosciNaglowek() {
    return naglowek;
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
    let header = `<p style="text-align: center"><B>${naglowek}</b></p>`
    return header + content;
}