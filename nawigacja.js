class MenuItem {
    constructor(nazwa, link) {
        this.nazwa = nazwa;
        this.link = link;
    }
}

var menu = [
    new MenuItem('Strona g³ówna', 'index.html'),
    new MenuItem('Aktualno¶ci', 'akt.html'),
    new MenuItem('Og³oszenia', 'ogloszenia.html'),
    new MenuItem('Galeria', 'galeria.html'),
    new MenuItem('Historia', 'hist.html'),
    new MenuItem('Kalwaria', 'kalwaria.html'),
    new MenuItem('Ko¶ció³', 'kosciol.html'),
    new MenuItem('Msze ¶wiête', 'msze.html'),
    new MenuItem('Rekolekcje', 'rekolekcje.html'),
    new MenuItem('Dom Pielgrzyma', 'dom_pielgrzyma.html'),
    new MenuItem('GLOTOVIA', 'glotovia.html'),
    new MenuItem('Rada Ruchów Katolickich', 'rrk.html'),
    new MenuItem('Regulamin cmentarza', 'regulamin_cmentarza.html'),
    new MenuItem('Regulamin placu zabaw', 'regulamin_placu_zabaw.html'),
    new MenuItem('Kontakt', 'kontakt.html')
];

var linki = [
    new MenuItem('Opoka', 'http://www.opoka.org.pl'),
    new MenuItem('Adonai', 'http://www.adonai.pl'),
    new MenuItem('Mateusz', 'https://mateusz.pl/'),
    new MenuItem('Katolik', 'http://www.katolik.pl'),
    new MenuItem('Bosko', 'http://www.bosko.pl'),
    new MenuItem('Wiara', 'http://www.wiara.pl'),
    new MenuItem('Spowied¼', 'http://www.spowiedz.pl'),
    new MenuItem('Odnowa w Polsce', 'http://www.odnowa.org')
];

function getMenu(prefix = '') {
    return menu.map(v => `<a href="${prefix}${v.link}">* ${v.nazwa}</a><br>`).reduce((sum, v) => sum += v);
}

function getLinki(prefix = '') {
    return linki.map(v => `<a href="${prefix}${v.link}" target="_blank">* ${v.nazwa}</a><br>`).reduce((sum, v) => sum += v);
}

function getCopyrightSection() {
    return `<td height="26" valign="top">
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td class="copyright">
          <b>
            &copy; Copyright by <a href="mailto:mproszek@op.pl"> Marek Proszek </A>2024
          </b>
        </td>
      </tr>
    </table>
  </td>`;
}