//jshint esversion:6
let today = new Date();
let pdate = today.getDate();
let pyear = today.getFullYear();
let pmonth = today.getMonth();


for(y =1920 ; y <=pyear; y++) {
        var optn = document.createElement("OPTION");
        optn.text = y;
        optn.value = y;



        document.getElementById('year').options.add(optn);
}
var d = new Date();
var monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for(m = 0; m <= 11; m++) {
    var optn = document.createElement("OPTION");
    optn.text = monthArray[m];
    // server side month start from one
    optn.value = (m+1);



    document.getElementById('month').options.add(optn);
}

for(d =1 ; d <=31; d++) {
        var optn = document.createElement("OPTION");
        optn.text = d;
        optn.value = d;



        document.getElementById('date').options.add(optn);
}

function myfunction(){
  let y = document.getElementById('year').value;
    let m = document.getElementById('month').value;
    let d = document.getElementById('date').value;

    if ((pyear - y < 13) || (((pyear - y) === 13) && ((pmonth - m) < 0)) || (((pyear - y) === 13) && ((pmonth - m) === 0) && ((pdate - d) < 0))) {
    document.getElementById('failed').innerHTML = '<label id="failed" style="color:red;">* The Age is less than 13</label>';
    } else {
    document.getElementById('failed').innerHTML = '<label id="failed" style="color:Green;"> Successfull</label>';
    }
}
