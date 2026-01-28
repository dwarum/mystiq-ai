"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 5968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ clientsSliderTwo),
/* harmony export */   "pP": () => (/* binding */ testimonialSliderTwo)
/* harmony export */ });
/* unused harmony exports heroOne, portfoliosliderone, clientssliderone, heroTwo, portfolioSliderTwo, testimonialSliderOne, serviceSliderOne, portfolioSliderThree, testimonialSliderThree, testimonialSliderFour, clientsSliderThree, screenshotSlider, projectSlider, recentProductSlider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PrevArrow({ className , onClick , icon , extraClass  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${extraClass ? extraClass : className} slick-arrow`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon ? icon : "fas fa-arrow-right"
        })
    }));
}
function NextArrow({ className , onClick , icon , extraClass  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${extraClass ? extraClass : className} slick-arrow`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon ? icon : "fas fa-arrow-left"
        })
    }));
}
const heroOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1500,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: false
            }
        }, 
    ]
};
const portfoliosliderone = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
    nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const clientssliderone = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
    nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
// it agency
const heroTwo = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
        extraClass: "prev",
        icon: "fas fa-angle-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        extraClass: "next",
        icon: "fas fa-angle-right"
    })
};
const portfolioSliderTwo = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const serviceSliderOne = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
        extraClass: "prev"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        extraClass: "next"
    }),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const portfolioSliderThree = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const clientsSliderTwo = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderTwo = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
        extraClass: "prev",
        icon: "far fa-angle-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        extraClass: "next",
        icon: "far fa-angle-right"
    }),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderThree = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
        extraClass: "prev"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        extraClass: "next"
    })
};
const testimonialSliderFour = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1
};
const clientsSliderThree = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const screenshotSlider = {
    dots: false,
    arrows: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
        extraClass: "prev",
        icon: "far fa-angle-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        extraClass: "next",
        icon: "far fa-angle-right"
    }),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const projectSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const recentProductSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};


/***/ })

};
;