;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M369.269 883.675l-321.935 91.337 91.335-321.938z"  ></path>' +
    '' +
    '<path d="M1000.772 252.109l-77.526 77.526-230.598-230.598 77.522-77.524c0 0 36.951-36.895 74.509 0.663 37.562 37.563 110.575 110.574 151.709 151.71 41.138 41.134 4.385 78.223 4.385 78.223z"  ></path>' +
    '' +
    '<path d="M900.035 352.787l-507.821 507.821-230.54-230.54 507.821-507.821 230.54 230.54z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M804.790928 404.013567 540.190551 139.431609c-1.364067-1.13587-2.789533-2.183735-4.259-3.151783-0.151449-0.11461-0.309038-0.223081-0.461511-0.335644-2.385327-1.786693-4.919033-3.233648-7.557116-4.351098-4.970198-2.184759-10.461259-3.406586-16.241916-3.406586-12.023848 0-22.814612 5.262864-30.216185 13.600763L219.209072 404.013567c-15.369036 15.387455-15.369036 40.323381 0 55.710836 15.387455 15.376199 40.342824 15.376199 55.708789 0l196.35097-196.359156 0 349.638145c0 22.312168 18.088984 40.401152 40.401152 40.401152 22.330588 0 40.400129-18.090007 40.400129-40.401152L552.070112 262.706237l197.009979 197.018166c15.365966 15.376199 40.321334 15.376199 55.708789 0C820.157917 444.336948 820.157917 419.401022 804.790928 404.013567zM511.671007 714.017016c-22.312168 0-40.401152 18.080797-40.401152 40.392966 0 22.320355 18.088984 40.402175 40.401152 40.402175 22.330588 0 40.400129-18.082844 40.400129-40.402175C552.071136 732.097814 534.001595 714.017016 511.671007 714.017016zM511.671007 815.011198c-22.312168 0-40.401152 18.099217-40.401152 40.401152 0 22.312168 18.088984 40.400129 40.401152 40.400129 22.330588 0 40.400129-18.088984 40.400129-40.400129C552.071136 833.110415 534.001595 815.011198 511.671007 815.011198z"  ></path>' +
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