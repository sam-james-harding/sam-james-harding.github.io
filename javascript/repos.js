//api call
const Http = new XMLHttpRequest()
const url = 'https://api.github.com/users/sam-james-harding/repos'
Http.open("GET", url)
Http.send()

//site elements
const repoDisplay = document.getElementById("repoDisplay")

//api recieve
Http.onreadystatechange=(e)=>{
    var response = Http.responseText
    var reposData = JSON.parse(response)
    formatReposList(reposData)
}

//create repos list element
function formatReposList(reposData) {
    //creating html for div insert
    reposHTML = `<h1>My GitHub Repositories</h1>`

    for (i=0;i<reposData.length;i++) {
        var name  = reposData[i].name
        var description = reposData[i].description
        var link = reposData[i].html_url

        if (name=="sam-james-harding.github.io") {
            continue;
        }

        reposHTML += `<a href="${link}"><h3>${name}</h3></a>`

        if (!description) {
            reposHTML += `<p><i>No description provided</i></p>`
        }
        else {
            reposHTML += `<p>${description}</p>`
        }

    }

    repoDisplay.innerHTML = reposHTML
}
