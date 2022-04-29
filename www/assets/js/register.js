window.onload = () => {

    if (FYSCloud.Session.get("isLogged")) {

        FYSCloud.API.queryDatabase(
            'SELECT * FROM users WHERE userid=?',
            [FYSCloud.Session.get("userId")]
        ).done(d => {
            if(d[0].geverifieerd === 0) {
                $(".register").hide();
                $(".authentication").show();
                authentication(d[0].email);
            } else {
                FYSCloud.URL.redirect("index.html");
            }
        }).fail(reason => console.log(reason));
    }

    function register(event) {
        const gender            = $("#gender :selected").val();
        const name              = $("#name").val();
        let insertion           = document.getElementById("insertion").value;
        if (insertion === "")
            insertion = null;
        const lastName          = $("#lastName").val();
        const email             = $("#email").val();
        const password          = $("#password").val();
        const repeatPassword    = $("#repeatPassword").val();
        const birthDate         = $("#datepicker").val();
        const agreement         = $("#agreement").is(":checked");

        if (isEmpty(gender) || isEmpty(name) || isEmpty(insertion) || isEmpty(lastName) || isEmpty(email) &&
            isEmpty(password) || isEmpty(repeatPassword) || !agreement)
            return;

        if(password !== repeatPassword)
            return;

        if (!isEmpty(insertion) && insertion != null && insertion.length < 2)
            return;

        event.preventDefault();

        // http://localhost:63342/team-4/FYS-Voorbeeld/authentication.html?id=70

        FYSCloud.API.queryDatabase(
            'SELECT email FROM users WHERE email=?',
            [email]
        ).done(data => {
            if (data.length === 0) {
                $('#error').toggle(false);
                console.log("bestaat niet");
                const date = convertTime(new Date());
                const hash = CryptoJS.SHA256(password).toString();
                FYSCloud.API.queryDatabase(
                    "INSERT INTO users (aanhef, voornaam, tussenvoegsel, " +
                    "achternaam, email, wachtwoord, geboortedatum," +
                    "registratiedatum, profielbewerkdatum) " +
                    "VALUES(?,?,?,?,?,?,?,?,?)",
                    [gender, name, insertion, lastName, email, hash, birthDate.split("/").reverse().join("-"), date, date]
                ).done(d => {
                    console.log(d);
                    $(".register").fadeOut(() => $(".authentication").fadeIn());
                    authentication(email, d, name, insertion, lastName)
                    validationMail(d.insertId);
                }).fail(f => console.log(f));

            } else {
                console.log("bestaat wel");
                $('#error').toggle(true);
            }
        }).fail(reason => {
            console.log(reason);
        });
    }

    function authentication(email) {
        const message = $(".message");
        message.text(`Er is een bevestigingsmail naar ${email} gestuurd. Klik op de bevestigingslink in de e-mail om uw account te activeren.`)
            .html(message.html().replace(email, `<strong>${email}</strong>`));
    }

    function convertTime(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    }

    function isEmpty(string) {
        return string === "";
    }

    function validationMail(id, name, insertion, lastName, email) {
        let fullName = name;
        if (insertion == null)
            fullName += " " + lastName;
        else
            fullName += " " + insertion + " " + lastName;
        FYSCloud.API.sendEmail({
            from: {
                name: "Corendon",
                address: "group@fys.cloud"
            },
            to: [
                {
                    name: fullName,
                    address: email
                }
            ],
            subject: "Account verifiëren - Corendon",
            // html: "<h1>Hello " + fullName + "!</h1><p>This is an email :)</p>"
            html: "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <style>\n" +
                "        .container {\n" +
                "            width: 40%;\n" +
                "            border: 5px solid #FF4500;\n" +
                "            margin: 0 auto;\n" +
                "        }\n" +
                "        h3 {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            text-align: center;\n" +
                "        }\n" +
                "        .text {\n" +
                "            width: 80%;\n" +
                "            margin: 0 auto;\n" +
                "            text-align: center;\n" +
                "            font-family: Arial, sans-serif;\n" +
                "        }\n" +
                "        a {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            border: 2px solid #FF4500;\n" +
                "            border-radius: 5px;\n" +
                "            text-decoration: none;\n" +
                "            font-size: 20px;\n" +
                "            color: white;\n" +
                "            background-color: red;\n" +
                "            padding: 12px 30px 12px 30px;\n" +
                "        }\n" +
                "        img {\n" +
                "            width: 20%;\n" +
                "            height: 20%;\n" +
                "            margin: 0 auto;\n" +
                "            display: block;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "\n" +
                "<img src=\"https://images.corendon.nl/NL//headers/Logo_Corendon_2017_RGB.jpg\" alt=\"Corendon\">\n" +
                "\n" +
                "<div class=\"container\">\n" +
                "    <h3>Hey " + fullName + ",</h3>\n" +
                "    <div class=\"text\">\n" +
                "        Je hebt succesvol een Corendon account aangemaakt.\n" +
                "        Klik op de onderstaande knop om je email te verifiëren en je registratie te voltooien.\n" +
                "    </div>\n" +
                "    <div class=\"a\" style=\"margin: 0 auto; text-align: center; padding-top: 45px; padding-bottom: 20px;\">\n" +
                "        <a href=\"https://is109-4.fys.cloud/authentication.html?id=" + id + "\">Verifieer je email</a>\n" +
                "    </div>\n" +
                "    <div class=\"ignore\" style=\"font-size: 15px; font-family: Arial, sans-serif; width: 85%; text-align: center; margin: 0 auto; padding-top: 10px; padding-bottom: 12px; color: #A3A3A3;\">\n" +
                "        Heb je geen Corendon account aangemaakt? Dan is het hoogstwaarschijnlijk dat iemand jouw email adres perongeluk heeft gebruikt.\n" +
                "        Je kan dan deze email negeren.\n" +
                "    </div>\n" +
                "</div>\n" +
                "</body>"
        }).done(function (data) {
            console.log(data);
            FYSCloud.Session.clear();
        }).fail(function (reason) {
            console.log(reason);
            FYSCloud.Session.clear();
        });
    }

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener('submit', register);
}

