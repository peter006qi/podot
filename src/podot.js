(function() {

  var script = document.querySelector('script[podot-config]');
  var config;
  try {
    config = JSON.parse(script.getAttribute('podot-config'));
  } catch (ex) {
    config = {};
  }
  config.lifetime = config.lifetime || 1000;
  config.color = config.color || "#93def7";
  config.size = config.size || "30px"
  document.addEventListener('touchstart', function(e) {
    var dot = document.createElement('div');
    dot.className = 'podot';
    dot.style.left = e.touches[0].pageX + 'px';
    dot.style.top = e.touches[0].pageY + 'px';
    document.body.appendChild(dot);
    setTimeout(function () {
      dot.parentNode.removeChild(dot);
    }, config.lifetime);
  });
  var anim_time = config.lifetime/1000+"s";
  var css = /*<jdists encoding="less,autoprefixer,clean-css,quoted" import="podot.less" />*/
    .replace(/50px/g, config.size).replace(/#93def7/g, config.color).replace(/1s/g,anim_time);
  var head = document.querySelector('head') || document.body;
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

})();