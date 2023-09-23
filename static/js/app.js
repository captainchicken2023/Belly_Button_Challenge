// Building the metadata variables
function buildmetadata(sample){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let metadata = data.metadata;
      let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      let result = resultArray[0];
      let panel = d3.select("#sample-metadata");
      panel.html("");
      for (key in result){
        panel.append("h6").text(`${key.toUpperCase()}:${result[key]}`);
      };
    });
}

// Begin chart building
function buildcharts(sample){
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let samples = data.samples;
    let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Defining bubble chart parameters
    let bubbleLayout = {
      title: "Belly Button Data Bubble Chart",
      margin: { t:0 }, 
      hovermode: "closest",
      xaxis: { title: "x-axis" },
      margin: { t:30 }
    };

    let bubblechart = [
      {
        x: otu_ids, 
        y: sample_values, 
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth" 
        }
      }
    ];
    Plotly.newPlot("bubble", bubblechart, bubbleLayout);
    
    // Defining bar chart parameters
    let yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
    let barData = [
      {
        y: yticks,
        x: sample_values.slice(0,10).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h", 
      }
    ];
    let barLayout = {
      title: "Belly Button Data Bar Chart",
      margin: { t:30, l:150 } 
    };
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Defining drop down selector properties
function init() {
  let selector = d3.select("#selDataset");
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let sampleNames = data.names;
    for (let i = 0; i < sampleNames.length; i++){
      selector
        .append("option")
        .text(sampleNames[i])
        .property("value", sampleNames[i]);
    };
    let firstSample = sampleNames[0];
    buildcharts(firstSample);
    buildmetadata(firstSample);
  });
}


function optionchange(newSample){
  buildcharts(newSample);
  buildmetadata(newSample);
}

// Initialize the dashboard
init();








