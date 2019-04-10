
$().ready(function(){
    $.getJSON( "data.json", function( data ) {
    console.log(data);
    $("#text").append(data["name"]);
  });
});
