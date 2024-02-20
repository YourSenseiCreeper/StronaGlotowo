class Rekolekcje {
    constructor(data, tytul) {
        this.data = data;
        this.tytul = tytul;
    }
}

var naglowek = 'REKOLEKCJE 2024';
var rekolekcje = [
    new Rekolekcje('21-23.03.2024 r.', 'REKOLEKCJE WIELKOPOSTNE W G£OTOWIE. MSZE Z NAUKAMI O 11.00 I 18.00.'),
    new Rekolekcje('22-23.03.2024 r.', 'REKOLEKCJE STOWARZYSZENIA CIVITAS CHRISTIANA.'),
    new Rekolekcje('28-31.03.2024 r.', 'REKOLEKCJE TRIDUUM PASCHALNE DLA OSÓB DOROS£YCH. W CZASIE REKOLEKCJI POG£ÊBIENIE PRZE¯YWANIA ¦WIÊTEGO TRIDUUM PASCHALNEGO. POCZ¡TEK O 17.00 W WIELKI CZWARTEK, ZAKOÑCZENIE W NIEDZIELÊ OK.8.00.'),
    new Rekolekcje('23-26.05.2024 r.', 'DNI TRZE¬WO¦CI I RADO¦CI DLA OSÓB TRZE¬WIEJ¡CYCH I WSPÓ£UZALE¯NIONYCH.'),
];
var zgloszenia = 'ZG£OSZENIA NA WSZYSTKIE REKOLEKCJE: Ks. Marek Proszek, tel.606140178, e-mail mproszek@op.pl.';

function getRekolekcjeNaglowek() {
    return naglowek;
}

function getRekolekcjeContent() {
    // <p>
    //     <B><span id="aktualnosci-header"></span></b>
    // </p>
    // <p class="aktualnosci-header">
    //     <b>21-23.03.2024 r. - <span class="aktualnosc-title">REKOLEKCJE WIELKOPOSTNE W G£OTOWIE. MSZE Z NAUKAMI O 11.00 I 18.00.</span></b>
    // </p>
    let zgloszeniaHtml = `<p class="rekolekcje-entry">${zgloszenia}</p>`;
    let content = rekolekcje.map(v => `<p class="rekolekcje-entry">${v.data} - <span class="rekolekcje-title">${v.tytul}</span></p>`).join('');
    let header = `<p class="rekolekcje-header"><b>${naglowek}</b></p>`
    return header + content + zgloszeniaHtml;
}