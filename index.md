<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> <script src="json.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/tabulator/3.0.0/css/tabulator.min.css" rel="stylesheet">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tabulator/3.0.0/js/tabulator.min.js"></script>
<div id="text"></div>
<div id="example-table"></div>


/create Tabulator on DOM element with id "example-table"
$("#example-table").tabulator({
    height:320, // set height of table (optional)
    fitColumns:true, //fit columns to width of table (optional)
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
