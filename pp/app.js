$(document).ready(function() { 

    $("#header").css("background", "#707070");
    $("#header").css("width", "100%");
    $("#header").css("height", "180px");

    $("#body").css("background", "#454545");
    $("#body").css("width", "100%");
    $("#body").css("height", "59%");
    
    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#body_content").css("background", "#454545");
    $("#body_content").css("padding-top", "50px");
    $("#body_content").css("padding-left", "150px");
    $("#body_content").css("padding-bottom", "285px");
    $("#body_content").css("color", "white");

    $("#table").css("background", "#454545");
    $("#table").css("padding-top", "50px");
    $("#table").css("padding-left", "150px");
    $("#table").css("color", "white");

    $("#input").css("background", "#454545");
    $("#input").css("padding-top", "50px");
    $("#input").css("padding-left", "150px");
    $("#input").css("color", "white");

    $("#submit").cilck(function () {
        
        var matIdKaV = $("#matID").val();
        var matNosKaV = $("#mmate").val();
        var matDaudzKaV = $("#matdaudz").val();
        var matAtrasVKaV = $("#matatras").val();

        var matIdKaC = Number(matIdKaV);
        var matDaudzKaC = Number(matDaudzKaV);

        var matinput = {
            "MacibuMatID" : matIdKaC,
            "Nosaukums" : matNosKaV,
            "Skaits" : matDaudzKaC,
            "AtrasanasV" : matAtrasVKaV,
        };
    });

    $.post("http://sigulda-web.azurewebsites.net/api/avengers/macibu-materiali",

        matinput,

        function (data, status) {
        });

    $.get("http://sigulda-web.azurewebsites.net/api/avengers/macibu-materiali", function (matinput, status) {
    
    matinput.forEach(function (materials) {
    
    var matId = "<td>" + materials.Materiala_ID + "</td>";
    var matNos = "<td>" + materials.Nosaukums + "</td>";
    var matDaudz = "<td>" + materials.Skaits + "</td>";

    var matRinda = "<tr>" + matId + MatNos + matDauudz + "</tr>";

    $("materialu_tabula").append(matRinda);

});
});
});
