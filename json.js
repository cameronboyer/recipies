var actualJSON = {};
var dataForTable = [];
init();
setTimeout(function(){ 
    	console.log(actualJSON);
	createCheckBoxes();
	dataForTable = getListForTable();
	//create Tabulator on DOM element with id "example-table"
	var table = new Tabulator("#example-table", {
	height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
	layout:"fitColumns", //fit columns to width of table (optional)
	data: dataForTable, 
	columns:[ 
		{title:"Ingredient", field:"ingredient"},
		{title:"Amount", field:"amount", align:"center"},
		{title:"Measurement", field:"unit"},
		{title:"Type", field:"type"}
	]
	});
	
}, 200); 




 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
 }

function init() {
    loadJSON(function(response) {
        actualJSON = JSON.parse(response);
    });
 }

function createCheckBoxes() {
	for (var i in actualJSON) {
		var recipe = actualJSON[i].name;
		// create the necessary elements
		var label = document.createElement("label");
		var description = document.createTextNode(recipe);
		var checkbox = document.createElement("input");

		checkbox.type = "checkbox";    // make the element a checkbox
		checkbox.name = "myCheckBox";  // make it all the same name
		checkbox.value = recipe;       // make value the recipe name;
		checkbox.checked = true;

		label.appendChild(checkbox);   // add the box to the element
		label.appendChild(description);// add the description to the element

		// add the label element to your div
		document.getElementById('myCheckBoxes').appendChild(label);
	}
}

function getListForTable() {
	var checkedBoxes = document.querySelectorAll('input[name=myCheckBox]:checked');
	console.log("boxes checked:", checkedBoxes);
	var data = [];
	for (var i in checkedBoxes) {
		for (var recipe in actualJSON) {
			if (actualJSON[recipe].name === checkedBoxes[i].value) {
				console.log("checkbox: ", i + " value:" + checkedBoxes[i].value);

				data.push(actualJSON[recipe].data);
			}
		}
	}
	console.log("data for table:", data);
	return [].concat.apply([], data);
}



