// Suchfunktion für Google-Suchmaschine
function searchGoogle(query) {
  var googleUrl = "https://www.google.com/search?q=" + query;
  $.get(googleUrl, function(data) {
    var results = $(data).find("div.g");
    var outputHtml = "<ul>";
    results.each(function(index) {
      var title = $(this).find("h3").text();
      var url = $(this).find("a").attr("href");
      url = url.replace("/url?q=", "");
      var description = $(this).find("div.s").text();
      outputHtml += "<li><a href='" + url + "' target='_blank'>" + title + "</a><p>" + description + "</p></li>";
    });
    outputHtml += "</ul>";
    $("#results-container").html(outputHtml);
  });
}

// Event-Handler für Klick auf Such-Button
$("#search-button").on("click", function() {
  var query = $("#search-input").val();
  searchGoogle(query);
});
