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
  config.size = config.size || "30px";
  config.event = config.event || "mousedown";
  document.addEventListener(config.event, function(e) {
    var dot = document.createElement('div');
    dot.className = 'podot';
    var podot_left;
    var podot_top;
    if (config.event.indexOf("mouse")==-1) {
      podot_left = e.touches[0].pageX;
      podot_top = e.touches[0].pageY;
    }else{
      podot_left = e.clientX;
      podot_top = e.clientY;
    }
    dot.style.left = podot_left + 'px';
    dot.style.top = podot_top + 'px';
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