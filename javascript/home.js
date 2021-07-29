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
    ]
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

function updateStats() {
statsDiv.innerHTML = `
    <ul>
        <li>Seconds since I was born: ${secondsSinceBirth()}</li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    `
}

updateStats()
setInterval(updateStats, 100);