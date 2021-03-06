/**
 * D3 Chart - Column2D Graph
 * Copyright (c) 2015 Aravind Arivarasan, https://github.com/aaravind/d3charts
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
var pricing2D = function (chartId, chartdata, chartType) {
    if (chartdata.data != undefined) {
        if (chartdata.data.length != 0) {


            if (chartdata.export != undefined && d3.select(chartId + ' select')[0][0] == null) {
                function change() {
                    var selectedIndex = select.property('selectedIndex'),
        data = options[0][selectedIndex].__data__;
                    if (selectedIndex != 0) {
                        if (chartdata.export.filename == undefined || chartdata.export.filename == '')
                            exportfile(chartId, chartdata, 'Pricing', '.' + data, false);
                        else
                            exportfile(chartId, chartdata, chartdata.export.filename, '.' + data, false);
                    }
                }
                if (chartdata.export.showexport == true) {
                    var select = d3.select(chartId).append("select").on("change", change).attr('style', 'float:right;position:relative;top:35px ;height:20px;border: 0px;margin:0px;background-color: #ecf0f1;box-shadow: 0px 1px 2px #cccccc;font-size:11px'),
    options = select.selectAll('option').data(chartdata.export.format); // Data join

                    // Enter selection
                    options.enter().append("option").text(function (d) {
                        return d;
                    });


                }
            }
            if (d3.select(chartId).select('svg')[0][0] != null)
                d3.select(chartId).select('svg').remove();
            var bottommargin = chartdata.chart.slant ? 100 : 50;
            var topval = 30;
            var color = d3.scale.category20c();
            var margin = { top: topval, right: 12, bottom: bottommargin, left: 12 };
            var chartcontent = d3.select(chartId);
            var width = chartcontent[0][0].offsetWidth - margin.left - margin.right;
            var height = chartcontent[0][0].offsetHeight - margin.bottom - margin.top;
            var styleborder = "fill: none; stroke: lightgrey;  shape-rendering: crispEdges;font:12px sans-serif";
            var div = d3.select("body").append("div")
    .attr("style", " position: absolute;opacity:0;text-align: left;max-width: 200px;height: auto;padding: 8px 12px;font: 12px sans-serif;background: white;border: 1px solid lightgrey;border-radius: 3px;pointer-events: none;color:black");




            var svg = d3.select(chartId).append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr('viewBox', '0 0 ' + (width + margin.left + margin.right + 70) + ' ' + (height + margin.top + margin.bottom + 10))
        .attr('preserveAspectRatio', 'xMinYMin')
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            d3.select(chartId + ' svg').insert('rect', ':first-child').attr('width', '100%').attr('height', '100%').attr('x', '0').attr('y', '0').style('fill', 'white');
            if (chartdata.chart.twoxaxis == true)
                ytop = 15 - (margin.top / 1);
            else
                ytop = 5 - (margin.top / 2);
            svg.append("text")
        .attr("x", 0)
        .attr("y", 10)
        .attr("text-anchor", "start")
        .attr('class', 'captiontext')
        .style("font-size", "18px")
        .style("text-decoration", "none")
         .style("text-transform", "uppercase")
         .style("font-weight", "bold")
        .style("fill", chartdata.chart.captionColor)
        .text(chartdata.chart.caption.toUpperCase());

            if (chartdata.chart.hiddencaption != undefined) {
                if (chartdata.chart.hiddencaption.length != 0) {
                    svg.append("text")
          .attr("x", 0)
        .attr("y", 10)
        .attr("text-anchor", "start")
         .attr('class', 'hiddencaptiontext')
        .style("font-size", "18px")
        .style("text-decoration", "none")
         .style("text-transform", "uppercase")
         .style("font-weight", "bold")
         .style("display", "none")
        .style("fill", function (d) {
            return chartdata.chart.captionColor;
        })
        .text(chartdata.chart.hiddencaption.toUpperCase());
                }

            }

            if (chartdata.chart.subhiddencaption != undefined) {
                if (chartdata.chart.subhiddencaption.length != 0) {
                    svg.append("text")
           .attr("x", function (d) {
               return d3.select(chartId + ' .hiddencaptiontext').node().getBoundingClientRect().width + 10;
           })
        .attr("y", 7.5)
        .attr("text-anchor", "start")
         .attr('class', 'subhiddencaptiontext')
        .style("font-size", "12px")
        .style("text-decoration", "none")
         .style("text-transform", "uppercase")
         .style("font-weight", "bold")
         .style("display", "none")
        .style("fill", function (d) {
            return chartdata.chart.captionColor;
        })
     .text('(' + chartdata.chart.subhiddencaption.toUpperCase() + ')');
                }

            }

            if (chartdata.chart.subcaption != undefined) {
                if (chartdata.chart.subcaption.length != 0) {
                    svg.append("text")
        .attr("x", function (d) {
            return d3.select(chartId + ' .captiontext').node().getBoundingClientRect().width + 10;
        })
        .attr("y", 7.5)
        .attr("text-anchor", "start")
         .attr('class', 'subcaptiontext')
        .style("font-size", "12px")
        .style("text-decoration", "none")
         .style("text-transform", "uppercase")
         .style("font-weight", "bold")
        .style("fill", function (d) {
            return chartdata.chart.subcaptionColor != undefined ? chartdata.chart.subcaptionColor : chartdata.chart.captionColor;
        })
        .text('(' + chartdata.chart.subcaption.toUpperCase() + ')');
                }
            }
            var yourvalue;
            var curcont;
            for (i = 0; i < chartdata.data.length; i++) {
                if (chartdata.data[i].flag != undefined) {
                    yourvalue = chartdata.data[i].value;
                    curcont = i;
                    break;
                }

            }

            var colorless = d3.scale.linear()
    .domain([0, curcont])
    .range([chartdata.chart.pallattecolor[0], chartdata.chart.pallattecolor[1]]);

            var colormore = d3.scale.linear()
    .domain([0, chartdata.data.length - curcont])
    .range([chartdata.chart.pallattecolor[2], chartdata.chart.pallattecolor[3]]);
            var rects = svg.selectAll('pricingrect')
        .data(chartdata.data)
        .enter()
        .append('rect')
        .attr('x', function (d, i) {
            return (width / chartdata.data.length) * i;
        })
        .attr('y', function (d, i) {
            return height - chartdata.rectheight + 25;
        })
        .attr('height', function (d) {
            return chartdata.rectheight;
        })
         .attr('width', function (d) {
             return width / chartdata.data.length;
         })
         .style('opacity', function (d) {
             if (d.flag != undefined)
                 return 1;
             else
                 return 0.5;
         }
         )
         .style('stroke', function (d) {
             if (d.flag != undefined)
                 return 'black';
             else
                 return 'white';
         }

         )
         .style('stroke-width', function (d) {
             if (d.flag != undefined)
                 return '3px';
             else
                 return '0.5px';
         }
         )
        .style('fill', function (d, i) {
            if (d.value < yourvalue)
                return colorless(i);
            if (d.value > yourvalue) {
                var thisival = chartdata.data.length - i - 1;
                return colormore(i);
            }

            else
                return '#0000ff';
        })
         .on("mouseover", function (d, i) {
             this.style.cursor = 'pointer';
             this.style.opacity = 1;
             div.transition()
                .duration(100)
                .style("opacity", 1);

             var xattr = bodyRect = elemRect = yattr = 0;
             var bodyRect = document.body.getBoundingClientRect();
             var elemRect = this.getBoundingClientRect();

             var xattr = (elemRect.left - bodyRect.left + 10) + 'px';
             var yattr = (elemRect.bottom - bodyRect.top - height + 20) + 'px';
             //var xattr = (elemRect.left - bodyRect.left - elemRect.left/2) + 'px';
             if (d.flag != undefined) {
                 /*  var htmlcontent = '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">Yours vs ' + d.label + '</span><hr>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">Your Price: ' + d3.format(',')(d.value.toFixed(2) / 1) + '</span>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Low Priced Competitors' + ': ' + curcont + 1 + '</span>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'High Priced Competitors' + ': ' + chartdata.data.length - curcont - 1 + '</span>';
                 */
                 var tolen = chartdata.data.length;
                 var htmlcontent = '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">Your Details' + '</span><hr>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Your Price' + ': ' + d3.format(',')(d.value.toFixed(2) / 1) + '</span><br>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'No. of Low Priced Competitors' + ': ' + curcont + '</span><br>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'No. of High Priced Competitors' + ': ' + (chartdata.data.length - curcont - 1) + '</span><br>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Lowest Competitor' + ': ' + (chartdata.data[0].label) + '</span><br>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Highest Competitor' + ': ' + (chartdata.data[tolen - 1].label) + '</span>';
             }

             else {
                 var htmlcontent = '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">Yours vs ' + d.label + '</span><hr>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Your Price' + ': ' + yourvalue + '</span><br>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + d.label + ' Price: ' + d3.format(',')(d.value.toFixed(2) / 1) + '</span><br>';
                 htmlcontent = htmlcontent + '<span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Price Difference' + ': ' + Math.abs((d.value - yourvalue)) + '</span><br>';
                 if (d.value - yourvalue >= 0)
                     htmlcontent = htmlcontent + '<hr><span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + 'Your Pricing is better than ' + d.label + ' by ' + Math.abs((d.value - yourvalue)) + '</span><br>';
                 else
                  htmlcontent = htmlcontent + '<hr><span style=\"height:10px!important;text-transform:uppercase;font-size:12px\">' + d.label +' pricing is better than yours by ' + Math.abs((d.value - yourvalue)) + '</span><br>';
             }
             div.html(htmlcontent)
       .style("left", xattr)
                .style("top", yattr);
         })
                    .on("mouseout", function (d, i) {
                        this.style.cursor = 'pointer';
                        if (d.flag == undefined)
                            this.style.opacity = 0.5;
                        else
                            this.style.opacity = 1;
                        div.transition()
                .duration(100)
                .style("opacity", 0);
                    });

            if (chartdata.chart.credits != undefined) {
                if (chartdata.chart.credits.text != undefined && chartdata.chart.credits.text != '') {
                    var credits = svg.selectAll('.credits')
            .data([1])
            .enter().append('g');
                    var positionwidth;
                    var imagewidth;
                    if (chartdata.chart.credits.imageurl != undefined && chartdata.chart.credits.imageurl != '') {
                        positionwidth = -30;
                        imagewidth = -20;
                    }
                    else
                        positionwidth = 0;
                    credits.append('text')
            .attr("class", 'credits' + chartId.replace("#", ''))
                    // .attr("x", d3.select(chartId + ' .gridy .tick line')[0][0].getAttribute('x2') / 1)
           .attr("x", document.getElementById(chartId.replace('#', '')).offsetWidth - positionwidth)
            .attr("y", height + margin.bottom - 6)
            .attr("text-anchor", "end")
            .style("font-size", "10px")
            .style("stroke", "#ccc")
            .style("text-decoration", "none")
            .style("text-transform", "uppercase")
            .style("font-weight", "100")
            .style("stroke-width", "0.5px")
            .style("fill", chartdata.chart.credits.color)
            .text(chartdata.chart.credits.text.toUpperCase());


                    if (chartdata.chart.credits.imageurl != undefined && chartdata.chart.credits.imageurl != '') {
                        function getBase64FromImageUrl(url) {
                            var img = new Image();

                            img.onload = function () {
                                var canvas2 = document.createElement("canvas");
                                canvas2.width = this.width;
                                canvas2.height = this.height;

                                var ctx2 = canvas2.getContext("2d");
                                ctx2.drawImage(this, 0, 0);

                                var dataURL = canvas2.toDataURL("image/png");


                                credits.append('image')
                                //.attr('x', d3.select(chartId + ' .gridy .tick line')[0][0].getAttribute('x2') / 1 - 10)
            .attr('x', document.getElementById(chartId.replace('#', '')).offsetWidth - imagewidth)
            .attr("y", height + margin.bottom - 25)
            .attr("width", 40)
            .attr("height", 30)
            .attr("xlink:href", dataURL);



                            };

                            img.src = url;
                        }
                        getBase64FromImageUrl(chartdata.chart.credits.imageurl);
                    }
                }
            }
        }
        else {
            var bottommargin = chartdata.chart.slant ? 100 : 50;
            var margin = { top: 50, right: 20, bottom: bottommargin, left: 50 };
            var chartcontent = d3.select(chartId);
            var width = chartcontent[0][0].offsetWidth - margin.left - margin.right;
            var height = chartcontent[0][0].offsetHeight - margin.bottom - margin.top;
            if (d3.select(chartId).select('svg')[0][0] != null)
                d3.select(chartId).select('svg').remove();
            var svg = d3.select(chartId).append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr('viewBox', '0 0 ' + (width + margin.left + margin.right + 70) + ' ' + (height + margin.top + margin.bottom + 10))
        .attr('preserveAspectRatio', 'xMinYMin')
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            svg.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .text("NO DATA TO DISPLAY")
        .style('font-size', '12px')
        .style('fill', 'black');
        }
    }

}

