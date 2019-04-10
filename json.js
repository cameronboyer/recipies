$().ready(function(){
    
    var recipes;
    $.getJSON( "data.json", function( data ) {
        console.log(data);
        recipes = data;
        $("#text").append(data["name"]);
    });
    
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


});
