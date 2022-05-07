$(document).ready(() => {
    function getPageName(url) {
        var index = url.lastIndexOf("/") + 1;
        var filenameWithExtension = url.substr(index);
        var filename = filenameWithExtension.split(".")[0];

        filename = filename.split("?")[0];

        return filename;
    }

    $(".navbar-wrapper").append("<div class=\"quote\">\n" +
        "    <h1 class=quoteText> “By far the best proof is experience” \n"+
        "<br> \n "+
        "- Francis Bacon </h1>\n" +
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
        "                 <li class=\"nav-item  navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"index.html\">Home</a>\n" +
        "                </li>\n" +
        "                 <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"wiebenik.html\">Wie ben ik</a>\n" +
        "                </li>\n" +
        "                 <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"watkanik.html\">Wat kan ik</a>\n" +
        "                </li>\n" +
        "                 <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"watwilik.html\">Wat wil ik</a>\n" +
        "                </li>\n" +
        "                 <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"matchbestemming.html\">Conctact</a>\n" +
        "                </li>\n" +
        
        "                <li class=\"nav-item navbarHover\">\n" +
        "                    <a class=\"nav-link\" href=\"https://www.corendon.nl/\">Socials</a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "\n" +
        "            <ul class=\"navbar-nav\">\n" +
        "\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </nav>\n" +
        "\n" +
        "</header>");

        

        //"    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n" +
        //"        Berichtgeving rondom het Coronavirus:\n" +
        //"        <a class=\"coronaText\" href=\"https://www.corendon.nl/welcome\" id=\"coronaText\"> corendon.nl/welcome</a> &\n" +
        //"        <a class=\"coronaText\" href=\"https://www.corendon.nl/klantenservice/blog/2020/02/26/coronavirus/\" id=\"coronaText\">FAQ.</a>\n" +
        //"        Alles over je reisvoucher vind je <a class=\"coronaText\" href=\"https://www.corendon.nl/reisvoucher\" id=\"coronaText\">hier</a>.\n" +
        //"        Lees alle maatregelen via de volgende links:\n" +
        //"        <a class=\"coronaText\" href=\"https://www.corendon.nl/klantenservice/blog/2020/06/11/maatregelen-op-bestemming/\" id=\"coronaText\">bestemming</a>,\n" +
        //"        <a class=\"coronaText\" href=\"https://www.corendon.nl/verantwoord-reizen\" id=\"coronaText\"> luchthaven en vlucht</a>\n" +
        //"        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        //"            <span aria-hidden=\"true\">&times;</span>\n" +
       // "        </button>\n" +


  $(".footer-wrapper").append( "<div class=\"container-fluid pb-0 mb-0 justify-content-center text-light\">\n" +
      " <footer>\n" +
          "  <div class=\"row my-5 justify-content-center py-5\">\n" +
              "  <div class=\"col-11\">\n" +
                  "  <div class=\"row \">\n" +
                      "  <div class=\"col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a\">\n" +
                            "<h3 class=\"text-muted mb-md-0 mb-5 bold-text\">Kevin Out</h3>\n" +
                      "  </div>\n" +
                        "<div class=\"col-xl-2 col-md-4 col-sm-4 col-12\">\n" +
                          "  <h6 class=\"mb-3 mb-lg-4 bold-text \"><b>Menu</b></h6>\n" +
                            "<ul class=\"list-unstyled\">\n" +
                              "  <li><a style=\"text-decoration: none; color: #627482;\"href=\"index.html\">Home</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"wiebenik.html\">Wie ben ik</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"watkanik.html\">Wat kan ik</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"watwilik.html\">Wat wil ik</a></li>\n" +
                                  "<li><a style=\"text-decoration: none; color: #627482;\"href=\"interesses.html\">Contact</a></li>\n" +
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
                          "  <p class=\"social text-muted mb-0 pb-0 bold-text\"> <span class=\"mx-2\"><a href=\"index.html\"class=\"fa fa-facebook\" style=\"text-decoration: none;\"  aria-hidden=\"true\"></a></span> <span class=\"mx-2\"><a href=\"index.html\" class=\"fa fa-linkedin-square\"style=\"text-decoration: none;\" aria-hidden=\"true\"></a></span> <span class=\"mx-2\"><a href=\"index.html\" class=\"fa fa-twitter\" style=\"text-decoration: none;\" aria-hidden=\"true\"></a></span>\n" +
                        "</div>\n" +
                      "  <div class=\"col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end \">\n" +
                          "  <h6 class=\"mt-55 mt-2 text-muted bold-text\"><b>Gerelateerde links</b></h6><small> <span><i class=\"\" aria-hidden=\"true\"></i></span><a  style=\"text-decoration: none; color: #627482;\"href=\"https://www.corendon.nl/\"> iets</a></small>\n" +
                      "  </div>\n" +
                        "<div class=\"col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 \">\n" +
                            "<h6 class=\"text-muted bold-text\"><b>Gemaakt door:</b></h6><small><span><i  aria-hidden=\"true\"></i></span> Kevin Out</small>\n" +
                        "</div>\n" +
                  "  </div>\n" +
                "</div>\n" +
            "</div>\n" +
        "</footer>\n" +
    "</div>");
});
