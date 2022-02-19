async function getRepoData() {
    const url = 'https://api.github.com/users/sam-james-harding/repos';
    const response = await fetch(url);
    const responseJSON = await response.json();

    console.log(responseJSON);

    const reposData = responseJSON.map(
        repo => {return {
            "name": repo.name,
            "description": repo.description,
            "link": repo.html_url,
            "lang": repo.language
        }}
    );

    return reposData;
}

function createReposHTML(reposData) {
    let reposHTML = "";

    for (const repo of reposData) {
        if (repo.name == "sam-james-harding.github.io") {
            continue;
        }

        const description = repo.description ? repo.description : "No description available.";
        
        reposHTML += `
            <a href="${repo.link}" target="_blank"><h2>${repo.name}</h3></a>
            <em>${repo.lang}</em>
            <p>${description}</p>
        `;
    }

    return reposHTML;
}

getRepoData().then(
    repoData => {document.getElementById("repos").innerHTML += createReposHTML(repoData);}
);