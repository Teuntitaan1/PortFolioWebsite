
$("body").hide()

$(document).ready(function(){
  $("body").show(1000);
  console.log("The page loaded!");
})
function changepage(towhat) {
  $("body").show(1000);
  window.location.href = towhat;
}