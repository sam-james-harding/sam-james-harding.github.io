var navbar = document.createElement("div")

navbar.innerHTML = `
    <a>Home</a>
    <a href="repos.html">GitHub Repositories</a>
    <a>3D Printing</a>
    `

navbar.setAttribute("id", "navbar")
document.body.appendChild(navbar)