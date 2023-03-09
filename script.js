// - ![#00A86B](https://via.placeholder.com/15/00A86B/00A86B.png) `jade`

$(document).ready(function() {
    $(".generateBtn").click(function() {
        var patterns = $("#patternInput").val();
        var patternArray = patterns.replace(/\s/g, '').split(',');
        var html = "";
        patternArray.map(function(pattern) {
            if (pattern == "") return;
            var color_withHas = pattern.split(':')[1];
            var color = color_withHas.replace("#", "");
            var text = pattern.split(':')[0];
            html += "- ![" + color_withHas + "](https://via.placeholder.com/15/" + color + "/" + color + ".png) `" + text + "`" + "<br>";
        });
        $("#generatedPlaceholders").html(html);
    });
}); // Path: script.js