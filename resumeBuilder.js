/*
This is empty on purpose! Your code to build the resume will go here.
 */
// // To change the HTMLheaderRole from the helper.js file
//
// var role = "Web Development";
// var formattedRole = HTMLheaderRole.replace("%data%",role);
// $("#header").prepend(formattedRole);
//To change the HTMLheaderName in the helper.js file
// var name = "Trishla Jain";
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").prepend(formattedName);
var bio = {
    "name": "Trishla Jain",
    "role": "Web developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "trishh088@gmail.com",
        "github": "trishh088",
        "location": "New YOrk"
    },
    "welcomeMessage": "This is my Online resume",
    "skills": [
        "awesome",
        "agile",
        "Matlab",
        "HTML"
    ],
    "biopic": "images/biopic-197_small.png",
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedskills);
    }

};

bio.display();




//WORK SECTION
var work = {
    "jobs": [{
            "employer": "Ericsson",
            "title": "Trainee",
            "location": "New york",
            "dates": "2017",
            "description": "work contains an array of jobs.work contains an array of jobs.work contains an array of jobs.work contains an array of jobs.work contains an array of jobs.work contains an array of jobs.work contains an array of jobs."
        },
        {
            "employer": "Job2",
            "title": "Something That i will be.",
            "location": "New Jersey",
            "dates": "2019",
            "description": " Maybe Coding coding coding,Maybe Coding coding coding,Maybe Coding coding coding,Maybe Coding coding coding,Maybe Coding coding coding,Maybe Coding coding coding,Maybe Coding coding coding"
        }
    ]
};
// forEach loop
work.display = function() {
    work.jobs.forEach(function(workFun, job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        console.log(workFun);
    });

};
work.display();

//PROJECT SECTION
var projects = {
    "projects": [{
        "title": "Project1",
        "dates": "2017",
        "description": "Project 1 la la la",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSK8sHWfll_QpVuuKjbKYIumVszDohUPf8KsV6HRTTZM5qEYf",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSK8sHWfll_QpVuuKjbKYIumVszDohUPf8KsV6HRTTZM5qEYf",
            "https://media.giphy.com/media/FBLMvSurgPpNS/giphy.gif"
        ]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(projectFun, project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            projects.projects[project].images.forEach(function(pro, image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                    // var hyperlink = HTMLprojectImage.replace("#", projects.projects[project].images[2]);
                    // $(".project-entry:last").append(hyperlink);
                }
            );
        }
    });
};
projects.display();


//EdUCATION SECTION

var education = {
    "schools": [{
            "name": "college",
            "location": "New york",
            "degree": "Btech",
            "majors": [
              "ENC"],
            "dates": "2013-2017",
            "url": "google.com"
        },
        {
            "name": "high school",
            "location": "Mumbai",
            "degree": "high school",
            "majors": [
              "science"],
            "dates": "2011-2013",
            "url": "google.com"
        },
    ],
    "onlineCourses": [{
        "title": "Front end Web Development",
        "school": "Udacity",
        "dates": "2017-Present",
        "url": "udacity.com"
    }]
};

education.display = function() {
    education.schools.forEach(function(eduFun, edu) {
        $("#education").append(HTMLschoolStart);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedDegreeName = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedDegreeName);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedMajor);
    });
    education.onlineCourses.forEach(function(onlineFun, online) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedSchoolTitle = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedSchoolTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedUrl);

    });
};
education.display();


$("#mapDiv").append(googleMap);

//LOGGING CLICKS
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

//END




// function displayWork() {
// for(job in work.jobs){
//   //create new div for work experience
//   $("#workExperience").append(HTMLworkStart);
//   //concat employer and title
//   var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//   var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
//   var formattedEmployerTitle = formattedEmployer + formattedTitle;
//   $(".work-entry:last").append(formattedEmployerTitle);
//   var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
//   $(".work-entry:last").append(formattedDates);
//   var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
//   $(".work-entry:last").append(formattedDescription);
//
// }
// }
// displayWork();
