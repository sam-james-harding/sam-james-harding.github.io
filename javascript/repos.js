//site elements
const repoDisplay = document.getElementById("repoDisplay")

async function getReposList() {
    const url = 'https://api.github.com/users/sam-james-harding/repos';
    const response = await (await fetch(url)).json();
    formatReposList(response);
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

getReposList();