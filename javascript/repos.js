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
    reposHTML = ""

    for (i=0;i<reposData.length;i++) {
        var name  = reposData[i].name
        var description = reposData[i].description
        var link = reposData[i].html_url
        var lang = reposData[i].language

        if (name=="sam-james-harding.github.io") {
            continue;
        }

        reposHTML += `<a href="${link}" target="_blank"><h3>${name}</h3></a>`
        reposHTML += `<i>${lang}</i>`

        if (!description) {
            reposHTML += `<p><i>No description provided</i></p>`
        }
        else {
            reposHTML += `<p>${description}</p>`
        }

    }

    repoDisplay.innerHTML = reposHTML
}
