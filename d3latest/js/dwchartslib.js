function redrawchart(chart,id,data) {
    if (chart.search('Column') == -1 && chart.search('Bar') == -1 && chart.search('Calender') == -1 && chart.search('WeekHour2D') == -1) {
        if (chart == 'Bilevel2D' && zoomcontent != undefined) {
           d3charts(chart, id, data,zoomcontent);
          
        }
        else { 
         var savelegends = d3.selectAll(id + ' path[data-visibilitypath = \'false\']')[0];
            if (savelegends.length == 0)
                d3charts(chart, id, data);
            else {
                var saveleg = [];
                for (i = 0; i < savelegends.length; i++) {
                    saveleg.push(savelegends[i].getAttribute('class').split(' ')[0]);
                };
                d3charts(chart, id, data);
                for (i = 0; i < saveleg.length; i++) {
                    d3.selectAll(id + ' .' + saveleg[i]).style('display', 'none').attr('data-visibilitypath', 'false');
                };
            }
        }
        
    }
    else {
        var savelegends = d3.selectAll(id + ' rect[data-visibility = \'false\']')[0];
        if (savelegends.length == 0)
            d3charts(chart, id, data);
        else {
            var saveleg = [];
            for (i = 0; i < savelegends.length; i++) {
                saveleg.push(savelegends[i].getAttribute('class').split(' ')[0]);
            };
            d3charts(chart, id, data);
            for (i = 0; i < saveleg.length; i++) {
                if(chart.search('Calender') == -1 && chart != 'WeekHour2D')
                d3.selectAll(id + ' .' + saveleg[i]).style('display', 'none').attr('data-visibility', 'false');
                else
                 d3.selectAll(id + ' .' + saveleg[i]).style('fill', 'none').attr('data-visibility', 'false');
            };
        }
        
        
    }
}

window.onresize = function (event) {

    d3charts("Line2D", "#linechart", linedata);
    //redrawchart("MultiLine2D","#Multiline", Multilinedata); // For Multiline call Redraw Function to Save the legends interactions
    redrawchart("MultiLine2D","#Multilinealone", Multilinealonedata);
    redrawchart("MultiLine2D","#Multilinealone2", Multilinealonedata);
    redrawchart("Column2D", "#column", columndata);
     redrawchart("DoubleColumn2D","#doublecolumn", doublecolumndata);
      redrawchart("ColumnRange2D","#columnrange", columnrange);
      redrawchart("StackedBar2D","#stackedbar", stackedbar);
      redrawchart("StackedColumn2D","#stackedcolumn", stackedcolumn);
          d3charts("Bubble2D", "#bubble", bubbledata);
              redrawchart("BarLine2D", "#barline", barlinedata);
              /*  redrawchart("CalenderMultiView2D", "#calendermultiview", calenderMultidata);*/
                 redrawchart("CalenderSingleView2D", "#calendersingleview", calenderSingledata);
                redrawchart("Bilevel2D", "#bilevel", bileveldata);
                    redrawchart("WeekHour2D", "#weekhour", hourlydata);
                    d3charts("Pricing2D", "#pricing", pricing);
                    d3charts("MultiDonut2D", "#multidonut", multipledonut);
                    d3charts("CustomBar2D", "#custombar", custombar);
                    d3charts("CustomColumn2D", "#customcolumn", customcolumn);
                    redrawchart("GroupBar2D", "#groupbar", groupbar);
                        redrawchart("GroupBar2D", "#groupbarneg", groupbarneg);
                             redrawchart("MultiSeriesRange2D", "#multiseriesrange", multiseriesrange);
                             d3charts("BoxPlot2D", "#boxplot", boxplot);
                             d3charts("CustomVerticalBar2D", "#customverticalbar", customverticalbar);
                             redrawchart("GroupBar2D", "#groupbarcustom", groupbarcustom);
};

var linedata = {
    "chart": {
        "caption": "Line Chart", //Name of the chart Header
        "captionColor":"black", // Color of the Chart Header
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#008ee4","#E94C3D","#26AD5E","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"] // Pallette colors for 30 values
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },
     "click":function(data){
    alert(data.label + ' : '+data.value);},
    "data":  [ // Specify in label and value pairs for Single Type Charts.Specify category,label and value for Multi type charts
        {

            "label": "01-08-15",
            "value": 56.123123
        },
        {
            "label": "02-08-15",
            "value": 23
        },
        {
            "label": "03-08-15",
            "value": 87

        }
        ,
        {
            "label": "04-08-15",
            "value": 10
        }
        ,
        {
            "label": "05-08-15",
            "value": 67
        }
        ,
        {
            "label": "06-08-15",
            "value": 50
        }
        ,
        {
            "label": "07-08-15asdddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "value": 66
        }
        ,
        {
            "label": "08-08-15asddddddddddddddddddddddddddddddddd",
            "value": 0
        },
        {
            "label": "09-08-15adsasdsadasdasdasdasdsdasdsadasz",
            "value": 98
        }
        ,
        {
            "label": "10-08-15",
            "value": 55
        }
        ,
        {
            "label": "11-08-15asddddddddddddddddddddddddddddddddd",
            "value": 88
        }
        ,
        {
            "label": "12-08-15",
            "value": 44
        } ,
        {
            "label": "13-08-15saddddddddddddddddddddddddddddddddddddd",
            "value": 55
        } ,
        {
            "label": "14-08-15",
            "value": 89
        },
        {
            "label": "15-08-15",
            "value": 23
        },
        {
            "label": "16-08-15",
            "value": 33
        },
        {
            "label": "17-08-15",
            "value": 0
        },
        {
            "label": "18-08-15",
            "value": 0

        }
        ,
        {
            "label": "19-08-15",
            "value": 11
        }
        ,
        {
            "label": "20-08-15",
            "value": 45
        }
        ,
        {
            "label": "21-08-15",
            "value": 76
        }
        ,
        {
            "label": "22-08-15",
            "value": 77
        }
        ,
        {
            "label": "23-08-15",
            "value": 5
        },
        {
            "label": "24-08-15",
            "value": 0
        }
        ,
        {
            "label": "25-08-15asdddddddddddddddddd",
            "value": 80
        }
        ,
        {
            "label": "26-08-15",
            "value": 3
        }
        ,
        {
            "label": "27-08-15",
            "value": 12
        } ,
        {
            "label": "28-08-15",
            "value": 6
        } ,
        {
            "label": "29-08-15",
            "value": 89

        },
        {
            "label": "30-08-15asdddddddddddddddddddddddddddddddddddddddddddddddddd",
            "value": 23.345

        }


        

    ]
}
// Single Type chart: Line2D,Curve2D,StepLine2D,Scatter2D
// Area Type Chart: Area2D,StepArea2D,CurveArea2D
// Multi Type Chart: MultiLine2D,MultiArea2D,MultiScatter2D,MultiStepLine2D,MultiStepArea2D,MultiCurve2D,MultiCurveArea2D
//d3charts(ChartType,Id,Data) 
//where ChartType is one of the options mentioned above;
// Id is the Div Id where the chart to be placed;
// Data is the above formed Data
    d3charts("Line2D", "#linechart", linedata);

var Multilinealonedata = {  
   "chart":{  
      "caption":"Price Gap with Lowest Priced Competitor",
      "captionColor":"black",
      "yaxisname":"",
      "showlegend":true,
      "tickinterval":1,
      "tooltipheader":"Date",
      "slant":false,
      "slantdegree":"90",
      "suffixsymbol":'%',
      "credits":{  
         "text":" ",
         "color":"#666",
         "imageurl":"../images/logo.png"
      },
      "pallattecolor":[  
         "#008ee4",
         "#E94C3D",
         "#26AD5E",
         "#E77E22",
         "#2B80B9",
         "#F2C40F",
         "#2D3E50",
         "#5CADE2",
         "#BE3A2B",
         "#7E8C8D",
         "#9A59B5",
         "#34495E",
         "#BEC3C7",
         "#EC0000",
         "#BE3243",
         "#FF3243",
         "#BE0043",
         "#BE32FF",
         "#CC3243",
         "#BECC43",
         "#BE324C",
         "#f8bd19",
         "#e44a00",
         "#008FF4",
         "#33bdda",
         "#6baa01",
         "#583e78"
      ]
   },
   "export":{  
      "showexport":true,
      "filename":"Price Gap",
      "format":[  
         "Download",
         "jpeg",
         "png"
      ]
   },
   "data":[
{
label: "2016-6-17",
category: "Jabong",
value: 0
},
{
label: "2016-6-17",
category: "Amazon",
value: 0
},
{
label: "2016-6-17",
category: "Paytm",
value: 0
},
{
label: "2016-6-17",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-17",
category: "Flipkart",
value: 0
},
{
label: "2016-6-18",
category: "Jabong",
value: 0
},
{
label: "2016-6-18",
category: "Amazon",
value: 0
},
{
label: "2016-6-18",
category: "Paytm",
value: 0
},
{
label: "2016-6-18",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-18",
category: "Flipkart",
value: 0
},
{
label: "2016-6-19",
category: "Jabong",
value: 0
},
{
label: "2016-6-19",
category: "Amazon",
value: 0
},
{
label: "2016-6-19",
category: "Paytm",
value: 0
},
{
label: "2016-6-19",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-19",
category: "Flipkart",
value: 0.11198208286674
},
{
label: "2016-6-20",
category: "Jabong",
value: 0
},
{
label: "2016-6-20",
category: "Amazon",
value: 0
},
{
label: "2016-6-20",
category: "Paytm",
value: 0
},
{
label: "2016-6-20",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-20",
category: "Flipkart",
value: 0
},
{
label: "2016-6-21",
category: "Jabong",
value: 0
},
{
label: "2016-6-21",
category: "Amazon",
value: 0
},
{
label: "2016-6-21",
category: "Paytm",
value: 0
},
{
label: "2016-6-21",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-21",
category: "Flipkart",
value: 0.11198208286674
},
{
label: "2016-6-22",
category: "Jabong",
value: 0
},
{
label: "2016-6-22",
category: "Amazon",
value: 0
},
{
label: "2016-6-22",
category: "Paytm",
value: 0
},
{
label: "2016-6-22",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-22",
category: "Flipkart",
value: 0
},
{
label: "2016-6-23",
category: "Jabong",
value: 0
},
{
label: "2016-6-23",
category: "Amazon",
value: 0
},
{
label: "2016-6-23",
category: "Paytm",
value: 0
},
{
label: "2016-6-23",
category: "SnapDeal",
value: 0
},
{
label: "2016-6-23",
category: "Flipkart",
value: 0
}
]
}


