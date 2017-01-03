;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.2 493.9c-9 0-16.3 7.3-16.3 16.3 0 225.1-183.1 408.2-408.2 408.2S99.5 735.3 99.5 510.2 282.6 102 507.7 102c9 0 16.3-7.3 16.3-16.3s-7.3-16.3-16.3-16.3c-243.1 0-440.9 197.8-440.9 440.9s197.8 440.9 440.9 440.9 440.9-197.8 440.9-440.9c0-9.1-7.3-16.4-16.4-16.4z" fill="#161616" ></path>' +
    '' +
    '<path d="M605.7 102m-16.3 0a16.3 16.3 0 1 0 32.6 0 16.3 16.3 0 1 0-32.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M915.9 412.3m-16.3 0a16.3 16.3 0 1 0 32.6 0 16.3 16.3 0 1 0-32.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M905 318.9c-5.8-11.9-12.1-23.7-18.9-35-44.6-74.3-108.7-133-186.2-170.5-1.8-0.9-3.6-1.3-5.4-1.5-2.2-1-4.6-1.6-7.1-1.6-9 0-16.3 7.3-16.3 16.3V424c-24-27.2-59-44.3-98-44.3-72 0-130.6 58.6-130.6 130.6S501 640.9 573 640.9s130.6-58.6 130.6-130.6c0-2-0.1-4.1-0.1-6.1 0.1-0.7 0.1-1.4 0.1-2.1v-350c63.2 34.8 117.2 86.5 154.4 148.5 6.2 10.4 12 21.1 17.3 32 3.9 8 13.2 11.7 21.3 8.1 8.4-3.7 12.4-13.6 8.4-21.8zM573 608.2c-54 0-98-43.9-98-98s43.9-98 98-98c54 0 98 43.9 98 98s-44 98-98 98zM491.4 722.5c-81 0-147-65.9-147-147 0-9-7.3-16.3-16.3-16.3s-16.3 7.3-16.3 16.3c0 99 80.6 179.6 179.6 179.6 9 0 16.3-7.3 16.3-16.3s-7.3-16.3-16.3-16.3z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)