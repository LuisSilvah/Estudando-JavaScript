anychart.onDocumentReady(function () {
	// set chart theme
anychart.theme('darkBlue');
      // create data set on our data
      var dataSet = anychart.data.set([
        ['Jan', 51],
        ['Feb', 91],
        ['Mar', 34],
        ['Apr', 47],
        ['May', 63],
        ['June', 58],
        ['July', 56],
        ['Aug', 77],
        ['Sep', 99],
        ['Oct', 106],
        ['Nov', 88],
        ['Dec', 56]
      ]);

      // map data for the first series, take x from the zero column and value from the first column of data set
      var seriesData = dataSet.mapAs({ x: 0, value: 1 });
      // create line chart
      var chart = anychart.line();
      // turn on chart animation
      chart.animation(true);
      // turn on the crosshair
      chart
        .crosshair()
        .enabled(true)
        .yLabel({
          enabled: false
        })
        .yStroke(null);
      // set chart title text settings
      chart.title('Step Line Chart (backward)');

      // create stepLine series with mapped data
      chart
        .stepLine()
        .data(seriesData)
        .name('Value')
        .stepDirection('backward');

      // set container id for the chart
      chart.container('Graph_Covid');
      // initiate chart drawing
      chart.draw();
    });