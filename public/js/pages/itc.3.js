!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&rel=0"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});

jQuery(document).ready(function($){

    if (navigator.userAgent.indexOf('Firefox') != -1) {
        $('.root-menu>li>a').css('padding', '14px 8px');
    }
    var $up_arrow = $('#up-arrow'),
    up_arrow_shown = false,
    transitioning = false;

    if ($('#lp-img-container').length > 0) {
        //# Landing Pages
        var $container = $('#lp-img-container'),
        _$image = $('#lp-img-container'),
        _$description = $('#lp-description'),
        $indicators,
        $list = $('#carousel-indicators')
        images_array = LP.config.images,
        index = 0,
        max_index = images_array.length-1,
        interval = LP.config.interval,
        duration = LP.config.duration,
        _interval = null;
        
        //Up side down module. Rearrange items on the page (carusel images description put dowm on mobile device)
        if(window.screen.width <= 768){
            var getDescr, getCarouselControls;
            getDescr = $('#lp-description');
            getCarouselControls = $('.carousel-controls');
            getDescr.insertAfter(getCarouselControls);
        }

		var stickyNavTop = $('.lp-tabs-menu-wrapper').offset().top;
		var footerTop    = $('footer').offset().top;
		var movePoint    = 0;
		var $stickyNav   = $('.lp-tabs-menu-wrapper').clone().addClass('lp-tabs-menu-wrapper-sticky').insertAfter('.lp-tabs-menu-wrapper').css("display","none");
		var $nav_links = $('.nav-link, .side-link');

        //# Landing Pages
        function navigateTo(i){
            transitioning = true;
            $indicators.removeClass('active');
            
            if (i == undefined) i = ++index;
            else index = i;
            
            if (i > max_index) i = index = 0;
            if (i < 0) i = index = max_index;
            
            $container.animate({opacity: 0}, duration);
            setTimeout(function(){
            $indicators.eq(i).addClass('active');
            
            _$image.css({
            backgroundImage: 'url('+images_array[i].src+')'
            });
//            _$description.text(images_array[i].description);
	    if(images_array[i].alt) {
	            _$image.attr('title', images_array[i].alt);
	    } else {
	            _$image.attr('title', '');
	    }
            
            $container.animate({opacity: 1}, duration);
            }, duration, function(){transitioning = false;});
        }

        // setup indicators based on images array length
        function renderIndicators(max){
            var indicators_str = '<li data-slide="0" class="active"></li>';
            for(var pic = 1; pic < max; pic++){
                indicators_str += '<li data-slide="'+pic+'"></li>';
            }
            $list.html(indicators_str);
            $indicators = $list.children();
        }

        // init calls
        renderIndicators(max_index+1);
        _interval = setInterval(navigateTo, interval);
        _$image.css({ backgroundImage: 'url('+images_array[0].src+')' });
	    if(images_array[0].alt) {
	            _$image.attr('title', images_array[0].alt);
	    } else {
	            _$image.attr('title', '');
	    }
        
        $indicators.on('click', function() {
            var el = $(this);
            if(!el.hasClass('active')) {
                clearInterval(_interval);
                navigateTo(Number(el.data('slide')));
                _interval = setInterval(navigateTo, interval);
            }
        });

        $container.hover( 
            function(e) {
                clearInterval(_interval);
            }, 
            function(e) {
                _interval = setInterval(navigateTo, interval);
        });

        $nav_links.on('click touchstart', function(e) {
            e.preventDefault();
            var id = $(this).attr('href');
            $('html, body').stop().animate({scrollTop: $(id).offset().top-50}, 1000);
            return false;
        });

        // if Mobile device
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            var carousel = document.getElementById('lp-main-carousel');
            
            (function(d){
                var ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
                nm=true,sp={x:0,y:0},ep={x:0,y:0},
                touch={
                    touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
                    touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
                    touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
                    touchcancel:function(e){nm=false}
                };
                for(var a in touch){d.addEventListener(a,touch[a],false);}
            })(document);
            
            function hr(e){
                clearInterval(_interval);
                navigateTo(--index);
                _interval = setInterval(navigateTo, interval);
            };
            
            function hl(e){
                clearInterval(_interval);
                navigateTo(++index); 
                _interval = setInterval(navigateTo, interval);
            };
            
            carousel.addEventListener('swl',hl,false);
            carousel.addEventListener('swr',hr,false);
        };

        $('.youtube-video-cover').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
$('#youtube-video').wrap( "<div class='youtube-video-placeholder'></div>" );
var videoheight = $('#youtube-video').css('height');
$('.youtube-video-placeholder').css('min-height',videoheight);

		var fnStickyNav = function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= stickyNavTop) { 
				if ($stickyNav.is(':hidden')) {
					$stickyNav.show();
					if (screen.width > 880) {
						$stickyNav.find('#btnShopNow').fadeIn();
						$('.lp-menu').addClass('lp-menu-sticky');
						$('.lp-main').addClass('lp-main-sticky');
					}
				}
				if (screen.width > 880 && $('#documentation').length) {
					var docSection = $('#documentation').offset().top;
					movePoint = $(window).scrollTop();
					if (movePoint > 0 && movePoint >= docSection) {
						$('.lp-menu-sticky').css('position', 'absolute');
						$('.lp-menu-sticky').css('top', docSection + 30);
					} else {
						$('.lp-menu-sticky').css('position', '');
						$('.lp-menu-sticky').css('top', 80);
					}
				}
			} else {
				if ($stickyNav.is(':visible')) {
					if (screen.width > 880) {
						$stickyNav.find('#btnShopNow').fadeOut();
						$('.lp-menu').removeClass('lp-menu-sticky'); 
						$('.lp-main').removeClass('lp-main-sticky');
					}
					$stickyNav.hide();
				}
			}

			$('.lp-section').each(function() {
				var target = $(this).offset().top;
				var id = $(this).attr('id');
				if ((scrollTop + 52) >= target) {
					$stickyNav.find('.lp-tabs-menu-item').removeClass('lp-tabs-menu-active');
					$stickyNav.find('a[href=#' + id + ']').parent().addClass('lp-tabs-menu-active');
				}
			});
			
			if (screen.width > 880 && $('#youtube-video').length) {
				if (isScrolledIntoView('#youtube-video', 5)) {
					startPlayer();
				}
					if (isScrolledIntoView('#overview', 400)) {
						$('#youtube-video').removeClass('youtube-video-container-float');
						$('#youtube-video').css('left', '');
					} else {
						if (scrollTop >= stickyNavTop) {
							$('#youtube-video').addClass('youtube-video-container-float');
							if ($stickyNav.is(':visible')) {
								var position = $('.lp-menu').position().left;
								if (isScrolledIntoView('.f-footer', 10)) {
									position = 0;
								}
								$('#youtube-video').css('left', position);
							}
						}
					}
			}
		};

		fnStickyNav();
		$(window).scroll(function() {
		  fnStickyNav();
		});
    } //# end Landing Pages

    $up_arrow.on('click', function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    window.onscroll = function(){
        if(window.pageYOffset > 100){
            if(!up_arrow_shown){
                $up_arrow.fadeIn();
                up_arrow_shown = true;
            }
        }else{
            if (up_arrow_shown) {
                $up_arrow.fadeOut();
                up_arrow_shown = false;
            };
        }
    };

    $('.root-menu > li > a').on('click', function(e){
        e.preventDefault();
        $('.root-menu li').removeClass('active');
        $(this).parent().addClass('active');
    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $('#shop-link').on('touchstart click', function(e){
            e.preventDefault();
            e.stopPropagation();
            $('.dropdown').children('.sub-menu').stop().slideUp(200);
            $('#shop-menu').slideToggle();
        });
    } else {
        $('#shp')
            .hover(
                function(){
                    $('#shop-link').addClass('h-amenu-active');
                    $(this)
                    .children('.root-menu')
                    .stop()
                .slideDown(200);
                },
                function(){
                    $('#shop-link').removeClass('h-amenu-active');
                    $(this)
                    .children('.root-menu')
                    .stop()
                    .slideUp(200);
                }
            )
            .on('click', function(e){
                if ($(e.target).hasClass('h-amenu') || e.target.tagName.toLowerCase() == 'img') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        );
    }

	
	$('.dropdown').hover(
        function(){
            $(this).addClass('h-amenu-active').children('.sub-menu').stop().slideDown(200);
        },
        function(){
            $(this).removeClass('h-amenu-active').children('.sub-menu').stop().slideUp(200);
        })
        .on('touchstart click', function(e){
            if(!$(e.target).hasClass('menu-link')) {
                e.preventDefault();
                e.stopPropagation();
                $('#shop-menu').stop().slideUp(200);
                $('.dropdown').children('.sub-menu').stop().slideUp(200);
                //$(this).children('.sub-menu').slideToggle(200);
                $(this).children('.sub-menu').stop().slideDown(200);
            }
        }
    );

    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.search-comp-popup').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.popup-youtube').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
    });
    
    $('.godaddy').on('touchstart click', function(e) {
        e.preventDefault();
        var bgHeight = "740";
        var bgWidth = "606";
        var url = "https://seal.godaddy.com/verifySeal?sealID=5Qw3hJFLhV0rbS0z8PTqxN7g33HHPnP9hbyddNxQYXC4TZzhlQ5LCacffj";
        window.open(url, 'SealVerfication', 'location=yes,status=yes,resizable=yes,scrollbars=no,width=' + bgWidth + ',height=' + bgHeight);
    });

    $('.ns-secure').on('touchstart click', function(e){
        e.preventDefault();
        var bgHeight = "600";
        var bgWidth = "600";
        var url = "http://seals.nsprotectsafe.com/hg_mouse_click?id=3154&d=www.itcreations.com";
        window.open(url,'3154','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no, width=' + bgWidth + ',height=' + bgHeight);
    });

    if ($('.lp-comments-box').length > 0) {
        var sPath = '';
        if ($('#lp-img-container').length > 0) {
            //# Landing Pages
            sPath = '../';
        }
        $.ajax({
            url: sPath + 'testimonials/handler.php',
            type: 'GET',
            success: function(data){
                $('.lp-comments-box').html(data);
            },
            error: function(jqXHR, status, msg){
                var err ='<p style="color:red">Something went wrong while processing the request.<br>Please, try again later.</p>';
                $('.lp-comments-box').html(err);
                console.log('Status:' + status);
                console.log('Response message:' + msg);
            }
        });
    }

		//perform ajax form submitting.
		$('.lp-main form').on('submit', function(event){
			event.preventDefault();
			var $form = $(this);
			$form.find('input').removeAttr('style');
			var name = $form.find('input[name=name]').get(0);
			var email = $form.find('input[name=email]').get(0);

			//front-end validation
			var result = checkValidity(name, email);
			var reqFailMsg = 'We are sorry but something goes wrong while processing your request. Please try again later or <a href=" http://www.itcreations.com/contact.asp">contact us</a> directly by email, phone or live chat.';
			var valFailMsg = '<i>Please see below and fill out all highlighted fields.</i>';
			
			if (result.length == 0) {
				var userData = $form.serialize();
				userData += '&model=' + encodeURIComponent($('title').text().split('|')[0]);
				$.ajax({
					url: '../mail-sender/mailsender.php',
					type: 'POST',
					data: userData,
					success: function(data){
						var response = JSON.parse(data);
						if (response.status == 'error') {
							switch(response.errorInfo){
								case 'validation':
									$.each(response.data, function(index, val){
										$form.find('input[name='+ val +']').css({'border':'1px solid red'});
									});
									showMessage(response.message, response.status);
									break;
								case 'server':
									$form.slideUp();
									showMessage(response.message, response.status);
									break;
							}
						}else if(response.status == 'success'){
							$form.slideUp();
							showMessage(response.message, response.status);
						}
					},
					error: function(){
						$form.slideUp();
						showMessage(valFailMsg, reqFailMsg);
					},
					beforeSend: function(){
						$form.animate({'opacity': 0.5});
					},
					complete: function(){
						$form.animate({'opacity' : 1});
					}
				});
			}else{
				$.each(result, function(index, val) {
					 val.style.border = '1px solid red';
				});
				showMessage(valFailMsg, 'error');				
			}
		});

		function checkValidity(name, email){
			var arrErrors = [];
			if ( !name.value.trim().length ) {
				arrErrors.push(name);
			};
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			if( !re.test(email.value) ){
				arrErrors.push(email);
			} 
			return arrErrors;
		}

		function showMessage(message, type){
			$('.ajaxContainer').html('<span class="' + type + '">' + message + '</span>').show();
		}

    // RMA Form
    $('#btnSubmit').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if($("input[name='contact']").val() == '') {
            alert("Please specify Contact person!");
            $("input[name='contact']").focus();
            return(false);
        }
        if($("input[name='phone']").val() == '') {
            alert("Please specify contact Phone!");
            $("input[name='phone']").focus();
            return(false);
        }
        if($("input[name='email']").val() == '') {
            alert("Please specify Email address!");
            $("input[name='email']").focus();
            return(false);
        }
        if(!isEmail($("input[name='email']").val())) {
            alert("Please specify real Email address!");
            $("input[name='email']").focus();
            return(false);
        }
        if($("input[name='invoice_1']").val() == '' && $("input[name='invoice_2']").val() == '' && $("input[name='invoice_3']").val() == '') {
            alert("Please enter Invoice / PO!");
            $("input[name='invoice_1']").focus();
            return(false);
        }
        if($("input[name='partnumber_1']").val() == '' && $("input[name='partnumber_2']").val() == '' && $("input[name='partnumber_3']").val() == '') {
            alert("Please enter Part Number!");
            $("input[name='partnumber_1']").focus();
            return(false);
        }
        if($("input[name='serial_1']").val() == '' && $("input[name='serial_2']").val() == '' && $("input[name='serial_3']").val() == '') {
            alert("Please enter Serial Number!");
            $("input[name='serial_1']").focus();
            return(false);
        }
        if($("textarea[name='problem0']").val() == '') {
            alert("Please shortly describe Problem!");
            $("textarea[name='problem0']").focus();
            return(false);
        }
        var retVal = false;
        for (var i=0; i<$("input[name='rma_type']").length; i++) {
              if ($("input[name='rma_type']")[i].checked) { retVal = true; }
        }
        if (!retVal) {
            alert("Please specify RMA TYPE!");
            return(false);
        }
        if($("input[name='u_name']").val() == '') {
            alert("Please specify Your Name!");
            $("input[name='u_name']").focus();
            return(false);
        }
        $('#rmaSubmit').html('<div class="spinner-loader">Loading…</div> Please wait...');
        $('#rmaForm').submit();
        return (false);
    });
    
    
    function isEmail (s)
    {      
        // there must be >= 1 character before @, so we
        // start looking at character position 1 
        // (i.e. second character)
        var i = 1;
        var sLength = s.length;
    
        // look for @
        while ((i < sLength) && (s.charAt(i) != "@"))
        { i++
        }
    
        if ((i >= sLength) || (s.charAt(i) != "@")) return false;
        else i += 2;
    
        // look for .
        while ((i < sLength) && (s.charAt(i) != "."))
        { i++
        }
    
        // there must be at least one character after the .
        if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
        else return true;
    }
	
	function isScrolledIntoView(elem, elemHeight)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		if (elemHeight == 0 || elemHeight === null) {
			elemHeight = $(elem).height();
		}
		var elemBottom = elemTop + elemHeight;

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	
	function isContainerHeightAvailable(elem) {
		var elemHeight = $(elem).height();
		console.log(elemHeight);
		return isScrolledIntoView(elem, elemHeight);
	}
    
    if ($('#rma-plus').length) {
        $('#rma-plus').on('touchstart click', function(){
            if (!$('#rma-prod-2').is(":visible")) {
                $('#rma-prod-2').slideDown(200);
                return false;
            }
            if (!$('#rma-prod-3').is(":visible")) {
                $('#rma-prod-3').slideDown(200);
                $(this).hide();
                return false;
            }
        });
    }
    
    
    if ($('#carttop').length) {
        var sPath = '';
        if ($('#lp-img-container').length > 0 || $('#lp-models-page').length > 0) {
            //# Landing Pages
            sPath = '../';
        }
        $.ajax({
            url: sPath + "dyn_cart.asp",
            type: "get",
            dataType: "html",
            data: {action: 'carttop'},
            success: function(returnData){
                $("#carttop").html(returnData);
            },
            error: function(e){
                console.log(e);
            }
        });
    }
    
	//buy-now.asp
    if ($('button#btn-now-submit').length) {
        $('button#btn-now-submit').on('touchstart click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $btn = $(this);
            var $frm = $('#frmAuthNet');
            $btn.html('Submitting...');
            $btn.attr('disabled', 'disabled');
            $.ajax({
                url: window.location.protocol + "//" + window.location.host.replace('\/', '') + "/" + window.location.pathname.replace('\/', ''),
                data: {
                    action: 's'
                    , qid: $('#x_qid').val()
                },
                type: "POST",
                dataType: "html",
                complete: function (data) {
                    $frm.submit();
                }
            })
        })
    }

	var timer;
	var space = '  ';
	var pos = 0;
	var origTitle = document.title;
	var animatedTitle = "IT Creations - Custom Configured for You!";

	function animateTitle(newTitle) {
	  timer = setInterval(startAnimation, 500);

	  function startAnimation() {
		document.title = animatedTitle.substring(pos, animatedTitle.length) + space + animatedTitle.substring(0,pos);
		pos++;
		if (pos > animatedTitle.length) pos = 0;
	  }
	}

	function restoreTitle() {
	  clearInterval(timer);
	  document.title = origTitle;
	}

	$(window).blur(function() {
		animateTitle();
	});

	$(window).focus(function() {
		restoreTitle();
	});

});