// Tell to prof:
// Instead of new Array() I'll use the faster []

function myFunction(){
    var daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

    daysOfWeek.push("Saturday");
    daysOfWeek.unshift("Sunday");

    // Tell to prof:
    // Instead of form of eval "document.write" I'll use String concatenation:
    var table = "<table border=1><tr>";
    for (var i=0; i < daysOfWeek.length; i++){
        table += "<th>"+daysOfWeek[i]+"</th>";
        // NOTE:
        // if inside this loop we're creating the 7 <th>s headings,
        // than we cannot assert another inner loop here
        // to create any other part of the calendar,
        // cause we're inside the scope of the table headings.
        // Here we're still populating the first <tr> row!!
    }
    table += "</tr>"; // <<< just here we're finally done with the Days headings


    // OK, now the homework: add to table rows / and 30 cells 
    var days = 30; // How many days we need?
    var appendEmptyDays = 7 - (days+7) % 7; // How many empty cells we miss?

    table += "<tr>";

    // CREATE DAYS (and WEEKS)
    for(var i=1; i<=days; i++){
      table += "<td>"+ i +"</td>";
      if(i%7===0) table += "</tr><tr>"; // Add a new week row?
    }

    // APPEND EMPTY CELLS
    for(var i=0; i<appendEmptyDays; i++){
      table += "<td></td>";
    }

    table += "</tr></table>";
    // Done my string concatenation, I'll now use innerHTML
    document.getElementById("calender").innerHTML = table;

}