class MenuItem {
    constructor(nazwa, link, dodatkoweTagi = '') {
        this.nazwa = nazwa;
        this.link = link;
        this.dodatkoweTagi = dodatkoweTagi;
    }
}

var menu = [
    new MenuItem('Strona główna', 'index.html'),
    new MenuItem('Aktualności', 'akt.html'),
    new MenuItem('Ogłoszenia', 'ogloszenia.html'),
    new MenuItem('Galeria', 'galeria.html'),
    new MenuItem('Historia', 'hist.html'),
    new MenuItem('Kalwaria', 'kalwaria.html'),
    new MenuItem('Kościół', 'kosciol.html'),
    new MenuItem('Msze święte', 'msze.html'),
    new MenuItem('Rekolekcje', 'rekolekcje.html'),
    new MenuItem('Dom Pielgrzyma', 'dom_pielgrzyma.html'),
    new MenuItem('GLOTOVIA', 'glotovia.html'),
    // new MenuItem('Rada Ruchów Katolickich', 'rrk.html'),
    new MenuItem('Regulamin cmentarza', 'regulamin_cmentarza.html'),
    new MenuItem('Regulamin placu zabaw', 'regulamin_placu_zabaw.html'),
    new MenuItem('Kontakt', 'kontakt.html'),
    new MenuItem('Sanktuaria Warmii i Mazur', 'http://sanktuariawarmiiimazur.pl/glotowo/', 'target="_blank"'),
    new MenuItem('Facebook', 'https://www.facebook.com/p/Parafia-Rzymskokatolicka-pw-Najświętszego-Zbawiciela-w-Głotowie-100064331903793/', 'target="_blank"'),
    new MenuItem('Msze święte z Głotowa', 'https://www.facebook.com/mszeswietezglotowa/', 'target="_blank"'), 
];

var linki = [
    new MenuItem('Opoka', 'http://www.opoka.org.pl'),
    new MenuItem('Adonai', 'http://www.adonai.pl'),
    new MenuItem('Mateusz', 'https://mateusz.pl/'),
    new MenuItem('Katolik', 'http://www.katolik.pl'),
    new MenuItem('Bosko', 'http://www.bosko.pl'),
    new MenuItem('Wiara', 'http://www.wiara.pl'),
    new MenuItem('Spowiedź', 'http://www.spowiedz.pl'),
    new MenuItem('Odnowa w Polsce', 'http://www.odnowa.org')
];

function getMenu(prefix = '') {
    return menu.map(v => `<a href="${prefix}${v.link}" ${v.dodatkoweTagi}>* ${v.nazwa}</a><br>`).reduce((sum, v) => sum += v);
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