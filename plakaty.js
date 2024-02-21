class Plakat {
    constructor(tytul, sciezkaDoPliku) {
        this.tytul = tytul;
        this.sciezkaDoPliku = sciezkaDoPliku;
    }
}

var szerokosc = "200px"; 
var plakaty = [
    new Plakat('G�otowo 2024', './obrazki/plakaty/Glotowo 2024.jpg'),
    new Plakat('Wielki Post 2024 w G�otowie', './obrazki/plakaty/Wielki post 2024.jpg'),
];

function getPlakatyContent() {
    // <a href="./obrazki/plakaty/Glotowo 2024.jpg" target="_blank"><img src="./obrazki/plakaty/Glotowo 2024.jpg" alt="G�otowo 2024"></a>
    // <a href="./obrazki/plakaty/Wielki post 2024.jpg" target="_blank"><img src="./obrazki/plakaty/Wielki post 2024.jpg" alt="Wielki Post 2024 w G�otowie"></a>
    let szerokoscTag = szerokosc != null ? `style="width: ${szerokosc}"` : '';
    let content = plakaty.map(v => `<a href="${v.sciezkaDoPliku}" target="_blank"><img src="${v.sciezkaDoPliku}" alt="${v.tytul}" ${szerokoscTag}></a>`).join('');
    return content;
}