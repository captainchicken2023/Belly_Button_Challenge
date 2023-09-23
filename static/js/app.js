// Use the D3 library to read in samples.json from the URL 

function buildmetadata(bbdata){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let metadata = data.metadata;
      let resultArray = metadata.filter(sampleObject => sampleObject.id == sample);
      let result = resultArray[0];
      let panel = d3.select("#sample-metadata");
    }
}


const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});



// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];

  Plotly.newPlot("Top 10 OTUs", data);
}
// Use sample_values as the values for the bar chart.

// Use otu_ids as the labels for the bar chart.

// Use otu_labels as the hovertext for the chart.


// Create a bubble chart that displays each sample.

// Use otu_ids for the x values.

// Use sample_values for the y values.

// Use sample_values for the marker size.

// Use otu_ids for the marker colors.

// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.

// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. 


