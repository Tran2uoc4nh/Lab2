let dataset = [];
let w = 600, h = 200;
let svga = d3.select("barchart").append("svg").attr("width",w).attr("height",h);
let x_scale = 25;
svga.style("background-color","gray");

for (let i = 0; i < 20; i++) {   
    let newNumber = Math.round(Math.random() * 30); 
    dataset.push(newNumber); 
}

let Rect = svga.selectAll('rect')
.data(dataset)
.enter()
.append("rect");

let text1 = svga.selectAll("text1")
.data(dataset)
.enter()
.append("text").text(function(d){
    return Math.round(d);}
)
.attr("x", function(d, i){
    if(d >= 10) {return 35 + i * x_scale;}
    else {return 38 + i * x_scale;}   
}).attr("y", function(d){
    if(d > 3) {return h - (d * 5) + 13;}
    else {return h - d * 5 - 5};}
).attr("fill", function(d){
    if(d >= 3) {return "white";}
    else {return "black";}
})

Rect.attr("width",25).attr("height", function(d){
    return d * 5;
}).attr("x",function(d,i){
    return 30 + i * x_scale;
}).attr("y", function(d){
    return h - d * 5;
}).attr("fill", function(d){
    return "rgb(0," + 30 + "," + Math.round(d*10) + ")";
}).attr("stroke", function(d){
    return "rgb(0," + 70 + "," + Math.round(d*5) + ")";
}).attr("stroke-width", 2);

//ném data vào chỗ này <-----
//----------->Here<-------------
// data = [
//     [ 5, 20 ],
//     [ 480, 90 ],
//     [ 250, 50 ],
//     [ 100, 33 ],
//     [ 330, 95 ],
//     [ 410, 12 ],
//     [ 475, 44 ],
//     [ 25 , 67 ],
//     [ 85 , 21 ],
//     [ 220, 88 ],
// ];
// ////////////////////////////
// svg.selectAll('circle')
// .data(data)
// .enter()
// .append('circle')
// .attr("cx", function(d) {
//     return d[0]+ 45;
// }).attr("cy", function(d) {
//     return -d[1]+(h*2/3);
// }).attr("r", function(d){
//     return 5;
// }).attr("fill",function(d){
//     if((d[0]*40/100+d[1]*60/100) < 50){
//         return "red";
//     }
//     return "blue";
// })

// let textCircle = svg.selectAll("text2")
// .data(data)
// .enter()
// .append("text").text(function(d){
//     return d[0] + "," + d[1];
// }).attr("x", function(d){
//     if(Math.round(d[0]*40/100 + d[1]*60/100) < 50){
//         return d[0] + 10;
//     }
//     else{
//          return d[0] + 50;
//     } 
// }).attr("y", function(d){
//     return - d[1] + h*2/3;
// }).attr("font-family", "sans-serif")
// .attr("font-size", "11px")
// .attr("fill", "black");
/////////////////////////////////////////////////////////////////////

// let histogram = svg.selectAll("histogram")
// .data(dataset)
// .enter()
// .append("histogram")
// .attr("height", d *5)
// .attr("width", 30)
// .attr("x", function(i){
//     return 30 + i * 5;
// }).attr("y", function(d){
//     return h;
// })

// d3.csv("./database.csv").get(function(error,data){
//     
    // console.log(data);
    // svg.selectAll('circle')
    // .data(data)
    // .enter()
    // .append('circle')
    // .attr("cx", function(d) {
    //     return d[2];
    // }).attr("cy", function(d) {
    //     return d[3]+(h*2/3);
    // }).attr("r", 5)
    // .attr("fill","red");
// });

