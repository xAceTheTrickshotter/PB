

function fetchStatements(currentStatement) {
    $.getJSON("assets/etc/statements.json", function(data) {
        $("#statement-a").html(data[currentStatement]["statements"]["a"]["statement"]);
        $("#statement-b").html(data[currentStatement]["statements"]["b"]["statement"]);
        $("#statement-description").html(data[currentStatement]["description"])

        $(".progress-bar").css("width", `${(currentStatement / (Object.keys(data).length - 1)) * 100}%`);
    });
}

$(document).ready(function () {
    var userId = FYSCloud.Session.get("userId");

    FYSCloud.API.queryDatabase(
        "SELECT voornaam FROM users WHERE userid = ?",
        [userId]
    ).done(data => {
        console.log(data[0]["voornaam"]);
    }).fail(reason => {
        console.log(reason)
    })

    let preferences = [null, null, null, null];

    let currentStatement = 0;

    fetchStatements(currentStatement);

    $("#statement-a, #statement-b").click((event) => {
        preferences.splice(currentStatement, 1, event.target.id);
        if (currentStatement < 3) {
            currentStatement += 1;
            fetchStatements(currentStatement);
        } else if (currentStatement === 3) {
            console.log(preferences.toString())
            FYSCloud.API.queryDatabase(
                "UPDATE users SET interesses = ? WHERE userid = ?",
                [preferences.toString() ,userId]
            ).done(data => {
                console.log("Success");
            }).fail(reason => {
                console.log(reason)
            })
        } else return false
        fetchStatements(currentStatement);

    });
    $("#button-prev").click(() => {
        if (currentStatement > 0) {
            currentStatement -= 1;
        } else return false;
        fetchStatements(currentStatement);
    });
})