d3charts("MultiLine2D","#Multilinealone", Multilinealonedata);





 var Multilinedata = {  
   "chart":{  
      "caption":"Price Gap with Lowest Priced Competitor",
      "captionColor":"black",
      "yaxisname":"",
      "showlegend":true,
      "tickinterval":1,
      "tooltipheader":"Date",
      "tooltipcontenttitle":"Violation",
      "slant":false,
      "slantdegree":"90",
      "suffixsymbol":'',
      "credits":{  
         "text":" ",
         "color":"#666",
         "imageurl":"../images/logo.png"
      },
      "pallattecolor":[  
       "#d4145a",
       "#f15a24",
       "#a556a5",
       "#1e89b5",
       "#67c2e9",
       "#bede62",
       "#d2ccb1",
       "#c2c8cb",
       "#a8b1b6",
       "#fbca6f",
       "#dea2d1",
       "#f2a6ae",
       "#c5e0c2",
       "#ec7c86",
       "#97d8ff",
       "#f4d853",
       "#e74d5c",
       "#54a8a8",
       "#fbd99c",
       "#eaa15b",
       "#9ec1cd",
       "#5dc2d2",
       "#eaa15b",
       "#fbd99c",
       "#6caf61",
       "#a7cd33",
       "#5dc2d2",
       "#9d62d1",
       "#dfe04f",
       "#a2b3fc",
       "#f9b52e",
       "#8f9a9e"
      ]
   },
   "export":{  
      "showexport":true,
      "filename":"Price Gap",
      "format":[  
         "Download",
         "jpeg",
         "png"
      ]
   },
   "multichart":{  
      "show":true,
      "format":[  
         {
          "name":"By Date",
          "type":"MultiLine2D",
          "source":false
         },
         {
          "name":"By Source",
          "type":"GroupBar2D",
          "source":true
         }
      ]
   },
   "data":[{"label":"2016-7-25","category":"Amazon","value":0.18},{"label":"2016-7-25","category":"SnapDeal","value":0.14},{"label":"2016-7-25","category":"Paytm","value":0.09},{"label":"2016-7-25","category":"Flipkart","value":0.12},{"label":"2016-7-26","category":"Amazon","value":0.18},{"label":"2016-7-26","category":"SnapDeal","value":0.17},{"label":"2016-7-26","category":"Paytm","value":0.16},{"label":"2016-7-26","category":"Flipkart","value":0.15},{"label":"2016-7-27","category":"Amazon","value":0.16},{"label":"2016-7-27","category":"SnapDeal","value":0.13},{"label":"2016-7-27","category":"Paytm","value":0.2},{"label":"2016-7-27","category":"Flipkart","value":0.16},{"label":"2016-7-28","category":"Amazon","value":0.2},{"label":"2016-7-28","category":"SnapDeal","value":0.15},{"label":"2016-7-28","category":"Paytm","value":0.08},{"label":"2016-7-28","category":"Flipkart","value":0.15},{"label":"2016-7-29","category":"Amazon","value":0.18},{"label":"2016-7-29","category":"SnapDeal","value":0.18},{"label":"2016-7-29","category":"Paytm","value":0.06},{"label":"2016-7-29","category":"Flipkart","value":0.16},{"label":"2016-7-30","category":"Amazon","value":0.19},{"label":"2016-7-30","category":"SnapDeal","value":0.13},{"label":"2016-7-30","category":"Paytm","value":0.1},{"label":"2016-7-30","category":"Flipkart","value":0.15}]
}


d3charts("MultiLine2D","#Multiline", Multilinedata);

var Multilinedata2 = {  
   "chart":{  
      "caption":"Price Gap with Lowest Priced Competitor",
      "captionColor":"black",
      "yaxisname":"",
      "showlegend":true,
      "tickinterval":1,
      "tooltipheader":"Date",
      "slant":false,
      "slantdegree":"90",
      "suffixsymbol":'',
      "credits":{  
         "text":" ",
         "color":"#666",
         "imageurl":"../images/logo.png"
      },
      "pallattecolor":[  
         "#008ee4",
         "#E94C3D",
         "#26AD5E",
         "#E77E22",
         "#2B80B9",
         "#F2C40F",
         "#2D3E50",
         "#5CADE2",
         "#BE3A2B",
         "#7E8C8D",
         "#9A59B5",
         "#34495E",
         "#BEC3C7",
         "#EC0000",
         "#BE3243",
         "#FF3243",
         "#BE0043",
         "#BE32FF",
         "#CC3243",
         "#BECC43",
         "#BE324C",
         "#f8bd19",
         "#e44a00",
         "#008FF4",
         "#33bdda",
         "#6baa01",
         "#583e78"
      ]
   },
   "export":{  
      "showexport":true,
      "filename":"Price Gap",
      "format":[  
         "Download",
         "jpeg",
         "png"
      ]
   },
   "multichart":{  
      "show":true,
      "format":[  
         {
          "name":"By Date",
          "type":"MultiLine2D",
          "source":false
         },
         {
          "name":"By Source",
          "type":"GroupBar2D",
          "source":true
         }
      ]
   },
   "data":[{"label":"2016-7-25","category":"Amazon1","value":0.18},{"label":"2016-7-25","category":"SnapDeal1","value":0.14},{"label":"2016-7-25","category":"Paytm1","value":0.09},{"label":"2016-7-25","category":"Flipkart1","value":0.12},{"label":"2016-7-26","category":"Amazon1","value":0.18},{"label":"2016-7-26","category":"SnapDeal1","value":0.17},{"label":"2016-7-26","category":"Paytm1","value":0.16},{"label":"2016-7-26","category":"Flipkart1","value":0.15},{"label":"2016-7-27","category":"Amazon1","value":0.16},{"label":"2016-7-27","category":"SnapDeal1","value":0.13},{"label":"2016-7-27","category":"Paytm1","value":0.2},{"label":"2016-7-27","category":"Flipkart1","value":0.16},{"label":"2016-7-28","category":"Amazon1","value":0.2},{"label":"2016-7-28","category":"SnapDeal1","value":0.15},{"label":"2016-7-28","category":"Paytm1","value":0.08},{"label":"2016-7-28","category":"Flipkart1","value":0.15},{"label":"2016-7-29","category":"Amazon1","value":0.18},{"label":"2016-7-29","category":"SnapDeal1","value":0.18},{"label":"2016-7-29","category":"Paytm1","value":0.06},{"label":"2016-7-29","category":"Flipkart1","value":0.16},{"label":"2016-7-30","category":"Amazon1","value":0.19},{"label":"2016-7-30","category":"SnapDeal1","value":0.13},{"label":"2016-7-30","category":"Paytm1","value":0.1},{"label":"2016-7-30","category":"Flipkart1","value":0.15}]
}


d3charts("MultiLine2D","#Multiline2", Multilinedata2);

