let devProfile = {
    fullName: "Martin Aspe",
    age: 24,
    profession: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    isEmployed: true,
    contact: {
    email: "martin@example.com",
    location: "Oberá, Argentina"
    }
};

function introduce(profile) {
    let message = "Hello! My name is " + profile.fullName + ". ";
    message += "I am a " + profile.profession + ". ";
    message += "I use " + profile.skills.join(", ") + ". ";
    message += "I live in " + profile.contact.location + ". ";
    message += "I am " + profile.age + " years old. ";

    if (profile.isEmployed) {
    message += "I have a job right now.";
    } else {
    message += "I'm looking for a job.";
    }

    return message;
}

console.log(introduce(devProfile));
