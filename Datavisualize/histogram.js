let w2 = 600, h2 = 200;
let svgc = d3.select("histogram").append("svg").attr("width",w2).attr("height",h2);
svgc.style("background-color", "gray");


/****************************************************************************************************************
	function addEltToSVG: draw a bar, position and size in attrs
****************************************************************************************************************/
console.log(dataset);

function addEltToSVG(svg, name, attrs) 
{ let element = document.createElementNS("http://www.w3.org/2000/svg", name);
 if (attrs == undefined) attrs = {};
 for (let key in attrs) 
 { element.setAttributeNS(null, key, attrs[key]); }
	svg.append(name)
    .attr("height" ,attrs.height)
    .attr("width" ,attrs.width)
    .attr("x", attrs.x)
    .attr("y", attrs.y)
    .style("fill", attrs.fill)
    .style("stroke", attrs.stroke);
}

let myArray = {x: 0, y: 0, height: 1, width:30, fill:'blue', stroke:'black'};

for (i=0;i<10;i++) {
	
    myArray['x'] +=30;
    if (dataset[i]==0) {
        myArray['height']=1;
    } else {
        myArray['height']=dataset[i]*5;
    }
    
    if (myArray['height'] <h2) {
        myArray['y']=h2-myArray['height'];
    } else {
        myArray['y']=0;
    }
    //alert(i + "-" + myArray['height']);
    addEltToSVG(svgc,"rect",myArray);

}