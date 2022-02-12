//personal details for description
details = {
    DOB: new Date(2004, 4, 27),
    job: "student",
    location: "Brisbane",
    hobbies: [
        "Programming",
        "3D Printing",
        "Rock Climbing",
        "DIY"
    ],
    programmingStartYears: {
        "python": 2018,
        "c++": 2020,
        "javascript": 2020,
        "dart": 2021,
        "c": 2021
    }
}

//functions
function getCurrentAge() {
    const birthDate = details.DOB;
    let currentDate = new Date();

    if (birthDate.getMonth() > currentDate.getMonth()) {
        return currentDate.getFullYear() - birthDate.getFullYear() - 1;
    }
    else if (birthDate.getMonth() == currentDate.getMonth()) {
        if (birthDate.getDate() > currentDate.getDate()) {
            return currentDate.getFullYear() - birthDate.getFullYear() - 1;
        }
    }

    return currentDate.getFullYear() - birthDate.getFullYear();
}

function secondsSinceBirth() {
    const birthDate = details.DOB;
    let currentDate = new Date();

    let difference = currentDate.getTime() - birthDate.getTime();

    let seconds = Math.floor(difference/1000)

    return seconds;
}

async function numberOfRepos() {
    if (!this.length) {
        const url = 'https://api.github.com/users/sam-james-harding/repos';
        const response = await (await fetch(url)).json();

        this.length = response.length;
        return this.length;
    }
    else {
        return this.length;
    }
}

function numBlinks() {
    const blinksPerDay = 28800;
    const daysSinceBirth = secondsSinceBirth()/86400;
    return Math.floor(blinksPerDay*daysSinceBirth);
}

//setting element values
//age
const ageSpan = document.getElementById("age");
const age = getCurrentAge();

if (age == 18) {
    ageSpan.textContent = "an " + age;
}
else {
    ageSpan.textContent = "a " + age;
}

//job
const jobSpan = document.getElementById("job")
jobSpan.textContent = details.job

//location
const locationSpan = document.getElementById("location");
locationSpan.textContent = details.location;

//hobbies
const hobbiesDiv = document.getElementById("hobbies");

var hobbiesListHTML = '';
hobbiesListHTML += '<ul>';

for (var i = 0; i < details.hobbies.length; i++) {
    hobby = details.hobbies[i];
    hobbiesListHTML += `<li>${hobby}</li>`;
}

hobbiesListHTML += "</ul>";
hobbiesDiv.innerHTML = hobbiesListHTML;

//stats
const statsDiv = document.getElementById("stats");

async function updateStats() {
    statsDiv.innerHTML = `
        <ul>
            <li>Seconds since I was born: ${secondsSinceBirth()}</li>
            <li>Number of my public GitHub repos: ${await numberOfRepos()}</li>
            <li>Number of times I've (probably) blinked: ${numBlinks()}</li>
        </ul>
        `
}

updateStats();
setInterval(updateStats, 100);

// super secret section
function secretStuff() {
    const password = document.getElementById("secretpassword").value

    const encrypted = "U2FsdGVkX1/p5z27oggK0fSJqbdfz/clxot1tRFC0VEyrAPNATFr3pnruNakItwMq2BMQL/Ho3ctN/yvzGhUX5bbJmBsHsZau/OhcgQiiYQDcv3FTcFlhXg5++/a7VM4"

    let url;
    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);
        url = new URL(decrypted);
    }
    catch (_) {
        return;
    }

    window.open(url);
}