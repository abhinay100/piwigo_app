/*BEGIN header */

/*BEGIN ./plugins/AdminTools/template/mousetrap.min.js */
/* mousetrap v1.4.6 craig.is/killing/mice */
(function(J,r,f){function s(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(u=!1)}function C(a,b,d,c,e,v){var g,k,f=[],h=d.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!c&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||d.metaKey||d.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==v;(!c&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,d,c){m.stopCallback(b,b.target||b.srcElement,d,c)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?
b.stopPropagation():b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,d,c){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(d,b,a);"keyup"!==c&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(c||E(b[g+1]).action);F(b[g],f,c,a,g)}}function E(a,b){var d,
c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],G[c]&&(c=G[c]),b&&"keypress"!=b&&H[c]&&(c=H[c],f.push("shift")),w(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[d]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function F(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,d):(d=E(a,d),l[d.key]=l[d.key]||[],C(d.key,d.modifiers,{type:d.action},
c,a,e),l[d.key][c?"unshift":"push"]({callback:b,modifiers:d.modifiers,action:d.action,seq:c,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)F(a[c],b,d);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,d){var c=C(a,b,d),e;b={};var f=0,g=!1;for(e=0;e<c.length;++e)c[e].seq&&(f=Math.max(f,c[e].level));for(e=0;e<c.length;++e)c[e].seq?c[e].level==f&&(g=!0,
b[c[e].seq]=1,x(c[e].callback,d,c[e].combo,c[e].seq)):g||x(c[e].callback,d,c[e].combo);c="keypress"==d.type&&I;d.type!=u||w(a)||c||t(b);I=g&&"keydown"==d.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);

/*BEGIN ./plugins/AdminTools/template/public_controller.js */
var AdminTools=function($){var __this=this;this.urlWS;this.urlSelf;this.multiView;var $ato=$('#ato_header'),$ato_closed=$('#ato_header_closed'),ato_height=28;function moveBody(dir,anim){var operator=dir=='show'?'+=':'-=';if(anim){$('body').animate({'margin-top':operator+ato_height});if($('#the_page, [data-role="page"]').css('position')=='absolute'){$('#the_page, [data-role="page"]').animate({'top':operator+ato_height});}}
else{$('body').css({'margin-top':operator+ato_height});if($('#the_page, [data-role="page"]').css('position')=='absolute'){$('#the_page, [data-role="page"]').css({'top':operator+ato_height});}}}
function populateMultiView(){var $multiview=$ato.find('.multiview');if($multiview.data('init'))return;var render=function(data){var html='';$.each(data.users,function(i,user){html+='<option value="'+user.id+'">'+user.username+'</option>';});$multiview.find('select[data-type="view_as"]').html(html).val(__this.multiView.view_as);html='';$.each(data.themes,function(i,theme){html+='<option value="'+theme+'">'+theme+'</option>';});$multiview.find('select[data-type="theme"]').html(html).val(__this.multiView.theme);html='';$.each(data.languages,function(i,language){html+='<option value="'+language.id+'">'+language.name+'</option>';});$multiview.find('select[data-type="lang"]').html(html).val(__this.multiView.lang);$multiview.data('init',true);$multiview.find('.switcher').show();};if('sessionStorage'in window&&window.sessionStorage.multiView!=undefined){render(JSON.parse(window.sessionStorage.multiView));}
else{$.ajax({method:'POST',url:__this.urlWS+'multiView.getData',dataType:'json',success:function(data){render(data.result);if('sessionStorage'in window){window.sessionStorage.multiView=JSON.stringify(data.result);}},error:function(xhr,text,error){alert(text+' '+error);}});}}
this.deleteCache=function(){if('sessionStorage'in window){window.sessionStorage.removeItem('multiView');}};this.initMobile=function(){var $headerbar=$('div[data-role="header"] .title');if($headerbar.length==1){$ato_closed.addClass('smartpocket');$ato_closed.find('a').attr({'data-iconpos':'notext','data-role':'button'});$headerbar.prepend($ato_closed);}};this.init=function(open){$('body').prepend($ato);$ato.show();ato_height=$ato.height();if('localStorage'in window){if(window.localStorage.ato_panel_open==null){window.localStorage.ato_panel_open=open;}
if(window.localStorage.ato_panel_open==1){moveBody('show',false);}
else{$ato.hide();$ato_closed.show();}}
else{$ato.show();moveBody('show',false);}
$ato.find('.parent').on({'click':function(){if($(this).hasClass('multiview')){populateMultiView();}
$(this).find('ul').toggle();},'mouseleave':function(e){if(e.target.tagName.toLowerCase()!="select"){$(this).find('ul').hide();}}});$ato.find('.parent>a').on('click',function(e){e.preventDefault();});$ato.find('.parent ul').on('mouseleave',function(e){if(e.target.tagName.toLowerCase()!="select"){$(this).hide();}});$ato.find('.switcher').on({'change':function(){window.location.href=__this.urlSelf+'ato_'+$(this).data('type')+'='+$(this).val();},'click':function(e){e.stopPropagation();}});$ato.find('.close-panel').on('click',function(e){$ato.slideUp();$ato_closed.slideDown();moveBody('hide',true);if('localStorage'in window)window.localStorage.ato_panel_open=0;e.preventDefault();});$ato_closed.on('click',function(e){$ato.slideDown();$ato_closed.slideUp();moveBody('show',true);if('localStorage'in window)window.localStorage.ato_panel_open=1;e.preventDefault();});};this.initRepresentative=function(image_id,category_id){$ato.find('.set-representative').on('click',function(e){if(!$(this).parent().hasClass('disabled')){$(this).parent().addClass('disabled')
$.ajax({method:'POST',url:__this.urlWS+'pwg.categories.setRepresentative',dataType:'json',data:{image_id:image_id,category_id:category_id},success:function(){$ato.find('.saved').fadeIn(200).delay(1600).fadeOut(200);},error:function(xhr,text,error){alert(text+' '+error);}});}
e.preventDefault();});};this.initCaddie=function(image_id){$ato.find('.add-caddie').on('click',function(e){if(!$(this).parent().hasClass('disabled')){$(this).parent().addClass('disabled')
$.ajax({method:'POST',url:__this.urlWS+'pwg.caddie.add',dataType:'json',data:{image_id:image_id},success:function(){$ato.find('.saved').fadeIn(200).delay(1600).fadeOut(200);},error:function(xhr,text,error){alert(text+' '+error);}});}
e.preventDefault();});};this.initQuickEdit=function(is_picture,tokeninput_lang){var $ato_edit=$('#ato_quick_edit');function bgColor(){var bg_color='white';var selectors=['#the_page #content','[data-role="page"]','body'];for(var i=0;i<selectors.length;i++){var color=$(selectors[i]).css('background-color');if(color&&color!='transparent'){bg_color=color;break;}}
$ato_edit.css('background-color',bg_color);}
$ato_edit.find('.close-edit').on('click',function(e){$.colorbox.close()
e.preventDefault();});$(".edit-quick").colorbox({inline:true,transition:'none',width:500,maxWidth:'100%',top:50,title:$ato_edit.attr('title'),onComplete:function(){setTimeout(function(){$('#quick_edit_name').focus();},0);},onOpen:function(){bgColor();if(is_picture){$ato_edit.find('.datepicker').datepicker({dateFormat:'yy-mm-dd'});if($(this).data('tags-init'))return;$.ajax({method:'POST',url:__this.urlWS+'pwg.tags.getList',dataType:'json',success:function(data){var tags=[];for(var i=0,l=data.result.tags.length;i<l;i++){tags.push({id:'~~'+data.result.tags[i].id+'~~',name:data.result.tags[i].name});}
$ato_edit.find('.tags').tokenInput(tags,$.extend({animateDropdown:false,preventDuplicates:true,allowFreeTagging:true},tokeninput_lang));$.colorbox.resize();$(this).data('tags-init',true);},error:function(xhr,text,error){alert(text+' '+error);}});}}});Mousetrap.bind('mod+e',function(e){e.preventDefault();$(".edit-quick").click();});};return this;}(jQuery);

/*BEGIN themes/elegant/scripts.js */
﻿(function(){var session_storage=window.sessionStorage||{};var menubar=jQuery("#menubar"),menuswitcher=jQuery("#menuSwitcher"),content=jQuery("#the_page > .content"),pcontent=jQuery("#content");function hideMenu(delay){menubar.hide(delay);menuswitcher.addClass("menuhidden").removeClass("menushown");content.addClass("menuhidden").removeClass("menushown");pcontent.addClass("menuhidden").removeClass("menushown");session_storage['page-menu']='hidden';}
function showMenu(delay){menubar.show(delay);menuswitcher.addClass("menushown").removeClass("menuhidden");content.addClass("menushown").removeClass("menuhidden");pcontent.addClass("menushown").removeClass("menuhidden");session_storage['page-menu']='visible';}
jQuery(function(){if(menubar.length==1&&p_main_menu!="disabled"){menuswitcher.html('<div class="switchArrow">&nbsp;</div>');if(session_storage['page-menu']==undefined&&p_main_menu=='off'){session_storage['page-menu']='hidden';}
if(session_storage['page-menu']=='hidden'){hideMenu(0);}
else{showMenu(0);}
menuswitcher.click(function(e){if(menubar.is(":hidden")){showMenu(0);}
else{hideMenu(0);}
e.preventDefault();});}
else if(menubar.length==1&&p_main_menu=="disabled"){showMenu(0);}});}());

/*BEGIN themes/default/js/plugins/jquery.colorbox.min.js */
/*!
	jQuery ColorBox v1.4.1 - 2013-02-14
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Y+o),n&&(r.style.cssText=n),e(r)}function n(e){var t=T.length,i=(A+e)%t;return 0>i?t+i:i}function r(e,t){return Math.round((/%/.test(e)?("x"===t?k.width():k.height())/100:1)*parseInt(e,10))}function h(e){return K.photo||K.photoRegex.test(e)}function l(e){return K.retinaUrl&&i.devicePixelRatio>1?e.replace(K.photoRegex,K.retinaSuffix):e}function s(t){e.contains(w[0],t.target)||w[0]===t.target||(t.stopPropagation(),w.focus())}function a(){var t,i=e.data(N,V);null==i?(K=e.extend({},J),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=e.extend({},i);for(t in K)e.isFunction(K[t])&&"on"!==t.slice(0,2)&&(K[t]=K[t].call(N));K.rel=K.rel||N.rel||e(N).data("rel")||"nofollow",K.href=K.href||e(N).attr("href"),K.title=K.title||N.title,"string"==typeof K.href&&(K.href=e.trim(K.href))}function d(i,o){e(t).trigger(i),at.trigger(i),e.isFunction(o)&&o.call(N)}function c(){var e,t,i,o,n,r=Y+"Slideshow_",h="click."+Y;K.slideshow&&T[1]?(t=function(){clearTimeout(e)},i=function(){(K.loop||T[A+1])&&(e=setTimeout(G.next,K.slideshowSpeed))},o=function(){M.html(K.slideshowStop).unbind(h).one(h,n),at.bind(it,i).bind(tt,t).bind(ot,n),w.removeClass(r+"off").addClass(r+"on")},n=function(){t(),at.unbind(it,i).unbind(tt,t).unbind(ot,n),M.html(K.slideshowStart).unbind(h).one(h,function(){G.next(),o()}),w.removeClass(r+"on").addClass(r+"off")},K.slideshowAuto?o():n()):w.removeClass(r+"off "+r+"on")}function u(i){U||(N=i,a(),T=e(N),A=0,"nofollow"!==K.rel&&(T=e("."+Z).filter(function(){var t,i=e.data(this,V);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===K.rel}),A=T.index(N),-1===A&&(T=T.add(N),A=T.length-1)),m.css({opacity:parseFloat(K.opacity),cursor:K.overlayClose?"pointer":"auto",visibility:"visible"}).show(),j||(j=q=!0,w.css({visibility:"hidden",display:"block"}),E=o(dt,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(v),_=x.height()+C.height()+v.outerHeight(!0)-v.height(),z=y.width()+b.width()+v.outerWidth(!0)-v.width(),D=E.outerHeight(!0),B=E.outerWidth(!0),K.w=r(K.initialWidth,"x"),K.h=r(K.initialHeight,"y"),G.position(),lt&&k.bind("resize."+st+" scroll."+st,function(){m.css({width:k.width(),height:k.height(),top:k.scrollTop(),left:k.scrollLeft()})}).trigger("resize."+st),c(),d(et,K.onOpen),P.add(W).hide(),R.html(K.close).show(),w.focus(),t.addEventListener&&(t.addEventListener("focus",s,!0),at.one(nt,function(){t.removeEventListener("focus",s,!0)})),K.returnFocus&&at.one(nt,function(){e(N).focus()})),G.load(!0))}function f(){!w&&t.body&&(X=!1,k=e(i),w=o(dt).attr({id:V,"class":ht?Y+(lt?"IE6":"IE"):"",role:"dialog",tabindex:"-1"}).hide(),m=o(dt,"Overlay",lt?"position:absolute":"").hide(),L=o(dt,"LoadingOverlay").add(o(dt,"LoadingGraphic")),g=o(dt,"Wrapper"),v=o(dt,"Content").append(W=o(dt,"Title"),H=o(dt,"Current"),F=o("button","Previous"),S=o("button","Next"),M=o("button","Slideshow"),L,R=o("button","Close")),g.append(o(dt).append(o(dt,"TopLeft"),x=o(dt,"TopCenter"),o(dt,"TopRight")),o(dt,!1,"clear:left").append(y=o(dt,"MiddleLeft"),v,b=o(dt,"MiddleRight")),o(dt,!1,"clear:left").append(o(dt,"BottomLeft"),C=o(dt,"BottomCenter"),o(dt,"BottomRight"))).find("div div").css({"float":"left"}),I=o(dt,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),P=S.add(F).add(H).add(M),e(t.body).append(m,w.append(g,I)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),u(this))}return w?(X||(X=!0,S.click(function(){G.next()}),F.click(function(){G.prev()}),R.click(function(){G.close()}),m.click(function(){K.overlayClose&&G.close()}),e(t).bind("keydown."+Y,function(e){var t=e.keyCode;j&&K.escKey&&27===t&&(e.preventDefault(),G.close()),j&&K.arrowKey&&T[1]&&!e.altKey&&(37===t?(e.preventDefault(),F.click()):39===t&&(e.preventDefault(),S.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Y,"."+Z,i):e("."+Z).live("click."+Y,i)),!0):!1}var m,w,g,v,x,y,b,C,T,k,E,I,L,W,H,M,S,F,R,P,K,_,z,D,B,N,A,O,j,q,U,$,G,Q,X,J={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},V="colorbox",Y="cbox",Z=Y+"Element",et=Y+"_open",tt=Y+"_load",it=Y+"_complete",ot=Y+"_cleanup",nt=Y+"_closed",rt=Y+"_purge",ht=!e.support.leadingWhitespace,lt=ht&&!i.XMLHttpRequest,st=Y+"_IE6",at=e({}),dt="div";e.colorbox||(e(f),G=e.fn[V]=e[V]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,V,e.extend({},e.data(this,V)||J,t))}).addClass(Z),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},G.position=function(e,t){function i(e){x[0].style.width=C[0].style.width=v[0].style.width=parseInt(e.style.width,10)-z+"px",v[0].style.height=y[0].style.height=b[0].style.height=parseInt(e.style.height,10)-_+"px"}var o,n,h,l=0,s=0,a=w.offset();k.unbind("resize."+Y),w.css({top:-9e4,left:-9e4}),n=k.scrollTop(),h=k.scrollLeft(),K.fixed&&!lt?(a.top-=n,a.left-=h,w.css({position:"fixed"})):(l=n,s=h,w.css({position:"absolute"})),s+=K.right!==!1?Math.max(k.width()-K.w-B-z-r(K.right,"x"),0):K.left!==!1?r(K.left,"x"):Math.round(Math.max(k.width()-K.w-B-z,0)/2),l+=K.bottom!==!1?Math.max(k.height()-K.h-D-_-r(K.bottom,"y"),0):K.top!==!1?r(K.top,"y"):Math.round(Math.max(k.height()-K.h-D-_,0)/2),w.css({top:a.top,left:a.left,visibility:"visible"}),e=w.width()===K.w+B&&w.height()===K.h+D?0:e||0,g[0].style.width=g[0].style.height="9999px",o={width:K.w+B+z,height:K.h+D+_,top:l,left:s},0===e&&w.css(o),w.dequeue().animate(o,{duration:e,complete:function(){i(this),q=!1,g[0].style.width=K.w+B+z+"px",g[0].style.height=K.h+D+_+"px",K.reposition&&setTimeout(function(){k.bind("resize."+Y,G.position)},1),t&&t()},step:function(){i(this)}})},G.resize=function(e){j&&(e=e||{},e.width&&(K.w=r(e.width,"x")-B-z),e.innerWidth&&(K.w=r(e.innerWidth,"x")),E.css({width:K.w}),e.height&&(K.h=r(e.height,"y")-D-_),e.innerHeight&&(K.h=r(e.innerHeight,"y")),e.innerHeight||e.height||(E.css({height:"auto"}),K.h=E.height()),E.css({height:K.h}),G.position("none"===K.transition?0:K.speed))},G.prep=function(t){function i(){return K.w=K.w||E.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function r(){return K.h=K.h||E.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(j){var l,s="none"===K.transition?0:K.speed;E.empty().remove(),E=o(dt,"LoadedContent").append(t),E.hide().appendTo(I.show()).css({width:i(),overflow:K.scrolling?"auto":"hidden"}).css({height:r()}).prependTo(v),I.hide(),e(O).css({"float":"none"}),l=function(){function t(){ht&&w[0].style.removeAttribute("filter")}var i,r,l=T.length,a="frameBorder",c="allowTransparency";j&&(r=function(){clearTimeout($),L.hide(),d(it,K.onComplete)},ht&&O&&E.fadeIn(100),W.html(K.title).add(E).show(),l>1?("string"==typeof K.current&&H.html(K.current.replace("{current}",A+1).replace("{total}",l)).show(),S[K.loop||l-1>A?"show":"hide"]().html(K.next),F[K.loop||A?"show":"hide"]().html(K.previous),K.slideshow&&M.show(),K.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=T[this],n=e.data(o,V);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=e(o).attr("href"),t&&(h(t)||n.photo)&&(i=new Image,i.src=t)})):P.hide(),K.iframe?(i=o("iframe")[0],a in i&&(i[a]=0),c in i&&(i[c]="true"),K.scrolling||(i.scrolling="no"),e(i).attr({src:K.href,name:(new Date).getTime(),"class":Y+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",r).appendTo(E),at.one(rt,function(){i.src="//about:blank"}),K.fastIframe&&e(i).trigger("load")):r(),"fade"===K.transition?w.fadeTo(s,1,t):t())},"fade"===K.transition?w.fadeTo(s,0,function(){G.position(0,l)}):G.position(s,l)}},G.load=function(t){var n,s,c,u=G.prep;q=!0,O=!1,N=T[A],t||a(),Q&&w.add(m).removeClass(Q),K.className&&w.add(m).addClass(K.className),Q=K.className,d(rt),d(tt,K.onLoad),K.h=K.height?r(K.height,"y")-D-_:K.innerHeight&&r(K.innerHeight,"y"),K.w=K.width?r(K.width,"x")-B-z:K.innerWidth&&r(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=r(K.maxWidth,"x")-B-z,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=r(K.maxHeight,"y")-D-_,K.mh=K.h&&K.h<K.mh?K.h:K.mh),n=K.href,$=setTimeout(function(){L.show()},100),K.inline?(c=o(dt).hide().insertBefore(e(n)[0]),at.one(rt,function(){c.replaceWith(E.children())}),u(e(n))):K.iframe?u(" "):K.html?u(K.html):h(n)?(n=l(n),e(O=new Image).addClass(Y+"Photo").bind("error",function(){K.title=!1,u(o(dt,"Error").html(K.imgError))}).one("load",function(){var e;K.retinaImage&&i.devicePixelRatio>1&&(O.height=O.height/i.devicePixelRatio,O.width=O.width/i.devicePixelRatio),K.scalePhotos&&(s=function(){O.height-=O.height*e,O.width-=O.width*e},K.mw&&O.width>K.mw&&(e=(O.width-K.mw)/O.width,s()),K.mh&&O.height>K.mh&&(e=(O.height-K.mh)/O.height,s())),K.h&&(O.style.marginTop=Math.max(K.mh-O.height,0)/2+"px"),T[1]&&(K.loop||T[A+1])&&(O.style.cursor="pointer",O.onclick=function(){G.next()}),ht&&(O.style.msInterpolationMode="bicubic"),setTimeout(function(){u(O)},1)}),setTimeout(function(){O.src=n},1)):n&&I.load(n,K.data,function(t,i){u("error"===i?o(dt,"Error").html(K.xhrError):e(this).contents())})},G.next=function(){!q&&T[1]&&(K.loop||T[A+1])&&(A=n(1),G.load())},G.prev=function(){!q&&T[1]&&(K.loop||A)&&(A=n(-1),G.load())},G.close=function(){j&&!U&&(U=!0,j=!1,d(ot,K.onCleanup),k.unbind("."+Y+" ."+st),m.fadeTo(200,0),w.stop().fadeTo(300,0,function(){w.add(m).css({opacity:1,cursor:"auto"}).hide(),d(rt),E.empty().remove(),setTimeout(function(){U=!1,d(nt,K.onClosed)},1)}))},G.remove=function(){e([]).add(w).add(m).remove(),w=null,e("."+Z).removeData(V).removeClass(Z),e(t).unbind("click."+Y)},G.element=function(){return e(N)},G.settings=J)})(jQuery,document,window);

