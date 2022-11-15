
let skill=document.getElementById("skill");
let experience=document.getElementById("experience");
let education=document.getElementById("education");
let skillText=document.getElementById("skill-text");
let experienceText=document.getElementById("experience-text");
let educationText=document.getElementById("education-text");

skill.onclick=function(){
    skillText.style.display="block";
    experienceText.style.display="none";
    educationText.style.display="none";
}
experience.onclick=function(){
    skillText.style.display="none";
    experienceText.style.display="block";
    educationText.style.display="none";
}
education.onclick=function(){
    skillText.style.display="none";
    experienceText.style.display="none";
    educationText.style.display="block";
}