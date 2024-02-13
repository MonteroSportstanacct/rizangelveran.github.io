(function() {
  var wordss = [
    " From your future developer,",
    " From your future QA Analyst,",
    " From your future IT Staff,",
  ];
  i = 0;
  setInterval(function() {
    $('#wordss').fadeOut(function() {
      $(this).html(wordss[(i = (i + 1) % wordss.length)]).fadeIn();
    });
  }, 3000)
})();



function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more vv";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less ^^";
    moreText.style.display = "inline";
  }
}