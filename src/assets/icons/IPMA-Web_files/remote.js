(function(g){var window=this;'use strict';var AYa=function(a,b,c){null!=c&&(g.xd(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Ie=b,g.He=c,g.vd(a,g.Ie),g.vd(a,g.He))},BYa=function(a,b,c){b=g.Ld(b,c);
null!=b&&(g.xd(a,c,0),a.i.i.push(b?1:0))},CYa=function(a,b){return g.Af(a,b)},DYa=function(a,b){b=b instanceof g.Bg?b:g.Hg(b,/^data:image\//i.test(b));
a.src=g.Cg(b)},FYa=function(a){g.E.call(this,a,-1,EYa)},GYa=function(a){g.E.call(this,a)},JYa=function(){return[1,
HYa,2,IYa]},KYa=function(){return[1,
g.lr,GYa,JYa]},LYa=function(a){g.E.call(this,a)},MYa=function(a){g.E.call(this,a)},OYa=function(){return[1,
g.nr,2,g.nr,3,NYa]},PYa=function(a){g.E.call(this,a)},RYa=function(){return[1,
g.nr,2,g.nr,3,QYa,4,NYa]},TYa=function(){return[1,
g.We,MYa,OYa,SYa,2,g.We,PYa,RYa,SYa]},XYa=function(){return[1,
UYa,g.Xi,2,VYa,g.Xi,3,WYa,g.Xi]},$Ya=function(){return[1,
YYa,g.Wi,2,ZYa,g.Wi,3,g.We,FYa,KYa,g.Wi]},bZa=function(){return[1,
g.lr,g.Ti,XYa,2,aZa,g.Ui,$Ya]},fZa=function(){return[1,
g.nr,5,cZa,2,aZa,LYa,TYa,3,dZa,6,eZa,4,g.lr,g.Oi,bZa]},W6=function(a){g.Bl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ua()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Ll(a.j,b,c)},gZa=function(a){if(a===g.Fo)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},hZa=function(a){if(a instanceof g.Do)return a;
if("function"==typeof a.Rg)return a.Rg(!1);if(g.Oa(a)){var b=0,c=new g.Do;c.next=function(){for(;;){if(b>=a.length)return g.c2;if(b in a)return g.Eo(a[b++]);b++}};
var d=c.next;c.Oj=function(){return g.Go(d.call(c))};
return c}throw Error("Not implemented");},iZa=function(a,b,c){if(g.Oa(a))try{g.wc(a,b,c)}catch(e){gZa(e)}else for(a=hZa(a);;){var d=void 0;
try{d=a.Oj()}catch(e){if(e===g.Fo)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){gZa(e)}}},jZa=function(a,b){var c=[];
iZa(b,function(d){try{var e=g.Vq.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.bha(e)&&c.push(d)},a);
return c},kZa=function(a,b){jZa(a,b).forEach(function(c){g.Vq.prototype.remove.call(this,c)},a)},lZa=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},mZa=function(a,b){g.cc(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},nZa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return nZa(a)},oZa=function(a,b,c,d){var e=new g.tl(null,void 0);
a&&g.ul(e,a);b&&g.vl(e,b);c&&g.wl(e,c);d&&(e.J=d);return e},$6=function(a,b){g.Zt[a]=!0;
var c=g.Xt();c&&c.publish.apply(c,arguments);g.Zt[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.uq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",pZa(this,a.capabilities||""),qZa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},pZa=function(a,b){a.capabilities.clear();
g.Ko(b.split(","),g.Ta(CYa,rZa)).forEach(function(c){a.capabilities.add(c)})},qZa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},sZa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},tZa=function(a){return new b7(a)},uZa=function(a){return Array.isArray(a)?g.qn(a,tZa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.qn(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},vZa=function(a){return g.qn(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.Zb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.Zb(a,function(c){return c7(c,b)})},wZa=function(){var a=(0,g.zx)();
a&&kZa(a,a.i.Rg(!0))},i7=function(){var a=g.Cx("yt-remote-connected-devices")||[];
g.tc(a);return a},xZa=function(a){if(g.dc(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.qn(a,function(d,e){return 0==e?d:d.substring(c.length)})},yZa=function(a){g.Bx("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.Cx("yt-remote-device-id");a||(a=f7(),g.Bx("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.cc(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.cc(a,b);g.Ex()&&g.vc(a,b);a=xZa(a);if(g.dc(a))try{g.Eka("remote_sid")}catch(c){}else try{g.at("remote_sid",a.join(","),-1)}catch(c){}},zZa=function(){return g.Cx("yt-remote-session-browser-channel")},AZa=function(){return g.Cx("yt-remote-local-screens")||[]},BZa=function(){g.Bx("yt-remote-lounge-token-expiration",!0,86400)},CZa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.qn(AZa(),function(d){return d.loungeToken}),c=g.qn(a,function(d){return d.loungeToken});
g.rn(c,function(d){return!g.cc(b,d)})&&BZa();
g.Bx("yt-remote-local-screens",a,31536E3)},DZa=function(a,b){g.Bx("yt-remote-session-browser-channel",a);
g.Bx("yt-remote-session-screen-id",b);a=i7();b=k7();g.cc(a,b)||a.push(b);yZa(a);l7()},m7=function(a){a||(g.Dx("yt-remote-session-screen-id"),g.Dx("yt-remote-session-video-id"));
l7();a=i7();g.hc(a,k7());yZa(a)},EZa=function(){if(!n7){var a=g.dr();
a&&(n7=new g.Sq(a))}},FZa=function(){EZa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},GZa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},HZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?IZa(a.shift(),function(){p7(a)}):q7()},JZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},IZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Nk(d,g.Iq(a));(document.head||document.documentElement).appendChild(d)},KZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=HZa();
a&&a(!1,"No cast extension found")},r7=function(){if(LZa){var a=2,b=HZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;IZa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},MZa=function(){r7();
var a=KZa();a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},OZa=function(){r7();
var a=KZa();a.push.apply(a,g.ma(NZa.map(JZa)));a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},PZa=function(){this.i=s7();
this.i.jz("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},QZa=function(){this.i=s7();
this.i.jz("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},RZa=function(){this.i=s7();
this.i.jz("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.G.call(this);
this.I=null!=c?(0,g.Sa)(a,c):a;this.Zf=b;this.C=(0,g.Sa)(this.SR,this);this.i=!1;this.j=0;this.u=this.Ob=null;this.B=[]},u7=function(a,b,c){g.G.call(this);
this.B=null!=c?a.bind(c):a;this.Zf=b;this.u=null;this.i=!1;this.j=0;this.Ob=null},v7=function(a){a.Ob=g.Gi(function(){a.Ob=null;
a.i&&!a.j&&(a.i=!1,v7(a))},a.Zf);
var b=a.u;a.u=null;a.B.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new SZa(y7,a))},SZa=function(a,b){g.ef.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.u=b;this.N=c;this.J=d||1;this.j=45E3;this.B=new g.Ml(this);this.I=new g.Fi;this.I.setInterval(250)},UZa=function(a,b,c){a.Au=1;
a.Dn=W6(b.clone());a.Uq=c;a.C=!0;TZa(a,null)},B7=function(a,b,c,d,e){a.Au=1;
a.Dn=W6(b.clone());a.Uq=null;a.C=c;e&&(a.gP=!1);TZa(a,d)},TZa=function(a,b){a.Yt=Date.now();
C7(a);a.ap=a.Dn.clone();X6(a.ap,"t",a.J);a.xC=0;a.Qf=a.i.wE(a.i.jy()?b:null);0<a.pD&&(a.IB=new u7((0,g.Sa)(a.fQ,a,a.Qf),a.pD));a.B.Pa(a.Qf,"readystatechange",a.TR);b=a.Ep?g.Hf(a.Ep):{};a.Uq?(a.uC="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Qf.send(a.ap,a.uC,a.Uq,b)):(a.uC="GET",a.gP&&!g.jf&&(b.Connection="close"),a.Qf.send(a.ap,a.uC,null,b));a.i.Pj(1)},WZa=function(a,b){var c=a.xC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return VZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.xC=d+c;return b},YZa=function(a,b){a.Yt=Date.now();
C7(a);var c=b?window.location.hostname:"";a.ap=a.Dn.clone();g.Bl(a.ap,"DOMAIN",c);g.Bl(a.ap,"t",a.J);try{a.gk=new ActiveXObject("htmlfile")}catch(m){E7(a);a.vn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in XZa)f=G7[f]=XZa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Wg(g.tg("b/12014412"),d);a.gk.open();a.gk.write(g.Sg(c));a.gk.close();a.gk.parentWindow.m=(0,g.Sa)(a.XX,a);a.gk.parentWindow.d=(0,g.Sa)(a.mO,a,!0);a.gk.parentWindow.rpcClose=(0,g.Sa)(a.mO,a,!1);c=a.gk.createElement("DIV");a.gk.parentWindow.document.body.appendChild(c);d=g.Gg(a.ap.toString());d=g.nh(g.Cg(d));d=g.Wg(g.tg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Zg(c,d);a.i.Pj(1)},C7=function(a){a.uI=Date.now()+
a.j;
ZZa(a,a.j)},ZZa=function(a,b){if(null!=a.Mu)throw Error("WatchDog timer not null");
a.Mu=x7((0,g.Sa)(a.eY,a),b)},H7=function(a){a.Mu&&(g.B.clearTimeout(a.Mu),a.Mu=null)},F7=function(a){a.i.zf()||a.Vp||a.i.bz(a)},E7=function(a){H7(a);
g.bf(a.IB);a.IB=null;a.I.stop();g.Ol(a.B);if(a.Qf){var b=a.Qf;a.Qf=null;b.abort();b.dispose()}a.gk&&(a.gk=null)},I7=function(a,b){try{a.i.fO(a,b),a.i.Pj(4)}catch(c){}},a_a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;$Za(a,b,function(h){h?c(!0):g.B.setTimeout(function(){a_a(a,b,c,d,f)},f)})}},$Za=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
DYa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},b_a=function(a){this.i=a;
this.j=new w7},c_a=function(a){var b=K7(a.i,a.Lv,"/mail/images/cleardot.gif");
W6(b);a_a(b.toString(),5E3,(0,g.Sa)(a.JS,a),3,2E3);a.Pj(1)},M7=function(a){var b=a.i.W;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.wh=new A7(a,void 0,void 0,void 0),a.wh.Ep=a.qD,b=a.i,b=K7(b,b.jy()?a.vv:null,a.rD),z7(5),!g.Nc||g.Gc(10))X6(b,"TYPE","xmlhttp"),B7(a.wh,b,!1,a.vv,!1);else{X6(b,"TYPE","html");var c=a.wh;a=!!a.vv;c.Au=3;c.Dn=W6(b.clone());YZa(c,a)}},N7=function(a,b,c){this.i=1;
this.j=[];this.B=[];this.C=new w7;this.N=a||null;this.W=null!=b?b:null;this.I=c||!1},d_a=function(a,b){this.i=a;
this.map=b;this.context=null},e_a=function(a,b,c,d){g.ef.call(this,"timingevent",a);
this.size=b;this.Ux=d},f_a=function(a){g.ef.call(this,"serverreachability",a)},i_a=function(a){g_a(a);
if(3==a.i){var b=a.jx++,c=a.Sz.clone();g.Bl(c,"SID",a.u);g.Bl(c,"RID",b);g.Bl(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.u,b,void 0);b.Au=2;b.Dn=W6(c.clone());DYa(new Image,b.Dn.toString());b.Yt=Date.now();C7(b)}h_a(a)},j_a=function(a){a.nT(1,0);
a.Sz=K7(a,null,a.sD);P7(a)},g_a=function(a){a.Hn&&(a.Hn.abort(),a.Hn=null);
a.Re&&(a.Re.cancel(),a.Re=null);a.Vl&&(g.B.clearTimeout(a.Vl),a.Vl=null);Q7(a);a.dh&&(a.dh.cancel(),a.dh=null);a.Sn&&(g.B.clearTimeout(a.Sn),a.Sn=null)},k_a=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.j.push(new d_a(a.YU++,b));2!=a.i&&3!=a.i||P7(a)},l_a=function(a){var b=0;
a.Re&&b++;a.dh&&b++;return b},P7=function(a){a.dh||a.Sn||(a.Sn=x7((0,g.Sa)(a.kO,a),0),a.Rs=0)},n_a=function(a,b){if(1==a.i){if(!b){a.jx=Math.floor(1E5*Math.random());
b=a.jx++;var c=new A7(a,"",b,void 0);c.Ep=a.Ak;var d=R7(a),e=a.Sz.clone();g.Bl(e,"RID",b);g.Bl(e,"CVER","1");O7(a,e);UZa(c,e,d);a.dh=c;a.i=2}}else 3==a.i&&(b?m_a(a,b):0==a.j.length||a.dh||m_a(a))},m_a=function(a,b){if(b)if(6<a.Wp){a.j=a.B.concat(a.j);
a.B.length=0;var c=a.jx-1;b=R7(a)}else c=b.N,b=b.Uq;else c=a.jx++,b=R7(a);var d=a.Sz.clone();g.Bl(d,"SID",a.u);g.Bl(d,"RID",c);g.Bl(d,"AID",a.Dt);O7(a,d);c=new A7(a,a.u,c,a.Rs+1);c.Ep=a.Ak;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.dh=c;UZa(c,d,b)},O7=function(a,b){a.Rf&&(a=a.Rf.DL())&&g.qf(a,function(c,d){g.Bl(b,d,c)})},R7=function(a){var b=Math.min(a.j.length,1E3),c=["count="+b];
if(6<a.Wp&&0<b){var d=a.j[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Jr:e.Jr},f++){e.Jr=a.j[f].i;var h=a.j[f].map;e.Jr=6>=a.Wp?f:e.Jr-d;try{g.qf(h,function(l){return function(m,n){c.push("req"+l.Jr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Jr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.j.splice(0,b));
return c.join("&")},o_a=function(a){a.Re||a.Vl||(a.J=1,a.Vl=x7((0,g.Sa)(a.jO,a),0),a.As=0)},S7=function(a){if(a.Re||a.Vl||3<=a.As)return!1;
a.J++;a.Vl=x7((0,g.Sa)(a.jO,a),p_a(a,a.As));a.As++;return!0},L7=function(a,b,c){a.sC=c;
a.Bk=b.Nl;a.I||j_a(a)},Q7=function(a){null!=a.fq&&(g.B.clearTimeout(a.fq),a.fq=null)},p_a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Rf&&(c=null);var d=(0,g.Sa)(a.mZ,a);c||(c=new g.tl("//www.google.com/images/cleardot.gif"),W6(c));$Za(c.toString(),1E4,d)}else z7(2);q_a(a,b)},q_a=function(a,b){a.i=0;
a.Rf&&a.Rf.QK(b);h_a(a);g_a(a)},h_a=function(a){a.i=0;
a.Bk=-1;if(a.Rf)if(0==a.B.length&&0==a.j.length)a.Rf.hE();else{var b=g.kc(a.B),c=g.kc(a.j);a.B.length=0;a.j.length=0;a.Rf.hE(b,c)}},K7=function(a,b,c){var d=g.Cl(c);
if(""!=d.i)b&&g.vl(d,b+"."+d.i),g.wl(d,d.u);else{var e=window.location;d=oZa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.jw&&g.qf(a.jw,function(f,h){g.Bl(d,h,f)});
g.Bl(d,"VER",a.Wp);O7(a,d);return d},r_a=function(){},s_a=function(){this.i=[];
this.j=[]},t_a=function(){},s7=function(){if(!U7){U7=new g.Ii(new t_a);
var a=g.rs("client_streamz_web_flush_count",-1);-1!==a&&(U7.B=a)}return U7},u_a=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.G.call(this);
this.i=new g.J(this.OX,0,this);g.H(this,this.i);this.Zf=5E3;this.j=0;if("function"===typeof a)b&&(a=(0,g.Sa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Sa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.qa=a;this.I=b;this.u=new g.Rq;this.j=new V7(this.OY,this);this.i=null;this.Y=!1;this.C=null;this.W="";this.N=this.B=0;this.J=[];this.xa=c;this.oa=d;this.Ga=e;this.va=new PZa;this.Ha=new QZa;this.Ka=new RZa},v_a=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.sC,sessionId:a.i.u,arrayId:a.i.Dt}},w_a=function(a,b){a.N=b||0;
a.j.stop();X7(a);a.i&&(3==a.i.getState()&&n_a(a.i),i_a(a.i));a.N=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.oa(),c=a.i.Ak||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Ak=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.j=!0;a=a||document.location.href;var b=Number(g.vj(4,a))||"";b&&(this.port=":"+b);this.domain=g.wj(a)||"";a=g.zb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.j=!1))},$7=function(a,b){var c=a.i;
a.j&&(c="https://"+a.domain+a.port+a.i);return g.Hj(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ta(a.B,d,!0),onError:g.Ta(a.u,e),onTimeout:g.Ta(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ss(b,a)},A_a=function(){var a=x_a;
y_a();b8.push(a);z_a()},c8=function(a,b){y_a();
var c=B_a(a,String(b));g.dc(b8)?C_a(c):(z_a(),g.wc(b8,function(d){d(c)}))},y_a=function(){b8||(b8=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ja("yt.mdx.remote.debug.handlers_",b8,void 0))},C_a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},z_a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.wc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},B_a=function(a,b){var c=(Date.now()-D_a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Mw.call(this);
this.I=a;this.screens=[]},E_a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},F_a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ko(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=E_a(a,b[d])||c;return c},G_a=function(a,b){var c=a.screens.length;
a.screens=g.Ko(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Mw.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.j=0;this.i=null;this.Ob=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.j=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},H_a=function(a){if(a.screens.length){var b=g.qn(a.screens,function(d){return d.id}),c=$7(a.j,"/pairing/get_lounge_token_batch");
a8(a.j,c,{screen_ids:b.join(",")},(0,g.Sa)(a.NT,a),(0,g.Sa)(a.LT,a))}},i8=function(a){if(g.P("deprecate_pair_servlet_enabled"))return F_a(a,[]);
var b=uZa(AZa());b=g.Ko(b,function(c){return!c.uuid});
return F_a(a,b)},k8=function(a,b){CZa(g.qn(a.screens,sZa));
b&&BZa()},m8=function(a,b){g.Mw.call(this);
this.I=b;b=(b=g.Cx("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.cc(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.j=null;l8("Initialized with "+g.mj(this.i))},n8=function(a,b,c){var d=$7(a.C,"/pairing/get_screen_availability");
a8(a.C,d,{lounge_token:b.token},(0,g.Sa)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Sa)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.yf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.mj(a.i)),a.i=b,a.Z("screenChange"));I_a(a)},p8=function(a){isNaN(a.u)||g.Os(a.u);
a.u=g.Ms((0,g.Sa)(a.kH,a),0<a.B&&a.B<g.Ua()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},J_a=function(a){var b={};
g.wc(a.I(),function(c){c.token?b[c.token]=c.id:this.ye("Requesting availability of screen w/o lounge token.")});
return b},I_a=function(a){a=g.yf(g.rf(a.i,function(b){return b}));
g.tc(a);a.length?g.Bx("yt-remote-online-screen-ids",a.join(","),60):g.Dx("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.j=null;this.u=[];this.C={};K_a(this)},M_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Kh(),l=c?h7(h,c):null;c&&(a.J||l)||(l=h7(h,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?L_a(a,c,(0,g.Sa)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},N_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},O_a=function(a,b,c){n8(a.i,b,c)},L_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ss($7(a.B,"/pairing/get_lounge_token_batch"),e)},P_a=function(a){a.screens=a.j.Kh();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},K_a=function(a){s8(a);
a.j=new j8(a.B);a.j.subscribe("screenChange",(0,g.Sa)(a.XT,a));P_a(a);a.J||(a.u=uZa(g.Cx("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.u));a.i=new m8(a.B,(0,g.Sa)(a.Kh,a,!0));a.i.subscribe("screenChange",(0,g.Sa)(function(){this.Z("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||Q_a(a));s8(a);a.C[b.uuid]=b.id;g.Bx("yt-remote-device-id-map",a.C,31536E3);return b},Q_a=function(a){a=g.Ko(a.u,function(b){return"shortLived"!=b.idType});
g.Bx("yt-remote-automatic-screen-cache",g.qn(a,sZa))},s8=function(a){a.C=g.Cx("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Mw.call(this);
this.xa=c;this.u=a;this.i=b;this.B=null},u8=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},R_a=function(a,b){a.B&&(a.B.token=b,r8(a.u,a.B));
a.Z("sessionScreen",a.B)},v8=function(a,b){c8(a.xa,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.j=null;this.oa=(0,g.Sa)(this.YR,this);this.va=(0,g.Sa)(this.iY,this);this.Y=g.Ms(function(){S_a(d,null)},12E4);
this.J=this.C=this.I=this.N=0;this.qa=!1;this.W="unknown"},x8=function(a,b){g.Os(a.J);
a.J=0;0==b?T_a(a):a.J=g.Ms(function(){T_a(a)},b)},T_a=function(a){U_a(a,"getLoungeToken");
g.Os(a.C);a.C=g.Ms(function(){V_a(a,null)},3E4)},U_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.mj(void 0));
var c={};c.type=b;a.j?a.j.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Sa)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.mj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.RL(b,function(c){u8(a,c)},function(){return a.Dg()},5)):a.Dg(Error("Waiting for session status timed out."))},X_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new b7(b);W_a(a,d,function(e){e?(a.qa=!0,r8(a.u,d),u8(a,d),a.W="unknown",x8(a,c)):(g.ws(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Dg())},5)},S_a=function(a,b){g.Os(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?X_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ws(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.ws(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Dg(Error("Waiting for session status timed out."))},V_a=function(a,b){g.Os(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,x8(a,3E4)):(R_a(a,b.loungeToken),a.qa=!1,a.W="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},W_a=function(a,b,c,d){g.Os(a.I);
a.I=0;O_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Ms(function(){W_a(a,b,c,d-1)},300)})},Y_a=function(a){g.Os(a.N);
a.N=0;g.Os(a.I);a.I=0;g.Os(a.Y);a.Y=0;g.Os(a.C);a.C=0;g.Os(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.j=this.N=null;this.va="";this.Ka=c;this.Ha=null;this.Y=function(){};
this.W=NaN;this.Ga=(0,g.Sa)(this.ZR,this);this.C=function(){};
this.J=this.I=0;this.oa=!1;this.qa="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.j)?0:b.getDialAppInfo))},Z_a=function(a){a.C=a.u.DJ(a.va,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.C=function(){};
a.oa=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.C=function(){};
a.Dg(b)})},$_a=function(a){var b={};
b.pairingCode=a.va;b.theme=a.Ka;FZa()&&(b.env_useStageMdx=1);return g.Fj(b)},C8=function(a){return new Promise(function(b){a.va=f7();
if(a.Ha){var c=new chrome.cast.DialLaunchResponse(!0,$_a(a));b(c);Z_a(a)}else a.Y=function(){g.Os(a.W);a.Y=function(){};
a.W=NaN;var d=new chrome.cast.DialLaunchResponse(!0,$_a(a));b(d);Z_a(a)},a.W=g.Ms(function(){a.Y()},100)})},b0a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){a0a(a,d,function(f){f?(a.oa=!0,r8(a.u,d),u8(a,d),B8(a,c)):g.ws(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},c0a=function(a,b){var c=a.N.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){M_a(a.u,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},a0a=function(a,b,c,d){g.Os(a.I);
a.I=0;O_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Ms(function(){a0a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Os(a.J),a.J=0,0==b?d0a(a):a.J=g.Ms(function(){d0a(a)},b))},d0a=function(a){A8(a)&&a.j.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.qa=c,B8(a,3E4)):(a.oa=!1,a.qa="unknown",R_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.qa="noLoungeTokenResponse";B8(a,3E4)})},e0a=function(a){g.Os(a.I);
a.I=0;g.Os(a.J);a.J=0;a.C();a.C=function(){};
g.Os(a.W)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.j=g.Ms((0,g.Sa)(this.Et,this,null),150)},E8=function(a,b){g.Mw.call(this);
this.config_=b;this.j=a;this.N=b.appId||"233637DE";this.B=b.theme||"cl";this.W=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.Sa)(this.bX,this)},f0a=function(a,b){return b?g.Zb(a.u,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},x_a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.u.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.bf(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Sa)(a.iO,a,b)),b.subscribe("sessionFailed",function(){return g0a(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Et(null)):a.Z("yt-remote-cast2-session-change",null))},g0a=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},h0a=function(a){var b=a.j.CJ(),c=a.i&&a.i.i;
a=g.qn(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=f0a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},m0a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):i0a()?j0a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?k0a(a,c):(window.__onGCastApiAvailable=function(e,f){e?k0a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Dx("yt-remote-cast-available"),g.Dx("yt-remote-cast-receiver"),
l0a(),c(!1))},d.loadCastApiSetupScript?g.Fx("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&MZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?OZa():(r7(),p7(NZa.map(JZa))))):I8("Cannot initialize because not running Chrome")},l0a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ja("yt.mdx.remote.cloudview.instance_",null,void 0);n0a(!1);g.bu(N8);N8.length=0},O8=function(){return!!g.Cx("yt-remote-cast-installed")},o0a=function(){var a=g.Cx("yt-remote-cast-receiver");
return a?a.friendlyName:null},p0a=function(){I8("clearCurrentReceiver");
g.Dx("yt-remote-cast-receiver")},q0a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.au("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},i0a=function(){var a=0<=g.zb().search(/ (CrMo|Chrome|CriOS)\//);
return g.mz||a},r0a=function(a,b){M8().init(a,b)},j0a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Bx("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Bx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Bx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.Dx("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ja("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},k0a=function(a,b){L8(!0);
J8(!1);r0a(a,function(c){c?(n0a(!0),g.cu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Dx("yt-remote-cast-available"),g.Dx("yt-remote-cast-receiver"),l0a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Bx("yt-remote-cast-installed",a)},P8=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},n0a=function(a){I8("setApiReady_ "+a);
g.Ja("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ja("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.dl=!1;this.N=this.C=this.i=this.B=0;this.u=NaN;this.j=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.dl=!1;a.hasNext=!1;a.J=0;a.I=g.Ua();a.B=0;a.i=0;a.C=0;a.N=0;a.u=NaN;a.j=!1},U8=function(a){return a.Ic()?(g.Ua()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Ua()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ua()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Jf(a.trackData);b.hasPrevious=a.dl;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.N;b.liveIngestionTime=a.u;return b},$8=function(a,b){g.Mw.call(this);
this.u=0;this.B=a;this.I=[];this.C=new s_a;this.j=this.i=null;this.W=(0,g.Sa)(this.IV,this);this.J=(0,g.Sa)(this.vx,this);this.N=(0,g.Sa)(this.HV,this);this.Y=(0,g.Sa)(this.PV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.CH,this),s0a(this))):c=3;0!=c&&(b?this.CH(c):g.Ms((0,g.Sa)(function(){this.CH(c)},this),0));
(a=q0a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},a9=function(a){return new S8(a.B.getPlayerContextData())},s0a=function(a){g.wc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.B.subscribe(b,g.Ta(this.ZW,b),this))},a)},t0a=function(a){g.wc(a.I,function(b){this.B.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.C;
50>c.i.length+c.j.length&&a.C.j.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){t0a(a);
a.B.setPlayerContextData(Y8(b));s0a(a)},Z8=function(a,b){a.j&&(a.j.removeUpdateListener(a.W),a.j.removeMediaListener(a.J),a.vx(null));
a.j=b;a.j&&(c8("CP","Setting cast session: "+a.j.sessionId),a.j.addUpdateListener(a.W),a.j.addMediaListener(a.J),a.j.media.length&&a.vx(a.j.media[0]))},u0a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Sa)(function(d){this.ye("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.ye("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.Mw.call(this);var e=this;this.C=NaN;this.qa=!1;this.N=this.J=this.Y=this.oa=NaN;this.W=[];this.B=this.I=this.u=this.wc=this.i=null;this.Ga=a;this.xa=d;this.W.push(g.Ht(window,"beforeunload",function(){e.Ns(2)}));
this.j=[];this.wc=new S8;this.Ha=b.id;this.va=b.idType;this.i=v0a(this,c);this.i.subscribe("handlerOpened",this.MV,this);this.i.subscribe("handlerClosed",this.JV,this);this.i.subscribe("handlerError",this.KV,this);this.i.subscribe("handlerMessage",this.LV,this);this.i.VB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.wc.videoId;g.Ex()&&g.Bx("yt-remote-session-video-id",f)},this)},w0a=function(a){return g.Zb(a.j,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},v0a=function(a,b){return new W7($7(a.Ga,"/bc"),b,!1,function(){return a.HJ()},"shortLived"==a.va)},j9=function(a,b){a.Z("proxyStateChange",b)},x0a=function(a){a.C=g.Ms(function(){i9("Connecting timeout");
a.Ns(1)},2E4)},k9=function(a){g.Os(a.C);
a.C=NaN},l9=function(a){g.Os(a.oa);
a.oa=NaN},y0a=function(a){m9(a);
a.Y=g.Ms(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Os(a.Y);
a.Y=NaN},A0a=function(a,b){var c=null;
if(b){var d=w0a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ja("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.C);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.QL()&&a.wc.reset(),j9(a,1),n9(a,"getNowPlaying"),z0a(a)):a.Ns(1)},B0a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.wc.videoId&&(g.Df(b.params)?a.wc.trackData=null:a.wc.trackData=b.params,a.Z("remotePlayerChange"))},C0a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.wc.listId=b.params.listId||a.wc.listId;X8(a.wc,d,e);a.Z("remoteQueueChange",c)},E0a=function(a,b){b.params=b.params||{};
C0a(a,b,"NOW_PLAYING_MAY_CHANGE");D0a(a,b);a.Z("autoplayDismissed")},D0a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.wc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.wc.playerState&&(c=-1E3);a.wc.playerState=c;c=Number(b.params.loadedTime);a.wc.N=isNaN(c)?0:c;a.wc.Zj(Number(b.params.duration));c=a.wc;var d=Number(b.params.liveIngestionTime);c.u=d;c.j=isNaN(d)?!1:!0;c=a.wc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.wc.playerState?y0a(a):m9(a);a.Z("remotePlayerChange")},F0a=function(a,b){if(-1E3!=a.wc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.wc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.wc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},G0a=function(a,b){var c="true"==b.params.muted;
a.wc.volume=parseInt(b.params.volume,10);a.wc.muted=c;a.Z("remotePlayerChange")},H0a=function(a,b){a.I=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},I0a=function(a,b){var c="true"==b.params.hasNext;
a.wc.dl="true"==b.params.hasPrevious;a.wc.hasNext=c;a.Z("previousNextChange")},z0a=function(a){g.Os(a.N);
a.N=g.Ms(function(){a.Ns(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.mj(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Ye=a;this.i=[];this.i.push(this.Ye.$_s("screenChange",(0,g.Sa)(this.dS,this)));this.i.push(this.Ye.$_s("onlineScreenChange",(0,g.Sa)(this.HW,this)))},M0a=function(a,b){EZa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;wZa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),FZa()&&(p9.i="/api/loungedev"));q9||(q9=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ja("yt.mdx.remote.deferredProxies_",q9,void 0));J0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ja("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ja("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);m0a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ja("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.mj(b)),u9.push(g.au("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.au("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.au("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.au("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.au("yt-remote-cast2-session-change",K0a)),u9.push(g.au("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),p0a())})),u9.push(g.au("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.mj(a)),a?(g.Bx("yt-remote-session-app",a.app),g.Bx("yt-remote-session-name",a.name)):(g.Dx("yt-remote-session-app"),g.Dx("yt-remote-session-name")),g.Ja("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||L0a())}},N0a=function(){var a=r9().Ye.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return vZa(a)},A9=function(){var a=O0a();
!a&&O8()&&o0a()&&(a={key:"cast-selector-receiver",name:o0a()});return a},O0a=function(){var a=N0a(),b=y9();
b||(b=w9());return g.Zb(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Kh();return h7(b,a)},K0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.VB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ka("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},P0a=function(a){g.Ja("yt.mdx.remote.currentScreenId_",a,void 0)},Q0a=function(){return g.Ka("yt.mdx.remote.connectData_")},v9=function(a){g.Ja("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ka("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||P0a("");g.Ja("yt.mdx.remote.connection_",a,void 0);q9&&(g.wc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.Ex();
if(!a)return null;var b=r9();if(!b)return null;b=b.Kh();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{P0a(a.id);var c=g.Ka("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,Q0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},L0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),p0a(),t9("Skipping connecting because no session screen found."))},J0a=function(){var a=x9();
if(g.Df(a)){a=k7();var b=g.Cx("yt-remote-session-name")||"",c=g.Cx("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ja("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.G.call(this);
var d=this;this.j=a;this.G=b;this.Vb=c;this.events=new g.eC(this);this.Y=this.events.S(this.G,"onVolumeChange",function(e){R0a(d,e)});
this.C=!1;this.I=new g.XI(64);this.i=new g.J(this.rP,500,this);this.u=new g.J(this.sP,1E3,this);this.N=new t7(this.FZ,0,this);this.B={};this.W=new g.J(this.XP,1E3,this);this.J=new u7(this.seekTo,1E3,this);g.H(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.qW);this.events.S(b,"captionschanged",this.FV);this.events.S(b,"captionssettingschanged",this.xP);this.events.S(b,"videoplayerreset",this.nB);this.events.S(b,"mdxautoplaycancel",function(){d.Vb.lL()});
a=this.Vb;a.isDisposed();a.subscribe("proxyStateChange",this.eO,this);a.subscribe("remotePlayerChange",this.zx,this);a.subscribe("remoteQueueChange",this.nB,this);a.subscribe("previousNextChange",this.bO,this);a.subscribe("nowAutoplaying",this.VN,this);a.subscribe("autoplayDismissed",this.yN,this);g.H(this,this.i);g.H(this,this.u);g.H(this,this.N);g.H(this,this.W);g.H(this,this.J);this.xP();this.nB();this.zx()},R0a=function(a,b){if(J9(a)){a.Vb.unsubscribe("remotePlayerChange",a.zx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Vb);if(c!==d.volume||b!==d.muted)a.Vb.setVolume(c,b),a.W.start();a.Vb.subscribe("remotePlayerChange",a.zx,a)}},S0a=function(a){a.Rb(0);
a.i.stop();a.Wb(new g.XI(64))},K9=function(a,b){if(J9(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Lf(c,b));a.Vb.GJ(a.G.getVideoData(1).videoId,c);a.B=a9(a.Vb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Vb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,lZa(c));a.Wb(new g.XI(1))},T0a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{nM:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Vb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",V:{role:"dialog"},U:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",U:[{D:"div",K:"ytp-mdx-popup-title",ma:"\u041e\u0434\u0458\u0430\u0432\u0459\u0435\u043d\u0438 \u0441\u0442\u0435"},{D:"div",K:"ytp-mdx-popup-description",ma:"\u0412\u0438\u0434\u0435\u043e \u0441\u043d\u0438\u043c\u0446\u0438 \u043a\u043e\u0458\u0435 \u0433\u043b\u0435\u0434\u0430\u0442\u0435 \u043c\u043e\u0433\u0443 \u0434\u0430 \u0441\u0435 \u0434\u043e\u0434\u0430\u0458\u0443 \u0443 \u0438\u0441\u0442\u043e\u0440\u0438\u0458\u0443 \u0433\u043b\u0435\u0434\u0430\u045a\u0430 \u043d\u0430 \u0422\u0412-\u0443 \u0438 \u0434\u0430 \u0443\u0442\u0438\u0447\u0443 \u043d\u0430 \u043f\u0440\u0435\u043f\u043e\u0440\u0443\u043a\u0435 \u043d\u0430 \u0422\u0412-\u0443. \u0414\u0430 \u0431\u0438\u0441\u0442\u0435 \u0442\u043e \u0441\u043f\u0440\u0435\u0447\u0438\u043b\u0438, \u043e\u0442\u043a\u0430\u0436\u0438\u0442\u0435 \u0438 \u043f\u0440\u0438\u0458\u0430\u0432\u0438\u0442\u0435 \u0441\u0435 \u043d\u0430 YouTube \u0441\u0430 \u0441\u0432\u043e\u0433 \u0440\u0430\u0447\u0443\u043d\u0430\u0440\u0430."},
{D:"div",K:"ytp-mdx-privacy-popup-buttons",U:[{D:"button",Fa:["ytp-button","ytp-mdx-privacy-popup-cancel"],ma:"\u041e\u0442\u043a\u0430\u0436\u0438"},{D:"button",Fa:["ytp-button","ytp-mdx-privacy-popup-confirm"],ma:"\u041f\u043e\u0442\u0432\u0440\u0434\u0438"}]}]}]});this.i=new g.TK(this,250);this.cancelButton=this.Ca("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ca("ytp-mdx-privacy-popup-confirm");g.H(this,this.i);this.S(this.cancelButton,"click",this.j);this.S(this.confirmButton,"click",
this.u)},N9=function(a){g.V.call(this,{D:"div",
K:"ytp-remote",U:[{D:"div",K:"ytp-remote-display-status",U:[{D:"div",K:"ytp-remote-display-status-icon",U:[g.uya()]},{D:"div",K:"ytp-remote-display-status-text",ma:"{{statustext}}"}]}]});this.api=a;this.i=new g.TK(this,250);g.H(this,this.i);this.S(a,"presentingplayerstatechange",this.onStateChange);U0a(this,a.yb())},U0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.rH("\u0413\u0440\u0435\u0448\u043a\u0430 \u043d\u0430 $RECEIVER_NAME",c):b.Ic()||g.U(b,4)?g.rH("\u0420\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0443\u0458\u0435 \u0441\u0435 \u043d\u0430 $RECEIVER_NAME",c):g.rH("\u041f\u043e\u0432\u0435\u0437\u0430\u043d \u043d\u0430 $RECEIVER_NAME",c);a.La("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.pQ.call(this,"\u041f\u0443\u0441\u0442\u0438 \u043d\u0430",0,a,b);
this.G=a;this.Xo={};this.S(a,"onMdxReceiversChange",this.C);this.S(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.mN.call(this,a);
this.rl={key:f7(),name:"\u041e\u0432\u0430\u0458 \u0440\u0430\u0447\u0443\u043d\u0430\u0440"};this.xi=null;this.subscriptions=[];this.XG=this.Vb=null;this.Xo=[this.rl];this.Jn=this.rl;this.Fd=new g.XI(64);this.LM=0;this.Cf=-1;this.Ix=!1;this.Gx=this.Tt=null;if(!g.kE(this.player.T())&&!g.lE(this.player.T())){a=this.player;var b=g.PM(a);b&&(b=b.oo())&&(b=new O9(a,b),g.H(this,b));b=new N9(a);g.H(this,b);g.ZM(a,b.element,4);this.Tt=new M9;g.H(this,this.Tt);g.ZM(a,this.Tt.element,4);this.Ix=!!w9()}},Q9=
function(a){a.Gx&&(a.player.removeEventListener("presentingplayerstatechange",a.Gx),a.Gx=null)},V0a=function(a,b,c){a.Fd=c;
a.player.Z("presentingplayerstatechange",new g.$G(c,b))},R9=function(a,b){if(b.key!==a.Jn.key)if(b.key===a.rl.key)C9();
else{var c;(c=!a.player.T().L("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Ix||!a.Tt);(c?0:g.AE(a.player.T())||g.DE(a.player.T()))&&W0a(a);a.Jn=b;if(!a.player.T().L("disable_mdx_connection_in_mdx_module_for_music_web")||!g.lE(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.T().L("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.gN(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=lZa(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.mj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Kh(),(b=h7(a,b.key))&&D9(b,1))}}},W0a=function(a){a.player.yb().Ic()?a.player.pauseVideo():(a.Gx=function(b){!a.Ix&&g.bH(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.Gx));
a.Tt&&a.Tt.kd();z9()||(H9=!0)};
g.ad.prototype.C=g.ca(0,function(){var a=g.ed(this);return 4294967296*g.ed(this)+(a>>>0)});
var HYa=g.Ge(function(a,b,c){if(1!==a.j)return!1;g.C(b,c,g.md(a));return!0},g.Je),ZYa=g.Ge(function(a,b,c,d){if(1!==a.j)return!1;
g.Td(b,c,d,g.md(a));return!0},g.Je),IYa=g.Ge(function(a,b,c){if(0!==a.j)return!1;
g.C(b,c,g.cd(a.i));return!0},g.Ke),YYa=g.Ge(function(a,b,c,d){if(0!==a.j)return!1;
g.Td(b,c,d,g.cd(a.i));return!0},g.Ke),QYa=g.Ge(function(a,b,c){if(0!==a.j)return!1;
g.C(b,c,g.dd(a.i));return!0},g.Le),VYa=g.Ge(function(a,b,c,d){if(0!==a.j)return!1;
g.Td(b,c,d,g.dd(a.i));return!0},g.Le),cZa=g.Ge(function(a,b,c){if(1!==a.j)return!1;
g.C(b,c,a.i.C());return!0},function(a,b,c){AYa(a,c,g.Ld(b,c))}),eZa=g.Ge(function(a,b,c){if(1!==a.j&&2!==a.j)return!1;
b=g.Nd(b,c);if(2==a.j){c=g.ad.prototype.C;var d=g.dd(a.i)>>>0;for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.C());return!0},function(a,b,c){b=g.Nd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)AYa(a,c,b[d])}),NYa=g.Ge(function(a,b,c){if(0!==a.j)return!1;
g.C(b,c,g.fd(a.i));return!0},BYa),WYa=g.Ge(function(a,b,c,d){if(0!==a.j)return!1;
g.Td(b,c,d,g.fd(a.i));return!0},BYa),dZa=g.Ge(function(a,b,c){if(2!==a.j)return!1;
a=g.od(a);g.Kd(b);g.Nd(b,c).push(a);return!0},function(a,b,c){b=g.Nd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Ad(a,c,g.ib(e))}}),UYa=g.Ge(function(a,b,c,d){if(2!==a.j)return!1;
g.Td(b,c,d,g.od(a));return!0},g.Ne),aZa=g.Ge(function(a,b,c,d,e){if(2!==a.j)return!1;
g.ld(a,g.Ud(b,d,c),e);return!0},g.Oe),EYa=[1];
g.v(FYa,g.E);g.v(GYa,g.E);g.v(LYa,g.E);g.v(MYa,g.E);var SYa=[1,2];g.v(PYa,g.E);var XZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},rZa={d0:"atp",Aca:"ska",eba:"que",R9:"mus",zca:"sus",D5:"dsp",Fba:"seq",u9:"mic",z4:"dpa",u0:"cds",P9:"mlm",w4:"dsdtr",x$:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",LZa=GZa("loadCastFramework")||GZa("loadCastApplicationFramework"),NZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(t7,g.G);g.k=t7.prototype;g.k.RR=function(a){this.B=arguments;this.i=!1;this.Ob?this.u=g.Ua()+this.Zf:this.Ob=g.Gi(this.C,this.Zf)};
g.k.stop=function(){this.Ob&&(g.B.clearTimeout(this.Ob),this.Ob=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.j};
g.k.resume=function(){this.j&&(--this.j,!this.j&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.k.ra=function(){this.stop();t7.xe.ra.call(this)};
g.k.SR=function(){this.Ob&&(g.B.clearTimeout(this.Ob),this.Ob=null);this.u?(this.Ob=g.Gi(this.C,this.u-g.Ua()),this.u=null):this.j?this.i=!0:(this.i=!1,this.I.apply(null,this.B))};g.v(u7,g.G);g.k=u7.prototype;g.k.BJ=function(a){this.u=arguments;this.Ob||this.j?this.i=!0:v7(this)};
g.k.stop=function(){this.Ob&&(g.B.clearTimeout(this.Ob),this.Ob=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.j++};
g.k.resume=function(){this.j--;this.j||!this.i||this.Ob||(this.i=!1,v7(this))};
g.k.ra=function(){g.G.prototype.ra.call(this);this.stop()};w7.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var y7=new g.bg;g.v(SZa,g.ef);g.k=A7.prototype;g.k.Ep=null;g.k.dn=!1;g.k.Mu=null;g.k.uI=null;g.k.Yt=null;g.k.Au=null;g.k.Dn=null;g.k.ap=null;g.k.Uq=null;g.k.Qf=null;g.k.xC=0;g.k.gk=null;g.k.uC=null;g.k.vn=null;g.k.uv=-1;g.k.gP=!0;g.k.Vp=!1;g.k.pD=0;g.k.IB=null;var VZa={},D7={};g.k=A7.prototype;g.k.setTimeout=function(a){this.j=a};
g.k.TR=function(a){a=a.target;var b=this.IB;b&&3==g.Uj(a)?b.BJ():this.fQ(a)};
g.k.fQ=function(a){try{if(a==this.Qf)a:{var b=g.Uj(this.Qf),c=this.Qf.j,d=this.Qf.getStatus();if(g.Nc&&!g.Gc(10)||g.jf&&!g.Ec("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Zj(this.Qf))break a;this.Vp||4!=b||7==c||(8==c||0>=d?this.i.Pj(3):this.i.Pj(2));H7(this);var e=this.Qf.getStatus();this.uv=e;var f=g.Zj(this.Qf);if(this.dn=200==e){4==b&&E7(this);if(this.C){for(a=!0;!this.Vp&&this.xC<f.length;){var h=WZa(this,f);if(h==D7){4==b&&(this.vn=4,z7(15),a=!1);break}else if(h==VZa){this.vn=4;z7(16);a=!1;
break}else I7(this,h)}4==b&&0==f.length&&(this.vn=1,z7(17),a=!1);this.dn=this.dn&&a;a||(E7(this),F7(this))}else I7(this,f);this.dn&&!this.Vp&&(4==b?this.i.bz(this):(this.dn=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.vn=3,z7(13)):(this.vn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Qf&&g.Zj(this.Qf)}finally{}};
g.k.XX=function(a){x7((0,g.Sa)(this.WX,this,a),0)};
g.k.WX=function(a){this.Vp||(H7(this),I7(this,a),C7(this))};
g.k.mO=function(a){x7((0,g.Sa)(this.VX,this,a),0)};
g.k.VX=function(a){this.Vp||(E7(this),this.dn=a,this.i.bz(this),this.i.Pj(4))};
g.k.cancel=function(){this.Vp=!0;E7(this)};
g.k.eY=function(){this.Mu=null;var a=Date.now();0<=a-this.uI?(2!=this.Au&&this.i.Pj(3),E7(this),this.vn=2,z7(18),F7(this)):ZZa(this,this.uI-a)};
g.k.getLastError=function(){return this.vn};g.k=b_a.prototype;g.k.qD=null;g.k.wh=null;g.k.JB=!1;g.k.tP=null;g.k.Rz=null;g.k.SF=null;g.k.rD=null;g.k.oi=null;g.k.Nl=-1;g.k.vv=null;g.k.Lv=null;g.k.connect=function(a){this.rD=a;a=K7(this.i,null,this.rD);z7(3);this.tP=Date.now();var b=this.i.N;null!=b?(this.vv=b[0],(this.Lv=b[1])?(this.oi=1,c_a(this)):(this.oi=2,M7(this))):(X6(a,"MODE","init"),this.wh=new A7(this,void 0,void 0,void 0),this.wh.Ep=this.qD,B7(this.wh,a,!1,null,!0),this.oi=0)};
g.k.JS=function(a){if(a)this.oi=2,M7(this);else{z7(4);var b=this.i;b.Bk=b.Hn.Nl;T7(b,9)}a&&this.Pj(2)};
g.k.wE=function(a){return this.i.wE(a)};
g.k.abort=function(){this.wh&&(this.wh.cancel(),this.wh=null);this.Nl=-1};
g.k.zf=function(){return!1};
g.k.fO=function(a,b){this.Nl=a.uv;if(0==this.oi)if(b){try{var c=this.j.parse(b)}catch(d){a=this.i;a.Bk=this.Nl;T7(a,2);return}this.vv=c[0];this.Lv=c[1]}else a=this.i,a.Bk=this.Nl,T7(a,2);else if(2==this.oi)if(this.JB)z7(7),this.SF=Date.now();else if("11111"==b){if(z7(6),this.JB=!0,this.Rz=Date.now(),a=this.Rz-this.tP,!g.Nc||g.Gc(10)||500>a)this.Nl=200,this.wh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.Rz=this.SF=Date.now(),this.JB=!1};
g.k.bz=function(){this.Nl=this.wh.uv;if(this.wh.dn)0==this.oi?this.Lv?(this.oi=1,c_a(this)):(this.oi=2,M7(this)):2==this.oi&&((!g.Nc||g.Gc(10)?!this.JB:200>this.SF-this.Rz)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.oi?z7(9):2==this.oi&&z7(10);var a=this.i;this.wh.getLastError();a.Bk=this.Nl;T7(a,2)}};
g.k.jy=function(){return this.i.jy()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Pj=function(a){this.i.Pj(a)};g.k=N7.prototype;g.k.Ak=null;g.k.jw=null;g.k.dh=null;g.k.Re=null;g.k.sD=null;g.k.Sz=null;g.k.AK=null;g.k.cz=null;g.k.jx=0;g.k.YU=0;g.k.Rf=null;g.k.Sn=null;g.k.Vl=null;g.k.fq=null;g.k.Hn=null;g.k.sC=null;g.k.Dt=-1;g.k.KM=-1;g.k.Bk=-1;g.k.Rs=0;g.k.As=0;g.k.Wp=8;g.Va(e_a,g.ef);g.Va(f_a,g.ef);g.k=N7.prototype;g.k.connect=function(a,b,c,d,e){z7(0);this.sD=b;this.jw=c||{};d&&void 0!==e&&(this.jw.OSID=d,this.jw.OAID=e);this.I?(x7((0,g.Sa)(this.WK,this,a),100),j_a(this)):this.WK(a)};
g.k.WK=function(a){this.Hn=new b_a(this);this.Hn.qD=this.Ak;this.Hn.j=this.C;this.Hn.connect(a)};
g.k.zf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.kO=function(a){this.Sn=null;n_a(this,a)};
g.k.jO=function(){this.Vl=null;this.Re=new A7(this,this.u,"rpc",this.J);this.Re.Ep=this.Ak;this.Re.pD=0;var a=this.AK.clone();g.Bl(a,"RID","rpc");g.Bl(a,"SID",this.u);g.Bl(a,"CI",this.sC?"0":"1");g.Bl(a,"AID",this.Dt);O7(this,a);if(!g.Nc||g.Gc(10))g.Bl(a,"TYPE","xmlhttp"),B7(this.Re,a,!0,this.cz,!1);else{g.Bl(a,"TYPE","html");var b=this.Re,c=!!this.cz;b.Au=3;b.Dn=W6(a.clone());YZa(b,c)}};
g.k.fO=function(a,b){if(0!=this.i&&(this.Re==a||this.dh==a))if(this.Bk=a.uv,this.dh==a&&3==this.i)if(7<this.Wp){try{var c=this.C.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Vl){if(this.Re)if(this.Re.Yt+3E3<this.dh.Yt)Q7(this),this.Re.cancel(),this.Re=null;else break a;S7(this);z7(19)}}else this.KM=a[1],0<this.KM-this.Dt&&37500>a[2]&&this.sC&&0==this.As&&!this.fq&&(this.fq=x7((0,g.Sa)(this.BV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Re==
a&&Q7(this),!g.nb(b))for(a=this.C.parse(b),b=0;b<a.length;b++)c=a[b],this.Dt=c[0],c=c[1],2==this.i?"c"==c[0]?(this.u=c[1],this.cz=c[2],c=c[3],null!=c?this.Wp=c:this.Wp=6,this.i=3,this.Rf&&this.Rf.SK(),this.AK=K7(this,this.jy()?this.cz:null,this.sD),o_a(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Rf&&this.Rf.RK(c),this.As=0)};
g.k.BV=function(){null!=this.fq&&(this.fq=null,this.Re.cancel(),this.Re=null,S7(this),z7(20))};
g.k.bz=function(a){if(this.Re==a){Q7(this);this.Re=null;var b=2}else if(this.dh==a)this.dh=null,b=1;else return;this.Bk=a.uv;if(0!=this.i)if(a.dn)if(1==b){b=Date.now()-a.Yt;var c=y7;c.dispatchEvent(new e_a(c,a.Uq?a.Uq.length:0,b,this.Rs));P7(this);this.B.length=0}else o_a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Bk)){if(d=1==b)this.dh||this.Sn||1==this.i||2<=this.Rs?d=!1:(this.Sn=x7((0,g.Sa)(this.kO,this,a),p_a(this,this.Rs)),this.Rs++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.k.nT=function(a){if(!g.cc(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.mZ=function(a){a?z7(2):(z7(1),q_a(this,8))};
g.k.wE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Oj;a.N=!1;return a};
g.k.isActive=function(){return!!this.Rf&&this.Rf.isActive(this)};
g.k.Pj=function(a){var b=y7;b.dispatchEvent(new f_a(b,a))};
g.k.jy=function(){return!(!g.Nc||g.Gc(10))};
g.k=r_a.prototype;g.k.SK=function(){};
g.k.RK=function(){};
g.k.QK=function(){};
g.k.hE=function(){};
g.k.DL=function(){return{}};
g.k.isActive=function(){return!0};g.k=s_a.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.j.length};
g.k.clear=function(){this.i=[];this.j=[]};
g.k.contains=function(a){return g.cc(this.i,a)||g.cc(this.j,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.ASa)(b,a);0<=c?(g.fc(b,c),b=!0):b=!1;return b||g.hc(this.j,a)};
g.k.Hi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.j.length;for(b=0;b<c;++b)a.push(this.j[b]);return a};t_a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.P("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Yi(c.value),c={serializedIncrementBatch:g.Jc(g.Fe(c,fZa))},g.Yu("streamzIncremented",c,{vH:b})}};var U7;g.Va(V7,g.G);g.k=V7.prototype;g.k.OX=function(){this.Zf=Math.min(3E5,2*this.Zf);this.u();this.j&&this.start()};
g.k.start=function(){var a=this.Zf+15E3*Math.random();g.gq(this.i,a);this.j=Date.now()+a};
g.k.stop=function(){this.i.stop();this.j=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Zf=5E3};g.Va(W7,r_a);g.k=W7.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.jg=function(a){return this.u.jg(a)};
g.k.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.k.dispose=function(){this.Y||(this.Y=!0,g.bf(this.u),w_a(this),g.bf(this.j),this.j=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.Y};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.j.stop();this.C=a||null;this.B=b||0;a=this.qa+"/test";b=this.qa+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.xa),e=this.i;e&&(e.Rf=null);d.Rf=this;this.i=d;X7(this);if(this.i){d=g.O("ID_TOKEN");var f=this.i.Ak||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Ak=f}e?(3!=e.getState()&&0==l_a(e)||e.getState(),this.i.connect(a,b,this.I,e.u,e.Dt)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Lf(a,b);this.j.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):Y7(this)&&(X7(this),k_a(this.i,a))};
g.k.SK=function(){this.j.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)k_a(this.i,a[b])}this.Z("handlerOpened")};
g.k.QK=function(a){var b=2==a&&401==this.i.Bk;4==a||b||this.j.start();this.Z("handlerError",a,b)};
g.k.hE=function(a,b){if(!this.j.isActive())this.Z("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.J.push(e)}this.va.i.UI("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ha.i.WC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Ka.i.WC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.DL=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.N&&(a.ui=""+this.N);this.C&&g.Lf(a,this.C);return a};
g.k.RK=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.j.start(),i_a(this.i)):this.Z("handlerMessage",new u_a(a[0],a[1]))};
g.k.VB=function(a){(this.I.loungeIdToken=a)||this.j.stop();if(this.Ga&&this.i){var b=this.i.Ak||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Ak=b}};
g.k.OY=function(){this.j.isActive();0==l_a(this.i)&&this.connect(this.C,this.B)};Z7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.C=function(a){a(Error("request timed out"))};var D_a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Va(g8,g.Mw);g8.prototype.Kh=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.I,a)};g.v(h8,g.Mw);g.k=h8.prototype;g.k.start=function(){!this.i&&isNaN(this.Ob)&&this.yO()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Ob)||(g.Os(this.Ob),this.Ob=NaN)};
g.k.ra=function(){this.stop();g.Mw.prototype.ra.call(this)};
g.k.yO=function(){this.Ob=NaN;this.i=g.Ss($7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Sa)(this.VR,this),onError:(0,g.Sa)(this.UR,this),onTimeout:(0,g.Sa)(this.WR,this)})};
g.k.VR=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.I;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new b7(a),b)};
g.k.UR=function(a){this.i=null;a.status&&404==a.status?this.j>=X0a.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=X0a[this.j],this.Ob=g.Ms((0,g.Sa)(this.yO,this),a),this.j++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.k.WR=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var X0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(j8,g8);g.k=j8.prototype;g.k.start=function(){i8(this)&&this.Z("screenChange");!g.Cx("yt-remote-lounge-token-expiration")&&H_a(this);g.Os(this.i);this.i=g.Ms((0,g.Sa)(this.start,this),1E4)};
g.k.add=function(a,b){i8(this);E_a(this,a);k8(this,!1);this.Z("screenChange");b(a);a.token||H_a(this)};
g.k.remove=function(a,b){var c=i8(this);G_a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.k.qC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.k.ra=function(){g.Os(this.i);j8.xe.ra.call(this)};
g.k.NT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.I,"Missed "+b+" lounge tokens.")};
g.k.LT=function(a){c8(this.I,"Requesting lounge tokens failed: "+a)};g.v(m8,g.Mw);g.k=m8.prototype;g.k.start=function(){var a=parseInt(g.Cx("yt-remote-fast-check-period")||"0",10);(this.B=g.Ua()-144E5<a?0:a)?p8(this):(this.B=g.Ua()+3E5,g.Bx("yt-remote-fast-check-period",this.B),this.kH())};
g.k.isEmpty=function(){return g.Df(this.i)};
g.k.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.rf(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.k.ra=function(){g.Os(this.u);this.u=NaN;this.j&&(this.j.abort(),this.j=null);g.Mw.prototype.ra.call(this)};
g.k.kH=function(){g.Os(this.u);this.u=NaN;this.j&&this.j.abort();var a=J_a(this);if(Y6(a)){var b=$7(this.C,"/pairing/get_screen_availability");this.j=a8(this.C,b,{lounge_token:g.yf(a).join(",")},(0,g.Sa)(this.tX,this,a),(0,g.Sa)(this.sX,this))}else o8(this,{}),p8(this)};
g.k.tX=function(a,b){this.j=null;var c=g.yf(J_a(this));if(g.uc(c,g.yf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.ye("Changing Screen set during request."),this.kH()};
g.k.sX=function(a){this.ye("Screen availability failed: "+a);this.j=null;p8(this)};
g.k.ye=function(a){c8("OnlineScreenService",a)};g.Va(q8,g8);g.k=q8.prototype;g.k.start=function(){this.j.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.k.add=function(a,b,c){this.j.add(a,b,c)};
g.k.remove=function(a,b,c){this.j.remove(a,b,c);this.i.update()};
g.k.qC=function(a,b,c,d){this.j.contains(a)?this.j.qC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.I,a),d(Error(a)))};
g.k.Kh=function(a){return a?this.screens:g.jc(this.screens,g.Ko(this.u,function(b){return!this.contains(b)},this))};
g.k.CJ=function(){return g.Ko(this.Kh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.DJ=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.bf(l);e(r8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.bf(l);f(m)});
l.start();return(0,g.Sa)(l.stop,l)};
g.k.XR=function(a,b,c,d){g.Ss($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Sa)(function(e,f){e=new b7(f.screen||{});if(!e.name||N_a(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);N_a(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Sa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Sa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.bf(this.j);g.bf(this.i);q8.xe.ra.call(this)};
g.k.XT=function(){P_a(this);this.Z("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Va(t8,g.Mw);g.k=t8.prototype;g.k.getScreen=function(){return this.B};
g.k.Dg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.k.info=function(a){c8(this.xa,a)};
g.k.EJ=function(){return null};
g.k.BH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Sa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Sa)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.BH("");t8.xe.ra.call(this)};g.v(w8,t8);g.k=w8.prototype;g.k.zH=function(a){if(this.j){if(this.j==a)return;v8(this,"Overriding cast session with new session object");Y_a(this);this.qa=!1;this.W="unknown";this.j.removeUpdateListener(this.oa);this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.va)}this.j=a;this.j.addUpdateListener(this.oa);this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.va);U_a(this,"getMdxSessionStatus")};
g.k.Et=function(a){this.info("launchWithParams no-op for Cast: "+g.mj(a))};
g.k.stop=function(){this.j?this.j.stop((0,g.Sa)(function(){this.Dg()},this),(0,g.Sa)(function(){this.Dg(Error("Failed to stop receiver app."))},this)):this.Dg(Error("Stopping cast device without session."))};
g.k.BH=function(){};
g.k.ra=function(){this.info("disposeInternal");Y_a(this);this.j&&(this.j.removeUpdateListener(this.oa),this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.va));this.j=null;t8.prototype.ra.call(this)};
g.k.iY=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.mj(b)),a){case "mdxSessionStatus":S_a(this,b);break;case "loungeToken":V_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.k.RL=function(a,b,c,d){g.Os(this.N);this.N=0;M_a(this.u,this.i.label,a,this.i.friendlyName,(0,g.Sa)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Ms((0,g.Sa)(this.RL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.EJ=function(){return this.j};
g.k.YR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Dg())};g.v(z8,t8);g.k=z8.prototype;g.k.zH=function(a){this.j=a;this.j.addUpdateListener(this.Ga)};
g.k.Et=function(a){this.Ha=a;this.Y()};
g.k.stop=function(){e0a(this);this.j?this.j.stop((0,g.Sa)(this.Dg,this,null),(0,g.Sa)(this.Dg,this,"Failed to stop DIAL device.")):this.Dg()};
g.k.ra=function(){e0a(this);this.j&&this.j.removeUpdateListener(this.Ga);this.j=null;t8.prototype.ra.call(this)};
g.k.ZR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.C(),this.C=function(){},this.Dg())};g.v(D8,t8);D8.prototype.stop=function(){this.Dg()};
D8.prototype.zH=function(){};
D8.prototype.Et=function(){g.Os(this.j);this.j=NaN;var a=h7(this.u.Kh(),this.i.label);a?u8(this,a):this.Dg(Error("No such screen"))};
D8.prototype.ra=function(){g.Os(this.j);this.j=NaN;t8.prototype.ra.call(this)};g.v(E8,g.Mw);g.k=E8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Sa)(this.eX,this);c=new chrome.cast.ApiConfig(c,(0,g.Sa)(this.gO,this),e,d,a);c.customDialLaunchCallback=(0,g.Sa)(this.XV,this);
chrome.cast.initialize(c,(0,g.Sa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.C),A_a(),this.j.subscribe("onlineScreenChange",(0,g.Sa)(this.FJ,this)),this.u=h0a(this),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Sa)(function(f){this.ye("Failed to set initial custom receivers: "+g.mj(f))},this)),this.Z("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Sa)(function(f){this.ye("Failed to initialize API: "+g.mj(f));
b(!1)},this))};
g.k.SY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.j.Kh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=f0a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Sa)(function(d){this.ye("Failed to set initial custom receivers: "+g.mj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.j,a),!0)}this.i.BH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.k.TY=function(a){this.isDisposed()?this.ye("Setting connection data on disposed cast v2"):this.i?this.i.Et(a):this.ye("Setting connection data without a session")};
g.k.bS=function(){this.isDisposed()?this.ye("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Sa)(this.gO,this),(0,g.Sa)(this.wX,this))};
g.k.ra=function(){this.j.unsubscribe("onlineScreenChange",(0,g.Sa)(this.FJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=x_a,b=g.Ka("yt.mdx.remote.debug.handlers_");g.hc(b||[],a);g.bf(this.i);g.Mw.prototype.ra.call(this)};
g.k.ye=function(a){c8("Controller",a)};
g.k.iO=function(a,b){this.i==a&&(b||H8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.k.bX=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.j,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.j,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.j,a,this.config_));break;default:this.ye("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.ye("Stopping receiver w/o session: "+a.friendlyName)}else this.ye("onReceiverAction_ called without receiver.")};
g.k.XV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.ye("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.ye("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.ye('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.j,b,this.B,this.config_))}b=this.i;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=b0a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ws(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=c0a(b,c)):a=c0a(b,c)):a=C8(b);return a};
g.k.gO=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.j,c,this.config_),!0);else{this.ye("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.j.Kh(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.bf(this.i),this.i=new w8(this.j,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Sa)(this.iO,this,this.i)),this.i.subscribe("sessionFailed",function(){return g0a(b,b.i)}),this.i.Et(null));
this.i.zH(a)}}};
g.k.aS=function(){return this.i?this.i.EJ():null};
g.k.wX=function(a){this.isDisposed()||(this.ye("Failed to estabilish a session: "+g.mj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.k.eX=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.Z("yt-remote-cast2-availability-change",G8(this))}};
g.k.FJ=function(){this.isDisposed()||(this.u=h0a(this),F8("Updating custom receivers: "+g.mj(this.u)),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Sa)(function(){this.ye("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.TY;E8.prototype.setConnectedScreenStatus=E8.prototype.SY;E8.prototype.stopSession=E8.prototype.bS;E8.prototype.getCastSession=E8.prototype.aS;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.k=S8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.dl=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.N=a.loadedTime,this.u=a.liveIngestionTime,this.j=
!isNaN(this.u))};
g.k.Ic=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Zj=function(a){this.C=isNaN(a)?0:a};
g.k.getDuration=function(){return this.j?this.C+U8(this):this.C};
g.k.clone=function(){return new S8(Y8(this))};g.v($8,g.Mw);g.k=$8.prototype;g.k.getState=function(){return this.u};
g.k.play=function(){b9(this)?(this.i?this.i.play(null,g.La,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.play)};
g.k.pause=function(){b9(this)?(this.i?this.i.pause(null,g.La,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.pause)};
g.k.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Ic()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.La,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.Z("remotePlayerChange")}else c9(this,g.Ta(this.seekTo,a))};
g.k.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.La,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.stop)};
g.k.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.j){if(c.volume!=a){var d=Math.round(a)/100;this.j.setReceiverVolumeLevel(d,(0,g.Sa)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Sa)(function(){this.ye("failed to set receiver volume.")},this))}c.muted!=b&&this.j.setReceiverMuted(b,(0,g.Sa)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Sa)(function(){this.ye("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ta(this.setVolume,a,b))};
g.k.GJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.mj(b.style),g.Lf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ta(this.GJ,a,b))};
g.k.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ta(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.mj(h));f9(this,"setPlaylist",m);d||d9(this,l)};
g.k.BB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ta(this.BB,a,b))};
g.k.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ta(this.nextVideo,a,b))};
g.k.Es=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.Es)};
g.k.lL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.lL)};
g.k.dispose=function(){if(3!=this.u){var a=this.u;this.u=3;this.Z("proxyStateChange",a,this.u)}g.Mw.prototype.dispose.call(this)};
g.k.ra=function(){t0a(this);this.B=null;this.C.clear();Z8(this,null);g.Mw.prototype.ra.call(this)};
g.k.CH=function(a){if((a!=this.u||2==a)&&3!=this.u&&0!=a){var b=this.u;this.u=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,0===b.i.length&&(b.i=b.j,b.i.reverse(),b.j=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.ZW=function(a,b){this.Z(a,b)};
g.k.IV=function(a){if(!a)this.vx(null),Z8(this,null);else if(this.j.receiver.volume){a=this.j.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.k.vx=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.N);if(this.i=a)this.i.addUpdateListener(this.N),u0a(this),this.Z("remotePlayerChange")};
g.k.HV=function(a){a?(u0a(this),this.Z("remotePlayerChange")):this.vx(null)};
g.k.WH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.PV=function(){var a=q0a();a&&Z8(this,a)};
g.k.ye=function(a){c8("CP",a)};g.v(h9,g.Mw);g.k=h9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.xa&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.wc.listId=c);this.wc.videoId=d;this.wc.index=l||0;this.wc.state=3;V8(this.wc,
n);this.B="UNSUPPORTED";c=this.xa?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.mj(m));this.i.connect({method:c,params:g.mj(m)},a,zZa())}else i9("Connecting without params"),this.i.connect({},a,zZa());x0a(this)};
g.k.VB=function(a){this.i.VB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ja("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),j9(this,3));g.Mw.prototype.dispose.call(this)};
g.k.ra=function(){k9(this);m9(this);l9(this);g.Os(this.J);this.J=NaN;g.Os(this.N);this.N=NaN;this.u=null;g.It(this.W);this.W.length=0;this.i.dispose();g.Mw.prototype.ra.call(this);this.B=this.I=this.j=this.wc=this.i=null};
g.k.MV=function(){var a=this;i9("Channel opened");this.qa&&(this.qa=!1,l9(this),this.oa=g.Ms(function(){i9("Timing out waiting for a screen.");a.Ns(1)},15E3));
DZa(v_a(this.i),this.Ha)};
g.k.JV=function(){i9("Channel closed");isNaN(this.C)?m7(!0):m7();this.dispose()};
g.k.KV=function(a,b){m7();isNaN(this.Dw())?(b&&"shortLived"==this.va&&this.Z("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.qa=!0,i9("Channel error: "+a+" with reconnection in "+this.Dw()+" ms"),j9(this,2))};
g.k.wM=function(a){if(!this.j||0===this.j.length)return!1;for(var b=g.q(this.j),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.LV=function(a){a.params?i9("Received: action="+a.action+", params="+g.mj(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.j=g.qn(a,function(c){return new a7(c)});
a=!!g.Zb(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
A0a(this,a);a=this.wM("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.ic(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
A0a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.Zb(this.j,function(c){return c.equals(b)})||mZa(this.j,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.ic(this.j,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":C0a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":E0a(this,a);break;case "onStateChange":D0a(this,a);break;case "onAdStateChange":F0a(this,a);break;case "onVolumeChanged":G0a(this,a);break;case "onSubtitlesTrackChanged":B0a(this,a);break;case "nowAutoplaying":H0a(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.Z("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":I0a(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.k.FT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Dw())?Y7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Ns=function(a){i9("Disconnecting with "+a);g.Ja("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.Z("beforeDisconnect",a);1==a&&m7();w_a(this.i,a);this.dispose()};
g.k.DT=function(){var a=this.wc;this.u&&(a=this.wc.clone(),X8(a,this.u,a.index));return Y8(a)};
g.k.UY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.wc.videoId&&(this.u=c.videoId,g.Os(this.J),this.J=g.Ms(function(){if(b.u){var e=b.u;b.u=null;b.wc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.wc.listId==c.listId&&this.wc.videoId==c.videoId&&this.wc.index==c.index||d.push("remoteQueueChange");this.wc.playerState==c.playerState&&this.wc.volume==c.volume&&this.wc.muted==c.muted&&W8(this.wc)==W8(c)&&g.mj(this.wc.trackData)==g.mj(c.trackData)||d.push("remotePlayerChange");this.wc.reset(a);g.wc(d,function(e){this.Z(e)},this)};
g.k.QL=function(){var a=this.i.I.id,b=g.Zb(this.j,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Dw=function(){var a=this.i;return a.j.isActive()?a.j.j-Date.now():NaN};
g.k.AT=function(){return this.B||"UNSUPPORTED"};
g.k.BT=function(){return this.I||""};
g.k.cS=function(){if(!isNaN(this.Dw())){var a=this.i.j;g.hq(a.i);a.start()}};
g.k.RY=function(a,b){n9(this,a,b);z0a(this)};
g.k.HJ=function(){var a=g.bt("SID","")||"",b=g.bt("SAPISID","")||"",c=g.bt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Jc(g.jb(a),2);b=g.Jc(g.jb(b),2);c=g.Jc(g.jb(c),2);return g.Jc(g.jb(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.jg;h9.prototype.getProxyState=h9.prototype.FT;h9.prototype.disconnect=h9.prototype.Ns;h9.prototype.getPlayerContextData=h9.prototype.DT;h9.prototype.setPlayerContextData=h9.prototype.UY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.QL;h9.prototype.getReconnectTimeout=h9.prototype.Dw;h9.prototype.getAutoplayMode=h9.prototype.AT;h9.prototype.getAutoplayVideoId=h9.prototype.BT;h9.prototype.reconnect=h9.prototype.cS;
h9.prototype.sendMessage=h9.prototype.RY;h9.prototype.getXsrfToken=h9.prototype.HJ;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.wM;g.v(o9,g8);g.k=o9.prototype;g.k.Kh=function(a){return this.Ye.$_gs(a)};
g.k.contains=function(a){return!!this.Ye.$_c(a)};
g.k.get=function(a){return this.Ye.$_g(a)};
g.k.start=function(){this.Ye.$_st()};
g.k.add=function(a,b,c){this.Ye.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Ye.$_r(a,b,c)};
g.k.qC=function(a,b,c,d){this.Ye.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.i.length;a<b;++a)this.Ye.$_ubk(this.i[a]);this.i.length=0;this.Ye=null;g8.prototype.ra.call(this)};
g.k.dS=function(){this.Z("screenChange")};
g.k.HW=function(){this.Z("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.XR;q8.prototype.$_gsppc=q8.prototype.DJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.qC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Kh;q8.prototype.$_gos=q8.prototype.CJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.jg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.v(I9,g.G);g.k=I9.prototype;g.k.ra=function(){g.G.prototype.ra.call(this);this.i.stop();this.u.stop();this.N.stop();var a=this.Vb;a.unsubscribe("proxyStateChange",this.eO,this);a.unsubscribe("remotePlayerChange",this.zx,this);a.unsubscribe("remoteQueueChange",this.nB,this);a.unsubscribe("previousNextChange",this.bO,this);a.unsubscribe("nowAutoplaying",this.VN,this);a.unsubscribe("autoplayDismissed",this.yN,this);this.Vb=this.j=null};
g.k.Hj=function(a){var b=g.Da.apply(1,arguments);if(2!=this.Vb.u)if(J9(this)){var c=a;if(!a9(this.Vb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Vb).Ic()?this.Vb.pause():this.Vb.play();break;case "control_play":this.Vb.play();break;case "control_pause":this.Vb.pause();break;case "control_seek":this.J.BJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.FV=function(a){this.N.RR(a)};
g.k.FZ=function(a){this.Hj("control_subtitles_set_track",g.Df(a)?null:a)};
g.k.xP=function(){var a=this.G.getOption("captions","track");g.Df(a)||K9(this,a)};
g.k.Rb=function(a){this.j.Rb(a,this.G.getVideoData().lengthSeconds)};
g.k.qW=function(){g.Df(this.B)||T0a(this,this.B);this.C=!1};
g.k.eO=function(a,b){this.u.stop();2===b&&this.sP()};
g.k.zx=function(){if(J9(this)){this.i.stop();var a=a9(this.Vb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Cf=1;break;case 1082:case 1083:this.j.Cf=0;break;default:this.j.Cf=-1}switch(a.playerState){case 1081:case 1:this.Wb(new g.XI(8));this.rP();break;case 1085:case 3:this.Wb(new g.XI(9));break;case 1083:case 0:this.Wb(new g.XI(2));this.J.stop();this.Rb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Wb(new g.XI(4));break;case 2:this.Wb(new g.XI(4));this.Rb(W8(a));
break;case -1:this.Wb(new g.XI(64));break;case -1E3:this.Wb(new g.XI(128,{errorCode:"mdx.remoteerror",errorMessage:"\u041e\u0432\u0430\u0458 \u0432\u0438\u0434\u0435\u043e \u043d\u0438\u0458\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430\u043d \u0437\u0430 \u0434\u0430\u0459\u0438\u043d\u0441\u043a\u0443 \u0440\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0458\u0443.",GE:2}))}a=a9(this.Vb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==
b.languageName&&a.kind==b.kind:1)||(this.B=a,T0a(this,a));a=a9(this.Vb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||this.XP()}else S0a(this)};
g.k.bO=function(){this.G.Z("mdxpreviousnextchange")};
g.k.nB=function(){J9(this)||S0a(this)};
g.k.VN=function(a){isNaN(a)||this.G.Z("mdxnowautoplaying",a)};
g.k.yN=function(){this.G.Z("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J9(this)&&this.Vb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a9(this.Vb).playerState?L9(this,a):b&&this.Vb.seekTo(a)};
g.k.XP=function(){var a=this;if(J9(this)){var b=a9(this.Vb);this.events.vc(this.Y);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Y=this.events.S(this.G,"onVolumeChange",function(c){R0a(a,c)})}};
g.k.rP=function(){this.i.stop();if(!this.Vb.isDisposed()){var a=a9(this.Vb);a.Ic()&&this.Wb(new g.XI(8));this.Rb(W8(a));this.i.start()}};
g.k.sP=function(){this.u.stop();this.i.stop();var a=this.Vb.B.getReconnectTimeout();2==this.Vb.u&&!isNaN(a)&&this.u.start()};
g.k.Wb=function(a){this.u.stop();var b=this.I;if(!g.bJ(b,a)){var c=g.U(a,2);c!==g.U(this.I,2)&&this.G.mu(c);this.I=a;V0a(this.j,b,a)}};g.v(M9,g.V);M9.prototype.kd=function(){this.i.show()};
M9.prototype.Cb=function(){this.i.hide()};
M9.prototype.j=function(){$6("mdx-privacy-popup-cancel");this.Cb()};
M9.prototype.u=function(){$6("mdx-privacy-popup-confirm");this.Cb()};g.v(N9,g.V);N9.prototype.onStateChange=function(a){U0a(this,a.state)};g.v(O9,g.pQ);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Xo=g.xc(a,this.i,this),g.qQ(this,g.qn(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.ji(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.yj=function(a){return"cast-selector-receiver"===a?"\u041f\u0440\u0435\u0431\u0430\u0446\u0438\u2026":this.Xo[a].name};
O9.prototype.If=function(a){g.pQ.prototype.If.call(this,a);this.G.setOption("remote","currentReceiver",this.Xo[a]);this.ob.Cb()};g.v(P9,g.mN);g.k=P9.prototype;
g.k.create=function(){var a=this.player.T(),b=g.iE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.L("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.L("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.L("enable_cast_short_lived_lounge_token")};M0a(b,a);this.subscriptions.push(g.au("yt-remote-before-disconnect",this.EV,this));this.subscriptions.push(g.au("yt-remote-connection-change",this.fX,this));this.subscriptions.push(g.au("yt-remote-receiver-availability-change",this.dO,
this));this.subscriptions.push(g.au("yt-remote-auto-connect",this.dX,this));this.subscriptions.push(g.au("yt-remote-receiver-resumed",this.cX,this));this.subscriptions.push(g.au("mdx-privacy-popup-confirm",this.vY,this));this.subscriptions.push(g.au("mdx-privacy-popup-cancel",this.uY,this));this.dO()};
g.k.load=function(){this.player.cancelPlayback();g.mN.prototype.load.call(this);this.xi=new I9(this,this.player,this.Vb);var a=(a=Q0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);V0a(this,this.Fd,this.Fd);this.player.Bl(6)};
g.k.unload=function(){this.player.Z("mdxautoplaycanceled");this.Jn=this.rl;g.cf(this.xi,this.Vb);this.Vb=this.xi=null;g.mN.prototype.unload.call(this);this.player.Bl(5);Q9(this)};
g.k.ra=function(){g.bu(this.subscriptions);g.mN.prototype.ra.call(this)};
g.k.ul=function(a){var b=g.Da.apply(1,arguments);this.loaded&&this.xi.Hj.apply(this.xi,[a].concat(g.ma(b)))};
g.k.getAdState=function(){return this.Cf};
g.k.dl=function(){return this.Vb?a9(this.Vb).dl:!1};
g.k.hasNext=function(){return this.Vb?a9(this.Vb).hasNext:!1};
g.k.Rb=function(a,b){this.LM=a||0;this.player.Z("progresssync",a,b);this.player.Ma("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.LM};
g.k.getProgressState=function(){var a=a9(this.Vb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.T().L("web_player_mdx_allow_seeking_change_killswitch")?this.player.mf():!a.isAdPlaying()&&this.player.mf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.j?a.u+U8(a):a.u,isAtLiveHead:1>=(a.j?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.j?a.i+U8(a):a.i,seekableStart:0<
a.B?a.B+U8(a):a.B}};
g.k.nextVideo=function(){this.Vb&&this.Vb.nextVideo()};
g.k.BB=function(){this.Vb&&this.Vb.BB()};
g.k.EV=function(a){1===a&&(this.XG=this.Vb?a9(this.Vb):null)};
g.k.fX=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Jn;this.loaded&&this.unload();this.Vb=a;this.XG=null;b.key!==this.rl.key&&(this.Jn=b,this.load())}else g.bf(this.Vb),this.Vb=null,this.loaded&&(this.unload(),(a=this.XG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.dO=function(){var a=[this.rl],b=a.concat,c=N0a();O8()&&g.Cx("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Xo=b.call(a,c);a=A9()||this.rl;R9(this,a);this.player.Ma("onMdxReceiversChange")};
g.k.dX=function(){var a=A9();R9(this,a)};
g.k.cX=function(){this.Jn=A9()};
g.k.vY=function(){this.Ix=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.k.uY=function(){this.Ix=!1;Q9(this);R9(this,this.rl);this.Jn=this.rl;H9=!1;B9=null;this.player.playVideo()};
g.k.uf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Xo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Jn:this.rl;case "quickCast":return 2===this.Xo.length&&"cast-selector-receiver"===this.Xo[1].key?(b&&Q8(),!0):!1}};
g.k.WH=function(){this.Vb.WH()};
g.k.Wh=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.lN("remote",P9);})(_yt_player);
