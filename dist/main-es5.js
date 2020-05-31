function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_h2_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What can I choose? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutComponent_h2_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sta je na meni da odaberem?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \"We offer you the opportunity to create your own cable. It is up to you to mark what you need.\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \"Nudimo vam mogucnost da kreirate kabel bas onakav kakav vi zelite. Tako da krenimo od namene.\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutComponent_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (Guitar, microphone, sound system, etc.)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AboutComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (Gitara, mikrofon, zvucni sistem ...)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(router, route) {
        _classCallCheck(this, AboutComponent);

        this.router = router;
        this.route = route;
        this.lang = this.route.snapshot.params['lang'];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lang == 'sr') {
            document.getElementById('choiceOne').innerHTML = '1. izbor';
            document.getElementById('choiceTwo').innerHTML = '2. izbor';
            document.getElementById('choiceThree').innerHTML = '3. izbor';
            document.getElementById('choiceFour').innerHTML = '4. izbor';
          }
        }
      }, {
        key: "create",
        value: function create() {
          this.router.navigate(['create/', this.lang]);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 70,
      vars: 6,
      consts: [["id", "process", 1, "page-section"], [1, "container"], [1, "text-center"], ["class", "section-heading text-uppercase", 4, "ngIf"], [1, "section-subheading", "text-muted"], [1, "timeline"], [1, "timeline-image"], ["src", "assets/img/about/1.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], [1, "timeline-panel"], [1, "timeline-heading"], ["id", "choiceOne", 1, "h4"], [1, "timeline-body"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "timeline-inverted"], ["src", "assets/img/about/2.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["id", "choiceTwo", 1, "h4"], ["src", "assets/img/about/3.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["id", "choiceThree", 1, "h4"], [1, ""], ["src", "assets/img/about/4.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["id", "choiceFour", 1, "h4"], ["id", "create", 1, "timeline-image", 2, "cursor", "pointer"], [3, "click"], [1, "h5"], [1, "h4"], [1, "h3"], [1, "a"], [1, "section-heading", "text-uppercase"], [1, "text-muted"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_h2_3_Template, 2, 0, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutComponent_h2_4_Template, 2, 0, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1st choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AboutComponent_span_15_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutComponent_span_16_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AboutComponent_p_17_Template, 2, 0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AboutComponent_p_18_Template, 2, 0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2nd choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\"It is up to you to decide on the desired cable length.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " If none of the standard lengths suits you, send us an email with a measure that would suit you.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "3rd choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\"Each cable we make is protected with 48 or 64 threads of quality thread, depending on the purpose of the cable. That's why we give you the opportunity to choose whether you want one or two colors. In case of choosing two colors, you get the possibility to choose a knitting pattern.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "4th choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\"In the very end, you can choose the color of the protection of the connector itself. The protection passes over the connector and one small part of the cable and thus prevents possible damage to the connection between the cable and the connector.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_53_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Your");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Story!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ready,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " set,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " and Begin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".circleNumber[_ngcontent-%COMP%] {\r\n    padding-bottom: px;\r\n    \r\n    text-shadow: #343A40;\r\n    font-style: bold;\r\n    font-size: 35px;\r\n}\r\n\r\n.timeline-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #343A40;\r\n    text-decoration: none;\r\n}\r\n\r\n.timeline-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #FEC810;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    pointer-events: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    color: #FEC810;\r\n}\r\n\r\n#create[_ngcontent-%COMP%]:hover {\r\n    background-color: #343A40;\r\n    color: #FEC810;\r\n}\r\n\r\n#create[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\r\n    color: #FEC810;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGVOdW1iZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IHB4O1xyXG4gICAgLyogY29sb3I6ICMzNDNBNDA7ICovXHJcbiAgICB0ZXh0LXNoYWRvdzogIzM0M0E0MDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pbWFnZSBhIHtcclxuICAgIGNvbG9yOiAjMzQzQTQwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGltZWxpbmUtaW1hZ2UgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI0ZFQzgxMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuYSBoNCA6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGRUM4MTA7XHJcbn1cclxuXHJcbiNjcmVhdGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDtcclxuICAgIGNvbG9yOiAjRkVDODEwO1xyXG59XHJcblxyXG4jY3JlYXRlOmhvdmVyIGEgaDQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGRUM4MTA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cycic_cycic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cycic/cycic.component */
    "./src/app/cycic/cycic.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'create/:lang',
      component: _cycic_cycic_component__WEBPACK_IMPORTED_MODULE_2__["CycicComponent"]
    }, {
      path: 'about/:lang',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'contact/:lang',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }, {
      path: ':lang',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponents = [_cycic_cycic_component__WEBPACK_IMPORTED_MODULE_2__["CycicComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'CustomCable';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[2, "background-color", "darkslategray"], [1, "app-router"], ["id", "router", 1, "container-fluid"], [1, "footer"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 3);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    \r\n    line-height: 60px;\r\n    border-top: solid 1px yellow;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.app-router[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOzs7QUFHQTs7O3lCQUd5Qjs7O0FBR3pCLE1BQU07OztBQUVOO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggeWVsbG93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgIC8qIHBhZGRpbmc6IDAgMTVweDsgKi9cclxuXHJcblxyXG4vKiB9ICovXHJcblxyXG4uYXBwLXJvdXRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/service.component */
    "./src/app/service/service.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _cycic_cycic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cycic/cycic.component */
    "./src/app/cycic/cycic.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"] // CLI adds AppRoutingModule to the AppModule's imports array
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _cycic_cycic_component__WEBPACK_IMPORTED_MODULE_10__["CycicComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _cycic_cycic_component__WEBPACK_IMPORTED_MODULE_10__["CycicComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"] // CLI adds AppRoutingModule to the AppModule's imports array
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _cycic_cycic_component__WEBPACK_IMPORTED_MODULE_10__["CycicComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["routingComponents"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"] // CLI adds AppRoutingModule to the AppModule's imports array
          ],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contact.service */
    "./src/app/contact/contact.service.ts");
    /* harmony import */


    var _mailtemplates_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mailtemplates/contact.model */
    "./src/app/mailtemplates/contact.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ContactComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kontaktirajte nas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "If you have some questions, just send us a email.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ako imate nekih pitanja, posaljite nam email.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } // import {ContactService} from './contact.service';


    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(http, ref, router, route) {
        _classCallCheck(this, ContactComponent);

        this.http = http;
        this.ref = ref;
        this.router = router;
        this.route = route;
        this.lang = this.route.snapshot.params['lang'];
        this.yourName = '';
        this.yourEmail = '';
        this.yourPhone = '';
        this.yourMessage = '';
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ref.detectChanges();

          if (this.lang == 'sr') {
            document.getElementById('name').setAttribute('placeholder', 'Ime i prezime');
            document.getElementById('email').setAttribute('placeholder', 'Email adresa');
            document.getElementById('phone').setAttribute('placeholder', 'Broj telefona');
            document.getElementById('message').setAttribute('placeholder', 'Vasa poruka');
            document.getElementById('btnS').innerHTML = "Posalji";
          }
        }
      }, {
        key: "sendContactMail",
        value: function sendContactMail() {
          this.message = new _mailtemplates_contact_model__WEBPACK_IMPORTED_MODULE_2__["ContactMail"](this.yourName, this.yourEmail, this.yourPhone, this.yourMessage); // console.log(this.message);

          console.log(this.lang);
          var contactService = new _contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"](this.http);
          contactService.createContact(this.message); // this.contactService.postMail();
        }
      }, {
        key: "onKeyName",
        value: function onKeyName(event) {
          this.yourName = event.target.value;
        }
      }, {
        key: "onKeyEmail",
        value: function onKeyEmail(event) {
          this.yourEmail = event.target.value;
        }
      }, {
        key: "onKeyPhone",
        value: function onKeyPhone(event) {
          this.yourPhone = event.target.value;
        }
      }, {
        key: "onKeyMessage",
        value: function onKeyMessage(event) {
          this.yourMessage = event.target.value;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 31,
      vars: 4,
      consts: [["id", "contact", 1, "page-section"], [1, "container"], [1, "text-center"], [1, "section-heading", "text-uppercase"], [4, "ngIf"], [1, "section-subheading", "text-muted"], ["id", "contactForm", "name", "EmailTestForm", "novalidate", "novalidate", "action", "https://formspree.io/xgenovgq", "method", "POST"], [1, "row", "align-items-stretch", "mb-5"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "type", "text", "placeholder", "Your Name *", "required", "required", "data-validation-required-message", "Please enter your name.", 1, "form-control", 3, "keyup"], [1, "help-block", "text-danger"], ["type", "email", "name", "_replyto", "id", "email", "type", "email", "placeholder", "Your Email *", "required", "required", "data-validation-required-message", "Please enter your email address.", 1, "form-control", 3, "keyup"], [1, "form-group", "mb-md-0"], ["type", "number", "name", "tel", "id", "phone", "type", "tel", "placeholder", "Your Phone *", "required", "required", "data-validation-required-message", "Please enter your phone number.", 1, "form-control", 3, "keyup"], [1, "form-group", "form-group-textarea", "mb-md-0"], ["name", "message", "id", "message", "placeholder", "Your Message *", "required", "required", "data-validation-required-message", "Please enter a message.", 1, "form-control", 3, "keyup"], ["id", "success"], ["type", "submit", "value", "Send", "id", "btnS", 1, "btn", "btn-primary", "btn-xl", "text-uppercase", 3, "click"], ["id", "my-form-status", 2, "color", "yellow"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContactComponent_span_4_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContactComponent_span_5_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactComponent_span_7_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactComponent_span_8_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_input_keyup_13_listener($event) {
            return ctx.onKeyName($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_input_keyup_16_listener($event) {
            return ctx.onKeyEmail($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_input_keyup_19_listener($event) {
            return ctx.onKeyPhone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactComponent_Template_textarea_keyup_23_listener($event) {
            return ctx.onKeyMessage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_27_listener() {
            return ctx.sendContactMail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.service.ts":
  /*!********************************************!*\
    !*** ./src/app/contact/contact.service.ts ***!
    \********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppContactContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json' // 'Authorization': 'Bearer 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'

      })
    };
    var dataContact = {
      "personalizations": [{
        "to": [{
          "email": "ivanjoca@gmail.com",
          "name": "John Doe"
        }],
        "subject": "Hello, World!"
      }],
      "content": [{
        "type": "text/plain",
        "value": "Heya!"
      }],
      "from": {
        "email": "stankovicmivan@gmail.com",
        "name": "Sam Smith"
      },
      "reply_to": {
        "email": "sam.smith@example.com",
        "name": "Sam Smith"
      }
    };

    var ContactService = /*#__PURE__*/function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
        this.url = 'api/contact';
      } // post("/api/contact")


      _createClass(ContactService, [{
        key: "createContact",
        value: function createContact(newContact) {
          console.log('contact service ts');
          this.http.post(this.url, newContact).subscribe(function (responseData) {
            console.log(responseData.message);
          });
        } // createContact(newContact: ContactMail):Observable<ContactMail> {
        //     console.log(newContact);
        //     return this.http.post<ContactMail>('http://localhost:8080/api/contact', newContact);
        //     // return this.http.post<ContactMail>(this.url, newContact, httpOptions)
        //     //   .pipe(
        //     //     catchError(this.handleError('addSmartphone', newContact))
        //     //   );
        //   }

      }, {
        key: "handleError",
        value: function handleError() {
          var _this = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error);

            _this.log("".concat(operation, " failed: ").concat(error.message));

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "log",
        value: function log(message) {
          console.log(message);
        }
      }]);

      return ContactService;
    }();

    ContactService.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cycic/cycic.component.ts":
  /*!******************************************!*\
    !*** ./src/app/cycic/cycic.component.ts ***!
    \******************************************/

  /*! exports provided: CycicComponent */

  /***/
  function srcAppCycicCycicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CycicComponent", function () {
      return CycicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CycicComponent_div_65_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose a knitting pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Izaberi redni broj dole prikazanih sablona");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_div_65_div_5_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.cablePattern = $event;
        })("click", function CycicComponent_div_65_div_5_Template_select_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.previewPattern();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "5. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "6. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.cablePattern);
      }
    }

    function CycicComponent_div_65_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_div_65_div_6_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.cablePattern = $event;
        })("click", function CycicComponent_div_65_div_6_Template_select_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.previewPattern();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "5. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "6. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.cablePattern);
      }
    }

    function CycicComponent_div_65_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Primary color : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Secondary color : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Osnovna boja : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pomocna boja : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "4. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "4. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "5. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "5. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "6. Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_p_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "6. Sablon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CycicComponent_div_65_span_3_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CycicComponent_div_65_span_4_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CycicComponent_div_65_div_5_Template, 14, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CycicComponent_div_65_div_6_Template, 14, 1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CycicComponent_div_65_div_7_Template, 8, 0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CycicComponent_div_65_div_8_Template, 8, 0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CycicComponent_div_65_p_16_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CycicComponent_div_65_p_17_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CycicComponent_div_65_p_22_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CycicComponent_div_65_p_23_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CycicComponent_div_65_p_28_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CycicComponent_div_65_p_29_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CycicComponent_div_65_p_34_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CycicComponent_div_65_p_35_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CycicComponent_div_65_p_40_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CycicComponent_div_65_p_41_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CycicComponent_div_65_p_46_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CycicComponent_div_65_p_47_Template, 2, 0, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lang == "sr");
      }
    }

    function CycicComponent_div_75_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select color:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Izaberi boju:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "White");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bela");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crvena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plava");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gold");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zlatna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yellow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Green");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zelena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gray");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Siva");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_75_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CycicComponent_div_75_span_5_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CycicComponent_div_75_span_6_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_div_75_Template_select_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.singleColor = $event;
        })("click", function CycicComponent_div_75_Template_select_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.previewPatternSingleColor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CycicComponent_div_75_span_10_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CycicComponent_div_75_span_11_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CycicComponent_div_75_span_13_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CycicComponent_div_75_span_14_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CycicComponent_div_75_span_16_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CycicComponent_div_75_span_17_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CycicComponent_div_75_span_19_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CycicComponent_div_75_span_20_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CycicComponent_div_75_span_22_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CycicComponent_div_75_span_23_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CycicComponent_div_75_span_25_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CycicComponent_div_75_span_26_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CycicComponent_div_75_span_28_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CycicComponent_div_75_span_29_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CycicComponent_div_75_div_31_Template, 2, 0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.singleColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cableColorNumber == 1);
      }
    }

    function CycicComponent_div_76_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select your Primary color: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Izaberi osnovnu boju:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "White");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bela");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crvena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plava");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gold");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zlatna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yellow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Green");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zelena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gray");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Siva");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select your Secondary color:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Izaberi pomocnu boju:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_37_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "White");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_37_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bela");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_37_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_37_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.lang == "sr");
      }
    }

    function CycicComponent_div_76_option_38_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_38_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crvena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_38_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_38_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.lang == "sr");
      }
    }

    function CycicComponent_div_76_option_39_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_39_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plava");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_39_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_39_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.lang == "sr");
      }
    }

    function CycicComponent_div_76_option_40_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gold");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_40_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zlatna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_40_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_40_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.lang == "sr");
      }
    }

    function CycicComponent_div_76_option_41_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yellow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_41_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_41_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_41_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.lang == "sr");
      }
    }

    function CycicComponent_div_76_option_42_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Green");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_42_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zelena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_42_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_42_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.lang == "sr");
      }
    }

    function CycicComponent_div_76_option_43_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gray");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_43_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Siva");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CycicComponent_div_76_option_43_span_1_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CycicComponent_div_76_option_43_span_2_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r85.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r85.lang == "sr");
      }
    }

    function CycicComponent_div_76_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CycicComponent_div_76_span_5_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CycicComponent_div_76_span_6_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_div_76_Template_select_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.primaryColor = $event;
        })("click", function CycicComponent_div_76_Template_select_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.previewPattern();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CycicComponent_div_76_span_10_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CycicComponent_div_76_span_11_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CycicComponent_div_76_span_13_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CycicComponent_div_76_span_14_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CycicComponent_div_76_span_16_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CycicComponent_div_76_span_17_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CycicComponent_div_76_span_19_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CycicComponent_div_76_span_20_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CycicComponent_div_76_span_22_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CycicComponent_div_76_span_23_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CycicComponent_div_76_span_25_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CycicComponent_div_76_span_26_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CycicComponent_div_76_span_28_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CycicComponent_div_76_span_29_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CycicComponent_div_76_span_33_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CycicComponent_div_76_span_34_Template, 2, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_div_76_Template_select_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.secondaryColor = $event;
        })("click", function CycicComponent_div_76_Template_select_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.previewPattern();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CycicComponent_div_76_option_37_Template, 3, 2, "option", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CycicComponent_div_76_option_38_Template, 3, 2, "option", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CycicComponent_div_76_option_39_Template, 3, 2, "option", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CycicComponent_div_76_option_40_Template, 3, 2, "option", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CycicComponent_div_76_option_41_Template, 3, 2, "option", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CycicComponent_div_76_option_42_Template, 3, 2, "option", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CycicComponent_div_76_option_43_Template, 3, 2, "option", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CycicComponent_div_76_div_45_Template, 2, 0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.primaryColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lang == "sr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.secondaryColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.primaryColor != 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.cableColorNumber == 2 && ctx_r2.secondaryColor != 0 && ctx_r2.primaryColor != 0 && ctx_r2.cablePattern != 0);
      }
    }

    function CycicComponent_span_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crvena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Green");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zelena");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plava");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_114_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "White");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bela");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_121_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Black");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crna");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yellow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_span_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_th_151_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pattern");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CycicComponent_td_161_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } // const sgMail = require('@sendgrid/mail');


    var CycicComponent = /*#__PURE__*/function () {
      function CycicComponent(ref, router, route) {
        _classCallCheck(this, CycicComponent);

        this.ref = ref;
        this.router = router;
        this.route = route;
        this.lang = this.route.snapshot.params['lang'];
        this.kablTip = 0;
        this.kablDuzina = 1;
        this.cableColorNumber = 0;
        this.kablboje = 0;
        this.kablNaziv = '';
        this.duzinaKabla = '1 m';
        this.cablePattern = 0;
        this.kablBojaJacka = 0;
        /*
         1 = crvena
         2 = zelena
         3 = plava
         4 = bela
         5 = zlatna
         6 = siva
         7 = zuta
        */

        this.boje = ''; //provera broja boja

        this.color1 = false;
        this.color2 = false;
        this.color3 = false;
        this.color4 = false;
        this.color5 = false;
        this.color6 = false;
        this.counter = 0; // c7() {
        //   if (this.boja7 == false) {
        //     this.boja7 = true;
        //     this.counter++;
        //     document.getElementById("defaultCheck7").setAttribute('checked', '');
        //     this.proveraBoje();
        //   } else {
        //     this.boja7 = false;
        //     this.counter--;
        //     document.getElementById("defaultCheck7").removeAttribute('checked');
        //     this.removeDisabled();
        //   }
        // }

        this.flag = false;
        this.primaryColor = 0;
        this.secondaryColor = 0;
        this.srcPath = "";
        this.srcPathBase = '../../assets/img/create/';
        this.patternLeftOrRight = "";
        this.patternColorFolder = "";
        this.patternColorFileName = "";
        this.patterColorSubFolder = "";
        this.previousPath = "";
        this.srcPathBaseForSingleColor = '../../assets/img/create/full';
        this.singleColor = 0;
        this.srcFullPathForSingleColor = "";
      }

      _createClass(CycicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ref.detectChanges(); //Script for manual translate

          if (this.lang == 'sr') {
            //first tab
            document.getElementById('spanOne').innerText = '1. korak: Izaberite namenu';
            document.getElementById('guitar').innerHTML = 'Gitaru';
            document.getElementById('mic').innerHTML = 'Mikrofon';
            document.getElementById('rca').innerHTML = 'RCA na 6,35mm'; //2. tab

            document.getElementById('spanTwo').innerText = '2. korak: Izaberite zeljenu duzinu'; //3.tab

            document.getElementById('spanThree').innerText = '3. korak: Izaberite u koliko boja zelis kabl';
            document.getElementById('colorNumberLabel').innerText = 'U koliko boja zelite izradu kabla?';
            document.getElementById('cableColorOne').innerText = 'Jednoj';
            document.getElementById('cableColorTwo').innerText = 'Dve'; //4. tab

            document.getElementById('spanFour').innerText = '4. korak: Izaberite boju u odnosu na prethodni izbor';
            document.getElementById('spanFive').innerText = '5. korak: Izaberite boju zastite oko konektora';
            document.getElementById('spanFinal').innerText = 'Poslednji korak: Potvrdi kreirano';
          }
        }
        /**
         * selectCable
         */

      }, {
        key: "guitarCable",
        value: function guitarCable() {
          this.kablTip = 1;
          this.checkCable();
        }
      }, {
        key: "micCable",
        value: function micCable() {
          this.kablTip = 2;
          this.checkCable();
        }
      }, {
        key: "rcaCable",
        value: function rcaCable() {
          this.kablTip = 3;
          this.checkCable();
        }
      }, {
        key: "checkCable",
        value: function checkCable() {
          if (this.kablTip == 1) {
            this.kablNaziv = 'Gitaru';
          }

          if (this.kablTip == 2) {
            this.kablNaziv = 'Mikrofon';
          }

          if (this.kablTip == 3) {
            this.kablNaziv = 'RCA na 6,35mm';
          }
        }
      }, {
        key: "proveraDuzine",
        value: function proveraDuzine() {
          if (this.kablDuzina == 1) {
            this.duzinaKabla = '1 m';
          }

          if (this.kablDuzina == 2) {
            this.duzinaKabla = '1,5 m';
          }

          if (this.kablDuzina == 3) {
            this.duzinaKabla = '2 m';
          }

          if (this.kablDuzina == 4) {
            this.duzinaKabla = '2,5 m';
          }

          if (this.kablDuzina == 5) {
            this.duzinaKabla = '3 m';
          }

          if (this.kablDuzina == 6) {
            this.duzinaKabla = '3,5 m';
          }

          if (this.kablDuzina == 7) {
            this.duzinaKabla = '5 m';
          }

          if (this.kablDuzina == 8) {
            this.duzinaKabla = '6 m';
          }

          if (this.kablDuzina == 9) {
            this.duzinaKabla = '10 m';
          }
        }
      }, {
        key: "c1",
        value: function c1() {
          if (this.color1 == false) {
            this.counter++;
            this.color1 = true;
            document.getElementById("defaultCheck1").setAttribute('checked', '');
            this.proveraBoje();
          } else {
            this.color1 = false;
            this.counter--;
            document.getElementById("defaultCheck1").removeAttribute('checked');
            this.removeDisabled();
          }
        }
      }, {
        key: "c2",
        value: function c2() {
          if (this.color2 == false) {
            this.color2 = true;
            this.counter++;
            document.getElementById("defaultCheck2").setAttribute('checked', '');
            this.proveraBoje();
          } else {
            this.color2 = false;
            this.counter--;
            document.getElementById("defaultCheck2").removeAttribute('checked');
            this.removeDisabled();
          }
        }
      }, {
        key: "c3",
        value: function c3() {
          if (this.color3 == false) {
            this.color3 = true;
            this.counter++;
            document.getElementById("defaultCheck3").setAttribute('checked', '');
            this.proveraBoje();
          } else {
            this.color3 = false;
            this.counter--;
            document.getElementById("defaultCheck3").removeAttribute('checked');
            this.removeDisabled();
          }
        }
      }, {
        key: "c4",
        value: function c4() {
          if (this.color4 == false) {
            this.color4 = true;
            this.counter++;
            document.getElementById("defaultCheck4").setAttribute('checked', '');
            this.proveraBoje();
          } else {
            this.color4 = false;
            this.counter--;
            document.getElementById("defaultCheck4").removeAttribute('checked');
            this.removeDisabled();
          }
        }
      }, {
        key: "c5",
        value: function c5() {
          if (this.color5 == false) {
            this.color5 = true;
            this.counter++;
            document.getElementById("defaultCheck5").setAttribute('checked', '');
            this.proveraBoje();
          } else {
            this.color5 = false;
            this.counter--;
            document.getElementById("defaultCheck5").removeAttribute('checked');
            this.removeDisabled();
          }
        }
      }, {
        key: "c6",
        value: function c6() {
          if (this.color6 == false) {
            this.color6 = true;
            this.counter++;
            document.getElementById("defaultCheck6").setAttribute('checked', '');
            this.proveraBoje();
          } else {
            this.color6 = false;
            this.counter--;
            document.getElementById("defaultCheck6").removeAttribute('checked');
            this.removeDisabled();
          }
        }
      }, {
        key: "proveraBoje",
        value: function proveraBoje() {
          if (this.counter == this.cableColorNumber) {
            this.flag = true;

            if (this.color1 == false) {
              document.getElementById("defaultCheck1").setAttribute('disabled', '');
            }

            if (this.color2 == false) {
              document.getElementById("defaultCheck2").setAttribute('disabled', '');
            }

            if (this.color3 == false) {
              document.getElementById("defaultCheck3").setAttribute('disabled', '');
            }

            if (this.color5 == false) {
              document.getElementById("defaultCheck4").setAttribute('disabled', '');
            }

            if (this.color5 == false) {
              document.getElementById("defaultCheck5").setAttribute('disabled', '');
            }

            if (this.color6 == false) {
              document.getElementById("defaultCheck6").setAttribute('disabled', '');
            }
          }
        }
      }, {
        key: "removeDisabled",
        value: function removeDisabled() {
          if (this.counter < this.cableColorNumber) {
            document.getElementById("defaultCheck1").removeAttribute('disabled');
            document.getElementById("defaultCheck2").removeAttribute('disabled');
            document.getElementById("defaultCheck3").removeAttribute('disabled');
            document.getElementById("defaultCheck4").removeAttribute('disabled');
            document.getElementById("defaultCheck5").removeAttribute('disabled');
            document.getElementById("defaultCheck6").removeAttribute('disabled');
          }
        }
      }, {
        key: "previewPattern",
        value: function previewPattern() {
          if (this.cablePattern == 1 || this.cablePattern == 3 || this.cablePattern == 5) {
            this.patternLeftOrRight = "right";
          }

          if (this.cablePattern == 2 || this.cablePattern == 4 || this.cablePattern == 6) {
            this.patternLeftOrRight = "left";
          }

          if (this.primaryColor == 1) {
            this.patternColorFolder = "white";
          }

          if (this.primaryColor == 2) {
            this.patternColorFolder = "red";
          }

          if (this.primaryColor == 3) {
            this.patternColorFolder = "blue";
          }

          if (this.primaryColor == 4) {
            this.patternColorFolder = "gold";
          }

          if (this.primaryColor == 5) {
            this.patternColorFolder = "yellow";
          }

          if (this.primaryColor == 6) {
            this.patternColorFolder = "green";
          }

          if (this.primaryColor == 7) {
            this.patternColorFolder = "gray";
          }

          if (this.secondaryColor == 1) {
            this.patterColorSubFolder = "white";
          }

          if (this.secondaryColor == 2) {
            this.patterColorSubFolder = "red";
          }

          if (this.secondaryColor == 3) {
            this.patterColorSubFolder = "blue";
          }

          if (this.secondaryColor == 4) {
            this.patterColorSubFolder = "gold";
          }

          if (this.secondaryColor == 5) {
            this.patterColorSubFolder = "yellow";
          }

          if (this.secondaryColor == 6) {
            this.patterColorSubFolder = "green";
          }

          if (this.secondaryColor == 7) {
            this.patterColorSubFolder = "gray";
          }

          if (this.cablePattern == 1 || this.cablePattern == 2) {
            this.patternColorFileName = "1";
          }

          if (this.cablePattern == 3 || this.cablePattern == 4) {
            this.patternColorFileName = "2";
          }

          if (this.cablePattern == 5 || this.cablePattern == 6) {
            this.patternColorFileName = "3";
          }

          if (this.primaryColor != 0 && this.secondaryColor != 0) {
            if (this.secondaryColor == this.primaryColor) {
              document.getElementById("previewPattern").setAttribute('src', this.previousPath);
              document.getElementById("previewPatternTwo").setAttribute('src', this.previousPath);
            } else {
              this.srcPath = this.srcPathBase + this.patternLeftOrRight + "/" + this.patternColorFolder + "/" + this.patterColorSubFolder + "/" + this.patternColorFileName + '.svg';
              this.previousPath = '';
              this.previousPath += this.srcPath;
              document.getElementById("previewPattern").setAttribute('src', this.srcPath);
              document.getElementById("previewPatternTwo").setAttribute('src', this.srcPath);
            }
          }
        }
        /*
        1 -> White
        2 -> Red
        3 -> Blue
        4 -> Gold
        5 -> Yellow
        6 -> Green
        7 -> Gray
        */

      }, {
        key: "previewPatternSingleColor",
        value: function previewPatternSingleColor() {
          this.srcFullPathForSingleColor = this.srcPathBaseForSingleColor + "/" + this.singleColor + '.svg';

          if (this.singleColor != 0) {
            document.getElementById("previewPatternSingleColor").setAttribute('src', this.srcFullPathForSingleColor);
            document.getElementById("previewPatternTwo").setAttribute('src', this.srcFullPathForSingleColor);
          }
        }
      }]);

      return CycicComponent;
    }();

    CycicComponent.ɵfac = function CycicComponent_Factory(t) {
      return new (t || CycicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    CycicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CycicComponent,
      selectors: [["app-cycic"]],
      decls: 165,
      vars: 23,
      consts: [[1, "row"], ["id", "create", 1, "container", "col-12", "col-md-12"], [1, "group"], [1, "container", 2, "padding-top", "25px"], ["id", "accordionExample", 1, "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "btn-block", "text-center", "collapsed"], ["id", "spanOne"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body"], [1, "card", 2, "margin-right", "10px", "margin-left", "10px", 3, "click"], ["src", "assets/img/cycic/guitarcable.jpg", "alt", "...", 1, "card-img-top", 2, "width", "280px", "height", "250px"], ["id", "guitar", 1, "text-center"], ["src", "assets/img/cycic/miccable.jpg", "alt", "...", 1, "card-img-top", 2, "width", "280px", "height", "250px", "border", "black 1px"], [1, "card-body", 2, "border", "black 1px"], ["id", "mic", 1, "text-center"], ["src", "assets/img/cycic/rcacable.jpg", "alt", "...", 1, "card-img-top", 2, "width", "280px", "height", "250px"], ["id", "rca", 1, "ctext-center"], ["id", "headingFour", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "btn", "btn-link", "btn-block", "text-center", "collapsed"], ["id", "spanTwo"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-parent", "#accordionExample", 1, "collapse"], [1, "rangeWrapper"], ["id", "slide", "type", "range", "min", "1", "max", "9", "step", "1", "onkeypress", "proveraDuzine()", "name", "slide", 1, "slider", 3, "ngModel", "ngModelChange", "click"], ["for", "slide"], ["id", "headingThree", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn", "btn-link", "btn-block", "text-center", "collapsed"], ["id", "spanThree"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"], [1, ""], [1, "container"], [1, "col-sm-4"], ["id", "controlSelectLabel"], ["id", "colorNumberLabel"], [1, "col-sm-8"], ["id", "controlSelect", "placeholder", "Izaberi", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["id", "cableColorOne"], ["value", "2"], ["id", "cableColorTwo"], ["class", "row", 4, "ngIf"], ["id", "headingTwo", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "btn-block", "text-center", "collapsed"], ["id", "spanFour"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "btn", "btn-link", "btn-block", "text-center", "collapsed"], ["id", "spanFive"], ["id", "collapseFive", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], [1, "container", "form-check"], ["src", "", "alt", "", 1, "card-img-top", 2, "background-color", "red"], ["type", "radio", "value", "1", "id", "defaultCheck1", 1, "form-check-input", 3, "click"], ["for", "defaultCheck1", 1, "form-check-label"], [4, "ngIf"], ["src", "", "alt", "", 1, "card-img-top", 2, "background-color", "green"], ["type", "radio", "value", "2", "id", "defaultCheck2", 1, "form-check-input", 3, "click"], ["for", "defaultCheck2", 1, "form-check-label"], ["src", "", "alt", "", 1, "card-img-top", 2, "background-color", "blue"], ["type", "radio", "value", "3", "id", "defaultCheck3", 1, "form-check-input", 3, "click"], ["for", "defaultCheck3", 1, "form-check-label"], ["src", "", "alt", "", 1, "card-img-top", 2, "background-color", "whitesmoke"], ["type", "radio", "value", "4", "id", "defaultCheck4", 1, "form-check-input", 3, "click"], ["for", "defaultCheck4", 1, "form-check-label"], ["src", "", "alt", "", 1, "card-img-top", 2, "background-color", "black"], ["type", "radio", "value", "5", "id", "defaultCheck5", 1, "form-check-input", 3, "click"], ["for", "defaultCheck5", 1, "form-check-label"], ["src", "", "alt", "", 1, "card-img-top", 2, "background-color", "yellow"], ["type", "radio", "value", "6", "id", "defaultCheck6", 1, "form-check-input", 3, "click"], ["for", "defaultCheck6", 1, "form-check-label"], ["id", "headingSix", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseSix", "aria-expanded", "false", "aria-controls", "collapseSix", 1, "btn", "btn-link", "btn-block", "text-center", "collapsed"], ["id", "spanFinal"], ["id", "collapseSix", "aria-labelledby", "headingSix", "data-parent", "#accordionExample", 1, "collapse"], [1, "container", 2, "align-content", "center"], [1, "table"], ["id", "cart", 1, "container", "col-12", "col-md-4"], ["class", "col-sm-8", 4, "ngIf"], ["class", "col-sm-12 ", 4, "ngIf"], [1, "col-sm-12"], [1, "col-md-2"], ["src", "assets/img/create/pattern/pattern-1.svg", "alt", "", 1, "card-img-top"], ["class", "text-center", 4, "ngIf"], ["src", "assets/img/create/pattern/pattern-1l.svg", "alt", "", 1, "card-img-top"], ["src", "assets/img/create/pattern/pattern-2.svg", "alt", "", 1, "card-img-top"], ["src", "assets/img/create/pattern/pattern-2l.svg", "alt", "", 1, "card-img-top"], ["src", "assets/img/create/pattern/pattern-3.svg", "alt", "", 1, "card-img-top"], ["src", "assets/img/create/pattern/pattern-3l.svg", "alt", "", 1, "card-img-top"], [1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [2, "background-color", "#343A40", "width", "10px", "height", "10px"], [2, "background-color", "#FEC810", "width", "10px", "height", "10px"], [1, "text-center"], [1, "col-sm-6"], ["value", "7"], ["id", "previewPatternSingleColor"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], ["value", "5", 4, "ngIf"], ["value", "6", 4, "ngIf"], ["value", "7", 4, "ngIf"], ["id", "previewPattern"], ["id", "previewPatternTwo"]],
      template: function CycicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Step 1: What you need?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_div_click_14_listener() {
            return ctx.guitarCable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Guitar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_div_click_19_listener() {
            return ctx.micCable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_div_click_24_listener() {
            return ctx.rcaCable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1/4 to RCA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Step 2: What is your desired cable length?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.kablDuzina = $event;
          })("click", function CycicComponent_Template_input_click_38_listener() {
            return ctx.proveraDuzine();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "output", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Step 3: Do you want your cable in one or two colors?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "How many colors do you want?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CycicComponent_Template_select_ngModelChange_57_listener($event) {
            return ctx.cableColorNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CycicComponent_div_65_Template, 48, 18, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Step 4: What color do you want for your chosen pattern?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CycicComponent_div_75_Template, 32, 18, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CycicComponent_div_76_Template, 46, 28, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Step 5: What is your desired potection color?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_input_click_91_listener() {
            return ctx.c1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CycicComponent_span_93_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, CycicComponent_span_94_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_input_click_98_listener() {
            return ctx.c2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, CycicComponent_span_100_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, CycicComponent_span_101_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_input_click_105_listener() {
            return ctx.c3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, CycicComponent_span_107_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, CycicComponent_span_108_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_input_click_112_listener() {
            return ctx.c4();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, CycicComponent_span_114_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, CycicComponent_span_115_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_input_click_119_listener() {
            return ctx.c5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, CycicComponent_span_121_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, CycicComponent_span_122_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycicComponent_Template_input_click_126_listener() {
            return ctx.c6();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, CycicComponent_span_128_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, CycicComponent_span_129_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Final Step: Confirm build?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Kabl za");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Jack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Duzina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, CycicComponent_th_151_Template, 2, 0, "th", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Jack shield");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Neutrik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, CycicComponent_td_161_Template, 2, 0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.kablDuzina);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.duzinaKabla, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cableColorNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cableColorNumber == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cableColorNumber == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cableColorNumber == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lang == "sr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cableColorNumber != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kablNaziv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.duzinaKabla);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cableColorNumber != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kablBojaJacka);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".table[_ngcontent-%COMP%] {\r\n    display: inline-table;\r\n    text-align: center;\r\n    border: solid 1px whitesmoke;\r\n    font-family: tableFont;\r\n    font-size: 20px;\r\n}\r\n\r\n@font-face {\r\n    font-family: tableFont;\r\n    src: url('Roboto-Medium.ttf');\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n    font-family: tableFont;\r\n    font-size: 25px;\r\n    font-weight: 30px;\r\n}\r\n\r\n#cart[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 50px;\r\n    margin-bottom: 0px;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    border: 1px #f8f8f82d solid;\r\n    border-radius: 30px;\r\n    background-color: #f8f8f899;\r\n    max-width: 920px;\r\n}\r\n\r\n#create[_ngcontent-%COMP%] {\r\n    display: block;\r\n    \r\n    margin-top: 50px;\r\n    margin-bottom: 0px;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    border: 1px #f8f8f82d solid;\r\n    border-radius: 30px;\r\n    background-color: #f8f8f899;\r\n    max-width: 1000px;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    text-decoration: unset;\r\n    color: white;\r\n    background-color: #343A40;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\r\n    color: #FEC810;\r\n    text-decoration: unset;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:focus, .btn-link.focus[_ngcontent-%COMP%] {\r\n    text-decoration: unset;\r\n    color: #FEC810;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:disabled, .btn-link.disabled[_ngcontent-%COMP%] {\r\n    color: #FEC810;\r\n    pointer-events: none;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    place-content: center;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    background-color: #343A40;\r\n}\r\n\r\n.accordion[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] > .card-header[_ngcontent-%COMP%] {\r\n    \r\n    border-radius: 10px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    background-color: #f8f8f899;\r\n    border: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid white;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 5px;\r\n    background: #343A40;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 31px;\r\n    height: 31px;\r\n    background: #FEC810;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\r\n    width: 31px;\r\n    height: 31px;\r\n    background: #FEC810;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n    width: 100%;\r\n    background-color: #f8f8f899;\r\n}\r\n\r\n#previewPatternTwo[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    width: 100%;\r\n    background-color: #FBFBFB;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    border: none;\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3ljaWMvY3ljaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDZCQUE4QztBQUNsRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBRVosdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUdBO21DQUNtQzs7QUFHbkMsT0FBTzs7QUFFUDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jeWNpYy9jeWNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlc21va2U7XHJcbiAgICBmb250LWZhbWlseTogdGFibGVGb250O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB0YWJsZUZvbnQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGYpO1xyXG59XHJcblxyXG4ubWItMCB7XHJcbiAgICBmb250LWZhbWlseTogdGFibGVGb250O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNjYXJ0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogMXB4ICNmOGY4ZjgyZCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OTk7XHJcbiAgICBtYXgtd2lkdGg6IDkyMHB4O1xyXG59XHJcblxyXG4jY3JlYXRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCAjZjhmOGY4MmQgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODk5O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5tYi0wIC5idG4tbGluayB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDtcclxufVxyXG5cclxuLm1iLTAgLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRkVDODEwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcclxufVxyXG5cclxuLm1iLTAgLmJ0bi1saW5rOmZvY3VzLFxyXG4uYnRuLWxpbmsuZm9jdXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcclxuICAgIGNvbG9yOiAjRkVDODEwO1xyXG59XHJcblxyXG4ubWItMCAuYnRuLWxpbms6ZGlzYWJsZWQsXHJcbi5idG4tbGluay5kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogI0ZFQzgxMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNBNDA7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24+LmNhcmQ+LmNhcmQtaGVhZGVyIHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHdoaXRlOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OTk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0M0E0MDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMzFweDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRUM4MTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkVDODEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyAqL1xyXG5cclxuXHJcbi8qIH0gICovXHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODk5O1xyXG59XHJcblxyXG4jcHJldmlld1BhdHRlcm5Ud28ge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYm9keSBwIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CycicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cycic',
          templateUrl: './cycic.component.html',
          styleUrls: ['./cycic.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 10,
      vars: 0,
      consts: [[1, "footer", "py-4"], [1, "container"], [1, "row", "align-items-center"], [1, "col-7", "col-lg-6", "text-lg-left"], [1, "col-5", "col-lg-6", "my-3", "my-lg-0"], ["href", "#!", 1, "btn", "btn-dark", "btn-social", "mx-2"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook-f"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright \xA9 Ivan Stankovic 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n    border-top: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHOztBQUVIO0lBQ0ksNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogNjgwcHg7IFxyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7IFxyXG4gIH1cclxuICAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXRvcDogd2hpdGVzbW9rZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gallery/gallery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/gallery/gallery.component.ts ***!
    \**********************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 80,
      vars: 0,
      consts: [["id", "portfolio", 1, "page-section", "bg-light"], [1, "container"], [1, "text-center"], [1, "section-heading", "text-uppercase"], [1, "section-subheading", "text-muted"], [1, "row"], [1, "col-lg-4", "col-sm-6", "mb-4"], [1, "portfolio-item"], ["data-toggle", "modal", "href", "#portfolioModal1", 1, "portfolio-link"], [1, "portfolio-hover"], [1, "portfolio-hover-content"], [1, "fas", "fa-plus", "fa-3x"], ["src", "assets/img/portfolio/01-thumbnail.jpg", "alt", "", 1, "img-fluid"], [1, "portfolio-caption"], [1, "portfolio-caption-heading"], [1, "portfolio-caption-subheading", "text-muted"], ["data-toggle", "modal", "href", "#portfolioModal2", 1, "portfolio-link"], ["src", "assets/img/portfolio/02-thumbnail.jpg", "alt", "", 1, "img-fluid"], ["data-toggle", "modal", "href", "#portfolioModal3", 1, "portfolio-link"], ["src", "assets/img/portfolio/03-thumbnail.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-4", "col-sm-6", "mb-4", "mb-lg-0"], ["data-toggle", "modal", "href", "#portfolioModal4", 1, "portfolio-link"], ["src", "assets/img/portfolio/04-thumbnail.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-4", "col-sm-6", "mb-4", "mb-sm-0"], ["data-toggle", "modal", "href", "#portfolioModal5", 1, "portfolio-link"], ["src", "assets/img/portfolio/05-thumbnail.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-4", "col-sm-6"], ["data-toggle", "modal", "href", "#portfolioModal6", 1, "portfolio-link"], ["src", "assets/img/portfolio/06-thumbnail.jpg", "alt", "", 1, "img-fluid"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Threads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Illustration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Explore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Identity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Branding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Southwest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Website Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Photography");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, route) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.route = route;
        this.lang = this.route.snapshot.params['lang'];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.lang = 'en';
        }
      }, {
        key: "aboutLink",
        value: function aboutLink() {
          this.router.navigate(['about/', this.lang]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 0,
      consts: [[1, "masthead"], [1, "container"], [1, "masthead-subheading"], ["src", "assets/img/logos/logo.svg"], [1, "masthead-heading", "text-uppercase"], [1, "btn", "btn-primary", "btn-xl", "text-uppercase", "js-scroll-trigger", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Did you hear about the Custom Instrument cable ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() {
            return ctx.aboutLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tell Me More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".masthead[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    position: inherit;\r\n    width: 100%;\r\n}\r\n\r\nheader.masthead[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n    width: 450px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mailtemplates/contact.model.ts":
  /*!************************************************!*\
    !*** ./src/app/mailtemplates/contact.model.ts ***!
    \************************************************/

  /*! exports provided: ContactMail */

  /***/
  function srcAppMailtemplatesContactModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMail", function () {
      return ContactMail;
    });

    var ContactMail = function ContactMail(name, email, phone, message) {
      _classCallCheck(this, ContactMail);

      this.yourName = name;
      this.yourEmail = email;
      this.yourPhone = phone;
      this.yourMessage = message;
    };
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.lang = 'en';
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // path = '';

      }, {
        key: "setLangLink",
        value: function setLangLink(event) {
          // window.location.reload();
          this.router.navigate(['/', this.lang]); // console.log(this.lang);
        }
      }, {
        key: "setLangLinkClick",
        value: function setLangLinkClick() {
          // window.location.reload();
          this.router.navigate(['/', this.lang]); // console.log(this.lang);
        }
      }, {
        key: "contactLink",
        value: function contactLink() {
          this.router.navigate(['contact/', this.lang]);
        }
      }, {
        key: "createLink",
        value: function createLink() {
          this.router.navigate(['create/', this.lang]);
        }
      }, {
        key: "aboutLink",
        value: function aboutLink() {
          this.router.navigate(['about/', this.lang]);
        }
      }, {
        key: "galleryLink",
        value: function galleryLink() {
          this.router.navigate(['gallery/', this.lang]);
        }
      }, {
        key: "homeLink",
        value: function homeLink() {
          this.router.navigate(['/', this.lang]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 28,
      vars: 1,
      consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container"], [1, "navbar-brand", "js-scroll-trigger"], ["src", "assets/img/navbar/logo.svg", 2, "cursor", "pointer", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fas", "fa-bars", "ml-1"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-uppercase", "ml-auto"], [1, "nav-item"], ["id", "create", 1, "nav-link", "js-scroll-trigger", 3, "click"], ["id", "gallery", 1, "nav-link", "js-scroll-trigger", 3, "click"], ["id", "about", 1, "nav-link", "js-scroll-trigger", 3, "click"], ["id", "contact", 1, "nav-link", "js-scroll-trigger", 3, "click"], [3, "ngModel", "ngModelChange", "click", "keyup", "pan"], ["value", "en"], ["value", "sr"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_img_click_3_listener() {
            return ctx.homeLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() {
            return ctx.createLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() {
            return ctx.galleryLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() {
            return ctx.aboutLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_19_listener() {
            return ctx.contactLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_select_ngModelChange_21_listener($event) {
            return ctx.lang = $event;
          })("click", function NavbarComponent_Template_select_click_21_listener() {
            return ctx.setLangLinkClick();
          })("keyup", function NavbarComponent_Template_select_keyup_21_listener($event) {
            return ctx.setLangLink($event);
          })("pan", function NavbarComponent_Template_select_pan_21_listener($event) {
            return ctx.setLangLink($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Serbian");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "' ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lang);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["img[_ngcontent-%COMP%] {\r\n    margin-bottom: 2px;\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    max-width: 100%;\r\n}\r\n\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBR0Esa0RBQWtEOztBQUVsRDtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4jbWFpbk5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKiBidXR0b24ubmF2YmFyLXRvZ2dsZXIubmF2YmFyLXRvZ2dsZXItcmlnaHQge30gKi9cclxuXHJcbmxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/service.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/service.component.ts ***!
    \**********************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceComponent = /*#__PURE__*/function () {
      function ServiceComponent() {
        _classCallCheck(this, ServiceComponent);
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ɵfac = function ServiceComponent_Factory(t) {
      return new (t || ServiceComponent)();
    };

    ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceComponent,
      selectors: [["app-service"]],
      decls: 32,
      vars: 0,
      consts: [["id", "services", 1, "page-section"], [1, "container"], [1, "text-center"], [1, "section-heading", "text-uppercase"], [1, "section-subheading", "text-muted"], [1, "row", "text-center"], [1, "col-md-4"], [1, "fa-stack", "fa-4x"], [1, "fas", "fa-circle", "fa-stack-2x", "text-primary"], [1, "fas", "fa-shopping-cart", "fa-stack-1x", "fa-inverse"], [1, "my-3"], [1, "text-muted"], [1, "fas", "fa-laptop", "fa-stack-1x", "fa-inverse"], [1, "fas", "fa-lock", "fa-stack-1x", "fa-inverse"]],
      template: function ServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-Commerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Responsive Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Web Security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service',
          templateUrl: './service.component.html',
          styleUrls: ['./service.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ivan\Desktop\New folder (2)\Custom Cable\CustomCable\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map