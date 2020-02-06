(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };
 
  // tiny helper function to add breakpoints
  function getGridSize() {
		return (window.innerWidth < 1160) ? 1 : 2;	
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
			animationLoop: false,
			slideshow: false,
      itemWidth: 355,
      itemMargin: 40,
      touch: false,
      minItems: getGridSize(), // use function to pull in initial value
			maxItems: getGridSize(), // use function to pull in initial value
			controlsContainer: $(".custom-controls-container"),
			customDirectionNav: $(".custom-navigation a")
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());


