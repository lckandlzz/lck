;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64.767608 193.049784l894.163933 0 0 149.317771L64.767608 342.367555 64.767608 193.049784 64.767608 193.049784zM62.961472 440.761516l894.163933 0L957.125405 590.082356 62.961472 590.082356 62.961472 440.761516 62.961472 440.761516zM62.961472 713.50434l894.163933 0 0 149.318794L62.961472 862.823134 62.961472 713.50434 62.961472 713.50434zM62.961472 713.50434"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M946.293441 970.832328c0-129.294958-55.886216-249.05991-154.096134-331.861725l0.909202 0-17.668522-13.46082c-5.254845-4.001294-11.510517-6.117731-18.0904-6.117731-9.371929 0-18.000789 4.271135-23.665429 11.70887-9.980077 13.055052-7.474989 31.797903 5.584091 41.784021 93.692101 71.593359 147.427647 180.190129 147.427647 297.946378 0 0.002014 0 0.004027 0 0.006041L137.305098 970.837362c0-206.61639 168.089588-374.710005 374.697923-374.710005 159.821187 0 289.845117-130.021917 289.845117-289.840083 0-159.818166-130.024938-289.839076-289.845117-289.839076-159.814138 0-289.833035 130.02091-289.833035 289.839076 0 55.913401 16.069615 110.207759 46.469985 157.012024 26.200723 40.338158 61.820697 73.437941 103.734604 96.568723-81.164648 27.727135-153.839383 80.006749-206.125038 148.635888-57.926131 76.033647-88.543984 166.746426-88.543984 262.333452l0 53.161631 868.586882 0 0-53.161631 0 0C946.293441 970.836355 946.293441 970.834342 946.293441 970.832328zM281.768525 306.288281c0-126.954997 103.28252-230.240537 230.234496-230.240537 126.958017 0 230.246578 103.285541 230.246578 230.240537 0 126.952983-103.288561 230.235503-230.246578 230.235503C385.051044 536.523784 281.768525 433.240257 281.768525 306.288281z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-x" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1011.657576 143.990085c16.455958-16.455958 16.455958-43.383557 0-59.839515L939.851253 12.342424c-16.455958-16.455958-43.381733-16.455958-59.839515 0L541.919757 350.434405c-16.452311 16.454134-43.383557 16.454134-59.837691 0L143.990085 12.344247c-16.455958-16.455958-43.381733-16.455958-59.839515 0L12.344247 84.152394c-16.454134 16.455958-16.454134 43.383557 0 59.839515l338.090157 338.088334c16.455958 16.455958 16.455958 43.381733 0 59.839515L12.342424 880.006268c-16.454134 16.455958-16.454134 43.383557 0 59.839515l71.806323 71.80997c16.455958 16.455958 43.383557 16.455958 59.839515 0l338.091981-338.090157c16.455958-16.452311 43.383557-16.452311 59.837691 0l338.093804 338.090157c16.455958 16.455958 43.381733 16.455958 59.839515 0l71.806323-71.806323c16.455958-16.452311 16.455958-43.383557 0-59.839515l-338.091981-338.090157c-16.454134-16.455958-16.454134-43.383557 0-59.839515L1011.657576 143.990085 1011.657576 143.990085z"  ></path>' +
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