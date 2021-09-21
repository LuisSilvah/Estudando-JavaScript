anychart.onDocumentReady(function () {

  // create data
  var data = [
    {x: "A", value: 637166},
    {x: "B", value: 721630},
    {x: "C", value: 148662},
    {x: "D", value: 78662},
    {x: "B", value: 721630},
    {x: "C", value: 148662},
    {x: "D", value: 78662},
    {x: "E", value: 90000}
  ];

  // create a pie chart and set the data
  var chart = anychart.pie(data);

  /* set the inner radius
  (to turn the pie chart into a doughnut chart)*/
  chart.innerRadius("30%");

  // set the chart title
  chart.title("Doughnut Chart: Basic Sample");
  
    // set container id for the chart
    chart.container('Pizza_Covid');
    // initiate chart drawing
    chart.draw();
});
