$(document).ready(() => {
    function getPageName(url) {
        var index = url.lastIndexOf("/") + 1;
        var filenameWithExtension = url.substr(index);
        var filename = filenameWithExtension.split(".")[0];

        filename = filename.split("?")[0]; // <-- added this line

        return filename;
    }

//window.onload = () => {
//  console.log(FYSCloud.Session.get("isLogged"));
//}



//let interesseA =" <li>Interesse</li>"

//if(FYSCloud.Session.get("isLogged")) {
//    interesseA = "<li><a>" + FYSCloud.Session.get("name")+ "</a></li>";
//}

//$(".intressesData").append( "<ul>\n" +
//        interesseA +
  //  "     <li style=\"list-style:none;\">&nbsp;</li>\n" +
//        interesseA +
//    "     <li style=\"list-style:none;\">&nbsp;</li>\n" +
//        interesseA +
//    " <li style=\"list-style:none;\">&nbsp;</li>\n" +
//        interesseA +
//    "      <li style=\"list-style:none;\">&nbsp;</li>\n" +
//        interesseA +
//    "    </ul>");


//let profielImg = "<img class=\"card-img-top\" src=\"assets/img/Proffototest.png\" alt=\"Card image\" style=\"width:100%\">"
//let userNaam = " <h4 class=\"card-title\" style=\"overflow: hidden; white-space: nowrap;\">Naam</h4>"
//let leeftijdUser = ""
//let woonplaatsUser = ""


//if(FYSCloud.Session.get("isLogged")) {
//  let name = FYSCloud.Session.get("name");
//  var start = new Date(FYSCloud.Session.get("birthDate"));
//  var elapsed =  Date.now() - start;
//  var age = Math.floor(((((elapsed / 1000) / 60) / 60) /24) / 365);

//name=name.charAt(0).toUpperCase() + name.slice(1);
//        profielImg = "<img class=\"card-img-top\"" + FYSCloud.Session.get('name')+ "alt=\"Card image\" style=\"width:100%\">";
//        userNaam = " <h4 class=\"card-title\" style=\"overflow: hidden;\">" + name+ "</h4>";
//        leeftijdUser = age;
//        woonplaatsUser = ""+ FYSCloud.Session.get("woonplaats","Vul in")+"";
//}
//$(".profielMini").append( "<div class=\"card\" id=\"homepageCard\">\n" +
//        "<img class=\"card-img-top\" src=\"assets/img/Proffototest.png\" alt=\"Card image\" style=\"width:100%\">\n" +
  //      " <div class=\"card-body\">\n" +
  //        userNaam +
  //      "   <div class=\"card-text\">\n" +
  //      "   <ul class=\"profielInfo\">\n" +
  //      "   <li> Leeftijd :  "+ leeftijdUser + " jaar</li>\n" +
  //      "   <li style=\"overflow: hidden;white-space: nowrap ;\"> Woonplaats :  " + woonplaatsUser + "</li>\n" +
  //      " </ul>\n" +
  //      " </div>\n" +
  //      "  <a href=\"profoverzicht.html\" class=\"btn btn-primary stretched-link\" id=\"profielButton\">Profiel bewerken</a>\n" +
  //      "  </div>\n" +
//        "</div>");

let homeMatch =

        "  <p class=\"homepaginaDivTitel\">\n" +
        "  Matches\n" +
        "  </p>\n" +
       "   <div class=\"matchesImg\">\n" +
            " <img src=\"assets/img/tenerife.jpg\" style=\"width:100%;\">\n" +
      "  </div>\n" +
      "  <div class=\"matchesBestemming\">\n" +
          "  <h2> Tenerife </h2>\n" +
      "  </div>\n" +

      "  <div class=\"matchesInformatie\">\n" +
          "<a> Tenerife is onder andere door het subtropische klimaat een eiland vol contrasten en biedt voor elk wat wils: kom tot rust aan de zonovergoten stranden, bewonder schitterende natuurparken, snuif cultuur in historische steden of dans tot de zon opkomt. Vlieg in slechts 4,5 uur naar dit paradijs en beleef een onvergetelijke vakantie Tenerife met Corendon!     </a>\n" +
        "</div>\n" +
      "  <div class=\"matchesReisBekijken\">\n" +
          "<a  class=\"stretched-link\"href=\"login.html\" style=\"position: relative;top: 5px;color: black;text-decoration: none;\"> Log in om je matches te kunnen zien. </a>\n"+
        "</div>"


var userId = FYSCloud.Session.get("userId");


      FYSCloud.API.queryDatabase("SELECT * FROM users WHERE userid = ?",
      [userId]).done(data=> {
        var bestemmingAantal = 2;
        if (!data[0]["Bali"]) {
        bestemmingAantal--
        }

})

var bestemmingAantal = 2;

if(FYSCloud.Session.get("isLogged") && bestemmingAantal > 0) {
   bestemmingImg = "src=\"assets/img/tenerife.jpg\"";

   homeMatch =
       "<p class=\"homepaginaDivTitel\">\n" +
        " Matches\n" +
      " </p>\n" +
      "<div class=\"matchesImg\" style=\"width:150px;\">\n" +
        "  <img src=\"assets/img/bali.jpg\"style=\"width:100%; height: 100%;\">\n" +
     "</div>\n" +
     "<div class=\"matchesBestemming\">\n" +
      "   <h2> Bali </h2>\n" +
    "</div>\n" +
  "  <div class=\"matchesGroepGrootte\">\n" +
      "  <h2> 7/10 </h2>\n" +
   "</div>\n" +
  " <div class=\"matchesInformatie\">\n" +
       "<a> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,     </a>\n" +
  " </div>\n" +
  " <div class=\"matchesReisBekijken\">\n" +
      " <a  class=\"stretched-link\"href=\"bali.html\" style=\"position: relative;top: 5px;color: black;text-decoration: none;\"> Bekijk deze reis </a>\n" +
   "</div>"

}else if (FYSCloud.Session.get("isLogged")) {
  homeMatch =
     "<p class=\"homepaginaDivTitel\">\n" +
      " Matches\n" +
    " </p>\n" +

   "<div class=\"geenMatches\">\n" +
      " <p style=\"font-size: 110%; \"> Je hebt momenteel geen matches. Om meer matches te kunnen krijgen kun je je\n" +
          "<a class=\"coronaText\" href=\"interesses.html\">interesses</a>\n" +
        "  invullen.\n" +
          " </p>"
}
$(".homeMatchPagina").append( "<div class=\"homeMatches\">\n" +
  homeMatch +
  "</div>");

let homeProfielInteresses =
    "<div class=\"registreerHome\">\n" +
     "<p class=\"homepaginaDivTitel\">\n" +
        "  Registreer!\n" +
    "  </p>\n" +
   "<div >\n" +
     "<p style=\"text-align: center;\">\n" +
        "Maak nu een account aan voor de geweldige prijs van gratis!\n" +
      "</p>\n" +
    "</div>\n" +
    "  <a href=\"registreer.html\" class=\"btn btn-primary\" id=\"registreerBtn\">Maak nu een account aan!</a>\n" +
     "</div>\n" +
    "    <div class=\"registreerHome\">\n" +
    "  <p class=\"homepaginaDivTitel\">\n" +
        "Log in!\n" +
      "</p>\n" +
    "<div >\n" +
    "<p style=\"text-align: center;\">\n" +
     "  Heb je al een account? Log dan hier in! ook gratis!\n" +
    "</p>\n" +
   "</div>\n" +
     "<a href=\"login.html\" class=\"btn btn-primary\" id=\"registreerBtn\">Log in!</a>\n" +
    "</div>"


if(FYSCloud.Session.get("isLogged")) {
  interesseA = "<li><a>" + FYSCloud.Session.get("interesses","Vul in!")+ "</a></li>";
  let name = FYSCloud.Session.get("name");
name=name.charAt(0).toUpperCase() + name.slice(1);

        profielImg = "<img class=\"card-img-top\"" + FYSCloud.Session.get('name')+ "alt=\"Card image\" style=\"width:100%\">";
        userNaam = " <h4 class=\"card-title\" style=\"overflow: hidden;\">" + name+ "</h4>";
        leeftijdUser =" <a id=\"leeftijdveld\"> Leeftijd</a>"
        woonplaatsUser = " <a id=\"woonplaatsveld\"> woonplaats</a>"
  homeProfielInteresses =
  "<div class=\"homeIntresses\">\n" +
    "<p class=\"homepaginaDivTitel\">\n" +
      "  Intresses\n" +
    "</p>\n" +
    "<ul>\n" +
            interesseA +
        "     <li style=\"list-style:none;\">&nbsp;</li>\n" +
            interesseA +
        "     <li style=\"list-style:none;\">&nbsp;</li>\n" +
            interesseA +
        " <li style=\"list-style:none;\">&nbsp;</li>\n" +
            interesseA +
        "      <li style=\"list-style:none;\">&nbsp;</li>\n" +
            interesseA +
        "    </ul>\n"+
      "<a href=\"interesses.html\" class=\"btn btn-primary\" id=\"interesseButton\">Bewerken</a>\n" +
    "</div>\n" +
    "<div class=\"card\" id=\"homepageCard\">\n" +
            "<img class=\"card-img-top\" src=\"assets/img/Proffototest.png\" alt=\"Card image\" style=\"width:100%\">\n" +
            " <div class=\"card-body\">\n" +
              userNaam +
            "   <div class=\"card-text\">\n" +
            "   <ul class=\"profielInfo\">\n" +
            "   <li> Leeftijd :  "+ leeftijdUser + " jaar</li>\n" +
            "   <li style=\"overflow: hidden;white-space: nowrap ;\"> Woonplaats :  " + woonplaatsUser + "</li>\n" +
            " </ul>\n" +
            " </div>\n" +
            "  <a href=\"profoverzicht.html\" class=\"btn btn-primary stretched-link\" id=\"profielButton\">Profiel bewerken</a>\n" +
            "  </div>\n" +
            "</div>\n" +
   "</div>"
}
$(".homeProfielCard").append("<div >\n" +
  homeProfielInteresses +
  "</div>"
  );



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
