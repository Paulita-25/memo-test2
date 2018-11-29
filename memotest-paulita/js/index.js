var nivel ;
var maximo ;

$("#easy").on("click", function () {
    var valorInput = $(".name").val()
    if (valorInput == "") {
        $("#requisito").removeClass("hide");
    } else {
        nivel = "facil"
        maximo = 18
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
        nivel = "intermedio"
        maximo = 12
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
        nivel = "experto"
        maximo = 9
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

        $('#' + primerClick.id).addClass("flipping")
        $('#' + primerClick.id).addClass("pointer")
        
    } else {
        
        segundoClick = {
            id: $(this).attr('id'),
            img: $(this).attr('data-img')
        }

        $('#' + segundoClick.id).addClass("flipping")
        $('#' + segundoClick.id).addClass("pointer")

        intentos = intentos + 1
        $("#intentosEnElJuego").html("Intentos: " + intentos)

        if (primerClick.img == segundoClick.img && primerClick.id !== segundoClick.id) {
            paresIguales = paresIguales + 1
            console.log('iguales')

        } else {
            console.log('distintas')
            setTimeout(function () {
                $('#' + primerClick.id).attr('src', "img/tapada.jpg")
                $('#' + segundoClick.id).attr('src', "img/tapada.jpg")
                $('#' + primerClick.id).removeClass("pointer")
                $('#' + segundoClick.id).removeClass("pointer")
                $('#' + primerClick.id).removeClass("flipping")
                $('#' + segundoClick.id).removeClass("flipping")
            }, 1000)
            
        }
        clicks = 0
    }

    if (paresIguales == 6) {
        console.log("ganaste")
        $(".end-game").removeClass("hide");
        $("#cantidad").append(intentos + " intentos");
        $(".game").css("opacity", "0.4");

        var valorInput = $(".name").val()

        var ranking = JSON.parse(localStorage.getItem("ganadores"))

        var obj = {
            nombre: valorInput,
            nivel: nivel,
            intentos: intentos
        }

        if (ranking == null) {
            ranking = []
        }

        ranking.push(obj)

        localStorage.setItem("ganadores", JSON.stringify(ranking))

        for (var i = 0; i < ranking.length; i ++) {

        $("#nombre").append(`${ranking[i].nombre}`)
        $("#Nivel").append(`${ranking[i].nivel}`)
        $("#intents").append(`${ranking[i].intentos}`)

        }

    } else if (intentos > maximo) {
        console.log("perdiste")
        $(".loser").removeClass("hide");
        $(".game").css("opacity", "0.4");
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


// Lo que falta! 

// Importante!
// Resolver tema clicks!
// Ver el tema del flip 

// No tan importante! 
// Version mobile de Ganaste y perdiste
// Ordenar con SASS lo que se apendea con Local storage
