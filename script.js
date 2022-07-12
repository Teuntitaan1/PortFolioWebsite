
//$("body").hide()

$(document).ready(function(){
  //$("body").show(1000);
  console.log("The page loaded!");
  $("#yearsssincebirth").text(dayssincebirth(new Date(), new Date('2/14/2007'), 3));
  $("#yearssinceprogramming").text(dayssincebirth(new Date(), new Date('3/15/2020'), 1));
})

function changepage(towhat) {
  $("body").show(1000);
  window.location.href = towhat;
}

function dayssincebirth(firstdate, secondate, roundamount) {
    let difference = firstdate.getTime() - secondate.getTime();
    // converts it from seconds to years
    let TotalDays = (difference / (1000 * 3600 * 24 * 365)).toFixed(roundamount);
    
    return TotalDays;
}
