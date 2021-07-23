//personal details for description
details = {
    DOB: new Date(2004, 4, 27),
    job: "student",
    location: "Brisbane"
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