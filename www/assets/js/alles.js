$(document).ready(() => {
    function getPageName(url) {
        var index = url.lastIndexOf("/") + 1;
        var filenameWithExtension = url.substr(index);
        var filename = filenameWithExtension.split(".")[0];

        filename = filename.split("?")[0];

        return filename;
    }


    let rechterKant = "<li class=\"nav-item navbarHover\">\n" +
        "      <a class=\"nav-link\"  href=\"login.html\">Login</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item navbarHover\">\n" +
        "      <a class=\"nav-link\" href=\"registreer.html\">Registreer</a>\n" +
        "    </li>\n"

    if(FYSCloud.Session.get("isLogged")) {
      let name = FYSCloud.Session.get("name");

name=name.charAt(0).toUpperCase() + name.slice(1);
        rechterKant =
          "  <li class=\"nav-item navbarHover\">\n" +
          "  <a class=\"nav-link\"  href=\"login.html\">Log Uit</a>\n" +
          "</li>\n" +
         " <div class=\"btn-group\">\n" +
        "<button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        name +
        "</button>\n" +
        "  <div class=\"dropdown-menu\">\n" +
        "    <a class=\"dropdown-item\" href=\"profoverzicht.html\">Profiel</a>\n" +
        "  <a class=\"dropdown-item\" style=\"border-top: 1px solid rgba(0,0,0,.15); border-bottom: 1px solid rgba(0,0,0,.15);\" href=\"interesses.html\">Interesses</a>\n" +
          "    <a class=\"dropdown-item\" href=\"matchbestemming.html\">Matches</a>\n" +
        "</div>\n" +
    "  </div>";
    }


    $(".navbar-wrapper").append("<div>\n" +
        "    <img src=\"assets/img/corendon-logo.svg\" style=\"width: 250px; margin: 10px;\">\n" +
        "    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n" +
        "        Berichtgeving rondom het Coronavirus:\n" +
        "        <a class=\"coronaText\" href=\"https://www.corendon.nl/welcome\" id=\"coronaText\"> corendon.nl/welcome</a> &\n" +
        "        <a class=\"coronaText\" href=\"https://www.corendon.nl/klantenservice/blog/2020/02/26/coronavirus/\" id=\"coronaText\">FAQ.</a>\n" +
        "        Alles over je reisvoucher vind je <a class=\"coronaText\" href=\"https://www.corendon.nl/reisvoucher\" id=\"coronaText\">hier</a>.\n" +
        "        Lees alle maatregelen via de volgende links:\n" +
        "        <a class=\"coronaText\" href=\"https://www.corendon.nl/klantenservice/blog/2020/06/11/maatregelen-op-bestemming/\" id=\"coronaText\">bestemming</a>,\n" +
        "        <a class=\"coronaText\" href=\"https://www.corendon.nl/verantwoord-reizen\" id=\"coronaText\"> luchthaven en vlucht</a>\n" +
        "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "            <span aria-hidden=\"true\">&times;</span>\n" +
        "        </button>\n" +
        "    </div>\n" +
        "</div>\n" +
        "\n" +
        "\n" +
        "</div>\n" +
        "</div>\n" +
        "\n" +
        "<header>\n" +
        "    <nav class=\" navbar navbar-expand-lg navbar-light\">\n" +
        "        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "            <span class=\"navbar-toggler-icon\"></span>\n" +
        "        </button>\n" +
        "\n" +
        "        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n" +
        "            <!-- Links -->\n" +
        "            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n" +
        "                 <li class=\"nav-item active navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"index.html\">Home</a>\n" +
        "                </li>\n" +
        "                 <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"matchbestemming.html\">Matches</a>\n" +
        "                </li>\n" +
        "                <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"https://www.corendon.nl/\">Corendon</a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "\n" +
        "            <ul class=\"navbar-nav\">\n" +
                rechterKant +
        "\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </nav>\n" +
        "\n" +
        "</header>");


  $(".footer-wrapper").append( "<div class=\"container-fluid pb-0 mb-0 justify-content-center text-light\">\n" +
      " <footer>\n" +
          "  <div class=\"row my-5 justify-content-center py-5\">\n" +
              "  <div class=\"col-11\">\n" +
                  "  <div class=\"row \">\n" +
                      "  <div class=\"col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a\">\n" +
                            "<h3 class=\"text-muted mb-md-0 mb-5 bold-text\">Corendon</h3>\n" +
                      "  </div>\n" +
                        "<div class=\"col-xl-2 col-md-4 col-sm-4 col-12\">\n" +
                          "  <h6 class=\"mb-3 mb-lg-4 bold-text \"><b>MENU</b></h6>\n" +
                            "<ul class=\"list-unstyled\">\n" +
                              "  <li><a style=\"text-decoration: none; color: #627482;\"href=\"index.html\">Home</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"matchbestemming.html\">Matches</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"profoverzicht.html\">Profiel</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"interesses.html\">Interesses</a></li>\n" +
                            "</ul>\n" +
                      "  </div>\n" +
                        "<div class=\"col-xl-2 col-md-4 col-sm-4 col-12\">\n" +
                          //  "<h6 class=\"mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5\"><b>Lorem</b></h6>\n" +
                          //  "<p class=\"mb-1\">ipsum</p>\n" +
                            //"<p>on crip</p>\n" +
                        "</div>\n" +
                    "</div>\n" +
                    "<div class=\"row \">\n" +
                        "<div class=\"col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end\">\n" +
                          "  <p class=\"social text-muted mb-0 pb-0 bold-text\"> <span class=\"mx-2\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></span> <span class=\"mx-2\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></span> <span class=\"mx-2\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></span>\n" +
                        "</div>\n" +
                      "  <div class=\"col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end \">\n" +
                          "  <h6 class=\"mt-55 mt-2 text-muted bold-text\"><b>Gerelateerde links</b></h6><small> <span><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span><a  style=\"text-decoration: none; color: #627482;\"href=\"https://www.corendon.nl/\"> Corendon</a></small>\n" +
                      "  </div>\n" +
                        "<div class=\"col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 \">\n" +
                            "<h6 class=\"text-muted bold-text\"><b>Team</b></h6><small><span><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span> de FYSsticks</small>\n" +
                        "</div>\n" +
                  "  </div>\n" +
                "</div>\n" +
            "</div>\n" +
        "</footer>\n" +
    "</div>");
});
