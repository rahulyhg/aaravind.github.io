/**
 * D3 Chart - Column2D Graph
 * Copyright (c) 2015 Aravind Arivarasan, https://github.com/aaravind/d3charts
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
var column2D = function (chartId, chartdata) {
    if (chartdata.data != undefined) {
        if (chartdata.data.length != 0) {

            if (chartdata.export != undefined && d3.select(chartId + ' select')[0][0] == null) {
                function change() {
                    var selectedIndex = select.property('selectedIndex'),
        data = options[0][selectedIndex].__data__;
                    if (selectedIndex != 0) {
                        if (chartdata.export.filename == undefined || chartdata.export.filename == '')
                            exportfile(chartId, chartdata, 'Column2D', '.' + data, false);
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
            if (!chartdata.chart.twoxaxis)
                topval = 30;
            if (chartdata.chart.twoxaxis && chartdata.chart.slant)
                topval = 100;
            if (chartdata.chart.twoxaxis && !chartdata.chart.slant)
                topval = 50;
            var color = d3.scale.category20c();
            var margin = { top: topval, right: 20, bottom: bottommargin, left: 50 };
            var chartcontent = d3.select(chartId);
            var width = chartcontent[0][0].offsetWidth - margin.left - margin.right;
            var height = chartcontent[0][0].offsetHeight - margin.bottom - margin.top;
            var styleborder = "fill: none; stroke: #000;  shape-rendering: crispEdges;font:12px sans-serif";
            var div = d3.select("body").append("div")
    .attr("style", " position: absolute;opacity:0;text-align: left;max-width: 200px;height: auto;padding: 8px 12px;font: 12px sans-serif;background: white;border: 1px solid lightgrey;border-radius: 3px;pointer-events: none;color:black");
            var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

            if (chartdata.chart.twoxaxis == true) {
                var x1 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);
                var xaxis1 = d3.svg.axis()
    .scale(x1)
    .orient("top")
    .ticks(5);
                x1.domain(chartdata.data.map(function (d) { return d.label; }));
            }

            var y = d3.scale.linear()
    .range([height, 15]);
            var xaxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(5);


            var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

            function yaxis() {
                return d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
          .tickFormat(function (d) {
              var prefix = d3.formatPrefix(d);
              return prefix.scale(d) + prefix.symbol;
          })
            }

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
        .attr("y", 5)
        .attr("text-anchor", "start")
        .style("font-size", "15px")
        .style("text-decoration", "none")
         .style("text-transform", "uppercase")
         .style("font-weight", "normal")
        .style("fill", chartdata.chart.captionColor)
        .text(chartdata.chart.caption);
            x.domain(chartdata.data.map(function (d) { return d.label; }));

            var domainmaxcol = d3.max(chartdata.data, function (d) { return d.value + (0.25 * d.value); });

            y.domain([0, domainmaxcol]);


            if (chartdata.chart.slant) {
                if (chartdata.chart.slantdegree != undefined)
                    rotatevalue = "rotate(-" + chartdata.chart.slantdegree + ")";
                else
                    rotatevalue = "rotate(-" + 65 + ")";
                svg.append("g")
      .attr("style", styleborder)
      .attr("transform", "translate(0," + height + ")")
      .call(xaxis)
      .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return rotatevalue
            });

                if (chartdata.chart.twoxaxis == true) {
                    svg.append("g")
      .attr("style", styleborder)
      .attr("class", "texttop")
      .attr("transform", "translate(0," + 0 + ")")
      .call(xaxis1)
      .selectAll("text")
            .style("text-anchor", "start")
            .attr("x", "1.5em")
            .attr("dx", "-.8em")
            .attr("dy", "1em")
            .attr("transform", function (d) {
                return rotatevalue
            });
                    d3.selectAll(".texttop").selectAll("text").data(chartdata.data)
    .text(function (d) {
        return d.axistop;
    });
                }
            }
            else {
                svg.append("g")
      .attr("style", styleborder)
      .attr("class", "xtick")
      .attr("transform", "translate(0," + (height) + ")")
      .call(xaxis);

                if (chartdata.chart.twoxaxis == true) {
                    svg.append("g")
      .attr("style", styleborder)
      .attr("class", "texttop")
      .attr("transform", "translate(0," + 0 + ")")
      .call(xaxis1);
                    d3.selectAll(".texttop").selectAll("text").data(chartdata.data)
    .text(function (d) {
        return d.axistop;
    });
                }

            }
            svg.append("g")
  .attr("class", "grid exportgrid")
      .call(yaxis()
       .tickSize(-width, 0, 0)
            )
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
      .attr("dy", ".71em")
      .attr("text-anchor", "end")
      .text(chartdata.chart.yaxisname);
            svg.selectAll(".column")
      .data(chartdata.data)
    .enter().append("rect")
    .on("mouseover", function (d, i) {
        this.style.opacity = 1;
        div.transition()
                .duration(0)
                .style("opacity", .9);
        d3.selectAll('.' + chartId.replace('#', '') + d.label.replace(" ", "")).style("display", "block");

        //var xattr = ((this.getAttribute('x') / 1) + (this.getAttribute('width') / 1) + margin.left / 2) + 'px';
        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = this.getBoundingClientRect();
        var yattrval = (elemRect.top - bodyRect.top);
        var xattr = (elemRect.left - bodyRect.left - margin.left / 2 + 10) + 'px';
        if (d.value < domainmaxcol / 2)
            var yattr = yattrval - 43 + 'px';
        else
            var yattr = yattrval + 20 + 'px';
        // var yattr = (bodyRect.top-document.getElementById('barchart12').getBoundingClientRect().top + (this.getAttribute('x') / 1))+ 'px';
        if (chartdata.data[i].tooltext != undefined && chartdata.data[i].tooltext != '') {
            div.html(chartdata.data[i].tooltext + ': ' + chartdata.data[i].value)
       .style("left", function (d, i) {
           var asdfg = div[0][0];
           return (xattr.replace('px', '') / 1 - this.getAttribute('width') / 2) + 'px';
       })
                .style("top", yattr);
        }
        else {

            div.html(chartdata.data[i].label + ': ' + chartdata.data[i].value)
             .style("left", function (d, i) {
                 var asdfg = div[0][0];
                 return (xattr.replace('px', '') / 1 - this.getAttribute('width') / 2) + 'px'
             })
                .style("top", yattr);
        }

    })
        .on("mouseout", function (d, i) {
            this.style.opacity = 0.5;
            d3.selectAll('.' + chartId.replace('#', '') + d.label.replace(" ", "")).style("display", "none");
            div.transition()
                .duration(0)
                .style("opacity", 0);
        })
      .attr("fill", function (d, i) {
          if (chartdata.chart.pallattecolorsingle == false || chartdata.chart.pallattecolorsingle == undefined || chartdata.chart.pallattecolorsingle == '')
              return chartdata.chart.pallattecolor[i];
          else
              return chartdata.chart.pallattecolor[0];
      })
      .style("opacity", 0.5)
      .attr("x", function (d) { return x(d.label); })
      .attr("width", x.rangeBand())
      .attr("y", height)
      .attr("height", 0)
        .transition()
      .delay(function (d, i) { return i * 100; })
      .duration(400)
      .attr('y', function (d) { return y(d.value); })
      .attr('height', function (d) { return height - y(d.value); });

            var columncirlce = svg.selectAll('.columncirlce')
     .data(chartdata.data)
    .enter().append('circle')
    .attr("class", function (d) { return chartId.replace('#', '') + d.label.replace(" ", "") })
    .attr("fill", "rgb(128, 128, 128)")
        .attr("cx", function (d)
        { return x(d.label) + x.rangeBand() / 2; })
     .attr("cy", function (d) { return y(d.value); })
     .attr("r", 5)
     .attr("style", "display:none");

            var columnpath = svg.selectAll('.columnpath')
     .data(chartdata.data)
    .enter().append('path')
    .attr("class", function (d) { return chartId.replace('#', '') + d.label.replace(" ", "") })
    .attr("d", function (d) {
        var xatt = x(d.label) + x.rangeBand() / 2;
        var yatt = y(d.value);
        if (d.value < domainmaxcol / 2)
            var yattnext = yatt - 20;
        if (d.value > domainmaxcol / 2)
            var yattnext = yatt + 20;
        return 'M' + xatt + ' ' + yatt + 'L' + xatt + ' ' + yattnext;
    })
    .attr("style", "stroke:rgb(128, 128, 128);fill:none;stroke-width:2;display:none");


            if (chartdata.chart.tickinterval != undefined && chartdata.chart.tickinterval > 0) {
                d3.select(chartId).selectAll(".xtick .tick text").style("display", function (d, i) {
                    chartlength = chartdata.data.length - 1;
                    ticklength = chartdata.chart.tickinterval - 1;
                    if (i == 0)
                        return "block"
                    if (i == chartlength)
                        return "block"
                    else {
                        if (i % ticklength == 0 && (i < (chartlength - ticklength)))
                            return "block"
                        else
                            return "none"
                    }
                });
            }
            d3.selectAll(chartId + ' path.domain').style('opacity', function (d, i) {
                if (i != 0)
                    this.setAttribute('d', '')
            });
            d3.selectAll(chartId + ' .xtick .tick line').style('display', 'none');
            if (chartdata.chart.credits != undefined) {
                if (chartdata.chart.credits.text != undefined && chartdata.chart.credits.text != '') {
                    var credits = svg.selectAll('.credits')
            .data([1])
            .enter().append('g');
                    var positionwidth;
                    var imagewidth;
                    if (chartdata.chart.credits.imageurl != undefined && chartdata.chart.credits.imageurl != '') {
                        positionwidth = 0;
                        imagewidth = 10;
                    }
                    else
                        positionwidth = 10;
                    credits.append('text')
            .attr("class", 'credits' + chartId.replace("#", ''))
                    // .attr("x", d3.select(chartId + ' .gridy .tick line')[0][0].getAttribute('x2') / 1)
           .attr("x", document.getElementById(chartId.replace('#', '')).offsetWidth - positionwidth)
            .attr("y", height + 27)
            .attr("text-anchor", "end")
            .style("font-size", "12px")
            .style("text-decoration", "none")
            .style("text-transform", "uppercase")
            .style("font-weight", "normal")
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
            .attr("y", height + 5)
            .attr("width", 40)
            .attr("height", 30)
            .attr("xlink:href", dataURL);



                            };

                            img.src = url;
                        }
                        getBase64FromImageUrl(chartdata.chart.credits.imageurl);
                    }


                    /*var credits= d3.select(chartId).append('div').attr('style','font-size: 11px;float: right;margin-right: 10px;margin-top: -25px;');
                    credits.append('span').style('dispaly','inline-block')
                    .append('p').style('top','-15px').style('position','relative').style('display','inline-block').text('POWERED BY');
                    credits.append('span')
                    .style('display','inline-block')
                    .append('img')
                    .attr('style','width: 30px;height: 30px;top: -5px;position: relative;')
                    .attr('src','http://stage.priceweave.com/stylesheets/images/small-badge-grey-padding.png');*/
                }
            }
        }
        else
        { 
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
    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

            svg.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .text("NO DATA TO DISPLAY")
        .style('font-size', '12px')
        .style('fill','black');
        }
    }
}