var naglowek = '6 NIEDZIELA ZWYK£A B - 11.02.2024 R.';
var ogloszenia = [
    'Jutro Msza o 11.00.',
    'Dzi¶ w Niedzielê Msza o 11.00 z Sakramentem Namaszczenia Chorych Trzeba byæ po spowiedzi.',
    'W tym tygodniu wypada ¦roda Popielcowa. Msze z posypaniem g³ów popio³em o 11.00 i o 18.00.',
    'W najbli¿szy pi±tek Droga Krzy¿owa na Kalwarii o 17.00, po niej Msza z nabo¿eñstwem o uzdrowienie duszy i cia³a. Proszê o przygotowanie Kaplic do nabo¿eñstw wielkopostnych',
    'W nastêpn± niedzielê po Sumie Gorzkie ¿ale.',
    'Bóg zap³aæ Stra¿akom i wszystkim osobom za posprz±tanie ¿³óbka i choinek w ko¶ciele. P. Jurkowi i Stra¿akom za uprz±tniêcie zwalonych drzew.'
];

function getOgloszeniaNaglowek() {
    return naglowek;
}

function getOgloszeniaContent() {
    return ogloszenia.map(v => `<li>${v}</li>`).reduce((sum, v) => sum += v);
}