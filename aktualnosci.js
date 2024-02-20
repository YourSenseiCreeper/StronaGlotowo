class Aktualnosc {
    constructor(data, tytul, wiersze) {
        this.data = data;
        this.tytul = tytul;
        this.wiersze = wiersze;
    }
}

var naglowek = 'AKTUALNO¦CI 2024 R.';
var aktualnosci = [
    new Aktualnosc('PI¡TKI WIELKIEGO POSTU 2024', 'GODZINY MI£OSIERDZIA BO¯EGO',
    [
        '17.00 - DROGA KRZY¯OWA NA KALWARII WARMIÑSKIEJ,',
        '18.00 - MSZA ¦W Z MODLITW¡ O UZDROWIENIE DUSZY I CIA£A.'
    ]),
    new Aktualnosc('21-23.03.2024', 'REKOLEKCJE WIELKOPOSTNE',
    [
        '- 11.00 - Msza ¦w. z nauk± rekolekcyjn±.',
        '- 18.00 - Msza ¦w. z nauk± rekolekcyjn±.'
    ]),
    new Aktualnosc('28-31.03.2024', 'Triduum Paschalne w G³otowie',
    [
        'To rekolekcje dla doros³ych pog³êbiaj±ce prze¿ycie ¦wiêtych Dni przez dodatkowe katechezy, spotkania w grupach, nabo¿eñstwa i modlitwy.',
        'Pocz±tek w Wielki Czwartek o godz. 16.00.',
        'Zakoñczenie w Niedzielê Wielkanocn± po Rezurekcjach.'
    ]),
    new Aktualnosc('18.05.2024', '130 ROCZNICA PO¦WIÊCENIA KALWARII WARMIÑSKIEJ I PIELGRZYMKA SOLIDARNO¦CI W HO£DZIE ¶W. JANOWI PAW£OWI II.',
    [
        '- 11.00 - Uroczysta Msza ¦wiêta',
        '- 12.00 - Droga Krzy¿owa'
    ]),
    new Aktualnosc('2.06.2024', 'Odpust diecezjalny w G³otowie.',
    [
        '- 10.00 - Droga Krzy¿owa',
        '- 11.00 - Adoracja Naj¶wiêtszego Sakramentu',
        '- 12.00 - Suma odpustowa'
    ]),
    new Aktualnosc('15.09.2024', 'Odpust diecezjalny w G³otowie',
    [
        '- 8.30 - Msza ¦w. z kazaniem',
        '- 10.00 - Droga Krzy¿owa',
        '- 11.00 - Adoracja Naj¶wiêtszego Sakramentu',
        '- 12.00 - Suma odpustowa'
    ]),
    new Aktualnosc('22.09.2024', 'Do¿ynki parafialne - Msza ¦w. o 11.00.', []),
    new Aktualnosc('21.12.2024', 'ADWENTOWY DZIEÑ REKOLEKCYJNY.',
    [
        '- Okazja do spowiedzi w czasie Mszy ¦wiêtych.',
        '- 11.00 - Msza ¦w. i nauka rekolekcyjna.',
        '- 18.00 - Msza ¦w. i nauka rekolekcyjna.'
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
    //     <b>PI¡TKI WIELKIEGO POSTU 2024 - <span class="aktualnosc-title">GODZINY MI£OSIERDZIA BO¯EGO</span></b>
    // </p>
    // <p class="aktualnosc-content">
    //     17.00 - DROGA KRZY¯OWA NA KALWARII WARMIÑSKIEJ, <br>
    //     18.00 - MSZA ¦W Z MODLITW¡ O UZDROWIENIE DUSZY I CIA£A.
    // </p>
    let content = aktualnosci.map(v => {
        let aktualnoscHeader = `<p class="aktualnosci-header"><b>${v.data} - <span class="aktualnosc-title">${v.tytul}</span></b></p>`;
        let aktualnoscContent = `<p class="aktualnosc-content">${v.wiersze.join('<br>')}</p>`;
        return aktualnoscHeader + aktualnoscContent;
    }).join('');
    let header = `<p style="text-align: center"><B>${naglowek}</b></p>`
    return header + content;
}