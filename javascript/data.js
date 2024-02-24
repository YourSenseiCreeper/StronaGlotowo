function getCurrentDate() {
    var data = new Date();
    var dzien = data.getDate();
    var miesiac = data.getMonth();
    var rok = (data.getFullYear ? data.getFullYear() : data.getYear());
    var miesiace = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
    let answer = `${dzien} ${miesiace[miesiac]} ${rok}`;
    if (data != 0) return answer
    else return "Data nieznana!";
}

function getCurrentYear() {
    return new Date().getFullYear();
}