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


//-----------------------------------------------------------------------------------------------------------
// Create filter function to run on enter/submit
function runEnter() {
  console.log("in runenter");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry =  d3.select("#country");
  var inputElementShape =  d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  console.log(inputValueDate);
  console.log(inputValueCity);
  console.log(inputValueState);
  console.log(inputValueCountry);
  console.log(inputValueShape);

  //---------------------------------------------------------------------------
  //clear previous results
  tbody.html("");
  var filteredData = tableData
  
  //---------------------------------------------------------------------------
  //only filter your data if you have criteria populated

  if (inputValueDate != ""){
  var filteredData = filteredData.filter(
    (sighting) => sighting.datetime === inputValueDate
  );
  }

  if (inputValueCity != ""){
    var filteredData = filteredData.filter(
      (sighting) => sighting.city === inputValueCity
    );
    }

  if (inputValueState != ""){
  var filteredData = filteredData.filter(
    (sighting) => sighting.state === inputValueState
  );
  }

  if (inputValueCountry != ""){
    var filteredData = filteredData.filter(
      (sighting) => sighting.country === inputValueCountry
    );
    }

  if (inputValueShape != ""){
    var filteredData = filteredData.filter(
      (sighting) => sighting.shape === inputValueShape
    );
    } 
  console.log(filteredData);

  //---------------------------------------------------------------------------
  //populate your filterd data in the html table
  filteredData.forEach(function (filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

//-----------------------------------------------------------------------------------------------------------
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
