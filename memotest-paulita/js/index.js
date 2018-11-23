
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

// $("#volver").on("click", function () {
//     $("game").addClass("hide")
//     $("start-game").removeClass("hide")


// })


var clicks = 0
var primerClick
var segundoClick
var intentos = 0
var chapaC = 0



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
            chapaC = chapaC + 1
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

    if (chapaC == 6) {
        $(".end-game").removeClass("hide");
        // ACA TENGO QUE APENDEAR EL NOMBRE, NIVEL, E INTENTOS 
    }

})



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


