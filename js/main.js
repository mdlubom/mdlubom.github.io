$(document).ready(function() {
  /* Variables */
  var coverPage = $(".cover-page");
  var cvBtn = $(".cv-btn");
  var cv = $(".cv");
  var date = $(".date");

  date.addClass("animated");

  /* CV Button */
  cvBtn.on("click", function() {
    coverPage.removeClass("active").addClass("fadeOutLeft");
    cv.addClass("active fadeInRight").fadeIn();
  });

  /* Date animaton */
  date.addClass("bounce");
});