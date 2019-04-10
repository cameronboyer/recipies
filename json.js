
$().ready(function(){
    $.getJSON( "data.json", function( data ) {
    console.log(data);
    $("view").html(data["name"]);
  });
});
