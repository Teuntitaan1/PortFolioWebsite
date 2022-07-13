
//hides the page so that the animation can play
$("body").hide()

//RandomProjectGenerator Variables
const MinProject = 1;
const MaxProject = 3;

$(document).ready(function(){
  $("body").show(1000);
  console.log("The page loaded!");
  $("#yearsssincebirth").text(dayssincedate(new Date(), new Date('2/14/2007'), 3));
  $("#yearssinceprogramming").text(dayssincedate(new Date(), new Date('3/15/2020'), 1));
  LoadProject();
})

//changes the page with an animation
function changepage(towhat) {
  $("body").show(1000);
  window.location.href = towhat;
}
// gets the year difference between 2 dates 
function dayssincedate(firstdate, secondate, roundamount) {
    let difference = firstdate.getTime() - secondate.getTime();
    // converts it from seconds to years
    let TotalDays = (difference / (1000 * 3600 * 24 * 365)).toFixed(roundamount);
    
    return TotalDays;
}

//toggles a random project div in the bigger MyprojectsDiv
function LoadProject() {
    
    NewProject = "#project" + getRandomInteger(MinProject, MaxProject);
    console.log(NewProject);
    for (i = 1; i <= MaxProject; i++) {
        
        Element = "#project"+i

        if (Element != NewProject) {
          $(Element).hide()
        } 
        else {
          $(Element).show()
        }
    }
    
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}