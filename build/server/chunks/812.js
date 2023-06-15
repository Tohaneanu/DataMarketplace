exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 9695:
/***/ ((module) => {

// Exports
module.exports = {
	"banner_img_mobile": "Banner_banner_img_mobile__g6Fs3",
	"banner_img": "Banner_banner_img__r_wlE"
};


/***/ }),

/***/ 9018:
/***/ ((module) => {

// Exports
module.exports = {
	"DataCardTwo": "DataCard_DataCardTwo__ERIbx",
	"DataCardTwo_box": "DataCard_DataCardTwo_box__7Vf4L",
	"DataCardTwo_box_like": "DataCard_DataCardTwo_box_like__gEY3Q",
	"DataCardTwo_box_like_box_box": "DataCard_DataCardTwo_box_like_box_box__xQdum",
	"DataCardTwo_box_like_box_box_icon": "DataCard_DataCardTwo_box_like_box_box_icon__3iX3i",
	"DataCardTwo_box_img": "DataCard_DataCardTwo_box_img__tW2V5",
	"DataCardTwo_box_img_img": "DataCard_DataCardTwo_box_img_img__KnyD8",
	"DataCardTwo_box_info": "DataCard_DataCardTwo_box_info__eKWq_",
	"DataCardTwo_box_info_left": "DataCard_DataCardTwo_box_info_left__I1ITO",
	"DataCardTwo_box_price": "DataCard_DataCardTwo_box_price___ebw7",
	"DataCardTwo_box_price_box": "DataCard_DataCardTwo_box_price_box__xDXYe",
	"DataCardTwo_box_price_stock": "DataCard_DataCardTwo_box_price_stock__HGgNX"
};


/***/ }),

/***/ 4812:
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
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
// EXTERNAL MODULE: ./img/index.js + 30 modules
var img = __webpack_require__(5858);
;// CONCATENATED MODULE: ./collectionPage/collectionProfile/collectionProfile.jsx




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

// EXTERNAL MODULE: ./collectionPage/Banner/Banner.module.css
var Banner_module = __webpack_require__(9695);
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);
;// CONCATENATED MODULE: ./collectionPage/Banner/Banner.jsx



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
// EXTERNAL MODULE: ./collectionPage/DataCard/DataCard.module.css
var DataCard_module = __webpack_require__(9018);
var DataCard_module_default = /*#__PURE__*/__webpack_require__.n(DataCard_module);
;// CONCATENATED MODULE: ./collectionPage/DataCard/DataCard.jsx




//INTERNAL IMPORT

const DataCard = ({ Data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (DataCard_module_default()).DataCardTwo,
        children: Data?.map((el, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: {
                    pathname: "/Data-details",
                    query: el
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (DataCard_module_default()).DataCardTwo_box,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (DataCard_module_default()).DataCardTwo_box_img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: el.dataType == "Image" ? el.image : el.thumbnail,
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

;// CONCATENATED MODULE: ./collectionPage/collectionIndex.js






/***/ })

};
;