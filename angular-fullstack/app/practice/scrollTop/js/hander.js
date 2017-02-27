(function() {
  window.onload = function() {
    var btn, cancelTop, timer;
    cancelTop = false;
    btn = document.getElementById("btn");
    timer = null;
    window.onscroll = function() {
      if (cancelTop) {
        clearInterval(timer);
      }
      return cancelTop = true;
    };
    return btn.onclick = function() {
      var speed;
      speed = 3;
      return timer = setInterval(function() {
        var nowPos, scrollTop;
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        speed = scrollTop / 6;
        nowPos = document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
        console.log(nowPos);
        cancelTop = false;
        if (scrollTop <= 0) {
          return clearInterval(timer);
        }
      }, 30);
    };
  };

}).call(this);
