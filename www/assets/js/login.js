if (FYSCloud.Session.get("isLogged")) {
    FYSCloud.Session.clear();
    window.location.href = "index.html";
}

window.onload = () => {

    const authentication = FYSCloud.URL.queryString("authentication");
    if (authentication === "true")
        $("#error").text("Je E-mail is geverifieerd!").toggle(true).css("color", "green");

    const passwordReset = FYSCloud.URL.queryString("password-reset");
    if (passwordReset === "true")
        $("#error").text("Je wachtwoord is hersteld!").toggle(true).css("color", "green");

    function login(event) {
        const email = $("#email").val();
        const password = $("#wachtwoord").val();

        if (isEmpty(email) || isEmpty(password))
            return;

        event.preventDefault();

        FYSCloud.API.queryDatabase(
            'SELECT * FROM users WHERE email=?',
            [email]
        ).done(data => {
            if (data.length === 0) {
                $("#error").text("De gegeven E-Mail bestaat niet!").toggle(true);
            } else {
                $("#error").toggle(false);
                const encryptedPassword = CryptoJS.SHA256(password).toString();
                if (data[0].wachtwoord === encryptedPassword) {
                    FYSCloud.Session.set("userId", data[0].userid);
                    FYSCloud.Session.set("isLogged", true);
                    FYSCloud.Session.set("email", data[0].email);
                    FYSCloud.Session.set("name", data[0].voornaam);
                    FYSCloud.Session.set("insertion", data[0].tussenvoegsel);
                    FYSCloud.Session.set("lastName", data[0].achternaam);
                    FYSCloud.Session.set("birthDate", data[0].geboorteDatum);
                    FYSCloud.Session.set("verified", data[0].geverifieerd);


                    if (data[0].geverifieerd === 0) {
                        window.location.href = "registreer.html";
                    } else {
                        if (data[0].telefoonnummer == null) {
                            $(".register").fadeOut(() => $(".contact").fadeIn());
                        } else window.location.href = "index.html";
                    }
                    console.log("ingelogd");
                } else {
                    $("#error").text("De wachtwoord matcht niet met de E-mail adres.").css({"font-size": "18px", "color": "red"}).toggle(true);
                }
            }
        }).fail(reason => {
            console.log(reason);
        });
    }

    function isEmpty(string) {
        return string === "";
    }

    function contact(event) {
        const phoneNumber   = $("#phoneNumber").val();
        const skype         = $("#skype").val();
        const telegram      = $("#telegram").val();

        if (isEmpty(phoneNumber) || !/^(?! )[0-9\s]+$/.test(phoneNumber) || (!isEmpty(skype) && !/^\S+$/.test(skype)) || (!isEmpty(telegram) && !/^\S+$/.test(telegram)))
            return;

        event.preventDefault();

        FYSCloud.API.queryDatabase(
            "UPDATE users SET telefoonnummer=?, skype=?, telegram=?, profielbewerkdatum=? WHERE userid=?",
            [phoneNumber, skype, telegram, convertTime(new Date()), parseInt(FYSCloud.Session.get("userId"))]
        ).done(data => {
            console.log("gelukt");
            window.location.href = "index.html";
        }).fail(reason => {
            console.log("niet gelukt");
            console.log(reason);
        })
    }

    function convertTime(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    }

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener('submit', login);
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener('submit', contact);
}
