var naglowek = '7 NIEDZIELA ZWYK£A B - 18.02.2024 R.';
var ogloszenia = [
    'W najbli¿szy pi±tek Droga Krzy¿owa na Kalwarii o 17.00, po niej Msza z nabo¿eñstwem o uzdrowienie duszy i cia³a. Bóg zap³aæ za przygotowanie Kaplic do nabo¿eñstw wielkopostnych',
    'Dzi¶ i w nastêpn± niedzielê po Sumie Gorzkie ¯ale.',
];

function getOgloszeniaNaglowek() {
    return naglowek;
}

function getOgloszeniaContent() {
    return ogloszenia.map(v => `<li>${v}</li>`).reduce((sum, v) => sum += v);
}