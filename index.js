//função do relógio
function clock(){
    //variáveis de data e hora
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDate();
    var month = date.getUTCMonth();
    var year = date.getUTCFullYear();

    //condição para adicionar o número 0 na frente de horas, minutos e segundos.
    if(hour < 10){
        hour = "0"+hour;
    }

    if(min < 10){
        min = "0"+min;
    }

    if(sec < 10){
        sec = "0"+sec;
    }

    //condição para adicionar o número 0 na frente do dia.
    if(day < 10){
        day = "0"+day;
    }

    //formatação de horas
    var hours = hour + ":" + min + ":" + sec;

    //Um switch para mostrar o mês por extenso.
    var montWrite;
    switch (month){
            case 0:
            montWrite = "Janeiro"
            break;
            case 1:
            montWrite = "Fevereiro"
            break;
            case 2:
            montWrite = "Março"
            break;
            case 3:
            montWrite = "Abril"
            break;
            case 4:
            montWrite = "Maio"
            break;
            case 5:
            montWrite = "Junho"
            break;
            case 6:
            montWrite = "Julho"
            break;
            case 7:
            montWrite = "Agosto"
            break;
            case 8:
            montWrite = "Setembro"
            break;
            case 9:
            montWrite = "Outubro"
            break;
            case 10:
            montWrite = "Novembro"
            break;
            case 11:
            montWrite = "Dezembro"
            break;
        default:
            break;
    }

    //formatação de datas
    var dates = day + " de " + montWrite + " de " + year;

    //para mostrar horas e datas no código HTML
    document.getElementById("rel").innerHTML = hours;
    document.getElementById("date").innerHTML = dates;
}

//temporizador para acionar a função a cada 1 segundo.
var timer = setInterval(clock, 1000);