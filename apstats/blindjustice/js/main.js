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
});