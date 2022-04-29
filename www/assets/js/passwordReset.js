window.onload = () => {

    const id = FYSCloud.URL.queryString("id");
    if (id === undefined) {
        // FYSCloud.URL.redirect("login.html");
    } else {
        FYSCloud.API.queryDatabase("SELECT * FROM password_reset WHERE id=?",
            [id]
        ).done(data => {
            if (data.length !== 0) {
                const mysqlDate = new Date(data[0].request_time.replace(' ', 'T'));
                const currentDate = new Date();
                const minutesDifferentRoundedUp = Math.ceil(getMinutesBetweenDates(mysqlDate, currentDate));
                console.log(minutesDifferentRoundedUp);
                if (minutesDifferentRoundedUp > 30) {
                    removeFromDatabase(id);
                    FYSCloud.URL.redirect("login.html");
                } else {
                    $("#passwordResetForm").toggle(false);
                    $("#passwordResetConfirmForm").toggle(true);
                }
            } else {
                FYSCloud.URL.redirect("login.html");
            }
        }).fail(reason => {
            FYSCloud.URL.redirect("login.html");
            console.log(reason);
        })
    }


    function passwordReset(event) {
        const email = $("#email").val();
        if (email === "")
            return;

        FYSCloud.API.queryDatabase(
            "SELECT * FROM users WHERE email=?",
            [email]
        ).done(data => {
            if (data.length === 0) {
                $("#error").text("De gegeven email bestaat niet!").toggle(true);
            } else {
                const randomId = generateRandomId(255);
                FYSCloud.API.queryDatabase(
                    "INSERT INTO password_reset (id, userid, request_time) VALUES(?, ?, ?)",
                    [randomId, data[0].userid, convertTime(new Date())]
                ).done(() => {
                    $("#error").text("Er is een email gestuurd!").css("color", "green").toggle(true);
                    passwordMail(randomId, data[0].voornaam, data[0].tussenvoegsel, data[0].achternaam, email);
                }).fail(reason => {
                    console.log(reason);
                });
            }
        }).fail(reason => console.log(reason));

        event.preventDefault();
    }

    function passwordMail(randomId, name, insertion, lastName, email) {
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
            subject: "Wachtwoord vergeten - Corendon",
            html: "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <style>\n" +
                "        .container {\n" +
                "            width: 500px;\n" +
                "            border: 5px solid #FF4500;\n" +
                "            margin: 0 auto;\n" +
                "        }\n" +
                "        h3 {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            text-align: center;\n" +
                "            margin-top: 10px;\n" +
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
                "        U heeft onlangs gevraagd om uw wachtwoord opnieuw in te stellen voor uw Corendon-account.\n" +
                "        Klik op de onderstaande knop om het te resetten.\n" +
                "    </div>\n" +
                "    <div class=\"a\" style=\"margin: 0 auto; text-align: center; padding-top: 45px; padding-bottom: 20px;\">\n" +
                "        <a href=\"http://localhost:63342/team-4/FYS-Voorbeeld/password-reset.html?id=" + randomId + "\">Wachtwoord opnieuw instellen</a>\n" +
                "    </div>\n" +
                "    <div class=\"ignore\" style=\"font-size: 15px; font-family: Arial, sans-serif; width: 85%; text-align: center; margin: 0 auto; padding-top: 10px; padding-bottom: 12px; color: #A3A3A3;\">\n" +
                "        Heeft u niet gevraagd om uw wachtwoord opnieuw in te stellen? Dan is het hoogstwaarschijnlijk dat iemand uw email adres perongeluk heeft gebruikt." +
                "        Deze wachtwoord reset is geldig voor 30 minuten." +
                "        U kunt dan deze email negeren.\n" +
                "    </div>\n" +
                "</div>\n" +
                "</body>"
        }).done(function (data) {
            console.log(data);
            // FYSCloud.Session.clear();
        }).fail(function (reason) {
            console.log(reason);
            // FYSCloud.Session.clear();
        });
    }

    function generateRandomId(length) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; i--)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    function passwordResetConfirmed(event) {
        event.preventDefault();
        FYSCloud.API.queryDatabase("SELECT * FROM password_reset WHERE id=?",
            [id]
        ).done(data => {
            const userid = data[0].userid;
            const password = $("#password").val();
            const repeatPassword = $("#repeatPassword").val();
            if (password !== repeatPassword)
                return;

            const hashedPassword = CryptoJS.SHA256(password).toString();
            updatePassword(userid, hashedPassword);
            removeFromDatabase(id, () => {
                FYSCloud.URL.redirect("login.html", {
                    "password-reset": true
                });
            });

        }).fail(reason => console.log(reason));

    }

    function updatePassword(id, password) {
        FYSCloud.API.queryDatabase(
            "UPDATE users SET wachtwoord=? WHERE userid=?",
            [password, id]
        ).fail(reason => console.log(reason));
    }

    function convertTime(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    }

    function getMinutesBetweenDates(startDate, endDate) {
        const diff = endDate.getTime() - startDate.getTime();
        return (diff / 60000);
    }

    function removeFromDatabase(id, callback) {
        FYSCloud.API.queryDatabase(
            "DELETE FROM password_reset WHERE id=?",
            [id]
        ).done(() => callback()).fail(reason => console.log(reason));
    }

    const passwordResetForm = document.getElementById("passwordResetForm");
    passwordResetForm.addEventListener('submit', passwordReset);
    const passwordResetConfirmForm = document.getElementById("passwordResetConfirmForm");
    passwordResetConfirmForm.addEventListener('submit', passwordResetConfirmed);
}