var columndata = {
    "chart": {
        "caption": "Column Chart",
        "captionColor":"black",
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "",
        "color":"white",
        "fontsize":15,
        "showlegend":false,
        "slant":false,
        "twoxaxis":false,
        "tickinterval":5,
        "slantdegree":"65",
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":false, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
        "singlecolorgradient":true,
         "pallattecolor":["#92c6db","#008ee4","#26AD5E","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
      "click":function(data){
    alert(data.label + ' : '+data.value);},
    "data": [
        {
            "label": "01-08-15asdasdsadasdasdsadasdasdsadasdasdsadasdasdasdasdasdasdasdasadas",
            "value": -0.0567,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        },
        {
            "label": "02-08-15",
            "value": -0.0567,

            "tooltip":[['Flipkart','100'],['Your Price','100'],['% Diff','11']]
        },
        {
            "label": "03-08-15",
            "value": -0.0567,

            "tooltip":[['Amazon','100'],['Your Price','100'],['% Diff','11']]

        }
        ,
        {
            "label": "04-08-15",
            "value": -0.0567,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        }
        ,
        {
            "label": "05-08-15",
            "value": -0.0567,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        }
        ,
        {
            "label": "06-08-15",
            "value": 0,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        }
        ,
        {
            "label": "07-08-15",
            "value": -0.07767,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        }
        ,
        {
            "label": "08-08-15",
            "value": -0.0567,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        },
        {
            "label": "09-08-15",
            "value": -0.5,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        }
        ,
        {
            "label": "10-08-15",
            "value": 2.05671,

            "tooltip":[['Snapdeal','100'],['Your Price','100'],['% Diff','11']]
        }
       


        

    ]
}
d3charts("Column2D","#column", columndata);


var doublecolumndata = {
    "chart": {
        "caption": "Price Range Chart",
        "captionColor":"black",
 
        "yaxisname": "",
        "color":"white",
        "fontsize":15,
        "showlegend":false,
        "slant":false,
        "twoxaxis":false,
        "tickinterval":5,
        "slantdegree":"65",
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":true, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
         "pallattecolor":["#008ee4","#008ee4","#26AD5E","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
      "colormap":[
    {"name":"high",
    "value":"#008ee4"},
       {"name":"low",
    "value":"#E94C3D"}
    ],
    "data": [
        {
            "label": "01-08-15",
            "lowvalue": -4.345,
            "highvalue":67.123
        },
        {
            "label": "02-08-15",
            "lowvalue": -10,
            "highvalue":0
        },
        {
            "label": "03-08-15",
            "lowvalue": -6,
            "highvalue":9

        }
        ,
        {
            "label": "04-08-15",
             "lowvalue": -23,
            "highvalue":12
        }
        ,
        {
            "label": "05-08-15",
               "lowvalue": -11,
            "highvalue":88
        }
        ,
        {
            "label": "06-08-15",
             "lowvalue": -44,
            "highvalue":66
        }
        ,
        {
            "label": "07-08-15",
               "lowvalue": -33,
            "highvalue":66
        }
        ,
        {
            "label": "08-08-15",
                "lowvalue": -22,
            "highvalue":88
        },
        {
            "label": "09-08-15",
               "lowvalue": -43,
            "highvalue":43
        }
        ,
        {
            "label": "10-08-15",
             "lowvalue": -23,
            "highvalue":78
        }
        ,
        {
            "label": "11-08-15",
               "lowvalue": -12,
            "highvalue":23
        }
        ,
        {
            "label": "12-08-15",
           "lowvalue": -23,
            "highvalue":43
        } ,
        {
            "label": "13-08-15",
              "lowvalue": -55,
            "highvalue":55
        } ,
        {
            "label": "14-08-15",
                "lowvalue": -88,
            "highvalue":77
        },
        {
            "label": "15-08-15",
               "lowvalue": -67,
            "highvalue":78
        },
        {
            "label": "16-08-15",
               "lowvalue": -23,
            "highvalue":45
        },
        {   
		    "label": "17-08-15",
                "lowvalue": -21,
            "highvalue":12
        },
        {
            "label": "18-08-15",
              "lowvalue": -43,
            "highvalue":33

        }
        ,
        {
            "label": "19-08-15",
                "lowvalue": -76,
            "highvalue":54
        }
        ,
        {
            "label": "20-08-15",
                "lowvalue": -78,
            "highvalue":89
        }
        ,
        {
            "label": "21-08-15",
                "lowvalue": -56,
            "highvalue":67
        }
        ,
        {
            "label": "22-08-15",
            "lowvalue": -45,
            "highvalue":56
        }
        ,
        {
            "label": "23-08-15",
              "lowvalue": -22,
            "highvalue":30
        },
        {
            "label": "24-08-15",
              "lowvalue": -11,
            "highvalue":22
        }
        ,
        {
            "label": "25-08-15",
                "lowvalue": -88,
            "highvalue":99
        }
        ,
        {
            "label": "26-08-15",
               "lowvalue": -66,
            "highvalue":77
        }
        ,
        {
            "label": "27-08-15",
               "lowvalue": -44,
            "highvalue":55
        } ,
        {
            "label": "28-08-15",
               "lowvalue": -22,
            "highvalue":33
        } ,
        {
            "label": "29-08-15",
                "lowvalue": -51,
            "highvalue":40
        },
        {
            "label": "30-08-15",
                "lowvalue": -11,
            "highvalue":50
        }


        

    ]
}
d3charts("DoubleColumn2D","#doublecolumn", doublecolumndata);

var columnrange = {
    "chart": {
        "caption": "Heat Map",
        "captionColor":"black",
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "",
        "color":"white",
        "tooltipheader":"Retailer",
        "fontsize":15,
        "showlegend":true,
        "slant":false,
        "twoxaxis":false,
        "slantdegree":"65",
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":true, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
         "pallattecolor":["#008ee4","#008ee4","#26AD5E","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
        "colormap":[
    {"name":"Very Low",
    "value":"#c7001e"},
       {"name":"Low",
    "value":"#f6a580"},
     {"name":"Average",
    "value":"#cccccc"},
      {"name":"High",
    "value":"#92c6db"},
      {"name":"Very High",
    "value":"#086fad"}

    ],
    "range":{
        "lowrange":0,
        "highrange":500
    },
    "rangetype":"Price Range",
      "click":function(data){
    alert(data[0].label);},
    "data":  [{"values":[[0.123,44.1123,3],[44.1,88.212,8],[88.2,132.3,5],[132.3,176.4,3],[176.4,220.5,3],[264.6,308.7,1]],"label":"Amazon-US"},{"values":[[44.1,88.2,9],[88.2,132.3,7],[132.3,176.4,6],[176.4,220.5,4],[220.5,264.6,2],[308.7,352.8,1]],"label":"Amazon-US-Ace Micros"},{"values":[[0,44.1,4],[88.2,132.3,11],[132.3,176.4,9],[176.4,220.5,5],[220.5,264.6,3]],"label":"Amazon-US-DataVision Computer Video"},{"values":[[0,44.1,6],[44.1,88.2,11],[88.2,132.3,16],[132.3,176.4,10],[176.4,220.5,7],[264.6,308.7,2]],"label":"Amazon-US-http://ecx.images-amazon.com/images/I/01dXM-J1oeL.gif"},{"values":[[44.1,88.2,15],[88.2,132.3,19],[132.3,176.4,13],[176.4,220.5,9],[264.6,308.7,3]],"label":"Amazon-US-IPC-Store"},{"values":[[0,44.1,8],[44.1,88.2,19],[88.2,132.3,23],[132.3,176.4,15],[176.4,220.5,10],[220.5,264.6,4],[264.6,308.7,4]],"label":"NetGear-US"}]
    }
d3charts("ColumnRange2D","#columnrange", columnrange);


var stackedbar = {
    "chart": {
        "caption": "Stacked Bar Chart",
        "captionColor":"black",
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "",
        "color":"white",
        "fontsize":15,
        "showlegend":true,
        "slant":false,
        "twoxaxis":false,
        "slantdegree":"65",
        "dynamicheight":true,
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":true, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
         "pallattecolor":["#fcb249","#c2d661","#3ecfc1","#599bf0","#fe949e","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
         // "click":function(data){
   // alert(data[0].label);},
    "data": [
{
category: "Postition: 1",
position: 1,
value: 120,
label: "Apparel"
},
{
category: "Postition: 2",
position: 2,
value: 12,
label: "Apparel"
},
{
category: "Postition: 3",
position: 3,
value: 0,
label: "Apparel"
},
{
category: "Postition: 4",
position: 4,
value: 0,
label: "Apparel"
},
{
category: "Postition: 1",
position: 1,
value: 225,
label: "Appliance"
},
{
category: "Postition: 2",
position: 2,
value: 98,
label: "Appliance"
},
{
category: "Postition: 3",
position: 3,
value: 52,
label: "Appliance"
},
{
category: "Postition: 4",
position: 4,
value: 20,
label: "Appliance"
},
{
category: "Postition: 1",
position: 1,
value: 0,
label: "Cameras & Accessories"
},
{
category: "Postition: 2",
position: 2,
value: 0,
label: "Cameras & Accessories"
},
{
category: "Postition: 3",
position: 3,
value: 0,
label: "Cameras & Accessories"
},
{
category: "Postition: 4",
position: 4,
value: 4,
label: "Cameras & Accessories"
},
{
category: "Postition: 1",
position: 1,
value: 304,
label: "Electronics"
},
{
category: "Postition: 2",
position: 2,
value: 189,
label: "Electronics"
},
{
category: "Postition: 3",
position: 3,
value: 104,
label: "Electronics"
},
{
category: "Postition: 4",
position: 4,
value: 32,
label: "Electronics"
},
{
category: "Postition: 1",
position: 1,
value: 91,
label: "Footwear"
},
{
category: "Postition: 2",
position: 2,
value: 11,
label: "Footwear"
},
{
category: "Postition: 3",
position: 3,
value: 0,
label: "Footwear"
},
{
category: "Postition: 4",
position: 4,
value: 0,
label: "Footwear"
},
{
category: "Postition: 1",
position: 1,
value: 22,
label: "Gaming"
},
{
category: "Postition: 2",
position: 2,
value: 48,
label: "Gaming"
},
{
category: "Postition: 3",
position: 3,
value: 56,
label: "Gaming"
},
{
category: "Postition: 4",
position: 4,
value: 16,
label: "Gaming"
},
{
category: "Postition: 1",
position: 1,
value: 89,
label: "HomeAndLiving"
},
{
category: "Postition: 2",
position: 2,
value: 57,
label: "HomeAndLiving"
},
{
category: "Postition: 3",
position: 3,
value: 24,
label: "HomeAndLiving"
},
{
category: "Postition: 4",
position: 4,
value: 12,
label: "HomeAndLiving"
},
{
category: "Postition: 1",
position: 1,
value: 86,
label: "SportsAndHealth"
},
{
category: "Postition: 2",
position: 2,
value: 55,
label: "SportsAndHealth"
},
{
category: "Postition: 3",
position: 3,
value: 25,
label: "SportsAndHealth"
},
{
category: "Postition: 4",
position: 4,
value: 4,
label: "SportsAndHealth"
}
]
}
d3charts("StackedBar2D","#stackedbar", stackedbar);

var stackedcolumn = {
    "chart": {
        "caption": "Stacked Column Chart",
        "captionColor":"black",
         "tooltipheader":"Seller",
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "",
        "color":"white",
        "fontsize":15,
        "showlegend":true,
        "slant":false,
        "twoxaxis":false,
        "slantdegree":"65",
        "dynamicheight":true,
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":true, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
         "pallattecolor":["#008ee4","#E94C3D","#26AD5E","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
    "colormap":[
    {"name":"0%",
    "value":"#00FFe4"},
       {"name":"0-5%",
    "value":"#26AD5E"},
     {"name":"5-10%",
    "value":"#E77E22"},
    {"name":"10-20%",
    "value":"#FF8ee4"},
       {"name":"20-30%",
    "value":"#26AD5E"},
     {"name":"30-50%",
    "value":"#E77E22"},
     {"name":">50%",
    "value":"#E77E22"}
    ],
       "click":function(data){
    alert(data[0].label + ' : '+data[0].value);},
    "data": [
        {
"label": "Nikon",
"value": 46.774193548387,
"category": "0%",
"tooltip": 29
},
{
"label": "Nikon",
"value": 19.354838709677,
"category": "0-5%",
"tooltip": 12
},
{
"label": "Nikon",
"value": 6.4516129032258,
"category": "5-10%",
"tooltip": 4
},
{
"label": "Nikon",
"value": 12.903225806452,
"category": "10-20%",
"tooltip": 8
},
{
"label": "Nikon",
"value": 8.0645161290323,
"category": "20-30%",
"tooltip": 5
},
{
"label": "Nikon",
"value": 4.8387096774194,
"category": "30-50%",
"tooltip": 3
},
{
"label": "Nikon",
"value": 1.6129032258065,
"category": ">50%",
"tooltip": 1
},
{
"label": "Sony",
"value": 51.219512195122,
"category": "0%",
"tooltip": 21
},
{
"label": "Sony",
"value": 21.951219512195,
"category": "0-5%",
"tooltip": 9
},
{
"label": "Sony",
"value": 12.19512195122,
"category": "5-10%",
"tooltip": 5
},
{
"label": "Sony",
"value": 12.19512195122,
"category": "10-20%",
"tooltip": 5
},
{
"label": "Sony",
"value": 2.4390243902439,
"category": "20-30%",
"tooltip": 1
},
{
"label": "Sony",
"value": 0,
"category": "30-50%",
"tooltip": 0
},
{
"label": "Sony",
"value": 0,
"category": ">50%",
"tooltip": 0
},
{
"label": "Samsung",
"value": 72.222222222222,
"category": "0%",
"tooltip": 26
},
{
"label": "Samsung",
"value": 0,
"category": "0-5%",
"tooltip": 0
},
{
"label": "Samsung",
"value": 2.7777777777778,
"category": "5-10%",
"tooltip": 1
},
{
"label": "Samsung",
"value": 22.222222222222,
"category": "10-20%",
"tooltip": 8
},
{
"label": "Samsung",
"value": 0,
"category": "20-30%",
"tooltip": 0
},
{
"label": "Samsung",
"value": 2.7777777777778,
"category": "30-50%",
"tooltip": 1
},
{
"label": "Samsung",
"value": 0,
"category": ">50%",
"tooltip": 0
},
{
"label": "Lg",
"value": 76.666666666667,
"category": "0%",
"tooltip": 23
},
{
"label": "Lg",
"value": 10,
"category": "0-5%",
"tooltip": 3
},
{
"label": "Lg",
"value": 3.3333333333333,
"category": "5-10%",
"tooltip": 1
},
{
"label": "Lg",
"value": 3.3333333333333,
"category": "10-20%",
"tooltip": 1
},
{
"label": "Lg",
"value": 3.3333333333333,
"category": "20-30%",
"tooltip": 1
},
{
"label": "Lg",
"value": 0,
"category": "30-50%",
"tooltip": 0
},
{
"label": "Lg",
"value": 3.3333333333333,
"category": ">50%",
"tooltip": 1
},
{
"label": "Canon",
"value": 65.51724137931,
"category": "0%",
"tooltip": 19
},
{
"label": "Canon",
"value": 10.344827586207,
"category": "0-5%",
"tooltip": 3
},
{
"label": "Canon",
"value": 0,
"category": "5-10%",
"tooltip": 0
},
{
"label": "Canon",
"value": 10.344827586207,
"category": "10-20%",
"tooltip": 3
},
{
"label": "Canon",
"value": 6.8965517241379,
"category": "20-30%",
"tooltip": 2
},
{
"label": "Canon",
"value": 6.8965517241379,
"category": "30-50%",
"tooltip": 2
},
{
"label": "Canon",
"value": 0,
"category": ">50%",
"tooltip": 0
},
{
"label": "Lowepro",
"value": 26.923076923077,
"category": "0%",
"tooltip": 7
},
{
"label": "Lowepro",
"value": 0,
"category": "0-5%",
"tooltip": 0
},
{
"label": "Lowepro",
"value": 0,
"category": "5-10%",
"tooltip": 0
},
{
"label": "Lowepro",
"value": 26.923076923077,
"category": "10-20%",
"tooltip": 7
},
{
"label": "Lowepro",
"value": 38.461538461538,
"category": "20-30%",
"tooltip": 10
},
{
"label": "Lowepro",
"value": 7.6923076923077,
"category": "30-50%",
"tooltip": 2
},
{
"label": "Lowepro",
"value": 0,
"category": ">50%",
"tooltip": 0
}
         
    ]
}
d3charts("StackedColumn2D","#stackedcolumn", stackedcolumn);


var bubbledata = {
    "chart": {
        "caption": "Bubble Chart", //Name of the chart Header
        "captionColor": "black", // Color of the Chart Header

        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant": false, // X axis label slant
        "slantdegree": "90", // Slant based on the degree specified
        "credits": {            // Credits
            "text": "Powered By", // Credit Name
            "color": "#666",
            "imageurl": "../images/logo.png"
        },
        "fillinside": "none", // fill or none
        "pallattecolor": ["#008ee4", "#E94C3D", "#26AD5E", "#E77E22", "#2B80B9", "#F39C11", "#F2C40F", "#179F87", "#2D3E50", "#9045AE", "#5CADE2", "#2ECD71", "#BE3A2B", "#C85600", "#7E8C8D", "#9A59B5", "#34495E", "#BEC3C7", "#EC0000", "#BE3243", "#FF3243", "#BE0043", "#BE32FF", "#CC3243", "#BECC43", "#BE324C", "#f8bd19", "#e44a00", "#008FF4", "#33bdda", "#6baa01", "#583e78"] // Pallette colors for 30 values
    },
    "export": {
        "showexport": true,
        "format": ["-Download-", "jpeg", "png"] //Specify Format to export.Currently support jpeg,png
    },
    "click": function (data) {
        alert(data.name);
    },
    "tableshow": {
        "show":true,
        "divheight":'500px',
        "noofrows":5
    },
    "data": [ // Specify in label and value pairs for Single Type Charts.Specify category,label and value for Multi type charts
        {

        "label": "Palladiumasdasdasdasdasd",
        "value": 56.1232
    },
        {
            "label": "Lead",
            "value": 23
        },
        {
            "label": "Platinum",
            "value": 87

        }
        ,
        {
            "label": "Silver",
            "value": 10
        }
        ,
        {
            "label": "Copper",
            "value": 67
        }
        ,
        {
            "label": "Zinc",
            "value": 50
        }
        ,
        {
            "label": "Nikel",
            "value": 66
        }
        ,
        {
            "label": "Alluminum",
            "value": 0
        },
        {
            "label": "Cobalt",
            "value": 98
        }
        ,
        {
            "label": "Gold",
            "value": 55
        }
        ,
        {
            "label": "Pin",
            "value": 88
        }
        ,
        {
            "label": "Tin",
            "value": 44
        },
        {
            "label": "Plastic",
            "value": 55
        },
        {
            "label": "Glass",
            "value": 89
        },
        {
            "label": "Steel",
            "value": 23
        },




    ]
}

    d3charts("Bubble2D", "#bubble", bubbledata);

    var barlinedata = {
    "chart": {
        "caption": "", //Name of the chart Header
        "hiddencaption": "Bar Line Chart",
        "subhiddencaption": "More Info",
        "captionColor":"black", // Color of the Chart Header
         "subcaption": "",
        "subcaptionColor":"blue",
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
         "showlegend":true,
         "tooltipheader":'Date',
        "tickinterval":5,
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "pallattecolor":["#008ee4","#E94C3D","#26AD5E","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"] // Pallette colors for 30 values
    },
      "colormap":[
    {"name":"Snapdeal",
    "value":"#008ee4"},
       {"name":"Flipkart",
    "value":"#26AD5E"},
     {"name":"Paytm",
    "value":"#E77E22"}
    ],
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },
         "barclick":function(data){
    alert(data.label + ' : '+data.value);},
    "bardata":  [ // Specify in label and value pairs for Single Type Charts.Specify category,label and value for Multi type charts
        {

            "label": "Snapdeal",
            "value": 20
        },
        {
            "label": "Paytm",
            "value": -50
        },
        {
            "label": "Flipkart",
            "value": 100

        }
           
    ],
     "linedata":   [ // Data Format example for Multi chart Type
        {
            "category": "Snapdeal",
            "label": "01-08-15",
            "value": 23
        },
        { 
            "category": "Snapdeal",
            "label": "02-08-15",
            "value": 12
        },
        {
    
            "category": "Snapdeal",
            "label": "03-08-15",
            "value": 34

        }
        ,
        {
            "category": "Snapdeal",
            "label": "04-08-15",
            "value": 56
        }
        ,
        {
            "category": "Snapdeal",
            "label": "05-08-15",
            "value": 0
        }
        ,
        {
            "category": "Snapdeal",
            "label": "06-08-15",
            "value": 76
        }
        ,
        {
            "category": "Snapdeal",
            "label": "07-08-15",
            "value": 43
        }
        ,
        {
            "category": "Snapdeal",
            "label": "08-08-15",
            "value": 0
        },
        {
            "category": "Snapdeal",
            "label": "09-08-15",
            "value": 65
        }
        ,
        {
            "category": "Snapdeal",
            "label": "10-08-15",
            "value": -12
        }
        ,
        {
            "category": "Snapdeal",
            "label": "11-08-15",
            "value": 12
        }
        ,
        {
            "category": "Snapdeal",
            "label": "12-08-15",
            "value": -34
        } ,
        {
            "category": "Snapdeal",
            "label": "13-08-15",
            "value": 45
        } ,
        {
            "category": "Snapdeal",
            "label": "14-08-15",
            "value": -90
        },
        {
            "category": "Snapdeal",
            "label": "15-08-15",
            "value": 34
        },
        {
            "category": "Snapdeal",
            "label": "16-08-15",
            "value": 12
        },
        {
            "category": "Snapdeal",
            "label": "17-08-15",
            "value": 0
        },
        {
            "category": "Snapdeal",
            "label": "18-08-15",
            "value": 0

        }
        ,
        {
            "category": "Snapdeal",
            "label": "19-08-15",
            "value": 54
        }
        ,
        {
            "category": "Snapdeal",
            "label": "20-08-15",
            "value": 0
        }
        ,
        {
            "category": "Snapdeal",
            "label": "21-08-15",
            "value": -100
        }
        ,
        {
            "category": "Snapdeal",
            "label": "22-08-15",
            "value": 23
        }
        ,
        {
            "category": "Snapdeal",
            "label": "23-08-15",
            "value": 54
        },
        {
            "category": "Snapdeal",
            "label": "24-08-15",
            "value": 0
        }
        ,
        {
            "category": "Snapdeal",
            "label": "25-08-15",
            "value": -10
        }
        ,
        {
            "category": "Snapdeal",
            "label": "26-08-15",
            "value": 0
        }
        ,
        {
            "category": "Snapdeal",
            "label": "27-08-15",
            "value": 87
        } ,
        {
            "category": "Snapdeal",
            "label": "28-08-15",
            "value": 0
        } ,
        {
            "category": "Snapdeal",
            "label": "29-08-15",
            "value": -23

        },
        {
            "category": "Snapdeal",
            "label": "30-08-15",
            "value": 80

        }, {
             "category": "Paytm",
            "label": "01-08-15",
            "value": 23
        },
        { 
            "category": "Paytm",
            "label": "02-08-15",
            "value": 11
        },
        {
            "category": "Paytm",
            "label": "03-08-15",
            "value": 11

        }
        ,
        {
            "category": "Paytm",
            "label": "04-08-15",
            "value": 76
        }
        ,
        {
            "category": "Paytm",
            "label": "05-08-15",
            "value": -34
        }
        ,
        {
            "category": "Paytm",
            "label": "06-08-15",
            "value": 43
        }
        ,
        {
            "category": "Paytm",
            "label": "07-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "08-08-15",
            "value": -33
        },
        {
            "category": "Paytm",
            "label": "09-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "10-08-15",
            "value": -2
        }
        ,
        {
            "category": "Paytm",
            "label": "11-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "12-08-15",
            "value": 0
        } ,
        {
            "category": "Paytm",
            "label": "13-08-15",
            "value": 12
        } ,
        {
            "category": "Paytm",
            "label": "14-08-15",
            "value": 45
        },
        {
            "category": "Paytm",
            "label": "15-08-15",
            "value": 23
        },
        {
            "category": "Paytm",
            "label": "16-08-15",
            "value": -90
        },
        {
            "category": "Paytm",
            "label": "17-08-15",
            "value": 0
        },
        {
            "category": "Paytm",
            "label": "18-08-15",
            "value": 54

        }
        ,
        {
            "category": "Paytm",
            "label": "19-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "20-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "21-08-15",
            "value": 34
        }
        ,
        {
            "category": "Paytm",
            "label": "22-08-15",
            "value": 23
        }
        ,
        {
            "category": "Paytm",
            "label": "23-08-15",
            "value": 78
        },
        {
            "category": "Paytm",
            "label": "24-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "25-08-15",
            "value": 54
        }
        ,
        {
            "category": "Paytm",
            "label": "26-08-15",
            "value": 0
        }
        ,
        {
            "category": "Paytm",
            "label": "27-08-15",
            "value": 0
        } ,
        {
            "category": "Paytm",
            "label": "28-08-15",
            "value": 23
        } ,
        {
            "category": "Paytm",
            "label": "29-08-15",
            "value": 32

        },
        {
            "category": "Paytm",
            "label": "30-08-15",
            "value": 56

        }, {
             "category": "Flipkart",
            "label": "01-08-15",
            "value": 78
        },
        { 
            "category": "Flipkart",
            "label": "02-08-15",
            "value": 54
        },
        {
            "category": "Flipkart",
            "label": "03-08-15",
            "value": -12

        }
        ,
        {
            "category": "Flipkart",
            "label": "04-08-15",
            "value": -10
        }
        ,
        {
            "category": "Flipkart",
            "label": "05-08-15",
            "value": -20
        }
        ,
        {
            "category": "Flipkart",
            "label": "06-08-15",
            "value": 0
        }
        ,
        {
            "category": "Flipkart",
            "label": "07-08-15",
            "value": 0
        }
        ,
        {
            "category": "Flipkart",
            "label": "08-08-15",
            "value": 90
        },
        {
            "category": "Flipkart",
            "label": "09-08-15",
            "value": 23
        }
        ,
        {
            "category": "Flipkart",
            "label": "10-08-15",
            "value": 45
        }
        ,
        {
            "category": "Flipkart",
            "label": "11-08-15",
            "value": 0
        }
        ,
        {
            "category": "Flipkart",
            "label": "12-08-15",
            "value": 54
        } ,
        {
            "category": "Flipkart",
            "label": "13-08-15",
            "value": 67
        } ,
        {
            "category": "Flipkart",
            "label": "14-08-15",
            "value": 78
        },
        {
            "category": "Flipkart",
            "label": "15-08-15",
            "value": 43
        },
        {
            "category": "Flipkart",
            "label": "16-08-15",
            "value": -20
        },
        {
            "category": "Flipkart",
            "label": "17-08-15",
            "value": 0
        },
        {
            "category": "Flipkart",
            "label": "18-08-15",
            "value": 0

        }
        ,
        {
            "category": "Flipkart",
            "label": "19-08-15",
            "value": 0
        }
        ,
        {
            "category": "Flipkart",
            "label": "20-08-15",
            "value": 0
        }
        ,
        {
            "category": "Flipkart",
            "label": "21-08-15",
            "value": -30
        }
        ,
        {
            "category": "Flipkart",
            "label": "22-08-15",
            "value": -50
        }
        ,
        {
            "category": "Flipkart",
            "label": "23-08-15",
            "value": 0
        },
        {
            "category": "Flipkart",
            "label": "24-08-15",
            "value": 100
        }
        ,
        {
            "category": "Flipkart",
            "label": "25-08-15",
            "value": -40
        }
        ,
        {
            "category": "Flipkart",
            "label": "26-08-15",
            "value": 34
        }
        ,
        {
            "category": "Flipkart",
            "label": "27-08-15",
            "value": 0
        } ,
        {
            "category": "Flipkart",
            "label": "28-08-15",
            "value": -10
        } ,
        {
            "category": "Flipkart",
            "label": "29-08-15",
            "value": 0

        },
        {
            "category": "Flipkart",
            "label": "30-08-15",
            "value": 23

        }


        

    ]
}
    d3charts("BarLine2D", "#barline", barlinedata);

   /* var calenderMultidata = {
        "chart": {
            "caption": "Calender Month Wise Chart", //Name of the chart Header
            "captionColor": "black", // Color of the Chart Header
            "showlegend":true,
            "yaxisname": "", // Name which gets displayed in the Yaxis
            "slant": false, // X axis label slant
            "slantdegree": "90", // Slant based on the degree specified
            "credits": {            // Credits
                "text": "Powered By", // Credit Name
                "color": "#666",
                "imageurl": "../images/logo.png"
            },
            "fillinside": "none", // fill or none
            "pallattecolor": ["#008ee4", "#E94C3D", "#26AD5E", "#E77E22", "#2B80B9", "#F39C11", "#F2C40F", "#179F87", "#2D3E50", "#9045AE", "#5CADE2", "#2ECD71", "#BE3A2B", "#C85600", "#7E8C8D", "#9A59B5", "#34495E", "#BEC3C7", "#EC0000", "#BE3243", "#FF3243", "#BE0043", "#BE32FF", "#CC3243", "#BECC43", "#BE324C", "#f8bd19", "#e44a00", "#008FF4", "#33bdda", "#6baa01", "#583e78"] // Pallette colors for 30 values
        },
        "export": {
            "showexport": true,
            "format": ["-Download-", "jpeg", "png"] //Specify Format to export.Currently support jpeg,png
        },
         "colormap":[
    {"name":"Very Low",
    "value":"#c7001e"},
       {"name":"Low",
    "value":"#f6a580"},
     {"name":"Average",
    "value":"#cccccc"},
      {"name":"High",
    "value":"#92c6db"},
      {"name":"Very High",
    "value":"#086fad"}

    ],
    "calenderyear":[2015,2016],
        "data": [ // Specify in label and value pairs for Single Type Charts.Specify category,label and value for Multi type charts
        {"month":'Jan',
          "max":90,
          "values":[10,10,20,30,40,50,60,70,0,90,10,10,20,30,40,50,60,70,80,90,0,10,20,30,40,50,60,70,80,90,50]},
          {"month":'Feb',
          "max":90,
          "values":[13,45,20,30,40,50,60,23,80,90,10,10,20,30,33,0,60,70,80,90,55,10,0,30,40,88,60,70,88,99,50]},
          {"month":'Mar',
          "max":90,
          "values":[10,10,20,0,40,50,60,11,80,90,22,10,20,33,40,50,60,70,55,90,10,10,0,99,40,50,0,70,80,90,50]},
          {"month":'Apr',
          "max":90,
          "values":[10,10,20,0,40,50,60,0,80,90,10,0,20,30,40,50,60,0,80,90,10,10,0,30,40,50,60,70,80,90,50]},
          {"month":'May',
          "max":90,
          "values":[10,10,0,30,40,50,60,70,0,90,10,10,20,30,40,0,0,0,0,90,10,10,0,30,40,50,60,70,80,90,50]},
          {"month":'Jun',
          "max":90,
          "values":[10,45,20,30,0,50,60,0,80,90,0,10,78,30,40,0,60,70,80,90,0,23,20,30,40,50,60,70,80,90,50]},
          {"month":'Jul',
          "max":90,
          "values":[10,10,20,0,0,0,0,70,66,90,10,10,20,30,40,50,60,70,0,90,54,0,0,0,40,50,60,70,80,90,50]},
          {"month":'Aug',
          "max":90,
          "values":[10,10,23,30,0,0,0,70,80,90,0,10,67,30,0,50,60,0,80,90,10,0,54,30,40,0,60,70,80,90,50]},
          {"month":'Sep',
          "max":90,
          "values":[10,10,0,66,0,0,0,70,0,90,10,55,20,30,40,50,60,33,80,0,0,0,0,30,40,50,60,70,80,90,50]},
          {"month":'Oct',
          "max":90,
          "values":[10,10,20,0,77,50,60,70,0,90,10,10,20,30,40,50,0,70,21,90,10,10,0,30,40,55,60,70,0,90,50]},
          {"month":'Nov',
          "max":90,
          "values":[10,10,55,0,40,50,0,70,80,90,10,10,20,0,40,50,55,70,0,90,10,10,0,55,40,50,60,0,80,90,50]},
          {"month":'Dec',
          "max":90,
          "values":[10,10,20,0,40,50,60,70,80,90,10,0,20,4,40,50,0,70,80,90,0,10,20,30,40,0,2,70,80,3,50]}
    ]
    }
    d3charts("CalenderMultiView2D", "#calendermultiview", calenderMultidata);*/


     var calenderSingledata = {
        "chart": {
            "caption": "Calendar Chart", //Name of the chart Header
            "captionColor": "black", // Color of the Chart Header
            "showlegend":true,
            "yaxisname": "", // Name which gets displayed in the Yaxis
            "slant": false, // X axis label slant
            "slantdegree": "90", // Slant based on the degree specified
            "credits": {            // Credits
                "text": "Powered By", // Credit Name
                "color": "#666",
                "imageurl": "../images/logo.png"
            },
            "fillinside": "none", // fill or none
            "pallattecolor": ["#008ee4", "#E94C3D", "#26AD5E", "#E77E22", "#2B80B9", "#F39C11", "#F2C40F", "#179F87", "#2D3E50", "#9045AE", "#5CADE2", "#2ECD71", "#BE3A2B", "#C85600", "#7E8C8D", "#9A59B5", "#34495E", "#BEC3C7", "#EC0000", "#BE3243", "#FF3243", "#BE0043", "#BE32FF", "#CC3243", "#BECC43", "#BE324C", "#f8bd19", "#e44a00", "#008FF4", "#33bdda", "#6baa01", "#583e78"] // Pallette colors for 30 values
        },
        "export": {
            "showexport": true,
            "format": ["-Download-", "jpeg", "png"] //Specify Format to export.Currently support jpeg,png
        },
         "colormap":[
    {"name":"Very Low",
    "value":"#cee1e2"},
       {"name":"Low",
    "value":"#96c3c2"},
     {"name":"Average",
    "value":"#85baba"},
      {"name":"High",
    "value":"#56a1a0"},
      {"name":"Very High",
    "value":"#35908f"}

    ],
    "calenderyear":[2015,2016],
        "data": [ // Specify in label and value pairs for Single Type Charts.Specify category,label and value for Multi type charts
        {"month":'Jan',
          "max":90,
          "values":[10,10,20,30,40,50,60,70,0,90,10,10,20,30,40,50,60,70,80,90,0,10,20,30,40,50,60,70,80,90,50]},
          {"month":'Feb',
          "max":90,
          "values":[13,45,20,30,40,50,60,23,80,90,10,10,20,30,33,0,60,70,80,90,55,10,0,30,40,88,60,70,88,99,50]},
          {"month":'Mar',
          "max":90,
          "values":[10,10,20,0,40,50,60,11,80,90,22,10,20,33,40,50,60,70,55,90,10,10,0,99,40,50,0,70,80,90,50]},
          {"month":'Apr',
          "max":90,
          "values":[10,10,20,0,40,50,60,0,80,90,10,0,20,30,40,50,60,0,80,90,10,10,0,30,40,50,60,70,80,90,50]},
          {"month":'May',
          "max":90,
          "values":[10,10,0,30,40,50,60,70,0,90,10,10,20,30,40,0,0,0,0,90,10,10,0,30,40,50,60,70,80,90,50]},
          {"month":'Jun',
          "max":90,
          "values":[10,45,20,30,0,50,60,0,80,90,0,10,78,30,40,0,60,70,80,90,0,23,20,30,40,50,60,70,80,90,50]},
          {"month":'Jul',
          "max":90,
          "values":[10,10,20,0,0,0,0,70,66,90,10,10,20,30,40,50,60,70,0,90,54,0,0,0,40,50,60,70,80,90,50]},
          {"month":'Aug',
          "max":90,
          "values":[10,10,23,30,0,0,0,70,80,90,0,10,67,30,0,50,60,0,80,90,10,0,54,30,40,0,60,70,80,90,50]},
          {"month":'Sep',
          "max":90,
          "values":[10,10,0,66,0,0,0,70,0,90,10,55,20,30,40,50,60,33,80,0,0,0,0,30,40,50,60,70,80,90,50]},
          {"month":'Oct',
          "max":90,
          "values":[10,10,20,0,77,50,60,70,0,90,10,10,20,30,40,50,0,70,21,90,10,10,0,30,40,55,60,70,0,90,50]},
          {"month":'Nov',
          "max":90,
          "values":[10,10,55,0,40,50,0,70,80,90,10,10,20,0,40,50,55,70,0,90,10,10,0,55,40,50,60,0,80,90,50]},
          {"month":'Dec',
          "max":90,
          "values":[10,10,20,0,40,50,60,70,80,90,10,0,20,4,40,50,0,70,80,90,0,10,20,30,40,0,2,70,80,3,50]}
    ]
    }
    d3charts("CalenderSingleView2D", "#calendersingleview", calenderSingledata);




    var bileveldata = {
     "chart": {
        "caption": "Bilevel Chart",
        "captionColor":"black",
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "",
        "color":"white",
        "fontsize":15,
        "showlegend":true,
        "slant":false,
        "twoxaxis":false,
        "slantdegree":"65",
        "dynamicheight":true,
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":true, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
         "pallattecolor":["#de8e43","#dfc133","#e0594b","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
    "colormap":[
    {"name":"Highest",
    "value":"#c7001e"},
       {"name":"Equal",
    "value":"#f6a580"},
     {"name":"Lowest",
    "value":"#92c6db"}
    ],
          "click":function(data){
    alert(data[0].label);},
    "data": [
        {
            "label": "Electronic",
            "value": 11.234,
            "category":"Highest"
        },
        {
            "label": "Electronic",
            "value": 22.223423,
             "category":"Equal"
        },
        {
            "label": "Electronic",
            "value": 33.567567,
            "category":"Lowest"

        }
        ,
        {
            "label": "Watch",
            "value": 44,
            "category":"Highest"
        }
        ,
        {
            "label": "Watch",
            "value": 55,
             "category":"Equal"
        }
        ,
        {
            "label": "Watch",
            "value": 12,
            "category":"Lowest"
        }
        ,
        {
            "label": "Shoe",
            "value": 77,
             "category":"Highest"
        }
        ,
        {
            "label": "Shoe",
            "value": 88,
             "category":"Equal"
        },
        {
            "label": "Shoe",
            "value": 99,
            "category":"Lowest"
        }
        ,
        {
            "label": "bag",
            "value": 100,
             "category":"Highest"
        }
        ,
        {
            "label": "bag",
            "value": 200,
             "category":"Equal"
        },
        {
            "label": "bag",
            "value": 50,
            "category":"Lowest"
        }
         ,
        {
            "label": "fitness equipments",
            "value": 100,
            "category":"Highest"
        }
        ,
        {
            "label": "fitness equipments",
            "value": 200,
             "category":"Equal"
        },
        {
            "label": "fitness equipments",
            "value": 50,
            "category":"Lowest"
        }
        ,
        {
            "label": "T shirt",
            "value": 100,
            "category":"Highest"
        }
        ,
        {
            "label": "T shirt",
            "value": 200,
            "category":"Equal"
        },
        {
            "label": "T shirt",
            "value": 50,
            "category":"Lowest"
        } ,
        {
            "label": "Jean",
            "value": 34,
            "category":"Highest"
        }
        ,
        {
            "label": "Jean",
            "value": 56,
            "category":"Equal"
        },
        {
            "label": "Jean",
            "value": 78,
            "category":"Lowest"
        }
         ,
        {
            "label": "Watch for Men",
            "value": 32,
            "category":"Highest"
        }
        ,
        {
            "label": "Watch for Men",
            "value": 134,
            "category":"Equal"
        },
        {
            "label": "Watch for Men",
            "value": 12,
            "category":"Lowest"
        } ,
        {
            "label": "Watch for Women",
            "value": 12,
            "category":"Highest"
        }
        ,
        {
            "label": "Watch for Women",
            "value": 34,
            "category":"Equal"
        },
        {
            "label": "Watch for Women",
            "value": 56,
            "category":"Lowest"
        }
    ]
}

    d3charts("Bilevel2D", "#bilevel", bileveldata);


      var hourlydata = {
     "chart": {
        "caption": "",
        "captionColor":"black",
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "backgroundcolor":"#4a4a4a",
        "textcolor":'white',
        "yaxisname": "",
        "color":"white",
        "fontsize":15,
        "showlegend":true,
        "slant":false,
        "twoxaxis":false,
        "slantdegree":"65",
        "dynamicheight":true,
        "valuerank":true,
        "maxrank":1,
        "lowrank":0,
        "weekstartdate":"2015-12-09",
        "credits":{
               "text":"Powered By",
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
        "pallattecolorsingle":true, // if set to True: Only First Value is Considered ; if set to False all values in the Pallate is considered
         "pallattecolor":["green","red","#e0594b","#E77E22","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"]
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"]
    },
        "colormap":[
    {"name":"Less",
    "value":"green"},
       {"name":"High",
    "value":"red"},
       {"name":"N/A",
    "value":"lightgrey"}
    ],
          "click":function(data){
    alert(data[0].label);},
    "data":[{"day":"3","hour":1,"value":0},{"day":"3","hour":2,"value":0},{"day":"3","hour":3,"value":0},{"day":"3","hour":4,"value":0},{"day":"3","hour":5,"value":0},{"day":"3","hour":6,"value":0},{"day":"3","hour":7,"value":0},{"day":"3","hour":8,"value":0},{"day":"3","hour":9,"value":0},{"day":"3","hour":10,"value":0},{"day":"3","hour":11,"value":0},{"day":"3","hour":12,"value":0},{"day":"3","hour":13,"value":0},{"day":"3","hour":14,"value":0},{"day":"3","hour":15,"value":0},{"day":"3","hour":16,"value":0},{"day":"3","hour":17,"value":0},{"day":"3","hour":18,"value":0},{"day":"3","hour":19,"value":0},{"day":"3","hour":20,"value":0},{"day":"3","hour":21,"value":0},{"day":"3","hour":22,"value":0},{"day":"3","hour":23,"value":0},{"day":"3","hour":24,"value":0},{"day":"4","hour":1,"value":0},{"day":"4","hour":2,"value":0},{"day":"4","hour":3,"value":0},{"day":"4","hour":4,"value":0},{"day":"4","hour":5,"value":0},{"day":"4","hour":6,"value":0},{"day":"4","hour":7,"value":0},{"day":"4","hour":8,"value":0},{"day":"4","hour":9,"value":0},{"day":"4","hour":10,"value":0},{"day":"4","hour":11,"value":0},{"day":"4","hour":12,"value":0},{"day":"4","hour":13,"value":0},{"day":"4","hour":14,"value":0},{"day":"4","hour":15,"value":0},{"day":"4","hour":16,"value":0},{"day":"4","hour":17,"value":0},{"day":"4","hour":18,"value":0},{"day":"4","hour":19,"value":0},{"day":"4","hour":20,"value":0},{"day":"4","hour":21,"value":0},{"day":"4","hour":22,"value":0},{"day":"4","hour":23,"value":0},{"day":"4","hour":24,"value":0},{"day":"5","hour":1,"value":0},{"day":"5","hour":2,"value":0},{"day":"5","hour":3,"value":0},{"day":"5","hour":4,"value":0},{"day":"5","hour":5,"value":0},{"day":"5","hour":6,"value":0},{"day":"5","hour":7,"value":0},{"day":"5","hour":8,"value":0},{"day":"5","hour":9,"value":0},{"day":"5","hour":10,"value":0},{"day":"5","hour":11,"value":0},{"day":"5","hour":12,"value":0},{"day":"5","hour":13,"value":0},{"day":"5","hour":14,"value":0},{"day":"5","hour":15,"value":0},{"day":"5","hour":16,"value":0},{"day":"5","hour":17,"value":0},{"day":"5","hour":18,"value":0},{"day":"5","hour":19,"value":0},{"day":"5","hour":20,"value":0},{"day":"5","hour":21,"value":0},{"day":"5","hour":22,"value":0},{"day":"5","hour":23,"value":0},{"day":"5","hour":24,"value":0},{"day":"6","hour":1,"value":0},{"day":"6","hour":2,"value":0},{"day":"6","hour":3,"value":0},{"day":"6","hour":4,"value":0},{"day":"6","hour":5,"value":0},{"day":"6","hour":6,"value":0},{"day":"6","hour":7,"value":0},{"day":"6","hour":8,"value":0},{"day":"6","hour":9,"value":0},{"day":"6","hour":10,"value":0},{"day":"6","hour":11,"value":0},{"day":"6","hour":12,"value":0},{"day":"6","hour":13,"value":0},{"day":"6","hour":14,"value":0},{"day":"6","hour":15,"value":0},{"day":"6","hour":16,"value":0},{"day":"6","hour":17,"value":0},{"day":"6","hour":18,"value":0},{"day":"6","hour":19,"value":0},{"day":"6","hour":20,"value":0},{"day":"6","hour":21,"value":0},{"day":"6","hour":22,"value":0},{"day":"6","hour":23,"value":0},{"day":"6","hour":24,"value":0},{"day":"7","hour":1,"value":0},{"day":"7","hour":2,"value":0},{"day":"7","hour":3,"value":0},{"day":"7","hour":4,"value":0},{"day":"7","hour":5,"value":0},{"day":"7","hour":6,"value":0},{"day":"7","hour":7,"value":0},{"day":"7","hour":8,"value":0},{"day":"7","hour":9,"value":0},{"day":"7","hour":10,"value":0},{"day":"7","hour":11,"value":0},{"day":"7","hour":12,"value":0},{"day":"7","hour":13,"value":0},{"day":"7","hour":14,"value":0},{"day":"7","hour":15,"value":0},{"day":"7","hour":16,"value":0},{"day":"7","hour":17,"value":0},{"day":"7","hour":18,"value":0},{"day":"7","hour":19,"value":0},{"day":"7","hour":20,"value":0},{"day":"7","hour":21,"value":0},{"day":"7","hour":22,"value":0},{"day":"7","hour":23,"value":0},{"day":"7","hour":24,"value":0},{"day":"1","hour":1,"value":0},{"day":"1","hour":2,"value":0},{"day":"1","hour":3,"value":0},{"day":"1","hour":4,"value":0},{"day":"1","hour":5,"value":0},{"day":"1","hour":6,"value":0},{"day":"1","hour":7,"value":0},{"day":"1","hour":8,"value":0},{"day":"1","hour":9,"value":0},{"day":"1","hour":10,"value":0},{"day":"1","hour":11,"value":0},{"day":"1","hour":12,"value":0},{"day":"1","hour":13,"value":0},{"day":"1","hour":14,"value":0},{"day":"1","hour":15,"value":0},{"day":"1","hour":16,"value":0},{"day":"1","hour":17,"value":0},{"day":"1","hour":18,"value":0},{"day":"1","hour":19,"value":0},{"day":"1","hour":20,"value":0},{"day":"1","hour":21,"value":0},{"day":"1","hour":22,"value":0},{"day":"1","hour":23,"value":0},{"day":"1","hour":24,"value":0},{"day":"2","hour":1,"value":0},{"day":"2","hour":2,"value":0},{"day":"2","hour":3,"value":0},{"day":"2","hour":4,"value":0},{"day":"2","hour":5,"value":0},{"day":"2","hour":6,"value":0},{"day":"2","hour":7,"value":0},{"day":"2","hour":8,"value":0},{"day":"2","hour":9,"value":0},{"day":"2","hour":10,"value":0},{"day":"2","hour":11,"value":0},{"day":"2","hour":12,"value":0},{"day":"2","hour":13,"value":0},{"day":"2","hour":14,"value":0},{"day":"2","hour":15,"value":0},{"day":"2","hour":16,"value":1},{"day":"2","hour":17,"value":0}] 
    }

    d3charts("WeekHour2D", "#weekhour", hourlydata);



    var pricing = {
    "chart": {
        "caption": "Pricing chart", //Name of the chart Header
        "captionColor":"black", // Color of the Chart Header
         "subcaption": "More Info",
        "subcaptionColor":"black",
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#ff3232","#ff7f7f","#00b200","#004c00","#2B80B9","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"] // Pallette colors for 30 values
    },
    "rectheight":50,
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },
    "data":  [
        {

            "label": "Snapdeal",
            "value": 10
        },
         {

            "label": "shopclues",
            "value": 15
        },
        {
            "label": "flipkart",
            "value": 23,
            "flag":true
        },
        {
            "label": "Amazon",
            "value": 67

        }
        ,
        {
            "label": "Rediff",
            "value": 87
        }
        ,
        {
            "label": "Paytm",
            "value": 100
        }
      


        

    ]
}
    d3charts("Pricing2D", "#pricing", pricing);


     var multipledonut = {
    "chart": {
        "caption": "Discount distribution of product by category", //Name of the chart Header
        "captionColor":"white", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "suffix":'%',
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#50e2c2","#f5a623","#8b572a"] // Pallette colors for 30 values
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },
    "data":  [
        {
           "category": "Electronics",
            "arrowhead" : 'top',
            "arrowcolor" : 'red',
            "data":[
                    {'label':'Snapdeal',
                     'value':50
                     },
                     {'label':'Amazon',
                     'value':50
                     },
                     {'label':'Paytm',
                     'value':100
                     }
                    ] 
        },
        {
           "category": "Apparel",
            "arrowhead" : 'bottom',
            "arrowcolor" : 'green',
            "data":[
                    {'label':'Snapdeal',
                     'value':100
                     },
                     {'label':'Amazon',
                     'value':50
                     },
                     {'label':'Paytm',
                     'value':20
                     }
                    ] 
        },
        {
           "category": "Clothing",
            "arrowhead" : 'top',
            "arrowcolor" : 'green',
            "data":[
                    {'label':'Snapdeal',
                     'value':20
                     },
                     {'label':'Amazon',
                     'value':50
                     },
                     {'label':'Paytm',
                     'value':100
                     }
                    ] 
        },
        {
           "category": "Footwear",
            "arrowhead" : 'bottom',
            "arrowcolor" : 'red',
            "data":[
                    {'label':'Snapdeal',
                     'value':89
                     },
                     {'label':'Amazon',
                     'value':100
                     },
                     {'label':'Paytm',
                     'value':50
                     }
                    ] 
        },
        {
           "category": "Accesories",
            "arrowhead" : 'bottom',
            "arrowcolor" : 'green',
            "data":[
                    {'label':'Snapdeal',
                     'value':20
                     },
                     {'label':'Amazon',
                     'value':100
                     },
                     {'label':'Paytm',
                     'value':50
                     }
                    ] 
        }                       
    ]
}
    d3charts("MultiDonut2D", "#multidonut", multipledonut);

    var custombar = {
    "chart": {
        "caption": "Top brands by discount", //Name of the chart Header
        "captionColor":"#727272", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
          //"credits":{            // Credits
         //   "text":"Powered By", // Credit Name
         //   "color":"#666",
         //   "imageurl":"../images/logo.png"
        //},
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#fcb249","#c2d661","#3ecfc1","#599bf0","#fe949e","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"] // Pallette colors for 30 values
    },
    "rectheight":50,
    "export":{
        "showexport": true,
         "format": ["Download","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },
    "data":  [
        {

            "label": "Snapdeal",
            "value": 99,
            "type":'up',
            "denomination":'plus'
        },
         {

            "label": "shopclues",
            "value": 3,
            "type":'down',
            "denomination":'plus'
        },
        {
            "label": "flipkart",
            "value": 50,
            "type":'up',
            "denomination":'minus'
        },
        {
            "label": "Amazon",
            "value": 100,
            "type":'down',
            "denomination":'plus'

        }
        ,
        {
            "label": "Rediff",
            "value": 75,
            "type":'down',
            "denomination":'minus'
        }          
    ]
}
    d3charts("CustomBar2D", "#custombar", custombar);



var customverticalbar = {
    "chart": {
        "caption": "Top brands by discount", //Name of the chart Header
        "captionColor":"#727272", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
          //"credits":{            // Credits
         //   "text":"Powered By", // Credit Name
         //   "color":"#666",
         //   "imageurl":"../images/logo.png"
        //},
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#fcb249","#c2d661","#3ecfc1","#599bf0","#fe949e","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"] // Pallette colors for 30 values
    },
    "rectheight":50,
    "export":{
        "showexport": true,
         "format": ["Download","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },
    "data":  [
        {

            "label": "Snapdeal",
            "value": 99,
            "type":'up',
            "denomination":'plus'
        },
         {

            "label": "shopclues",
            "value": 3,
            "type":'down',
            "denomination":'plus'
        },
        {
            "label": "flipkart",
            "value": 50,
            "type":'up',
            "denomination":'minus'
        },
        {
            "label": "Amazon",
            "value": 100,
            "type":'down',
            "denomination":'plus'

        }
        ,
        {
            "label": "Rediff",
            "value": 75,
            "type":'down',
            "denomination":'minus'
        }          
    ]
}
    d3charts("CustomVerticalBar2D", "#customverticalbar", customverticalbar);


    var customcolumn = {
    "chart": {
        "caption": "% of Products Discounted", //Name of the chart Header
        "captionColor":"#727272", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
         // "credits":{            // Credits
          //  "text":"Powered By", // Credit Name
         //   "color":"#666",
          //  "imageurl":"../images/logo.png"
       // },
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#7277d5","#3bb0d9","#d8434e","#b1c252","#f5ba42","#F39C11","#F2C40F","#179F87","#2D3E50","#9045AE","#5CADE2","#2ECD71","#BE3A2B"     ,"#C85600","#7E8C8D","#9A59B5","#34495E","#BEC3C7","#EC0000","#BE3243","#FF3243","#BE0043","#BE32FF","#CC3243","#BECC43","#BE324C","#f8bd19","#e44a00","#008FF4","#33bdda","#6baa01","#583e78"] // Pallette colors for 30 values
    },
    "rectheight":50,
    "export":{
        "showexport": true,
         "format": ["Download","jpeg","png"] //Specify Format to export.Currently support jpeg,png
    },

    "data":  [
        {

            "label": "Snapdeal(10.03)",
            "value": 99,
            "type":'up',
            "denomination":'plus'
        },
         {

            "label": "Shopclues(40.23)",
            "value": 10,
            "type":'down',
            "denomination":'minus'
        },
        {
            "label": "Flipkart(12.0)",
            "value": 50,
            "type":'down',
            "denomination":'minus'
        },
        {
            "label": "Amazon(7.89)",
            "value": 100,
            "type":'up',
            "denomination":'plus'

        }
        ,
        {
            "label": "Rediff(66.55)",
            "value": 75,
            "type":'up',
            "denomination":'minus'
        }          
    ]
}
    d3charts("CustomColumn2D", "#customcolumn", customcolumn);





     var groupbar = {
    "chart": {
        "caption": "Group bar", //Name of the chart Header
        "captionColor":"black", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
        "showlegend":true,
        "tooltipheader":'CATEGORY',
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "suffix":'',
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"] // Pallette colors for 30 values
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"], //Specify Format to export.Currently support jpeg,png
         "filename":"groupchart"
    },
    "data":  [
{
category: "2016-5-3",
data: [ ]
},
{
category: "2016-5-4",
data: [ ]
},
{
category: "2016-5-5",
data: [
{
label: "Amazon",
value: 83
},
{
label: "PaytmEffective-IN",
value: 5
},
{
label: "SnapDeal",
value: 33
},
{
label: "Paytm",
value: 5
},
{
label: "Flipkart",
value: 84
}
]
},
{
category: "2016-5-6",
data: [ ]
},
{
category: "2016-5-7",
data: [ ]
},
{
category: "2016-5-8",
data: [ ]
},
{
category: "2016-5-9",
data: [ ]
}
]
}
    d3charts("GroupBar2D", "#groupbar", groupbar);



var groupbarcustom = {
    "chart": {
        "caption": "Discount distribution of product by category", //Name of the chart Header
        "captionColor":"#727272", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
        "showlegend":true,
        "tooltipheader":'CATEGORY',
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "suffix":'%',
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#dee2a1", "#f39684", "#d3eee7", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"] // Pallette colors for 30 values
    },
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"], //Specify Format to export.Currently support jpeg,png
         "filename":"groupchart"
    },
    "data":  [
{
        category: "Clothing",
        data: [ 
              {
              label: "0-30",
              value: 83
              },
              {
              label: "30-60",
              value: 5
              },
              {
              label: "60-90",
              value: 33
              }
              ]
},
{
category: "Mobile",
        data: [ 
              {
              label: "0-30",
              value: 23
              },
              {
              label: "30-60",
              value: 9
              },
              {
              label: "60-90",
              value: 65
              }
              ]
},
{
category: "Electronics",
        data: [ 
              {
              label: "0-30",
              value: 34
              },
              {
              label: "30-60",
              value: 67
              },
              {
              label: "60-90",
              value: 32
              }
              ]
},
{
category: "Accesories",
        data: [ 
              {
              label: "0-30",
              value: 4
              },
              {
              label: "30-60",
              value: 8
              },
              {
              label: "60-90",
              value: 12
              }
              ]
},
{
category: "Footwear",
        data: [ 
              {
              label: "0-30",
              value: 34
              },
              {
              label: "30-60",
              value: 67
              },
              {
              label: "60-90",
              value: 32
              }
              ]
}
]
}
    d3charts("GroupBar2D", "#groupbarcustom", groupbarcustom);


    var groupbarneg = {
    "chart": {
        "caption": "Negative Group bar", //Name of the chart Header
        "captionColor":"black", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
        "showlegend":true,
        "tooltipheader":'CATEGORY',
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "suffix":'%',
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"] // Pallette colors for 30 values
    },
    
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"], //Specify Format to export.Currently support jpeg,png
         "filename":"Negativegroupchart"
    },
    "data":  [
        {
           "category": "Electronics",
            "data":[
                    {'label':'Snapdeal',
                     'value':50
                     },
                     {'label':'Amazon',
                     'value':50
                     },
                     {'label':'Paytm',
                     'value':100
                     },
                     {'label':'Shopclues',
                     'value':45
                     },
                     {'label':'Jabong',
                     'value':23
                     },
                     {'label':'Flipkart',
                     'value':87
                     },
                     {'label':'Rediff',
                     'value':45
                     }
                    ] 
        },
        {
           "category": "Apparel",
            "data":[
                    {'label':'Snapdeal',
                     'value':100
                     },
                     {'label':'Amazon',
                     'value':50
                     },
                     {'label':'Paytm',
                     'value':20
                     },
                     {'label':'Shopclues',
                     'value':66
                     },
                     {'label':'Jabong',
                     'value':22
                     },
                     {'label':'Flipkart',
                     'value':99
                     },
                     {'label':'Rediff',
                     'value':33
                     }
                    ] 
        },
        {
           "category": "Clothing",
            "data":[
                    {'label':'Snapdeal',
                     'value':-20
                     },
                     {'label':'Amazon',
                     'value':-50
                     },
                     {'label':'Paytm',
                     'value':-100
                     },
                     {'label':'Shopclues',
                     'value':-67
                     },
                     {'label':'Jabong',
                     'value':-11
                     },
                     {'label':'Flipkart',
                     'value':-9
                     },
                     {'label':'Rediff',
                     'value':-55
                     }
                    ] 
        },
        {
           "category": "Footwear",
            "data":[
                    {'label':'Snapdeal',
                     'value':89
                     },
                     {'label':'Amazon',
                     'value':100
                     },
                     {'label':'Paytm',
                     'value':50
                     },
                     {'label':'Shopclues',
                     'value':23
                     },
                     {'label':'Jabong',
                     'value':56
                     },
                     {'label':'Flipkart',
                     'value':32
                     },
                     {'label':'Rediff',
                     'value':90
                     }
                    ] 
        },
        {
           "category": "Accesories",
            "data":[
                    {'label':'Snapdeal',
                     'value':20
                     },
                     {'label':'Amazon',
                     'value':10
                     },
                     {'label':'Paytm',
                     'value':50
                     },
                     {'label':'Shopclues',
                     'value':100
                     },
                     {'label':'Jabong',
                     'value':23
                     },
                     {'label':'Flipkart',
                     'value':66
                     },
                     {'label':'Rediff',
                     'value':33
                     }
                    ] 
        }                       
    ]
}
    d3charts("GroupBar2D", "#groupbarneg", groupbarneg);

     var multiseriesrange = {
    "chart": {
        "caption": "Multi Series Range chart", //Name of the chart Header
        "captionColor":"black", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
        "showlegend":true,
        "tooltipheader":'CATEGORY',
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "suffix":'%',
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["red", "blue", "green", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"] // Pallette colors for 30 values
    },
    
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"], //Specify Format to export.Currently support jpeg,png
         "filename":"multiseriesrange"
    },
    "data":  [
        {
           "category": "Snapdeal",
            "data":[
                     {'label':'201604010000',
                     'value':21
                     },
                    {'label':'201604010222',
                     'value':54
                     },
                     {'label':'201604012230',
                     'value':33
                     },
                     {'label':'201604020000',
                     'value':88
                     },
                     {'label':'201604030000',
                     'value':23
                     },
                     {'label':'201604031345',
                     'value':77
                     },
                     {'label':'201604040000',
                     'value':33
                     },
                     {'label':'201604050000',
                     'value':55
                     },
                     {'label':'201604060000',
                     'value':99
                     },
                     {'label':'201604070000',
                     'value':54
                     },
                     {'label':'201604080000',
                     'value':12
                     },
                     {'label':'201604090000',
                     'value':34
                     },
                     {'label':'201604100000',
                     'value':78
                     },
                     {'label':'201604110000',
                     'value':65
                     },
                     {'label':'201604120000',
                     'value':0
                     },
                     {'label':'201604130000',
                     'value':0
                     },
                     {'label':'201604140000',
                     'value':0
                     },
                     {'label':'201604150000',
                     'value':55
                     },
                     {'label':'201604160000',
                     'value':66
                     },
                     {'label':'201604170000',
                     'value':76
                     },
                     {'label':'201604180000',
                     'value':12
                     },
                     {'label':'201604190000',
                     'value':74
                     },
                     {'label':'201604200000',
                     'value':23
                     },
                     {'label':'201604210000',
                     'value':12
                     },
                     {'label':'201604220000',
                     'value':44
                     },
                     {'label':'201604230000',
                     'value':88
                     },
                     {'label':'201604240000',
                     'value':99
                     },
                     {'label':'201604250000',
                     'value':65
                     },
                     {'label':'201604260000',
                     'value':43
                     },
                     {'label':'201604270000',
                     'value':32
                     },
                     {'label':'201604280000',
                     'value':56
                     },
                     {'label':'201604290000',
                     'value':11
                     },
                     {'label':'201604290900',
                     'value':77
                     },
                     {'label':'201604291500',
                     'value':11
                     },
                     {'label':'201604300000',
                     'value':22
                     }
                    ] 
        },
        {
           "category": "Paytm",
            "data":[
                    {'label':'201604010000',
                     'value':11
                     },
                    {'label':'201604010222',
                     'value':23
                     },
                     {'label':'201604012230',
                     'value':0
                     },
                     {'label':'201604020000',
                     'value':100
                     },
                     {'label':'201604030000',
                     'value':45
                     },
                     {'label':'201604031345',
                     'value':23
                     },
                     {'label':'201604040000',
                     'value':87
                     },
                     {'label':'201604050000',
                     'value':33
                     },
                     {'label':'201604060000',
                     'value':10
                     },
                     {'label':'201604070000',
                     'value':87
                     },
                     {'label':'201604080000',
                     'value':54
                     },
                     {'label':'201604090000',
                     'value':32
                     },
                     {'label':'201604100000',
                     'value':45
                     },
                     {'label':'201604110000',
                     'value':45
                     },
                     {'label':'201604120000',
                     'value':67
                     },
                     {'label':'201604130000',
                     'value':89
                     },
                     {'label':'201604140000',
                     'value':90
                     },
                     {'label':'201604150000',
                     'value':76
                     },
                     {'label':'201604160000',
                     'value':54
                     },
                     {'label':'201604170000',
                     'value':32
                     },
                     {'label':'201604180000',
                     'value':12
                     },
                     {'label':'201604190000',
                     'value':54
                     },
                     {'label':'201604200000',
                     'value':67
                     },
                     {'label':'201604210000',
                     'value':43
                     },
                     {'label':'201604220000',
                     'value':88
                     },
                     {'label':'201604230000',
                     'value':43
                     },
                     {'label':'201604240000',
                     'value':66
                     },
                     {'label':'201604250000',
                     'value':33
                     },
                     {'label':'201604260000',
                     'value':22
                     },
                     {'label':'201604270000',
                     'value':11
                     },
                     {'label':'201604280000',
                     'value':33
                     },
                     {'label':'201604290000',
                     'value':45
                     },
                     {'label':'201604290900',
                     'value':22
                     },
                     {'label':'201604291500',
                     'value':45
                     },
                     {'label':'201604300000',
                     'value':12
                     }
                    ] 
        },
        {
           "category": "Flipkart",
            "data":[
                    {'label':'201604010000',
                     'value':55
                     },
                    {'label':'201604010222',
                     'value':7
                     },
                     {'label':'201604012230',
                     'value':5
                     },
                     {'label':'201604020000',
                     'value':88
                     },
                     {'label':'201604030000',
                     'value':66
                     },
                     {'label':'201604031345',
                     'value':0
                     },
                     {'label':'201604040000',
                     'value':34
                     },
                     {'label':'201604050000',
                     'value':34
                     },
                     {'label':'201604060000',
                     'value':23
                     },
                     {'label':'201604070000',
                     'value':55
                     },
                     {'label':'201604080000',
                     'value':99
                     },
                     {'label':'201604090000',
                     'value':65
                     },
                     {'label':'201604100000',
                     'value':55
                     },
                     {'label':'201604110000',
                     'value':44
                     },
                     {'label':'201604120000',
                     'value':33
                     },
                     {'label':'201604130000',
                     'value':32
                     },
                     {'label':'201604140000',
                     'value':45
                     },
                     {'label':'201604150000',
                     'value':32
                     },
                     {'label':'201604160000',
                     'value':67
                     },
                     {'label':'201604170000',
                     'value':87
                     },
                     {'label':'201604180000',
                     'value':54
                     },
                     {'label':'201604190000',
                     'value':54
                     },
                     {'label':'201604200000',
                     'value':45
                     },
                     {'label':'201604210000',
                     'value':66
                     },
                     {'label':'201604220000',
                     'value':88
                     },
                     {'label':'201604230000',
                     'value':99
                     },
                     {'label':'201604240000',
                     'value':44
                     },
                     {'label':'201604250000',
                     'value':33
                     },
                     {'label':'201604260000',
                     'value':22
                     },
                     {'label':'201604270000',
                     'value':66
                     },
                     {'label':'201604280000',
                     'value':55
                     },
                     {'label':'201604290000',
                     'value':88
                     },
                     {'label':'201604290900',
                     'value':88
                     },
                     {'label':'201604291500',
                     'value':88
                     },
                     {'label':'201604300000',
                     'value':33
                     }
                    ] 
        }                       
    ]
}
    d3charts("MultiSeriesRange2D", "#multiseriesrange", multiseriesrange);


     var boxplot = {
    "chart": {
        "caption": "Box Plot chart", //Name of the chart Header
        "captionColor":"black", // Color of the Chart Header
        "yaxisname": "", // Name which gets displayed in the Yaxis
        "slant":false, // X axis label slant
        "slantdegree":"90", // Slant based on the degree specified
        "showlegend":true,
        "tooltipheader":'CATEGORY',
          "credits":{            // Credits
            "text":"Powered By", // Credit Name
            "color":"#666",
            "imageurl":"../images/logo.png"
        },
         "suffix":'%',
          "tickinterval":5, // Number of label visible in the X axis
         "pallattecolor":["red", "blue", "green", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"] // Pallette colors for 30 values
    },
    
    "export":{
        "showexport": true,
         "format": ["-Download-","jpeg","png"], //Specify Format to export.Currently support jpeg,png
         "filename":"boxplot"
    },
    "colormap":[
    {"name":"lowest",
    "value":"#6baed6"},
       {"name":"highest",
    "value":"#3182bd"},
       {"name":"median",
    "value":"#000"}
    ],
    "data":  [
        {
           "category": "addidas",
            "data":[

                     {'label':'Product1',
                     'value':77
                     },
                     {'label':'Product2',
                     'value':33
                     },
                     {'label':'Product3',
                     'value':55
                     },
                     {'label':'Product4',
                     'value':99
                     },
                     {'label':'Product5',
                     'value':54
                     },
                     {'label':'Product6',
                     'value':12
                     },
                     {'label':'Product7',
                     'value':34
                     },
                     {'label':'Product8',
                     'value':78
                     },
                     {'label':'Product9',
                     'value':65
                     },
                     {'label':'Product10',
                     'value':0
                     },
                     {'label':'Product11',
                     'value':0
                     },
                     {'label':'Product12',
                     'value':0
                     },
                     {'label':'Product13',
                     'value':55
                     },
                     {'label':'Product14',
                     'value':66
                     },
                     {'label':'Product15',
                     'value':76
                     },
                     {'label':'Product16',
                     'value':12
                     },
                     {'label':'Product17',
                     'value':74
                     },
                     {'label':'Product18',
                     'value':23
                     },
                     {'label':'Product19',
                     'value':12
                     },
                     {'label':'Product20',
                     'value':44
                     },
                     {'label':'Product21',
                     'value':88
                     },
                     {'label':'Product22',
                     'value':99
                     },
                     {'label':'Product23',
                     'value':65
                     },
                     {'label':'Product24',
                     'value':43
                     },
                     {'label':'Product25',
                     'value':32
                     },
                     {'label':'Product26',
                     'value':56
                     },
                     {'label':'Product27',
                     'value':11
                     },
                     {'label':'Product28',
                     'value':77
                     },
                     {'label':'Product29',
                     'value':11
                     },
                     {'label':'Product30',
                     'value':22
                     }
                    ] 
        },
        {
           "category": "puma",
            "data":[
                    {'label':'Product1',
                     'value':12
                     },
                     {'label':'Product2',
                     'value':55
                     },
                     {'label':'Product3',
                     'value':76
                     },
                     {'label':'Product4',
                     'value':32
                     },
                     {'label':'Product5',
                     'value':88
                     },
                     {'label':'Product6',
                     'value':43
                     },
                     {'label':'Product7',
                     'value':66
                     },
                     {'label':'Product8',
                     'value':78
                     },
                     {'label':'Product9',
                     'value':34
                     },
                     {'label':'Product10',
                     'value':0
                     },
                     {'label':'Product11',
                     'value':0
                     },
                     {'label':'Product12',
                     'value':0
                     },
                     {'label':'Product13',
                     'value':7
                     },
                     {'label':'Product14',
                     'value':3
                     },
                     {'label':'Product15',
                     'value':89
                     },
                     {'label':'Product16',
                     'value':12
                     },
                     {'label':'Product17',
                     'value':22
                     },
                     {'label':'Product18',
                     'value':88
                     },
                     {'label':'Product19',
                     'value':32
                     },
                     {'label':'Product20',
                     'value':44
                     },
                     {'label':'Product21',
                     'value':74
                     },
                     {'label':'Product22',
                     'value':12
                     },
                     {'label':'Product23',
                     'value':65
                     },
                     {'label':'Product24',
                     'value':10
                     },
                     {'label':'Product25',
                     'value':32
                     },
                     {'label':'Product26',
                     'value':4
                     },
                     {'label':'Product27',
                     'value':61
                     },
                     {'label':'Product28',
                     'value':45
                     },
                     {'label':'Product29',
                     'value':78
                     },
                     {'label':'Product30',
                     'value':32
                     }
                    ] 
        },
        {
           "category": "reebok",
            "data":[
                    {'label':'Product1',
                     'value':77
                     },
                     {'label':'Product2',
                     'value':56
                     },
                     {'label':'Product3',
                     'value':11
                     },
                     {'label':'Product4',
                     'value':4
                     },
                     {'label':'Product5',
                     'value':9
                     },
                     {'label':'Product6',
                     'value':4
                     },
                     {'label':'Product7',
                     'value':56
                     },
                     {'label':'Product8',
                     'value':23
                     },
                     {'label':'Product9',
                     'value':56
                     },
                     {'label':'Product10',
                     'value':0
                     },
                     {'label':'Product11',
                     'value':0
                     },
                     {'label':'Product12',
                     'value':0
                     },
                     {'label':'Product13',
                     'value':45
                     },
                     {'label':'Product14',
                     'value':88
                     },
                     {'label':'Product15',
                     'value':11
                     },
                     {'label':'Product16',
                     'value':45
                     },
                     {'label':'Product17',
                     'value':76
                     },
                     {'label':'Product18',
                     'value':44
                     },
                     {'label':'Product19',
                     'value':55
                     },
                     {'label':'Product20',
                     'value':98
                     },
                     {'label':'Product21',
                     'value':65
                     },
                     {'label':'Product22',
                     'value':12
                     },
                     {'label':'Product23',
                     'value':45
                     },
                     {'label':'Product24',
                     'value':65
                     },
                     {'label':'Product25',
                     'value':32
                     },
                     {'label':'Product26',
                     'value':56
                     },
                     {'label':'Product27',
                     'value':32
                     },
                     {'label':'Product28',
                     'value':78
                     },
                     {'label':'Product29',
                     'value':54
                     },
                     {'label':'Product30',
                     'value':67
                     }
                    ] 
        },
        {
           "category": "fila",
            "data":[
                    {'label':'Product1',
                     'value':23
                     },
                     {'label':'Product2',
                     'value':45
                     },
                     {'label':'Product3',
                     'value':67
                     },
                     {'label':'Product4',
                     'value':43
                     },
                     {'label':'Product5',
                     'value':67
                     },
                     {'label':'Product6',
                     'value':89
                     },
                     {'label':'Product7',
                     'value':54
                     },
                     {'label':'Product8',
                     'value':43
                     },
                     {'label':'Product9',
                     'value':56
                     },
                     {'label':'Product10',
                     'value':34
                     },
                     {'label':'Product11',
                     'value':56
                     },
                     {'label':'Product12',
                     'value':23
                     },
                     {'label':'Product13',
                     'value':87
                     },
                     {'label':'Product14',
                     'value':65
                     },
                     {'label':'Product15',
                     'value':54
                     },
                     {'label':'Product16',
                     'value':55
                     },
                     {'label':'Product17',
                     'value':88
                     },
                     {'label':'Product18',
                     'value':66
                     },
                     {'label':'Product19',
                     'value':99
                     },
                     {'label':'Product20',
                     'value':54
                     },
                     {'label':'Product21',
                     'value':65
                     },
                     {'label':'Product22',
                     'value':34
                     },
                     {'label':'Product23',
                     'value':54
                     },
                     {'label':'Product24',
                     'value':67
                     },
                     {'label':'Product25',
                     'value':65
                     },
                     {'label':'Product26',
                     'value':43
                     },
                     {'label':'Product27',
                     'value':89
                     },
                     {'label':'Product28',
                     'value':54
                     },
                     {'label':'Product29',
                     'value':43
                     },
                     {'label':'Product30',
                     'value':32
                     }
                    ] 
        },
        {
           "category": "Seven",
            "data":[
                    {'label':'Product1',
                     'value':100
                     },
                     {'label':'Product2',
                     'value':56
                     },
                     {'label':'Product3',
                     'value':78
                     },
                     {'label':'Product4',
                     'value':65
                     },
                     {'label':'Product5',
                     'value':43
                     },
                     {'label':'Product6',
                     'value':22
                     },
                     {'label':'Product7',
                     'value':66
                     },
                     {'label':'Product8',
                     'value':77
                     },
                     {'label':'Product9',
                     'value':88
                     },
                     {'label':'Product10',
                     'value':54
                     },
                     {'label':'Product11',
                     'value':56
                     },
                     {'label':'Product12',
                     'value':34
                     },
                     {'label':'Product13',
                     'value':23
                     },
                     {'label':'Product14',
                     'value':67
                     },
                     {'label':'Product15',
                     'value':54
                     },
                     {'label':'Product16',
                     'value':76
                     },
                     {'label':'Product17',
                     'value':87
                     },
                     {'label':'Product18',
                     'value':99
                     },
                     {'label':'Product19',
                     'value':99
                     },
                     {'label':'Product20',
                     'value':43
                     },
                     {'label':'Product21',
                     'value':23
                     },
                     {'label':'Product22',
                     'value':34
                     },
                     {'label':'Product23',
                     'value':44
                     },
                     {'label':'Product24',
                     'value':32
                     },
                     {'label':'Product25',
                     'value':14
                     },
                     {'label':'Product26',
                     'value':65
                     },
                     {'label':'Product27',
                     'value':78
                     },
                     {'label':'Product28',
                     'value':65
                     },
                     {'label':'Product29',
                     'value':43
                     },
                     {'label':'Product30',
                     'value':45
                     }
                    ] 
        }                          
    ]
}
    d3charts("BoxPlot2D", "#boxplot", boxplot);