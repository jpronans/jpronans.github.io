$(function () {
  // The template script
  var theScript = "<nav class='ui inverted menu'>" +
    "<div class='left menu'>" +
      "<a class='ui item' href='index.html'>Home</a>" +
      "<a class='ui item' href='shack.html'>Shack</a>" +
      "<a class='ui item' href='aprs.html'>APRS</a>" +
      //"<a class='ui item' href='aren.html'>AREN</a>" +
      //"<a class='ui item' href='myaren.html'>My AREN</a>" +
      "<a class='ui item' href='sat.html'>Satellite</a>" +
      "<a class='ui item' href='dmr.html'>DMR</a>" +
      "<a class='item' href='http://aren.ie'>AREN</a>" +
      "<a class='ui item' href='data.html'>WX Data</a>" +
      "<a class='ui item' href='logs.html'>Log</a>" +
      "<a class='ui item' href='links.html'>Links</a>" +
  "</div>" +
"</nav>"; 

  // Add theScript string (the nav menu) to the page
  $('.navbar-menu-placeholder').html(theScript);
});