

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  $('.parallax-layer').each(function() {
    var layer = $(this);
    var dataSpeed = layer.data('speed');
    var offsetY = -(scrollTop * dataSpeed);
    var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
    layer.css('-webkit-transform', translate);
    layer.css('-moz-transform', translate);
    layer.css('-ms-transform', translate);
    layer.css('-o-transform', translate);
    layer.css('transform', translate);
  })
});