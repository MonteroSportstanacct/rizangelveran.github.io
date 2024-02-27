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

//animation for polaroid1
/*
    setTimeout(function(){
        document.getElementById("test").className = "";
    }, 2500);
    link:https://jsfiddle.net/r8dzvmgL/
    search term: javascript how to make a div pulse after the page has been loaded
*/
/*
animation for popups
https://alvarotrigo.com/blog/css-animations-scroll/
*/