


let projectName = "Nexora";
let totalPages = 5;
let isResponsive = true;

let pages = ["Home", "About", "Contact", "Sign In", "Sign Up"];

let projectInfo = {
    name: "Nexora",
    type: "Web Application",
    technology: "HTML, Tailwind CSS, JavaScript"
};



document.getElementById("projectName").innerHTML = projectName;
document.getElementById("totalPages").innerHTML = totalPages;
document.getElementById("responsive").innerHTML = isResponsive;
document.getElementById("pageList").innerHTML = pages.join(", ");
document.getElementById("projectType").innerHTML = projectInfo.type;



const showProjectSummary = () => {
    document.getElementById("summary").innerHTML =
        "Welcome to " + projectInfo.name +
        "! This project has " + totalPages +
        " pages and is built using " + projectInfo.technology + ".";
};



document.getElementById("summaryBtn").addEventListener("click", showProjectSummary);