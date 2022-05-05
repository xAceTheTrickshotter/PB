$(document).ready(() => {
    function getPageName(url) {
        var index = url.lastIndexOf("/") + 1;
        var filenameWithExtension = url.substr(index);
        var filename = filenameWithExtension.split(".")[0];

        filename = filename.split("?")[0]; // <-- added this line

        return filename;
    }

 //databbase dingen
var userId = FYSCloud.Session.get("userId");
      FYSCloud.API.queryDatabase("SELECT * FROM users WHERE userid = ?",
      [userId]).done(data=> {
        var bestemmingAantal = 2;
        if (!data[0]["Bali"]) {
        bestemmingAantal--
        }

})
 //op de pagina
 const overMijTekst = "Hallo, Mijn naam is Kevin Out en ben 20 jaar. Ik studeer commerciële economie bij de HvA waar ik een eerstejaars ben. Ik ben erg zelfstanding en is het dan ook wel passend dat ik in mijn vrije tijd veel lees of series kijk. In de toekomst wil ik iemand zijn die erg zelfverzekerd in zijn vak is en op deze website is de weg er naar toe te zien."

//De teksten op de site zetten
$(".overMij").append ("<h1 class = teksten> " +  overMijTekst + "</h1> ");

 //databse dingen
  $(document).ready(function (){
    //FYSCloud.Session.set("userId", 71); Velden testen met gegevens van Frank
    var userid=FYSCloud.Session.get("userId");
    FYSCloud.API.queryDatabase(
        "SELECT * FROM users WHERE userid=?",
        [userid]
    ).done(data=>{

       $("#leeftijdveld").html(berekenleeftijd(data[0]["geboortedatum"]));
       $("#woonplaatsveld").html(toegewezen(data[0]["woonplaats"]));

    }).fail(reason=>{console.log(reason)})
})




// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
modal.onclick = function(){
  modal.style.display = "none";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}











function bestemmingAantal(bestemmingen){
  var bestemmingen = 17
}
  function berekenleeftijd(geboortedatum){
    var geboortedatum = new Date(geboortedatum)
    let verschilinjaren = new Date(Date.now() - geboortedatum.getTime())
    return Math.abs(verschilinjaren.getUTCFullYear() - 1970);
}

});


//if(window.name === "true") {
//window.name = true } console.log(window.name); window.onload = function() {
//if (window.name === "true") { // <-- window.name stores data in strings
//window.alert("mogge"); window.name = false; } }
