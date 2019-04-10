var actualJSON;



//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
 	height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Name", field:"name", width:150},
	 	{title:"Age", field:"age", align:"left", formatter:"progress"},
	 	{title:"Favourite Color", field:"col"},
	 	{title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
 	],
 	rowClick:function(e, row){ //trigger an alert message when the row is clicked
 		alert("Row " + row.getData().id + " Clicked!!!!");
 	},
});


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
	    console.log(actualJSON);
    });
 }

init();
