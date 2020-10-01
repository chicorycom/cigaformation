(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/pages/Overview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/pages/Overview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laue */ "./node_modules/laue/dist/laue.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Overview",
  data: function data() {
    return {
      values: [{
        value: 10
      }, {
        value: 20
      }, {
        value: 30
      }, {
        value: 10
      }, {
        value: 20
      }, {
        value: 50
      }, {
        value: 20
      }, {
        value: 40
      }, {
        value: 30
      }, {
        value: 10
      }, {
        value: 20
      }, {
        value: 30
      }, {
        value: 50
      }, {
        value: 20
      }, {
        value: 20
      }, {
        value: 10
      }]
    };
  },
  mounted: function mounted() {
    this.chartLine();
  },
  components: {
    LaCartesian: laue__WEBPACK_IMPORTED_MODULE_0__["Cartesian"],
    LaArea: laue__WEBPACK_IMPORTED_MODULE_0__["Area"]
  },
  methods: {
    chartLine: function chartLine() {
      var $this = this;
      chart_js__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      chart_js__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.global.defaultFontColor = '#858796';
      var ctx = document.getElementById("myAreaChart");
      new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Earnings",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000]
          }]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return '$' + $this.number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function label(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + ': $' + $this.number_format(tooltipItem.yLabel);
              }
            }
          }
        }
      });
    },
    number_format: function number_format(number, decimals, dec_point, thousands_sep) {
      // *     example: number_format(1234.56, 2, ',', ' ');
      // *     return: '1 234,56'
      number = (number + '').replace(',', '').replace(' ', '');

      var n = !isFinite(+number) ? 0 : +number,
          prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
          sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
          dec = typeof dec_point === 'undefined' ? '.' : dec_point,
          s = '',
          toFixedFix = function toFixedFix(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }

      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }

      return s.join(dec);
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/pages/Overview.vue?vue&type=template&id=15dbbcc2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/pages/Overview.vue?vue&type=template&id=15dbbcc2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-primary shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row no-gutters align-items-center" }, [
                _c("div", { staticClass: "col mr-2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-xs font-weight-bold text-success text-uppercase mb-1"
                    },
                    [_vm._v("Earnings (Annual)")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "h5 mb-0 font-weight-bold text-gray-800" },
                    [
                      _c(
                        "la-cartesian",
                        {
                          attrs: {
                            autoresize: "",
                            height: 40,
                            data: _vm.values
                          }
                        },
                        [
                          _c("la-area", {
                            attrs: {
                              color: "#6be6c1",
                              animated: "",
                              prop: "value"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-success shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row no-gutters align-items-center" }, [
                _c("div", { staticClass: "col mr-2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-xs font-weight-bold text-success text-uppercase mb-1"
                    },
                    [_vm._v("Earnings (Annual)")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "h5 mb-0 font-weight-bold text-gray-800" },
                    [
                      _c(
                        "la-cartesian",
                        {
                          attrs: {
                            autoresize: "",
                            height: 40,
                            data: _vm.values
                          }
                        },
                        [
                          _c("la-area", {
                            attrs: { animated: "", prop: "value" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(2)
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ]),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _vm._m(6)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [
        _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
          _vm._v("Dashboard")
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",
            attrs: { href: "#" }
          },
          [
            _c("i", { staticClass: "fas fa-download fa-sm text-white-50" }),
            _vm._v(" Generate Report")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-dollar-sign fa-2x text-gray-300" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-dollar-sign fa-2x text-gray-300" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
      _c("div", { staticClass: "card border-left-info shadow h-100 py-2" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row no-gutters align-items-center" }, [
            _c("div", { staticClass: "col mr-2" }, [
              _c(
                "div",
                {
                  staticClass:
                    "text-xs font-weight-bold text-info text-uppercase mb-1"
                },
                [_vm._v("Tasks")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row no-gutters align-items-center" }, [
                _c("div", { staticClass: "col-auto" }, [
                  _c(
                    "div",
                    {
                      staticClass: "h5 mb-0 mr-3 font-weight-bold text-gray-800"
                    },
                    [_vm._v("50%")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c("div", { staticClass: "progress progress-sm mr-2" }, [
                    _c("div", {
                      staticClass: "progress-bar bg-info",
                      staticStyle: { width: "50%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "50",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-auto" }, [
              _c("i", {
                staticClass: "fas fa-clipboard-list fa-2x text-gray-300"
              })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
      _c("div", { staticClass: "card border-left-warning shadow h-100 py-2" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row no-gutters align-items-center" }, [
            _c("div", { staticClass: "col mr-2" }, [
              _c(
                "div",
                {
                  staticClass:
                    "text-xs font-weight-bold text-warning text-uppercase mb-1"
                },
                [_vm._v("Pending Requests")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "h5 mb-0 font-weight-bold text-gray-800" },
                [_vm._v("18")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-auto" }, [
              _c("i", { staticClass: "fas fa-comments fa-2x text-gray-300" })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-8 col-lg-7" }, [
        _c("div", { staticClass: "card shadow mb-4" }, [
          _c(
            "div",
            {
              staticClass:
                "card-header py-3 d-flex flex-row align-items-center justify-content-between"
            },
            [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Earnings Overview")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown no-arrow" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      id: "dropdownMenuLink",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-right shadow animated--fade-in",
                    attrs: { "aria-labelledby": "dropdownMenuLink" }
                  },
                  [
                    _c("div", { staticClass: "dropdown-header" }, [
                      _vm._v("Dropdown Header:")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Action")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Another action")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Something else here")]
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "chart-area" }, [
              _c("canvas", { attrs: { id: "myAreaChart" } })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-5" }, [
        _c("div", { staticClass: "card shadow mb-4" }, [
          _c(
            "div",
            {
              staticClass:
                "card-header py-3 d-flex flex-row align-items-center justify-content-between"
            },
            [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Revenue Sources")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown no-arrow" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-right shadow animated--fade-in",
                    attrs: { "aria-labelledby": "dropdownMenuLink" }
                  },
                  [
                    _c("div", { staticClass: "dropdown-header" }, [
                      _vm._v("Dropdown Header:")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Action")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Another action")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Something else here")]
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "chart-pie pt-4 pb-2" }, [
              _c("canvas", { attrs: { id: "myPieChart" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 text-center small" }, [
              _c("span", { staticClass: "mr-2" }, [
                _c("i", { staticClass: "fas fa-circle text-primary" }),
                _vm._v(" Direct\n                ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "mr-2" }, [
                _c("i", { staticClass: "fas fa-circle text-success" }),
                _vm._v(" Social\n                ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "mr-2" }, [
                _c("i", { staticClass: "fas fa-circle text-info" }),
                _vm._v(" Referral\n                ")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6 mb-4" }, [
        _c("div", { staticClass: "card shadow mb-4" }, [
          _c("div", { staticClass: "card-header py-3" }, [
            _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
              _vm._v("Projects")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "small font-weight-bold" }, [
              _vm._v("Server Migration "),
              _c("span", { staticClass: "float-right" }, [_vm._v("20%")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-4" }, [
              _c("div", {
                staticClass: "progress-bar bg-danger",
                staticStyle: { width: "20%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "20",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "small font-weight-bold" }, [
              _vm._v("Sales Tracking "),
              _c("span", { staticClass: "float-right" }, [_vm._v("40%")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-4" }, [
              _c("div", {
                staticClass: "progress-bar bg-warning",
                staticStyle: { width: "40%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "40",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "small font-weight-bold" }, [
              _vm._v("Customer Database "),
              _c("span", { staticClass: "float-right" }, [_vm._v("60%")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-4" }, [
              _c("div", {
                staticClass: "progress-bar",
                staticStyle: { width: "60%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "60",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "small font-weight-bold" }, [
              _vm._v("Payout Details "),
              _c("span", { staticClass: "float-right" }, [_vm._v("80%")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-4" }, [
              _c("div", {
                staticClass: "progress-bar bg-info",
                staticStyle: { width: "80%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "80",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "small font-weight-bold" }, [
              _vm._v("Account Setup "),
              _c("span", { staticClass: "float-right" }, [_vm._v("Complete!")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "progress" }, [
              _c("div", {
                staticClass: "progress-bar bg-success",
                staticStyle: { width: "100%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "100",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-primary text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Primary\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#4e73df")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-success text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Success\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#1cc88a")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-info text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Info\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#36b9cc")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-warning text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Warning\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#f6c23e")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-danger text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Danger\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#e74a3b")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-secondary text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Secondary\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#858796")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-light text-black shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Light\n                            "
                ),
                _c("div", { staticClass: "text-black-50 small" }, [
                  _vm._v("#f8f9fc")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card bg-dark text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Dark\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#5a5c69")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 mb-4" }, [
        _c("div", { staticClass: "card shadow mb-4" }, [
          _c("div", { staticClass: "card-header py-3" }, [
            _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
              _vm._v("Illustrations")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "text-center" }, [
              _c("img", {
                staticClass: "img-fluid px-3 px-sm-4 mt-3 mb-4",
                staticStyle: { width: "25rem" },
                attrs: { src: "img/undraw_posting_photo.svg", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Add some quality, svg illustrations to your project courtesy of "
              ),
              _c(
                "a",
                {
                  attrs: {
                    target: "_blank",
                    rel: "nofollow",
                    href: "https://undraw.co/"
                  }
                },
                [_vm._v("unDraw")]
              ),
              _vm._v(
                ", a constantly updated collection of beautiful svg images that you can use completely free and without attribution!"
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                attrs: {
                  target: "_blank",
                  rel: "nofollow",
                  href: "https://undraw.co/"
                }
              },
              [_vm._v("Browse Illustrations on unDraw →")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card shadow mb-4" }, [
          _c("div", { staticClass: "card-header py-3" }, [
            _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
              _vm._v("Development Approach")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", [
              _vm._v(
                "SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes."
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0" }, [
              _vm._v(
                "Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes."
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/admin/js/pages/Overview.vue":
/*!***********************************************!*\
  !*** ./resources/admin/js/pages/Overview.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overview_vue_vue_type_template_id_15dbbcc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview.vue?vue&type=template&id=15dbbcc2&scoped=true& */ "./resources/admin/js/pages/Overview.vue?vue&type=template&id=15dbbcc2&scoped=true&");
/* harmony import */ var _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overview.vue?vue&type=script&lang=js& */ "./resources/admin/js/pages/Overview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Overview_vue_vue_type_template_id_15dbbcc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Overview_vue_vue_type_template_id_15dbbcc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15dbbcc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/pages/Overview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/pages/Overview.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/admin/js/pages/Overview.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/pages/Overview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/pages/Overview.vue?vue&type=template&id=15dbbcc2&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/admin/js/pages/Overview.vue?vue&type=template&id=15dbbcc2&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_15dbbcc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=template&id=15dbbcc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/pages/Overview.vue?vue&type=template&id=15dbbcc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_15dbbcc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_15dbbcc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);