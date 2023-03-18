let h1 = 400, w1 = 800, y_scale = 30;
let svgb = d3.select("plotchart").append("svg").attr("width",w1).attr("height",h1);
svgb.style("background-color","gray");

d3.csv("https://tungth.github.io/data/vis-lab2-data.csv",
d3.rowConverter, function(error, data) {
   if (error) {
      console.log(error);
   }
   else {
      console.log(data);
      svgb.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr("cx", function(d) {
         return d.Midterm * 7;
      }).attr("cy", function(d) {
            return h1 - d.Final * 3 - y_scale;
      }).attr("r", function(d){
         return 5;
      }).attr("fill",function(d){
         if((d.Midterm*40/100+d.Final*60/100) < 50){
            return "red";
         }
         return "blue";
      })

      svgb.selectAll("text2")
      .data(data)
      .enter()
      .append("text").text(function(d){
         return d.Midterm + "," + d.Final;
      }).attr("x", function(d){ 
         return d.Midterm * 7;
      }).attr("y", function(d){
         return h1 - d.Final * 3 - y_scale;
      }).attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "black");
   
   }
})
////////////////////////////

// data = [
//    [ 5, 20 ],
//    [ 480, 90 ],
//    [ 250, 50 ],
//    [ 100, 33 ],
//    [ 330, 95 ],
//    [ 410, 12 ],
//    [ 475, 44 ],
//    [ 25 , 67 ],
//    [ 85 , 21 ],
//    [ 220, 88 ],
// ];
// ////////////////////////////
// svgb.selectAll('circle')
// .data(data)
// .enter()
// .append('circle')
// .attr("cx", function(d) {
//    return d[0]+ 45;
// }).attr("cy", function(d) {
//    return -d[1]+(h*2/3);
// }).attr("r", function(d){
//    return 5;
// }).attr("fill",function(d){
//    if((d[0]*40/100+d[1]*60/100) < 50){
//        return "red";
//    }
//    return "blue";
// })

// let textCircle = svgb.selectAll("text2")
// .data(data)
// .enter()
// .append("text").text(function(d){
//    return d[0] + "," + d[1];
// }).attr("x", function(d){
//    if(Math.round(d[0]*40/100 + d[1]*60/100) < 50){
//        return d[0] + 10;
//    }
//    else{
//         return d[0] + 50;
//    } 
// }).attr("y", function(d){
//    return - d[1] + h*2/3;
// }).attr("font-family", "sans-serif")
// .attr("font-size", "11px")
// .attr("fill", "black");