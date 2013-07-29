/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.3.9
*/
(function(b){void 0==b.fn.inputmask&&(b.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:b.noop,onincomplete:b.noop,oncleared:b.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:b.noop,onKeyDown:b.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:b.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,
definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,
RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(b,F,G,L){var H=b.length;F||("*"==G?H=L.length+1:1<G&&(H+=b.length*(G-1)));return H}},val:b.fn.val,escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},b.fn.inputmask=function(u,F){function G(d,e){var a=c.aliases[d];return a?(a.alias&&G(a.alias),b.extend(!0,
c,a),b.extend(!0,c,e),!0):!1}function L(d){var e=!1,a=0,g=c.greedy,k=c.repeat;"*"==k&&(g=!1);1==d.length&&!1==g&&(c.placeholder="");for(var d=b.map(d.split(""),function(b){var l=[];if(b==c.escapeChar)e=true;else if(b!=c.optionalmarker.start&&b!=c.optionalmarker.end||e){var k=c.definitions[b];if(k&&!e)for(b=0;b<k.cardinality;b++)l.push(C(a+b));else{l.push(b);e=false}a=a+l.length;return l}}),l=d.slice(),h=1;h<k&&g;h++)l=l.concat(d.slice());return{mask:l,repeat:k,greedy:g}}function H(d){var e=!1,a=!1,
g=!1;return b.map(d.split(""),function(b){var l=[];if(b==c.escapeChar)a=!0;else if(b==c.optionalmarker.start&&!a)g=e=!0;else if(b==c.optionalmarker.end&&!a)e=!1,g=!0;else{var d=c.definitions[b];if(d&&!a){for(var m=d.prevalidator,q=m?m.length:0,r=1;r<d.cardinality;r++){var j=q>=r?m[r-1]:[],n=j.validator,j=j.cardinality;l.push({fn:n?"string"==typeof n?RegExp(n):new function(){this.test=n}:/./,cardinality:j?j:1,optionality:e,newBlockMarker:!0==e?g:!1,offset:0,casing:d.casing,def:d.definitionSymbol|b});
!0==e&&(g=!1)}l.push({fn:d.validator?"string"==typeof d.validator?RegExp(d.validator):new function(){this.test=d.validator}:/./,cardinality:d.cardinality,optionality:e,newBlockMarker:g,offset:0,casing:d.casing,def:d.definitionSymbol|b})}else l.push({fn:null,cardinality:0,optionality:e,newBlockMarker:g,offset:0,casing:null,def:b}),a=!1;g=!1;return l}})}function M(){function d(a){var b=a.length;for(i=0;i<b&&a.charAt(i)!=c.optionalmarker.start;i++);var d=[a.substring(0,i)];i<b&&d.push(a.substring(i+
1,b));return d}function e(k,l){var h=0,m=0,q=l.length;for(i=0;i<q&&!(l.charAt(i)==c.optionalmarker.start&&h++,l.charAt(i)==c.optionalmarker.end&&m++,0<h&&h==m);i++);h=[l.substring(0,i)];i<q&&h.push(l.substring(i+1,q));var r=d(h[0]);if(1<r.length){if(q=k+r[0]+(c.optionalmarker.start+r[1]+c.optionalmarker.end)+(1<h.length?h[1]:""),-1==b.inArray(q,g)&&(g.push(q),m=L(q),a.push({mask:q,_buffer:m.mask,buffer:m.mask.slice(),tests:H(q),lastValidPosition:void 0,greedy:m.greedy,repeat:m.repeat})),q=k+r[0]+
(1<h.length?h[1]:""),-1==b.inArray(q,g)&&(g.push(q),m=L(q),a.push({mask:q,_buffer:m.mask,buffer:m.mask.slice(),tests:H(q),lastValidPosition:void 0,greedy:m.greedy,repeat:m.repeat})),1<d(r[1]).length&&e(k+r[0],r[1]+h[1]),1<h.length&&1<d(h[1]).length)e(k+r[0]+(c.optionalmarker.start+r[1]+c.optionalmarker.end),h[1]),e(k+r[0],h[1])}else q=k+h,-1==b.inArray(q,g)&&(g.push(q),m=L(q),a.push({mask:q,_buffer:m.mask,buffer:m.mask.slice(),tests:H(q),lastValidPosition:void 0,greedy:m.greedy,repeat:m.repeat}))}
var a=[],g=[];b.isArray(c.mask)?b.each(c.mask,function(a,c){e("",c.toString())}):e("",c.mask.toString());return c.greedy?a:a.sort(function(a,c){return a.mask.length-c.mask.length})}function C(b){return c.placeholder.charAt(b%c.placeholder.length)}function J(d,e){function a(){return d[e]}function g(){return a().tests}function k(){return a()._buffer}function l(){return a().buffer}function h(o,O,D,k){function x(a,b){for(var o=r(a),d=O?1:0,e="",l=b.buffer,k=b.tests[o].cardinality;k>d;k--)e+=K(l,o-(k-
1));O&&(e+=O);return null!=b.tests[o].fn?b.tests[o].fn.test(e,l,a,D,c):!1}if(D=!0===D){var g=x(o,a());!0===g&&(g={pos:o});return g}var h=[],g=!1,m=e;b.each(d,function(a){e=a;var b=o;if(m!=e&&!q(o)){if(O==this._buffer[b]||O==c.skipOptionalPartCharacter)return h.push({activeMasksetIndex:a,result:{refresh:!0,c:this._buffer[b]}}),this.lastValidPosition=b,!1;d[m].lastValidPosition>=b?this.lastValidPosition=k?j()+1:-1:b=k?E(o):n(o)}if((void 0==this.lastValidPosition&&b==(k?E(j()):n(-1))||k||c.numericInput?
this.lastValidPosition<=c.numericInput?j():n(b):this.lastValidPosition>=E(b))&&0<=b&&b<j()){g=x(b,this);if(!1!==g&&(!0===g&&(g={pos:b}),b=g.pos||b,void 0==this.lastValidPosition||(k?c.greedy?this.lastValidPosition>b:b==l().length-1:this.lastValidPosition<b)))this.lastValidPosition=c.numericInput?0:b;h.push({activeMasksetIndex:a,result:g})}});e=m;return h}function m(o){var O=e,D={activeMasksetIndex:0,lastValidPosition:o?j()+1:-1};b.each(d,function(a){if(void 0!=this.lastValidPosition&&(o||c.numericInput?
this.lastValidPosition<D.lastValidPosition:this.lastValidPosition>D.lastValidPosition))D.activeMasksetIndex=a,D.lastValidPosition=this.lastValidPosition});e=D.activeMasksetIndex;O!=e&&(o?G(l(),0,E(D.lastValidPosition)):G(l(),n(D.lastValidPosition),j()),a().writeOutBuffer=!0)}function q(a){a=r(a);a=g()[a];return void 0!=a?a.fn:!1}function r(a){return a%g().length}function j(){return c.getMaskLength(k(),a().greedy,a().repeat,l(),c)}function n(a){var b=j();if(a>=b)return b;for(;++a<b&&!q(a););return a}
function E(a){if(0>=a)return 0;for(;0<--a&&!q(a););return a}function z(a,b,c,d,e){d&&(b=I(a,b,e));d=g()[r(b)];e=c;if(void 0!=e)switch(d.casing){case "upper":e=c.toUpperCase();break;case "lower":e=c.toLowerCase()}a[b]=e}function K(a,b,c){c&&(b=I(a,b));return a[b]}function I(a,b,c){if(c)for(;0>b&&a.length<j();){c=k().length-1;for(b=k().length;void 0!==k()[c];)a.unshift(k()[c--])}else for(;void 0==a[b]&&a.length<j();)for(c=0;void 0!==k()[c];)a.push(k()[c++]);return b}function B(a,b,c){a._valueSet(b.join(""));
void 0!=c&&v(a,c)}function G(a,b,c){for(var e=j();b<c&&b<e;b++)z(a,b,K(k().slice(),b,!0))}function u(a,b){var c=r(b);z(a,b,K(k(),c))}function H(o,l,g,h){var x=b(o).data("_inputmask").isRTL,h=void 0!=h?h.slice():J(o._valueGet(),x).split("");b.each(d,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=x&&!0==b.greedy?j():-1});!0!==g&&(e=0);l&&o._valueSet("");x&&!c.numericInput&&(h=h.reverse());var m=j();b.each(h,function(e,d){var j=x&&!0==a().greedy?c.numericInput?m:m-e:e,h=a().lastValidPosition,
n=a().p,n=void 0==h?j:n,h=void 0==h?-1:h;(g&&q(x?j-1:j)||(d!=K(k().slice(),x?j-1:j,!0)||q(x?j-1:j))&&-1==b.inArray(d,k().slice(h+1,n)))&&b(o).trigger("keypress",[!0,d.charCodeAt(0),l,g,j,x])});!0===g&&(a().lastValidPosition=x?c.numericInput?0:n(a().p):E(a().p))}function F(a){return b.inputmask.escapeRegex.call(this,a)}function J(a,b){return b?a.replace(RegExp("^("+F(k().join(""))+")*"),""):a.replace(RegExp("("+F(k().join(""))+")*$"),"")}function L(a){var c=l(),e=c.slice(),d,j;if(b(a).data("_inputmask").isRTL)for(j=
0;j<=e.length-1;j++)if(d=r(j),g()[d].optionality)if(!q(j)||!h(j,c[j],!0))e.splice(0,1);else break;else break;else for(j=e.length-1;0<=j;j--)if(d=r(j),g()[d].optionality)if(!q(j)||!h(j,c[j],!0))e.pop();else break;else break;B(a,e)}function M(a,c){return g()&&(!0===c||!a.hasClass("hasDatepicker"))?b.map(l(),function(a,b){return q(b)&&h(b,a,!0)?a:null}).join(""):a[0]._valueGet()}function v(a,e,d){var j=a.jquery&&0<a.length?a[0]:a;if("number"==typeof e)b(a).is(":visible")&&(d="number"==typeof d?d:e,!1==
c.insertMode&&e==d&&d++,j.setSelectionRange?(j.selectionStart=e,j.selectionEnd=Q?e:d):j.createTextRange&&(a=j.createTextRange(),a.collapse(!0),a.moveEnd("character",d),a.moveStart("character",e),a.select()));else{if(!b(a).is(":visible"))return{begin:0,end:0};j.setSelectionRange?(e=j.selectionStart,d=j.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),e=0-a.duplicate().moveStart("character",-1E5),d=e+a.text.length);return{begin:e,end:d}}}function R(a){var c=
!1,l=0,g=e;b.each(d,function(b,d){e=b;var g=E(j());if(void 0!=d.lastValidPosition&&d.lastValidPosition>=l&&d.lastValidPosition==g){for(var h=!0,n=0;n<=g;n++){var m=q(n),v=r(n);if(m&&(void 0==a[n]||a[n]==C(n))||!m&&a[n]!=k()[v]){h=!1;break}}if(c=c||h)return!1}l=d.lastValidPosition});e=g;return c}this.unmaskedvalue=function(a,b){return M(a,b)};this.isComplete=function(a){return R(a)};this.mask=function(o){function F(a){a=b._data(a).events;b.each(a,function(a,c){b.each(c,function(a,b){if("inputmask"==
b.namespace){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function D(a){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get)a._valueGet||(a._valueGet=c.get,a._valueSet=c.set,Object.defineProperty(a,"value",{get:function(){var a=b(this),c=b(this).data("_inputmask"),d=c.masksets,e=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=
d[e]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);b(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=b(this),c=b(this).data("_inputmask"),d=c.masksets,e=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[e]._buffer.join("")?this._valueGet():
""}),a.__defineSetter__("value",function(a){this._valueSet(a);b(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=b.fn.val.inputmaskpatch)b.fn.val=function(){if(arguments.length==0){var a=b(this);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var a=b.inputmask.val.apply(a),c=b(this).data("_inputmask");return a!=c.masksets[c.activeMasksetIndex]._buffer.join("")?
a:""}return b.inputmask.val.apply(a)}var d=arguments;return this.each(function(){var a=b(this),c=b.inputmask.val.apply(a,d);a.data("_inputmask")&&a.triggerHandler("setvalue.inputmask");return c})},b.extend(b.fn.val,{inputmaskpatch:!0})}function M(a,b){if(c.numericInput&&""!=c.radixPoint&&!1===c.skipRadixDance){var d=a._valueGet().indexOf(c.radixPoint);p=b.begin<=d||b.end<=d||-1==d}}function x(b,c,d){for(var e=l();!q(b)&&0<=b-1;)b--;for(var f=b;f<c&&f<j();f++)if(q(f)){u(e,f);var m=n(f),o=K(e,m);if(o!=
C(m))if(m<j()&&!1!==h(f,o,!0,p)&&g()[r(f)].def==g()[r(m)].def)z(e,f,K(e,m),!0,p),m<c&&u(e,m);else if(q(f))break}else u(e,f);void 0!=d&&z(e,p?c:E(c),d);if(!1==a().greedy){c=J(e.join(""),p).split("");e.length=c.length;f=0;for(d=e.length;f<d;f++)e[f]=c[f];0==e.length&&(a().buffer=k().slice())}return b}function N(b,c,e,d){for(var f=l();b<=c&&b<j();b++)if(q(b)){var m=K(f,b,!0);z(f,b,e,!0,p);if(m!=C(b))if(e=n(b),e<j())if(!1!==h(e,m,!0,p)&&g()[r(b)].def==g()[r(e)].def)e=m;else if(q(e))break;else e=m;else break;
else if(e=m,!0!==d)break}else u(f,b);d=f.length;if(!1==a().greedy){e=J(f.join(""),p).split("");f.length=e.length;b=0;for(m=f.length;b<m;b++)f[b]=e[b];0==f.length&&(a().buffer=k().slice())}return c-(d-f.length)}function Q(g){S=!1;var h=this,s=g.keyCode,t=v(h);M(h,t);if(s==c.keyCode.BACKSPACE||s==c.keyCode.DELETE||Z&&127==s||g.ctrlKey&&88==s){g.preventDefault();var f=t.begin;if(0==t.begin&&t.end==j())G(l(),t.begin,t.end),b.each(d,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=
p?j():0});else if(1<t.end-t.begin||1==t.end-t.begin&&c.insertMode){G(l(),t.begin,t.end);var o=j();if(!1==c.greedy)p?N(0,t.end-1,C(t.end),!0):x(t.begin,o);else for(var r=t.begin;r<t.end;r++)q(r)&&(p?N(0,t.end-1,C(t.end),!0):x(t.begin,o));H(h,!1,!0,l())}else b.each(d,function(b){e=b;f=V?t.end:t.begin;var b=l(),d=p?E(j()+1):n(-1),h=j();if(s==c.keyCode.DELETE){if(p?f>d:f<d)f=d;if(f<h&&(c.numericInput&&""!=c.radixPoint&&b[f]==c.radixPoint?(f=b.length-1==f?f:n(f),f=x(f,h)):p?(f=N(0,f,C(f),!0),f=n(f)):f=
x(f,h),void 0!=a().lastValidPosition))-1!=a().lastValidPosition&&l()[a().lastValidPosition]==k()[a().lastValidPosition]&&(a().lastValidPosition=p?n(a().lastValidPosition):0==a().lastValidPosition?-1:E(a().lastValidPosition)),(p?a().lastValidPosition>d:a().lastValidPosition<d)?(a().lastValidPosition=void 0,a().p=d):(a().writeOutBuffer=!0,a().p=f)}else if(s==c.keyCode.BACKSPACE)if(p?f<=d:f>d){if(f-=1,c.numericInput&&""!=c.radixPoint&&b[f]==c.radixPoint?(f=N(0,b.length-1==f?f:f-1,C(f),!0),f++):p?(f=
N(0,f,C(f),!0),f=b[f+1]==c.radixPoint?f+1:n(f)):f=x(f,h),void 0!=a().lastValidPosition)-1!=a().lastValidPosition&&l()[a().lastValidPosition]==k()[a().lastValidPosition]&&(a().lastValidPosition=p?n(a().lastValidPosition):0==a().lastValidPosition?-1:E(a().lastValidPosition)),(p?a().lastValidPosition>d:a().lastValidPosition<d)?(a().lastValidPosition=void 0,a().p=d):(a().writeOutBuffer=!0,a().p=f)}else 0<e&&(a().lastValidPosition=void 0,a().writeOutBuffer=!0,a().p=d,e=0,a().buffer=k().slice(),a().p=p?
E(j()+1):n(-1),a().lastValidPosition=void 0)});m(p);B(h,l(),a().p);h._valueGet()==k().join("")&&b(h).trigger("cleared");c.showTooltip&&y.prop("title",a().mask)}else s==c.keyCode.END||s==c.keyCode.PAGE_DOWN?setTimeout(function(){var b=p?a().lastValidPosition:n(a().lastValidPosition);!c.insertMode&&(b==j()&&!g.shiftKey)&&b--;v(h,g.shiftKey?t.begin:b,b)},0):s==c.keyCode.HOME&&!g.shiftKey||s==c.keyCode.PAGE_UP?v(h,0,g.shiftKey?t.begin:0):s==c.keyCode.ESCAPE?(h._valueSet(a().undoBuffer),H(h,!0,!0)):s==
c.keyCode.INSERT&&!g.shiftKey&&!g.ctrlKey?(c.insertMode=!c.insertMode,v(h,!c.insertMode&&t.begin==j()?t.begin-1:t.begin)):!1==c.insertMode&&!g.shiftKey&&(s==c.keyCode.RIGHT?setTimeout(function(){var a=v(h);v(h,a.begin)},0):s==c.keyCode.LEFT&&setTimeout(function(){var a=v(h);v(h,a.begin-1)},0));o=v(h);c.onKeyDown.call(this,g,l(),c);v(h,o.begin,o.end);T=-1!=b.inArray(s,c.ignorables)}function Y(g,k,s,t,f,o,r){p=void 0==r?p:r;if(void 0==s&&S)return!1;S=!0;var y=b(this),g=g||window.event,s=s||g.which||
g.charCode||g.keyCode,u=String.fromCharCode(s);c.numericInput&&(u==c.radixPoint&&!0!==k)&&(r=this._valueGet().indexOf(c.radixPoint),v(this,n(-1!=r?r:j())));if((g.ctrlKey||g.metaKey||T)&&!0!==k)return!0;if(s){var A,D;k?(s=f?o:c.numericInput?n(a().p):a().p,A={begin:s,end:s}):A=v(this);var F=1<A.end-A.begin||1==A.end-A.begin&&c.insertMode,J=!1;F&&(s=e,b.each(d,function(b){e=b;a().undoBuffer=l().join("");b=A.end<j()?A.end:j();a().lastValidPosition>A.begin&&a().lastValidPosition<b?a().lastValidPosition=
p?n(b):E(A.begin):J=true;G(l(),A.begin,b);var d=j();if(c.greedy==false)p?N(0,b-1,C(b),true):x(A.begin,d);else for(var f=A.begin;f<b;f++)q(f)&&(p?N(0,b-1,C(b-1),true):x(A.begin,d))}),!0===J&&(e=s,H(this,!1,!0,l()),c.insertMode||b.each(d,function(b){e=b;p?x(0,posend):N(A.begin,j(),C(A.begin),true);a().lastValidPosition=p?E(a().lastValidPosition):n(a().lastValidPosition)})),e=s);if(p){var w=E(F?A.begin:A.end),s=h(w,u,f,p);!0===f&&(s=[{activeMasksetIndex:e,result:s}]);b.each(s,function(b,d){e=d.activeMasksetIndex;
a().writeOutBuffer=true;var f=d.result;if(f!==false){var g=false,h=l();if(f!==true){g=f.refresh;w=f.pos!=void 0?f.pos:w;u=f.c!=void 0?f.c:u}if(g!==true){var g=j(),k=n(-1),f=k;if(c.insertMode==true){if(a().greedy==true)for(var m=h.slice();K(m,f,true)!=C(f)&&f<=w;)f=f==g?g+1:n(f);if(f<=w&&(a().greedy||h.length<g||K(h,w)==C(w))){if(h[k]!=C(k)&&h.length<g){h=I(h,-1,p);if((F?A.begin:A.end)!=0)w=w+h}x(f,w,u);h=a().lastValidPosition;f=E(h);h<=w&&K(l(),f)!=C(f)&&(a().lastValidPosition=f)}else a().writeOutBuffer=
false}else z(h,w,u,true,p)}a().p=w}})}else w=n(A.begin-1),s=h(w,u,f,p),!0===f&&(s=[{activeMasksetIndex:e,result:s}]),b.each(s,function(b,d){e=d.activeMasksetIndex;a().writeOutBuffer=true;var f=d.result;if(f!==false){var h=false,g=l();if(f!==true){h=f.refresh;w=f.pos!=void 0?f.pos:w;u=f.c!=void 0?f.c:u}if(h!==true)if(c.insertMode==true){f=j();for(h=g.slice();K(h,f,true)!=C(f)&&f>=w;)f=f==0?-1:E(f);if(f>=w){N(w,g.length,u);g=a().lastValidPosition;f=n(g);f!=j()&&(g>=w&&K(l(),f)!=C(f))&&(a().lastValidPosition=
f)}else a().writeOutBuffer=false}else z(g,w,u,true,p);a().p=n(w)}});!0!==f&&m(p);if(!1!==t&&(b.each(s,function(a,b){if(b.activeMasksetIndex==e){D=b;return false}}),void 0!=D)){var L=this;setTimeout(function(){c.onKeyValidation.call(L,D.result,c)},0);if(a().writeOutBuffer&&!1!==D.result){var M=l();B(this,M,k?void 0:c.numericInput&&p?n(a().p):a().p);setTimeout(function(){R(M)&&y.trigger("complete")},0)}else F&&(a().buffer=a().undoBuffer.split(""))}c.showTooltip&&y.prop("title",a().mask);g.preventDefault()}}
function X(d){var e=b(this),h=d.keyCode,g=l(),f=v(this);c.onKeyUp.call(this,d,g,c);v(this,f.begin,f.end);h==c.keyCode.TAB&&(e.hasClass("focus.inputmask")&&0==this._valueGet().length&&c.showMaskOnFocus)&&(g=k().slice(),B(this,g),p||v(this,0),a().undoBuffer=this._valueGet())}var y=b(o);if(y.is(":input")){y.data("_inputmask",{masksets:d,activeMasksetIndex:e,opts:c,isRTL:!1});c.showTooltip&&y.prop("title",a().mask);a().greedy=a().greedy?a().greedy:0==a().repeat;if(null!=y.attr("maxLength")){var P=y.prop("maxLength");
-1<P&&b.each(d,function(a,b){"*"==b.repeat&&(b.repeat=P)});j()>P&&-1<P&&(P<k().length&&(k().length=P),!1==a().greedy&&(a().repeat=Math.round(P/k().length)),y.prop("maxLength",2*j()))}D(o);a().undoBuffer=o._valueGet();var S=!1,T=!1,p=!1;if("rtl"==o.dir||c.numericInput){("rtl"==o.dir||c.numericInput&&c.rightAlignNumerics)&&y.css("text-align","right");o.dir="ltr";y.removeAttr("dir");var U=y.data("_inputmask");U.isRTL=!0;y.data("_inputmask",U);p=!0}y.unbind(".inputmask");y.removeClass("focus.inputmask");
y.closest("form").bind("submit",function(){y[0]._valueGet&&y[0]._valueGet()!=a().undoBuffer&&y.change()});y.bind("mouseenter.inputmask",function(){!b(this).hasClass("focus.inputmask")&&c.showMaskOnHover&&this._valueGet()!=l().join("")&&B(this,l())}).bind("blur.inputmask",function(){var h=b(this),g=this._valueGet(),m=l();h.removeClass("focus.inputmask");g!=a().undoBuffer&&h.change();c.clearMaskOnLostFocus&&""!=g&&(g==k().join("")?this._valueSet(""):L(this));R(m)||(h.trigger("incomplete"),c.clearIncomplete&&
(b.each(d,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=p?j():0}),e=0,c.clearMaskOnLostFocus?this._valueSet(""):(m=k().slice(),B(this,m))))}).bind("focus.inputmask",function(){var d=b(this),e=this._valueGet();c.showMaskOnFocus&&!d.hasClass("focus.inputmask")&&(!c.showMaskOnHover||c.showMaskOnHover&&""==e)&&this._valueGet()!=l().join("")&&B(this,l(),a().p);d.addClass("focus.inputmask");a().undoBuffer=this._valueGet();d.click()}).bind("mouseleave.inputmask",function(){var a=
b(this);c.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||(this._valueGet()==k().join("")||""==this._valueGet()?this._valueSet(""):L(this)))}).bind("click.inputmask",function(){var d=this;setTimeout(function(){var e=v(d),g=l();if(e.begin==e.end){var k=e.begin,f=a().lastValidPosition;M(d,e);p?(e=c.numericInput?!1===c.skipRadixDance&&""!=c.radixPoint&&-1!=b.inArray(c.radixPoint,g)?b.inArray(c.radixPoint,g):j():E((void 0==f?j():f)+1),v(d,k>e&&(!1!==h(k,g[k],!0,p)||!q(k))?k:e)):(e=n(void 0==f?-1:
f),v(d,k<e&&(!1!==h(k,g[k],!0,p)||!q(k))?k:e))}},0)}).bind("dblclick.inputmask",function(){var b=this;void 0!=a().lastValidPosition&&setTimeout(function(){p?v(b,E(a().lastValidPosition),j()):v(b,0,n(a().lastValidPosition))},0)}).bind("keydown.inputmask",Q).bind("keypress.inputmask",Y).bind("keyup.inputmask",X).bind($+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this,c=b(a);setTimeout(function(){H(a,!0,!1);R(l())&&c.trigger("complete");c.click()},0)}).bind("setvalue.inputmask",function(){a().undoBuffer=
this._valueGet();H(this,!0);this._valueGet()==k().join("")&&this._valueSet("")}).bind("complete.inputmask",c.oncomplete).bind("incomplete.inputmask",c.onincomplete).bind("cleared.inputmask",c.oncleared);H(o,!0,!1);var W;try{W=document.activeElement}catch(aa){}W===o?(y.addClass("focus.inputmask"),v(o,a().p)):c.clearMaskOnLostFocus?l().join("")==k().join("")?o._valueSet(""):L(o):B(o,l());F(o)}};return this}var c=b.extend(!0,{},b.inputmask.defaults,F),I=null!==navigator.userAgent.match(/msie 10/i),Z=
null!==navigator.userAgent.match(/iphone/i),Q=null!==navigator.userAgent.match(/android.*safari.*/i),$=function(b){var c=document.createElement("input"),b="on"+b,a=b in c;a||(c.setAttribute(b,"return;"),a="function"==typeof c[b]);return a}("paste")&&!I?"paste":"input",V,z,B=0;Q&&(I=navigator.userAgent.match(/safari.*/i),V=537>=parseInt(RegExp(/[0-9]+/).exec(I)));if("string"===typeof u)switch(u){case "mask":return G(c.alias,F),z=M(),this.each(function(){J(b.extend(true,{},z),0).mask(this)});case "unmaskedvalue":return I=
b(this),I.data("_inputmask")?(z=I.data("_inputmask").masksets,B=I.data("_inputmask").activeMasksetIndex,c=I.data("_inputmask").opts,J(z,B).unmaskedvalue(I)):I.val();case "remove":return this.each(function(){var d=b(this);if(d.data("_inputmask")){z=d.data("_inputmask").masksets;B=d.data("_inputmask").activeMasksetIndex;c=d.data("_inputmask").opts;this._valueSet(J(z,B).unmaskedvalue(d,true));d.removeData("_inputmask");d.unbind(".inputmask");d.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&
(e=Object.getOwnPropertyDescriptor(this,"value"));if(e&&e.get)this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet});else if(document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet){this.__defineGetter__("value",this._valueGet);this.__defineSetter__("value",this._valueSet)}try{delete this._valueGet;delete this._valueSet}catch(a){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(z=this.data("_inputmask").masksets,
B=this.data("_inputmask").activeMasksetIndex,z[B]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return z=this.data("_inputmask").masksets,B=this.data("_inputmask").activeMasksetIndex,c=this.data("_inputmask").opts,J(z,B).isComplete(this[0]._valueGet().split(""));default:return G(u,F)||(c.mask=u),z=M(),this.each(function(){J(b.extend(true,{},z),B).mask(this)})}else{if("object"==typeof u)return c=b.extend(!0,{},
b.inputmask.defaults,u),G(c.alias,u),z=M(),this.each(function(){J(b.extend(true,{},z),B).mask(this)});if(void 0==u)return this.each(function(){var d=b(this).attr("data-inputmask");if(d&&d!="")try{var d=d.replace(RegExp("'","g"),'"'),e=b.parseJSON("{"+d+"}");b.extend(true,e,F);c=b.extend(true,{},b.inputmask.defaults,e);G(c.alias,e);c.alias=void 0;b(this).inputmask(c)}catch(a){}})}return this})})(jQuery);
