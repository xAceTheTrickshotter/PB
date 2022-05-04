$(document).ready(() => {
    function getPageName(url) {
        var index = url.lastIndexOf("/") + 1;
        var filenameWithExtension = url.substr(index);
        var filename = filenameWithExtension.split(".")[0];

        filename = filename.split("?")[0];

        return filename;
    }


    //alle teksten die op de pagina komen
const branding_poster_tekst = "In mijn gemaakte branding poster is te zien wie ik ben op een compacte manier. Het is eigenlijk ook niet een poster maar een website die ik heb gebouwd. Dit heb ik zo gemaakt omdat coderen iets is waar ik best wel wat tijd in heb gestoken en , al ben ik er niet heel goed in , ik nog steeds trots vind in mijn vermogen om code te snappen en schrijven."
const wie_ben_ik_tekst = ""


    //De teksten op de site zetten
$(".brandingposter").append ("<h1 class = teksten> " +  branding_poster_tekst + "</h1> ");













})
