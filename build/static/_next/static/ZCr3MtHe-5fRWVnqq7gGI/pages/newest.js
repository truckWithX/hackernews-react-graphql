(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"7p/S":function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return w}));var r=n("1OyB"),c=n("JX7q"),u=n("md7G"),o=n("foSv"),a=n("Ji7U"),i=n("s4An");function f(t,e,n){return(f=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&Object(i.a)(c,n.prototype),c}).apply(null,arguments)}function s(t){var e="function"===typeof Map?new Map:void 0;return(s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,Object(o.a)(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Object(i.a)(r,t)})(t)}var p,l=n("rePB");function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}!function(t){t.ID="id",t.PASSWORD="pw"}(p||(p={}));var h=function(t){Object(a.a)(i,t);var e,n=(e=i,function(){var t,n=Object(o.a)(e);if(d()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function i(t){var e;return Object(r.a)(this,i),e=n.call(this,t.message),Object(l.a)(Object(c.a)(e),"code",void 0),e.code=t.code,Error.captureStackTrace(Object(c.a)(e),i),e}return i}(s(Error));function b(t){var e=t.id;if(e.length<3||e.length>32)throw new h({code:p.ID,message:"User ID must be between 3 and 32 characters."});return!0}function w(t){var e=t.id,n=t.password;if(e.length<3||e.length>32)throw new h({code:p.ID,message:"User ID must be between 3 and 32 characters."});if(n.length<8||n.length>100)throw new h({code:p.PASSWORD,message:"User password must be longer than 8 characters."});return!0}},"Ep/L":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newest",function(){return n("nPB5")}])},nKyO:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.TOP="top",t.NEW="new",t.BEST="best",t.SHOW="show",t.ASK="ask",t.JOB="job"}(r||(r={}));n("1OyB"),n("rePB");n("7p/S")},nPB5:function(t,e,n){"use strict";n.r(e),n.d(e,"NewestPage",(function(){return y}));var r=n("h4VS"),c=n("lTCR"),u=n.n(c),o=n("nOHt"),a=n("q1tI"),i=n("ttZb"),f=n("Z+sL"),s=n("eRjh"),p=n("HNvi"),l=n("nKyO"),d=n("1wtQ"),h=a.createElement;function b(){var t=Object(r.a)(["\n  query NewestFeed($type: FeedType!, $first: Int!, $skip: Int!) {\n    feed(type: $type, first: $first, skip: $skip) {\n      ...NewsFeed\n    }\n  }\n  ","\n"]);return b=function(){return t},t}var w=u()(b(),f.c),y=Object(s.b)(Object(o.withRouter)((function(t){var e=t.router.query&&+t.router.query.p||0,n=d.c,r=d.c*e,c=Object(i.c)(w,{variables:{first:n,skip:r,type:l.a.NEW}}).data;return h(p.a,{currentUrl:t.router.pathname},h(f.a,{data:c,currentUrl:t.router.pathname,first:n,skip:r}))})));e.default=y}},[["Ep/L",0,1,2,3,4,5,6]]]);