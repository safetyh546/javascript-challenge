// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);



// Create filter function to run on enter/submit
function runEnter() {
  console.log("in runenter");

  // Clear table and message if it exists
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(
    (sighting) => sighting.datetime === inputValue
  );

  console.log(filteredData);

  filteredData.forEach(function (filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}


//ensure table is empty
tbody.html("");

//fill the table for initial page load
tableData.forEach(function (tableData) {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
