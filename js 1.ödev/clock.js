function myName() {
    let name = prompt("Adınız Nedir?");
    document.querySelector("#myName").innerHTML = name;
}

function showTime() {
    let suan = new Date();
    let sa = suan.getHours();
    let dk = suan.getMinutes();
    let sn = suan.getSeconds();
    let gun = suan.getDay();


    sa = (sa < 10) ? "0" + sa : sa;
    dk = (dk < 10) ? "0" + dk : dk;
    sn = (sn < 10) ? "0" + sn : sn;


    switch (gun) {
        case 1:
            gun = "Pazartesi";
            break;
        case 2:
            gun = "Salı";
            break;
        case 3:
            gun = "Çarşamba";
            break;
        case 4:
            gun = "Perşembe";
            break;
        case 5:
            gun = "Cuma";
            break;
        case 6:
            gun = "Cumartesi";
            break;
        case 7:
            gun = "Pazar";
            break;
    }

    let zaman = `${sa}:${dk}:${sn} ${gun}`;
    document.getElementById("myClock").innerHTML = zaman;

    setTimeout(showTime, 1000);
}

showTime()
myName()

