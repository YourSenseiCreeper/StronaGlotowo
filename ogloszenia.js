var naglowek = '6 NIEDZIELA ZWYK�A B - 11.02.2024 R.';
var ogloszenia = [
    'Jutro Msza o 11.00.',
    'Dzi� w Niedziel� Msza o 11.00 z Sakramentem Namaszczenia Chorych Trzeba by� po spowiedzi.',
    'W tym tygodniu wypada �roda Popielcowa. Msze z posypaniem g��w popio�em o 11.00 i o 18.00.',
    'W najbli�szy pi�tek Droga Krzy�owa na Kalwarii o 17.00, po niej Msza z nabo�e�stwem o uzdrowienie duszy i cia�a. Prosz� o przygotowanie Kaplic do nabo�e�stw wielkopostnych',
    'W nast�pn� niedziel� po Sumie Gorzkie �ale.',
    'B�g zap�a� Stra�akom i wszystkim osobom za posprz�tanie ���bka i choinek w ko�ciele. P. Jurkowi i Stra�akom za uprz�tni�cie zwalonych drzew.'
];

function getOgloszeniaNaglowek() {
    return naglowek;
}

function getOgloszeniaContent() {
    return ogloszenia.map(v => `<li>${v}</li>`).reduce((sum, v) => sum += v);
}