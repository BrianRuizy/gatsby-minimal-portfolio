(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 760) ? 1 :
           (window.innerWidth < 1100) ? 2 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
    $('.flexslider-images').flexslider({
      animation: "slide",
			animationLoop: false,
			slideshow: false,
      itemWidth: 600,
      itemMargin: 40,
      minItems: getGridSize(), // use function to pull in initial value
			maxItems: getGridSize(), // use function to pull in initial value
			controlsContainer: $(".custom-controls-container-images"),
			customDirectionNav: $(".custom-navigation-images a")
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());


