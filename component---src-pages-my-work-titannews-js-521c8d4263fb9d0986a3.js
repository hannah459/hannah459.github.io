(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7l8W":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("ARW8"),s=a.n(n),o=function(e){var t="Paragraph"===e.variant?s.a.paragraph:s.a.pageContent;return i.a.createElement("div",{className:t})};o.defaultProps={variant:"PageContent"},t.a=o},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,A=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(A.has(e.target)){var t=A.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),A.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),A.set(e,t)),function(){a.unobserve(e),A.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(L,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},L=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,A=e.itemProp,E=e.loading,I=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:N?1:0,transition:V?"opacity "+v+"ms":"none"},o),k="boolean"==typeof b?"lightgray":b,R={transitionDelay:v+"ms"},q=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&R,{},o,{},f),z={title:t,alt:this.state.isVisible?"":a,style:q,className:p,itemProp:A};if(m){var D=m,j=g(m);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),k&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&R)}),j.base64&&d.default.createElement(P,{ariaHidden:!0,src:j.base64,spreadProps:z,imageVariants:D,generateSources:O}),j.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,src:j.tracedSVG,spreadProps:z,imageVariants:D,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(D),d.default.createElement(L,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:E,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,l.default)({alt:a,title:t,loading:E},j,{imageVariants:D}))}}))}if(h){var H=h,U=g(h),x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},n);return"inherit"===n.display&&delete x.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},k&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},V&&R)}),U.base64&&d.default.createElement(P,{ariaHidden:!0,src:U.base64,spreadProps:z,imageVariants:H,generateSources:O}),U.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,src:U.tracedSVG,spreadProps:z,imageVariants:H,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(H),d.default.createElement(L,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:E,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,l.default)({alt:a,title:t,loading:E},U,{imageVariants:H}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:C,sizes:k,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([k,c.default.arrayOf(k)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=V;t.default=R},CIM6:function(e,t,a){"use strict";a.r(t);var r=a("gQLu"),i=a("q1tI"),n=a.n(i),s=a("7l8W"),o=a("Es/+"),l=a.n(o),d=a("Qd8G"),c=a.n(d),u=a("q1mH");t.default=function(){var e=r.data.titanNews;return n.a.createElement(u.a,{title:"TitaNews",subTitle:"Newspaper Website",children:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"Designing the homepage of an online newspaper is a big challenge for alignment and arrangement due to a huge amount of content."),n.a.createElement(s.a,{variant:"Paragraph"}),n.a.createElement("div",null,"The content is arranged clean and clear as much as possible for users to follow the breaking news on the top, as well as related content by categories below. There is also an Offer section for advertisement and Gallery for videos and photos.")),mockupImage:l.a,colors:["#9f0101","#2b2727","#ffffff"],fontImage:c.a,designFluidImages:[e.childImageSharp.fluid],hasSecondaryBackgroundColor:!0})}},"Es/+":function(e,t,a){e.exports=a.p+"static/mockupTitanNews-aca7f9f5f49e24ac9aa24462dd5752fe.png"},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Qd8G:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAATCAYAAADYk/BwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASTSURBVHgB5VhNdts2EB5A6rryCcqcIOoJSrndV3badeQThH49gOQThDmBrX1aK/s0ok8Q+QThDaKsY2EyAwxIkCIpxo4XeZn3QBJ/8wfM4AMVECXTOIJ92qarbAuPQMnp8Qd6RaDNJH2dZfCd0NA+tf7Q1ElG8SunkoExF+S8HH5g0rX6LZWboHA9ojJjh54/i5/Dd0jJyWRtyzQewwNoWKlpk9TDwoao1i/pc4qoU6q/eazwfDRSKrbvAY7gAaQPDbChZ8wZfbKDRuS4GfygNOwziHdS8uw4A4QpVZ/W+2m3sRNfAKopKFo9VFt6b/rkOZob08rPqUTS1JkfS1kYB3NIllqmq/9XwbixHRcSqjnlYU4lN+l/76469UDM6XsZjju4s/YI4VNNyFgOiAU5iHOConcEkudIuXkrrx0pp/VawoRDpJzHytdIUsJ7J8vOUTJvChqvq7KGI8vLFdHdzuH6bxW+p8eXNT1G8n3JJ7dHC72cZQcjuOSoaBWryl9b5givaEcc0UpEVI6o7UKGLZoMd7ysQhcy74jeT6judgfxtbsoJDaIHaoU79ongSyfJhZkXMJD09XbjPoUl3I+QRXXdhY4ai4OzIk/94e65CLvspezrMKDwTW4Vef8lQXKz317ev0uCRM/CVxYBzqntO2uCx7n53XlRzJqVuiw203CMJVQ8Ysz33Nyu20R8C51Op6nr99mBU+ny8TqQovKC1511m7wsjhmbfn9PSn8keJ3bCcZc1LLJbE3ulEbNAtRJP7n9PiXvX4dOL5UcktOXkq1zI+oHGxBaDyNyWEpeCfDIIY+pHUsvDfpv2W+C3TJC120fl51FuccDo2ioMclV3bbr7IwBH2OAerbNOkiRuX8vQOYQF/yoY5qXNGNaWBWrfMQ39i3xn54ig8J93EDPXSpOsuoExurvvgwooENq1ls9dCJ+wqpHO5LqoKLHoSRuuVAO25Uaut1qTpruOP7YO6LhBHDgLFPnE3UmSP0A4xEFRpxGAhr9TPch7BDR5QFI106E7zspldSrSROyV3egHGHMNenTQ79KbJPZUqYomSHGt0RYiqSjxz6EGNBS/i0dUyBAsynw9DBmDJxal3dXZQY7ZuSX9NUOcGY8sa/C0ZH0EzCT5X5yecjxD8bZVl4Iwtj9g+ORjJDp79S49boUCDy1FWf6w47yp92LypMUfn2Wf2SLceyhwzLFvbz+u8hwT2uzQTJ3C8aH+M1oCuofi3Vqwb07+p3g1HVNoIKqDKwIHSwrjss0CVneKKkEW1vx/+l4h8UyaCJ50H7ArxTEDMyhk8WhglTcEmZrxZxCy+3Y908ypEYFZdewWBQdQqj+8tA1gY8gndvi43qziIIROjcnnzcnlG5FajhgfUaPIbzoBgFGTjIxDw3/a87RnvUm4S/OsSgMyvIMfeI2Bsct7HUP5EBiEuZNyuUAzivO8rKWmUEYTRDkFsZm4SyyKhfG++UuHP6+etUgN8K8Ml6uP7EFsf/xjuKxyr4hpT8TU5EupPd3eVf86PQbv/hkFbybgufIe/zC+hec/76I+4af4jnF72eb7Ae9UwoAAAAAElFTkSuQmCC"},gQLu:function(e){e.exports=JSON.parse('{"data":{"titanNews":{"id":"4e02101f-4ee3-578f-a434-6dfe50c913ec","childImageSharp":{"id":"7c59e3d4-9c1e-529d-a4c2-dc3ea2dce2f8","fluid":{"base64":"data:image/png;base64,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","aspectRatio":0.43530834340991537,"src":"/static/45b9a0b227e43d16eb1217bef21050ba/6050d/titanNews.png","srcSet":"/static/45b9a0b227e43d16eb1217bef21050ba/37d5a/titanNews.png 300w,\\n/static/45b9a0b227e43d16eb1217bef21050ba/8c332/titanNews.png 600w,\\n/static/45b9a0b227e43d16eb1217bef21050ba/6050d/titanNews.png 1200w,\\n/static/45b9a0b227e43d16eb1217bef21050ba/69278/titanNews.png 1800w,\\n/static/45b9a0b227e43d16eb1217bef21050ba/1f96e/titanNews.png 2400w,\\n/static/45b9a0b227e43d16eb1217bef21050ba/4e88d/titanNews.png 2880w","sizes":"(max-width: 1200px) 100vw, 1200px"}}}}}')},q1mH:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("9eSz"),s=a.n(n),o=a("nZsQ"),l=a.n(o),d=a("7l8W"),c=function(e){var t=e.title,a=e.subTitle,r=e.children,n=e.mockupImage,o=e.colors,c=e.fontImage,u=e.designFluidImages,f=e.hasSecondaryBackgroundColor?l.a.secondaryBackgroundColor:l.a.primaryBackgroundColor;return i.a.createElement("div",null,i.a.createElement("div",{className:f},i.a.createElement("img",{src:n,alt:"",className:l.a.pageHeadingImage})),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:l.a.pageMainContentSection},i.a.createElement("div",{className:l.a.pageMainContent},i.a.createElement(d.a,null),i.a.createElement("div",null,i.a.createElement("div",{className:l.a.projectTitle},t),i.a.createElement("div",{className:l.a.projectSubTitle},a)),i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",{className:l.a.projectText},r,i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",{className:l.a.projectDetailsRow},i.a.createElement("div",{className:l.a.projectDetailsLabel},"Main color:"),i.a.createElement("div",null,o.map((function(e,t){return i.a.createElement("span",{key:t,className:l.a.projectDetailsColorBox,style:{backgroundColor:e}})})))),i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",{className:l.a.projectDetailsRow},i.a.createElement("div",{className:l.a.projectDetailsLabel},"Fonts:"),i.a.createElement("img",{src:c,alt:""})),i.a.createElement(d.a,{variant:"Paragraph"}),i.a.createElement("div",null,"Full page:"),i.a.createElement(d.a,{variant:"Paragraph"}))))),i.a.createElement("div",{className:l.a.projectImageContainer},u.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(s.a,{fluid:e,alt:""}),i.a.createElement(d.a,null))}))))};c.defaultProps={hasSecondaryBackgroundColor:!1},t.a=c}}]);
//# sourceMappingURL=component---src-pages-my-work-titannews-js-521c8d4263fb9d0986a3.js.map