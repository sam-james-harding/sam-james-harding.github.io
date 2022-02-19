function performHTMLincludes() {
    const includes = document.getElementsByClassName("include");

    for (const include of includes) {
        const includePath = include.getAttribute("path");

        fetch(includePath)
            .then(response => response.text())
            .then(text => {include.innerHTML = text});
    }
}

function secret() {
    const response = prompt("What are you looking for?", "");
    const encrypted = "U2FsdGVkX1/p5z27oggK0fSJqbdfz/clxot1tRFC0VEyrAPNATFr3pnruNakItwMq2BMQL/Ho3ctN/yvzGhUX5bbJmBsHsZau/OhcgQiiYQDcv3FTcFlhXg5++/a7VM4"

    if (response == null) return;

    let url;
    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, response).toString(CryptoJS.enc.Utf8);
        url = new URL(decrypted);
    }
    catch (e) {
        console.log(e);
        alert(`I'm not sure what "${response}" is.`)
        return;
    }

    window.open(url);
}

performHTMLincludes();