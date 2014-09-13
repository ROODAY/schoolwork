$(document).ready(function(){
	$("#colorblind").lettering();

	nv.addGraph(function() {
      var chart = nv.models.pieChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .showLabels(true)
          .labelType("percent");

        d3.select("#bdbv svg")
            .datum(bdbvdata())
            .transition().duration(350)
            .call(chart);

    	nv.utils.windowResize(chart.update);

      return chart;
    });
    function bdbvdata() {
      return  [
          { 
            "label": "Executed for Black victim",
            "value" : 76
          } , 
          { 
            "label": "Not Executed for Black victim",
            "value" : 346
          },
          { 
            "label": "Executed for white victim",
            "value" : 21
          } , 
          { 
            "label": "Not Executed for white victim",
            "value" : 78
          }
        ];
    }

    nv.addGraph(function() {
	    var chart = nv.models.multiBarChart()
	      .transitionDuration(350)
	      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
	      .rotateLabels(0)      //Angle to rotate x-axis labels.
	      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
	      .groupSpacing(0.1)    //Distance between each group of bars.
	    ;

	    d3.select('#bwsentences svg')
	        .datum(allexecutionsdata())
	        .call(chart);

	    nv.utils.windowResize(chart.update);

	    return chart;
	});

	function allexecutionsdata() {
		return [
				{
		      key: 'Black Defendants with Black Victims',
		      values: [
			    { x: "Executed", y: 76},
			    { x: "Not Executed", y: 346}
			  ]
		    },
		    {
		      key: 'Black Defendants with White Victims',
		      values: [
			    { x: "Executed", y: 21},
			    { x: "Not Executed", y: 78}
			  ]
		    },
		    {
		      key: 'White Defendants with Black Victims',
		      values: [
			    { x: "Executed", y: 1},
			    { x: "Not Executed", y: 24}
			  ]
		    },
		    {
		      key: 'White Defendants with White Victims',
		      values: [
			    { x: "Executed", y: 17},
			    { x: "Not Executed", y: 104}
			  ]
		    }
		];
	}

});