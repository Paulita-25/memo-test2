
$("#easy").on("click", function () {
    var valorInput = $(".name").val()
    if (valorInput == "") {
        $("#requisito").removeClass("hide");
    } else {
        $(".start-game").addClass("hide");
        $(".game").removeClass("hide");
        $("#name").append(valorInput);
        $("#intentos").append("18 intentos");
        $("#nivel").append("FACIL");
    }
})

$("#medium").on("click", function () {
    var valorInput = $(".name").val()
    if (valorInput == "") {
        $("#requisito").removeClass("hide");
    } else {
        $(".start-game").addClass("hide");
        $(".game").removeClass("hide");
        $("#name").append(valorInput);
        $("#intentos").append("12 intentos");
        $("#nivel").append("INTERMEDIO");
    }
})

$("#expert").on("click", function () {
    var valorInput = $(".name").val()
    if (valorInput == "") {
        $("#requisito").removeClass("hide");
    } else {
        $(".start-game").addClass("hide");
        $(".game").removeClass("hide");
        $("#name").append(valorInput);
        $("#intentos").append("9 intentos");
        $("#nivel").append("EXPERTO");
    }
})


$(".volver").on("click", function () {
    location.reload()
    $(".game").addClass("hide");
    $(".start-game").removeClass("hide");
    $(".loser").addClass("hide");
    $(".end-game").addClass("hide");
})


var clicks = 0
var primerClick
var segundoClick
var intentos = 0
var paresIguales = 0

$('img').on('click', function () {
    clicks = clicks + 1

    if (clicks == 1) {

        primerClick = {
            id: $(this).attr('id'),
            img: $(this).attr('data-img')
        }

        $('#'+primerClick.id).addClass("pointer")

    } else {
        segundoClick = {
            id: $(this).attr('id'),
            img: $(this).attr('data-img')
        }

        $('#'+segundoClick.id).addClass("pointer")

        intentos = intentos + 1 
        $("#intentosEnElJuego").html("Intentos: "+ intentos)

        if (primerClick.img == segundoClick.img && primerClick.id !== segundoClick.id) {
            paresIguales = paresIguales + 1
            console.log('iguales')

        } else {
            console.log('distintas')
            setTimeout(function () {
                $('#' + primerClick.id).attr('src', "img/tapada.jpg")
                $('#' + segundoClick.id).attr('src', "img/tapada.jpg")
            }, 1000)
            $('#'+primerClick.id).removeClass("pointer")
            $('#'+segundoClick.id).removeClass("pointer")
        }
        clicks = 0
    }

    // if (clicks > 2) {
    //    $(this).attr("id").addClass("pointer")
    // }

    if (paresIguales == 6) {
        console.log("ganaste")
        $(".end-game").removeClass("hide");
        $("#cantidad").append(intentos + " intentos");
        $(".game").css("opacity" , "0.4");
    } else if (intentos > 18 ) {
        console.log("perdiste")
        $(".loser").removeClass("hide");
        $(".game").css("opacity" , "0.4");
    }
})


// var data = localStorage.getItem("winners") 

// if (data == null) {
// 	data = [ ]
// }
// data.push(obj)
// localStorage.setItem("winners", JSON.stringify(data) )


const imagenes = [
    "img/alce.jpg",
    "img/epelante.jpg",
    "img/nena.jpg",
    "img/peces.jpg",
    "img/zapas.jpg",
    "img/unichancho.jpg",
    "img/alce.jpg",
    "img/epelante.jpg",
    "img/nena.jpg",
    "img/peces.jpg",
    "img/zapas.jpg",
    "img/unichancho.jpg"
]

const desordenado = shuffle(imagenes)

for (var i = 1; i <= desordenado.length; i++) {
    $("#" + i).attr("data-img", desordenado[i - 1])
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}

$("img").on('click', function (e) {
    const imgId = e.target.id
    const id = $('#' + imgId).attr('data-id')
    $("#" + imgId).attr('src', desordenado[id - 1])
    setTimeout(function () {
    }, 3000);
})


