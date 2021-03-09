document.addEventListener("onLoad", function (obj) {
  // this will fire only once when the widget loads
  // parse font family
  var fontNameRaw = "{font_name}";
  var fontName = fontNameRaw.split("+").join(" ");

  // apply font family on log div
  $("#log").css("font-family", fontName);
});

document.addEventListener("onEventReceived", function (obj) {
  // obj will contain information about the event
  var childrenCount = $("#log .line").length;

  // Delete all children after max lines is reached
  if (childrenCount >= {max_lines} + 1) {
    $("#log .line:first-child").addClass("dying");
    // play removal animation
    setTimeout(() => {
      $("#log .line:first-child").remove();
    }, {animation_time} * 1000);
  }
});
