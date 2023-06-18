exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 4611:
/***/ ((module) => {

// Exports
module.exports = {
	"banner_img_mobile": "Banner_banner_img_mobile__Xo5Li",
	"banner_img": "Banner_banner_img__ZawQn"
};


/***/ }),

/***/ 4195:
/***/ ((module) => {

// Exports
module.exports = {
	"DataCardTwo": "DataCard_DataCardTwo__NSx3A",
	"DataCardTwo_box": "DataCard_DataCardTwo_box__JtnHi",
	"DataCardTwo_box_like": "DataCard_DataCardTwo_box_like__0Yr_6",
	"DataCardTwo_box_like_box_box": "DataCard_DataCardTwo_box_like_box_box__XLQpS",
	"DataCardTwo_box_like_box_box_icon": "DataCard_DataCardTwo_box_like_box_box_icon__0xHhT",
	"DataCardTwo_box_img": "DataCard_DataCardTwo_box_img__bnTiL",
	"DataCardTwo_box_img_img": "DataCard_DataCardTwo_box_img_img__wcuKf",
	"DataCardTwo_box_info": "DataCard_DataCardTwo_box_info__biXbL",
	"DataCardTwo_box_info_left": "DataCard_DataCardTwo_box_info_left__xG4B2",
	"DataCardTwo_box_price": "DataCard_DataCardTwo_box_price__I6CfB",
	"DataCardTwo_box_price_box": "DataCard_DataCardTwo_box_price_box__8m7Ta",
	"DataCardTwo_box_price_stock": "DataCard_DataCardTwo_box_price_stock__830P9"
};


/***/ }),

/***/ 6433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jL": () => (/* reexport */ Banner_Banner),
  "I8": () => (/* reexport */ DataCard_DataCard)
});

// UNUSED EXPORTS: CollectionProfile

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./img/index.js + 27 modules
var img = __webpack_require__(5713);
;// CONCATENATED MODULE: ./utils/collectionPage/collectionProfile/collectionProfile.jsx



//INTERNAL IMPORT


const collectionProfile = ()=>{
    const cardArray = [
        1,
        2,
        3,
        4
    ];
    return /*#__PURE__*/ _jsx("div", {
        className: Style.collectionProfile,
        children: /*#__PURE__*/ _jsxs("div", {
            className: Style.collectionProfile_box,
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: Style.collectionProfile_box_left,
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: images.user1,
                        alt: "Data image",
                        width: 800,
                        height: 800,
                        className: Style.collectionProfile_box_left_img
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: Style.collectionProfile_box_middle,
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            children: "Awesome Datas Collection"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys."
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: Style.collectionProfile_box_middle_box,
                            children: cardArray.map((el, i)=>/*#__PURE__*/ _jsxs("div", {
                                    className: Style.collectionProfile_box_middle_box_item,
                                    children: [
                                        /*#__PURE__*/ _jsx("small", {
                                            children: "Floor price"
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                "$",
                                                i + 1,
                                                "95,4683"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("span", {
                                            children: [
                                                "+ ",
                                                i + 2,
                                                ".11%"
                                            ]
                                        })
                                    ]
                                }, i + 1))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const collectionProfile_collectionProfile = ((/* unused pure expression or super */ null && (collectionProfile)));

// EXTERNAL MODULE: ./utils/collectionPage/Banner/Banner.module.css
var Banner_module = __webpack_require__(4611);
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);
;// CONCATENATED MODULE: ./utils/collectionPage/Banner/Banner.jsx



//INTERNAL IMPORT

const Banner = ({ bannerImage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Banner_module_default()).banner,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Banner_module_default()).banner_img,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: bannerImage,
                    objectFit: "cover",
                    alt: "background",
                    height: 200
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Banner_module_default()).banner_img_mobile,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: bannerImage,
                    objectFit: "cover",
                    alt: "background",
                    width: 1600,
                    height: 300
                })
            })
        ]
    });
};
/* harmony default export */ const Banner_Banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/collectionPage/DataCard/DataCard.module.css
var DataCard_module = __webpack_require__(4195);
var DataCard_module_default = /*#__PURE__*/__webpack_require__.n(DataCard_module);
;// CONCATENATED MODULE: ./utils/collectionPage/DataCard/DataCard.jsx




//INTERNAL IMPORT

const DataCard = ({ Data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (DataCard_module_default()).DataCardTwo,
        children: Data?.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: {
                    pathname: "/dataDetails",
                    query: el
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (DataCard_module_default()).DataCardTwo_box,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (DataCard_module_default()).DataCardTwo_box_img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: el.dataType == "Image" ? el.image : el.dataType == "Video" ? el.thumbnail : img/* default.musiceWave2 */.Z.musiceWave2,
                                alt: "Data",
                                width: 500,
                                height: 500,
                                objectFit: "cover",
                                className: (DataCard_module_default()).DataCardTwo_box_img_img
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (DataCard_module_default()).DataCardTwo_box_info,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (DataCard_module_default()).DataCardTwo_box_info_left,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: el.name
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (DataCard_module_default()).DataCardTwo_box_price,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (DataCard_module_default()).DataCardTwo_box_price_box,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        children: "Price"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            el.price || i + 4,
                                            " ETH"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, i + 1))
    });
};
/* harmony default export */ const DataCard_DataCard = (DataCard);

;// CONCATENATED MODULE: ./utils/collectionPage/collectionIndex.js






/***/ })

};
;