"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/hooks/Windowsize.tsx

const useWindowSize = ()=>{
    const [size, setSize] = (0,external_react_.useState)([
        0,
        0
    ]);
    (0,external_react_.useLayoutEffect)(()=>{
        const updateSize = ()=>{
            setSize([
                window.innerWidth,
                window.innerHeight
            ]);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return ()=>window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};
/* harmony default export */ const Windowsize = (useWindowSize);

;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: ./src/components/Footer.tsx




function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        style: {
            position: "fixed",
            bottom: 10,
            right: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_namespaceObject.Paper, {
            sx: {
                width: 450,
                height: 100,
                opacity: 1,
                backgroundColor: "rgba(199, 230, 226, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Link, {
                    href: "https://github.com/Sea10wood",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: "/github-mark.png",
                        alt: "github-mark",
                        width: 90,
                        height: 90,
                        style: {
                            opacity: 1
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Link, {
                    href: "https://instagram.com/sea10____?igshid=NTc4MTIwNjQ2YQ==",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: "/Instagramlogo.png",
                        alt: "Instagramlogo",
                        width: 80,
                        height: 80,
                        style: {
                            opacity: 1
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_namespaceObject.Link, {
                    href: "https://twitter.com/10derSea",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: "/Twittericonmake.png",
                        alt: "twitterlogo",
                        width: 100,
                        height: 100,
                        style: {
                            opacity: 1
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/favicon.ico",
                    alt: "favicon",
                    width: 100,
                    height: 100,
                    style: {
                        opacity: 1
                    }
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/index.tsx





function Home() {
    const [width, height] = Windowsize();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: "/whoisSea10.gif",
                alt: "whoisSea10",
                width: width,
                height: height
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: "/whoisSea10orange.gif",
                alt: "whoisSea10orange",
                width: width,
                height: height
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: "/whoisSea10sea10.gif",
                alt: "whoisSea10sea10",
                width: width,
                height: height
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: "/whoisSea10whoissea10.gif",
                alt: "whoisSea10owhoissea10",
                width: width,
                height: height
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F&absolutePagePath=private-next-pages%2Findex.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,675], () => (__webpack_exec__(452)));
module.exports = __webpack_exports__;

})();