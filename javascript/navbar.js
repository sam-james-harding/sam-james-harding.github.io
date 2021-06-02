//header
var header = document.createElement("div")
header.innerHTML = "<h1>Sam Harding</h1>"

header.setAttribute("id", "header")
document.body.appendChild(header)

//navbar
var navbar = document.createElement("div")
var title = window.location.pathname.split("/").pop()

const pages = [
    ["Home", "home.html"],
    ["GitHub Repositories", "repos.html"],
    ["3D Printing", "3dprinting.html"],
    ["Electronics", "electronics.html"],
    ["Games", "games.html"]
]

navbarHTML = ``
for (i=0; i<pages.length; i++) {
    var name = pages[i][0]
    var link = pages[i][1]

    if (link == title) {
        navbarHTML += `<a href="${link}" style="background-color:rgb(87, 167, 115); color: white;">${name}</a>`
    } else {
        navbarHTML += `<a href="${link}">${name}</a>`
    }

    
}

navbar.innerHTML = navbarHTML
navbar.setAttribute("id", "navbar")

header.appendChild(navbar)