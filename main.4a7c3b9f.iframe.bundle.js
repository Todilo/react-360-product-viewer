(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/react/node_modules/@storybook/core/node_modules/@storybook/core-server/node_modules/@storybook/builder-webpack4/node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/React360Viewer.stories.tsx":"./src/stories/React360Viewer.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/React360Viewer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Standard",(function(){return Standard})),__webpack_require__.d(__webpack_exports__,"AutoPlayReversed",(function(){return AutoPlayReversed}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.ends-with.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var StyledImage=styled_components_browser_esm.b.img(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  user-select: none;\n  touch-action: none;\n  cursor: inherit;\n  -webkit-user-drag: none;\n"]))),AnimationImage_AnimationImage=function AnimationImage(_ref){var src=_ref.src,isVisible=_ref.isVisible,width=_ref.width,height=_ref.height,d=isVisible?"block":"none";return Object(jsx_runtime.jsx)(StyledImage,{alt:"Rotating object",src:src,width:width,height:height,style:{display:""+d}})};AnimationImage_AnimationImage.displayName="AnimationImage";var components_AnimationImage_AnimationImage=AnimationImage_AnimationImage;try{AnimationImage_AnimationImage.displayName="AnimationImage",AnimationImage_AnimationImage.__docgenInfo={description:"",displayName:"AnimationImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},isVisible:{defaultValue:null,description:"",name:"isVisible",required:!0,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AnimationImage/AnimationImage.tsx#AnimationImage"]={docgenInfo:AnimationImage_AnimationImage.__docgenInfo,name:"AnimationImage",path:"src/components/AnimationImage/AnimationImage.tsx#AnimationImage"})}catch(__react_docgen_typescript_loader_error){}function Icon(_ref){var className=_ref.className;return Object(jsx_runtime.jsx)("svg",{className:className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(jsx_runtime.jsx)("path",{d:"M12 6C6.3 6 2 8.15 2 11c0 2.45 3.19 4.38 7.71 4.88l-.42.41a1 1 0 000 1.42 1 1 0 001.42 0l2-2a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-2-2a1 1 0 00-1.42 1.42l.12.11C6 13.34 4 12 4 11c0-1.22 3.12-3 8-3s8 1.78 8 3c0 .83-1.45 2-4.21 2.6a1 1 0 00-.79 1.19 1 1 0 001.19.77c3.65-.8 5.81-2.5 5.81-4.56 0-2.85-4.3-5-10-5z"})})}Icon.displayName="Icon";var StyledRotateIcon_templateObject,_templateObject2,RotateIcon=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/RotateIcon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/icons/RotateIcon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}function StyledRotateIcon_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var React360Viewer_templateObject,React360Viewer_templateObject2,_templateObject3,StyledRotateIcon=Object(styled_components_browser_esm.b)(RotateIcon)(StyledRotateIcon_templateObject||(StyledRotateIcon_templateObject=StyledRotateIcon_taggedTemplateLiteralLoose(["\n  position: absolute;\n\n  fill: #eee;\n  text-shadow: 4px 5px black;\n  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));\n  opacity: 0.8;\n  ",";\n"])),(function(props){return Object(styled_components_browser_esm.a)(_templateObject2||(_templateObject2=StyledRotateIcon_taggedTemplateLiteralLoose(["\n      top: calc(50% -"," ","em);\n      left: calc(50% - ","em);\n      width: ","em;\n      transform: scaleX(",");\n    "])),(function(props){return props.theme.main}),props.widthInEm/2,props.widthInEm/2,props.widthInEm,(function(props){return props.isReverse?"-1":"1"}))})),icons_StyledRotateIcon=StyledRotateIcon;try{StyledRotateIcon.displayName="StyledRotateIcon",StyledRotateIcon.__docgenInfo={description:"",displayName:"StyledRotateIcon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},widthInEm:{defaultValue:null,description:"",name:"widthInEm",required:!0,type:{name:"number"}},isReverse:{defaultValue:null,description:"",name:"isReverse",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/StyledRotateIcon.tsx#StyledRotateIcon"]={docgenInfo:StyledRotateIcon.__docgenInfo,name:"StyledRotateIcon",path:"src/components/icons/StyledRotateIcon.tsx#StyledRotateIcon"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function React360Viewer_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function moduloWithoutNegative(value,n){return(value%n+n)%n}var StyledDiv=styled_components_browser_esm.b.div(React360Viewer_templateObject||(React360Viewer_templateObject=React360Viewer_taggedTemplateLiteralLoose(["\n  position: relative;\n  border: none;\n  padding: 5px;\n  display: inline-block;\n  user-select: none;\n  touch-action: none;\n  ",";\n"])),(function(props){return props.isGrabbing?Object(styled_components_browser_esm.a)(React360Viewer_templateObject2||(React360Viewer_templateObject2=React360Viewer_taggedTemplateLiteralLoose(["\n          cursor: grabbing;\n        "]))):Object(styled_components_browser_esm.a)(_templateObject3||(_templateObject3=React360Viewer_taggedTemplateLiteralLoose(["\n          cursor: pointer;\n        "])))})),React360Viewer_React360Viewer=function React360Viewer(_ref){var imagesCount=_ref.imagesCount,imagesBaseUrl=_ref.imagesBaseUrl,imagesFiletype=_ref.imagesFiletype,imageFilenamePrefix=_ref.imageFilenamePrefix,_ref$mouseDragSpeed=_ref.mouseDragSpeed,mouseDragSpeed=void 0===_ref$mouseDragSpeed?20:_ref$mouseDragSpeed,_ref$reverse=_ref.reverse,reverse=void 0!==_ref$reverse&&_ref$reverse,_ref$autoplaySpeed=_ref.autoplaySpeed,autoplaySpeed=void 0===_ref$autoplaySpeed?10:_ref$autoplaySpeed,_ref$autoplay=_ref.autoplay,autoplay=void 0!==_ref$autoplay&&_ref$autoplay,_ref$width=_ref.width,width=void 0===_ref$width?150:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?150:_ref$height,_ref$showRotationIcon=_ref.showRotationIconOnStartup,showRotationIconOnStartup=void 0!==_ref$showRotationIcon&&_ref$showRotationIcon,_ref$imageInitialInde=_ref.imageInitialIndex,imageInitialIndex=void 0===_ref$imageInitialInde?0:_ref$imageInitialInde,_ref$shouldNotifyEven=_ref.shouldNotifyEvents,shouldNotifyEvents=void 0!==_ref$shouldNotifyEven&&_ref$shouldNotifyEven,notifyOnPointerDown=_ref.notifyOnPointerDown,notifyOnPointerUp=_ref.notifyOnPointerUp,notifyOnPointerMoved=_ref.notifyOnPointerMoved,elementRef=Object(react.useRef)(null),_useState2=_slicedToArray(Object(react.useState)(!1),2),isScrolling=_useState2[0],setIsScrolling=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(0),2),initialMousePosition=_useState4[0],setInitialMousePosition=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(0),2),startingImageIndexOnPointerDown=_useState6[0],setStartingImageIndexOnPointerDown=_useState6[1],_useState8=_slicedToArray(Object(react.useState)(0),2),currentMousePosition=_useState8[0],setCurrentMousePosition=_useState8[1],_useState10=_slicedToArray(Object(react.useState)(0),2),selectedImageIndex=_useState10[0],setSelectedImageIndex=_useState10[1],_useState12=_slicedToArray(Object(react.useState)([]),2),imageSources=_useState12[0],setImageSources=_useState12[1],_useState14=_slicedToArray(Object(react.useState)(showRotationIconOnStartup),2),showRotationIcon=_useState14[0],setShowRotationIcon=_useState14[1],_useState16=_slicedToArray(Object(react.useState)(autoplay),2),useAutoplay=_useState16[0],setUseAutoplay=_useState16[1];Object(react.useEffect)((function(){setUseAutoplay(autoplay),setShowRotationIcon(!autoplay&&showRotationIconOnStartup)}),[autoplay,showRotationIconOnStartup]),Object(react.useEffect)((function(){void 0!==imageInitialIndex&&((imageInitialIndex<0||imageInitialIndex>=imagesCount)&&(setSelectedImageIndex(imageInitialIndex),console.log("ImageInitialIndex of "+imageInitialIndex+" was out of bounds of 0 and count: "+imagesCount)),setSelectedImageIndex(imageInitialIndex))}),[imageInitialIndex,imagesCount]),Object(react.useEffect)((function(){if(useAutoplay){var timer=setTimeout((function(){incrementImageIndex(1)}),1e3/autoplaySpeed);return function(){return clearTimeout(timer)}}}));var incrementImageIndex=function incrementImageIndex(change){var index=moduloWithoutNegative(selectedImageIndex+(reverse?-1:1)*Math.floor(change),imagesCount);setSelectedImageIndex(index)};Object(react.useEffect)((function(){setImageSources(function createImageSources(){for(var baseUrl=imagesBaseUrl.endsWith("/")?imagesBaseUrl:imagesBaseUrl+"/",srces=[],fileType=imagesFiletype.replace(".",""),i=1;i<=imagesCount;i++)srces.push({src:""+baseUrl+(imageFilenamePrefix||"")+i+"."+fileType,index:i.toString()});return srces}())}),[imagesBaseUrl,imagesFiletype,imagesCount,imageFilenamePrefix]);var onMouseUp=function onMouseUp(e){setIsScrolling(!1),shouldNotifyEvents&&(void 0!==e?null==notifyOnPointerUp||notifyOnPointerUp(null==e?void 0:e.clientX,e.clientY):null==notifyOnPointerUp||notifyOnPointerUp(0,0))};return Object(react.useEffect)((function(){if(isScrolling){!function imageIndexWithOffset(start,offset){var index=moduloWithoutNegative(start+(reverse?-1:1)*Math.floor(offset),imagesCount);setSelectedImageIndex(index)}(startingImageIndexOnPointerDown,(currentMousePosition-initialMousePosition)/(1/mouseDragSpeed*(imagesCount*width/100)))}}),[currentMousePosition,imagesCount,startingImageIndexOnPointerDown,initialMousePosition,isScrolling,mouseDragSpeed,width,height,reverse]),Object(jsx_runtime.jsxs)(StyledDiv,{ref:elementRef,isGrabbing:isScrolling,onPointerDown:function onMouseDown(e){setInitialMousePosition(e.clientX),setCurrentMousePosition(e.clientX),setStartingImageIndexOnPointerDown(selectedImageIndex),setUseAutoplay(!1),setIsScrolling(!0),setShowRotationIcon(!1),document.addEventListener("mouseup",(function(){onMouseUp()}),{once:!0}),shouldNotifyEvents&&(null==notifyOnPointerDown||notifyOnPointerDown(e.clientX,e.clientY))},onPointerMove:function onMouseMove(e){isScrolling&&(setCurrentMousePosition(e.clientX),shouldNotifyEvents&&(null==notifyOnPointerMoved||notifyOnPointerMoved(e.clientX,e.clientY)))},children:[showRotationIcon?Object(jsx_runtime.jsx)(icons_StyledRotateIcon,{widthInEm:2,isReverse:reverse}):null,imageSources.map((function(s,index){return Object(jsx_runtime.jsx)(components_AnimationImage_AnimationImage,{src:s.src,width:width,height:height,isVisible:index===selectedImageIndex},index)}))]})};React360Viewer_React360Viewer.displayName="React360Viewer";try{React360Viewer_React360Viewer.displayName="React360Viewer",React360Viewer_React360Viewer.__docgenInfo={description:"",displayName:"React360Viewer",props:{imagesCount:{defaultValue:null,description:"",name:"imagesCount",required:!0,type:{name:"number"}},imagesBaseUrl:{defaultValue:null,description:"",name:"imagesBaseUrl",required:!0,type:{name:"string"}},imagesFiletype:{defaultValue:null,description:"",name:"imagesFiletype",required:!0,type:{name:"string"}},imageFilenamePrefix:{defaultValue:null,description:"",name:"imageFilenamePrefix",required:!0,type:{name:"string"}},imageInitialIndex:{defaultValue:{value:"0"},description:"",name:"imageInitialIndex",required:!1,type:{name:"number"}},mouseDragSpeed:{defaultValue:{value:"20"},description:"",name:"mouseDragSpeed",required:!1,type:{name:"number"}},autoplaySpeed:{defaultValue:{value:"10"},description:"",name:"autoplaySpeed",required:!1,type:{name:"number"}},reverse:{defaultValue:{value:"false"},description:"",name:"reverse",required:!1,type:{name:"boolean"}},autoplay:{defaultValue:{value:"false"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"150"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"150"},description:"",name:"height",required:!1,type:{name:"number"}},showRotationIconOnStartup:{defaultValue:{value:"false"},description:"",name:"showRotationIconOnStartup",required:!1,type:{name:"boolean"}},notifyOnPointerDown:{defaultValue:null,description:"",name:"notifyOnPointerDown",required:!1,type:{name:"((x: number, y: number) => void)"}},notifyOnPointerUp:{defaultValue:null,description:"",name:"notifyOnPointerUp",required:!1,type:{name:"((x: number, y: number) => void)"}},notifyOnPointerMoved:{defaultValue:null,description:"",name:"notifyOnPointerMoved",required:!1,type:{name:"((x: number, y: number) => void)"}},shouldNotifyEvents:{defaultValue:{value:"false"},description:"",name:"shouldNotifyEvents",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/React360Viewer/React360Viewer.tsx#React360Viewer"]={docgenInfo:React360Viewer_React360Viewer.__docgenInfo,name:"React360Viewer",path:"src/components/React360Viewer/React360Viewer.tsx#React360Viewer"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"React360Viewer",component:React360Viewer_React360Viewer,argTypes:{notifyOnPointerDown:{action:"notifyOnPointerDown"},notifyOnPointerMoved:{action:"notifyOnPointerMoved"},notifyOnPointerUp:{action:"notifyOnPointerUp"}}};var React360Viewer_stories_Template=function Template(args){return Object(jsx_runtime.jsxs)("div",{style:{border:"1px solid red",borderRadius:"5px",boxShadow:"5px 5px 5px grey"},children:[Object(jsx_runtime.jsx)(React360Viewer_React360Viewer,Object.assign({},args))," "]})};React360Viewer_stories_Template.displayName="Template";var Standard=React360Viewer_stories_Template.bind({}),baseImageSetting={imagesBaseUrl:"./imageSeries/",imagesCount:36,imagesFiletype:"png",mouseDragSpeed:20};Standard.args=Object.assign({},baseImageSetting,{reverse:!1});var AutoPlayReversed=React360Viewer_stories_Template.bind({});AutoPlayReversed.args=Object.assign({},baseImageSetting,{reverse:!0,autoplay:!0}),AutoPlayReversed.parameters={chromatic:{disableSnapshot:!0}},Standard.parameters=Object.assign({storySource:{source:'(\n  args: React360ViewerProps\n) => {\n  return (\n    <div\n      style={{\n        border: "1px solid red",\n        borderRadius: "5px",\n        boxShadow: "5px 5px 5px grey",\n      }}\n    >\n      <React360Viewer {...args} />{" "}\n    </div>\n  );\n}'}},Standard.parameters),AutoPlayReversed.parameters=Object.assign({storySource:{source:'(\n  args: React360ViewerProps\n) => {\n  return (\n    <div\n      style={{\n        border: "1px solid red",\n        borderRadius: "5px",\n        boxShadow: "5px 5px 5px grey",\n      }}\n    >\n      <React360Viewer {...args} />{" "}\n    </div>\n  );\n}'}},AutoPlayReversed.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/react/node_modules/@storybook/core/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/react/node_modules/@storybook/core/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);