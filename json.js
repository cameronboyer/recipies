
$().ready(function(){
    $.getJSON( "data.json", function( data ) {
    console.log(data);
    $("view").append(data["name"]);
  });
});
