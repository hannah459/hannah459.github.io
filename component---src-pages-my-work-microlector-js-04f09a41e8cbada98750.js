(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7l8W":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("ARW8"),s=a.n(n),o=function(e){var t="Paragraph"===e.variant?s.a.paragraph:s.a.pageContent;return i.a.createElement("div",{className:t})};o.defaultProps={variant:"PageContent"},t.a=o},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,A=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var T=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(A.has(e.target)){var t=A.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),A.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),A.set(e,t)),function(){a.unobserve(e),A.delete(e)}},F=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},J=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(B,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},B=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,A=e.itemProp,w=e.loading,L=e.draggable,T=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:T?1:0,transition:z?"opacity "+b+"ms":"none"},o),C="boolean"==typeof E?"lightgray":E,G={transitionDelay:b+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&G,{},o,{},f),Q={title:t,alt:this.state.isVisible?"":a,style:O,className:m,itemProp:A};if(p){var x=p,K=g(p);return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(K.srcSet)},d.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/K.aspectRatio+"%"}}),C&&d.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&G)}),K.base64&&d.default.createElement(J,{ariaHidden:!0,src:K.base64,spreadProps:Q,imageVariants:x,generateSources:I}),K.tracedSVG&&d.default.createElement(J,{ariaHidden:!0,src:K.tracedSVG,spreadProps:Q,imageVariants:x,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,v(x),d.default.createElement(B,{alt:a,title:t,sizes:K.sizes,src:K.src,crossOrigin:this.props.crossOrigin,srcSet:K.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:F((0,l.default)({alt:a,title:t,loading:w},K,{imageVariants:x}))}}))}if(h){var j=h,N=g(h),q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},C&&d.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},z&&G)}),N.base64&&d.default.createElement(J,{ariaHidden:!0,src:N.base64,spreadProps:Q,imageVariants:j,generateSources:I}),N.tracedSVG&&d.default.createElement(J,{ariaHidden:!0,src:N.tracedSVG,spreadProps:Q,imageVariants:j,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,v(j),d.default.createElement(B,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:F((0,l.default)({alt:a,title:t,loading:w},N,{imageVariants:j}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:R,sizes:C,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var G=z;t.default=G},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},hjWL:function(e,t,a){e.exports=a.p+"static/mockupMicroLector-7569d80684e92f286a399bc3d398d331.png"},m7mE:function(e,t){e.exports="data:image/png;base64,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"},q1mH:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("9eSz"),s=a.n(n),o=a("nZsQ"),l=a.n(o),d=a("7l8W"),c=function(e){var t=e.title,a=e.subTitle,r=e.children,n=e.mockupImage,o=e.colors,c=e.fontImage,u=e.designFluidImages,f=e.hasSecondaryBackgroundColor?l.a.secondaryBackgroundColor:l.a.primaryBackgroundColor;return i.a.createElement("div",null,i.a.createElement("div",{className:f},i.a.createElement("img",{src:n,alt:"",className:l.a.pageHeadingImage})),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:l.a.pageMainContentSection},i.a.createElement("div",{className:l.a.pageMainContent},i.a.createElement(d.a,null),i.a.createElement("div",null,i.a.createElement("div",{className:l.a.projectTitle},t),i.a.createElement("div",{className:l.a.projectSubTitle},a)),i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",{className:l.a.projectText},r,i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",{className:l.a.projectDetailsRow},i.a.createElement("div",{className:l.a.projectDetailsLabel},"Main color:"),i.a.createElement("div",null,o.map((function(e,t){return i.a.createElement("span",{key:t,className:l.a.projectDetailsColorBox,style:{backgroundColor:e}})})))),i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",{className:l.a.projectDetailsRow},i.a.createElement("div",{className:l.a.projectDetailsLabel},"Fonts:"),i.a.createElement("img",{src:c,alt:""})),i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",null,"Full page:"),i.a.createElement(d.a,{variant:"Paragraph"}))))),i.a.createElement("div",{className:l.a.projectImageContainer},u.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(s.a,{fluid:e,alt:""}),i.a.createElement(d.a,null))}))))};c.defaultProps={hasSecondaryBackgroundColor:!1},t.a=c},qtpp:function(e,t,a){"use strict";a.r(t);var r=a("riUV"),i=a("q1tI"),n=a.n(i),s=a("7l8W"),o=a("hjWL"),l=a.n(o),d=a("m7mE"),c=a.n(d),u=a("q1mH");t.default=function(){var e=r.data.microLector;return n.a.createElement(u.a,{title:"MicroLector",subTitle:"Education Application Website",children:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"This is the website of an education application -",n.a.createElement("strong",null," MicroLector ")," by ",n.a.createElement("strong",null," David Schreg "),"(Switzerland). Link: ",n.a.createElement("a",{style:{color:"#00a28a"},href:"https://microlector.com"},"https://microlector.com")),n.a.createElement(s.a,{variant:"Paragraph"}),n.a.createElement("div",null,"The original website is still simple and basic, therefore, I create an updated version for this existing website. Service logos and details, as well as attractive information (such as expert name and quote, special offer), have been added.")),mockupImage:l.a,colors:["#0daeac","#153867","#f3e500","#2e2b2b","#ffffff"],fontImage:c.a,designFluidImages:[e.childImageSharp.fluid]})}},riUV:function(e){e.exports=JSON.parse('{"data":{"microLector":{"id":"ab0162f4-e3f1-5ac2-8056-e6dfaf4d6812","childImageSharp":{"id":"5d9f2b9d-d17c-5681-a52e-dc40bc191c34","fluid":{"base64":"data:image/png;base64,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","aspectRatio":0.352854692477334,"src":"/static/16f9d2f5da9d27280fe505759c79121f/6050d/microLector.png","srcSet":"/static/16f9d2f5da9d27280fe505759c79121f/37d5a/microLector.png 300w,\\n/static/16f9d2f5da9d27280fe505759c79121f/8c332/microLector.png 600w,\\n/static/16f9d2f5da9d27280fe505759c79121f/6050d/microLector.png 1200w,\\n/static/16f9d2f5da9d27280fe505759c79121f/69278/microLector.png 1800w,\\n/static/16f9d2f5da9d27280fe505759c79121f/1f96e/microLector.png 2400w,\\n/static/16f9d2f5da9d27280fe505759c79121f/4e88d/microLector.png 2880w","sizes":"(max-width: 1200px) 100vw, 1200px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-my-work-microlector-js-04f09a41e8cbada98750.js.map