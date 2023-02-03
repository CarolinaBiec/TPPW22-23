$("document").ready(function(){
    //prendo il titolo by ID
    // $("#titolo").addClass("rosso");

    //prendo tutti i titoli, cioè da h1 a h6 utilizzando :filter
    $(":header").addClass("rosso");

    //con questo selettore non ho bisogno di fare il foreach
    $("li").addClass("blu");

    $("li:even").addClass("arancione");

    //evento
    $("li").on("click", function(){
        $(this).remove();
    })

    $("#btnHide").on("click", function(){
        $('ul').fadeOut(2000);
    })

    $("#btnShow").on("click", function(){
        $('ul').fadeIn(2000);
    })

    $("li").each(function(){
        var idSingoloLi = this.id;
        $(this).append("<span> - " + idSingoloLi+"</span>");
    })
    
    console.log( document.getElementById("titolo"));
})
