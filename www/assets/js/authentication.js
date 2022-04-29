window.onload = () => {

    const id = FYSCloud.URL.queryString("id");
    const parsedId = parseInt(id);

    if(Number.isNaN(parsedId)) {
        FYSCloud.URL.redirect("index.html");
        return;
    }

    FYSCloud.API.queryDatabase(
        "UPDATE users SET geverifieerd=? where userid=?",
        [1, parsedId]
    ).done(() => {
        FYSCloud.Session.clear();
        FYSCloud.URL.redirect("login.html", {
            authentication: true
        });
    }).fail(reason => console.log(reason));

}