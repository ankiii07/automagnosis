!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=o(2),i=o(3),u=function(){function e(){}return e.getCurrentNativeModuleProvider=function(){var e=n.WindowManager.getWindow();if(e)return e.nativeModules?e.nativeModules:e.webkit?e.webkit.messageHandlers:e;throw new i.FKPlatformError(r.Errors.NATIVE_MODULES_MISSING)},e}();t.NativeModuleHelper=u;var s=function(){function e(e,t){this.nativeModuleManager=e,this.nativeModuleCallbackManager=t}return e.prototype.postMessage=function(e){var t,o=e.methodName,n=Object.keys(e).map(function(t){return e[t]});this.nativeModuleManager[o]&&(n.shift(),(t=this.nativeModuleManager)[o].apply(t,n)),this.nativeModuleManager.postMessage&&this.nativeModuleManager.postMessage(n)},e}();t.NativeModule=s},function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function t(){}return t.getWindow=function(){return window||e},t.isBrowser=function(){return"ReactNative"!==navigator.product},t}();t.WindowManager=o}).call(t,o(4))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.MESSAGE_AUTH_ERROR="Method called before authorization, make sure platform is available and authorization is complete before calling this",e.MESSAGE_PLATFORM_UNAVAILABLE="Flipkart platform is unavailable, make sure your code is running inside Flipkart app",e.MESSAGE_CLIENT_ID_ABSENT="Null or empty client id, cannot proceed without it",e.NATIVE_MODULES_MISSING="Native modules are missing, make sure you are inside Flipkart app and platform is available",e}();t.Errors=n},function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t){return e.call(this,t)||this}return n(t,e),t}(Error);t.FKPlatformError=r},function(e,t){var o,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(17),r=function(){function e(){this.task=new n.Task,this.isResultSet=!1}return e.prototype.cancel=function(e){this.trySetError(e)},e.prototype.setResult=function(e){if(this.isResultSet)throw new Error("result/error has been set before");this.isResultSet=!0,this.task.resolve(e)},e.prototype.getResultAsync=function(){return this.task.getResultAsync()},e.prototype.trySetResult=function(e){this.isResultSet||this.setResult(e)},e.prototype.setError=function(e){if(this.isResultSet)throw new Error("result/error has been set before");this.isResultSet=!0,this.task.reject(e)},e.prototype.trySetError=function(e){this.isResultSet||this.setError(e)},e}();t.TaskCompletionSource=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),r=o(3),i=o(8),u=o(14),s=o(15),a=function(){function e(e){this.assertPlatformExists(),this.clientID=e,this.assertClientIdentity();var t=new s.NativeModuleCallbackManager;this.moduleManager=new i.ModuleManager(t),new u.AuthModuleImpl(t).init(e)}return e.isPlatformAvailable=function(){return e.isFkPlatformAvailable},e.setUserAgent=function(t){e.userAgent=t,e.isFkPlatformAvailable=!!e.userAgent&&-1!==e.userAgent.indexOf("UltraSDK")},e.getUserAgent=function(){return e.userAgent},e.prototype.getModuleHelper=function(){return this.assertPlatformExists(),this.moduleManager},e.prototype.assertPlatformExists=function(){if(!e.isPlatformAvailable())throw new r.FKPlatformError(n.Errors.MESSAGE_PLATFORM_UNAVAILABLE)},e.prototype.assertClientIdentity=function(){if(!this.clientID||""===this.clientID)throw new r.FKPlatformError(n.Errors.MESSAGE_CLIENT_ID_ABSENT)},e}();t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),r=o(1),i=o(19),u=function(){function e(){}return e.setUpForBrowser=function(){var e=r.WindowManager.getWindow();e&&!e.FKExtension&&(e.FKExtension={isPlatformAvailable:function(){return n.default.isPlatformAvailable()},newPlatformInstance:function(e){return new n.default(e)}})},e.setupTravelAnalyticsForBrowser=function(){e.setUpForBrowser();var t=r.WindowManager.getWindow();t&&t.FKExtension&&!t.FKExtension.analyticsHelper&&(t.FKExtension.analyticsHelper={travel:{search:function(e,t,o,n,r){return new i.Travel.Search(e,t,o,n,r)},select:function(e,t,o){return new i.Travel.Select(e,t,o)},proceedToPayEvent:function(e,t,o,n){return new i.Travel.ProceedToPay(e,t,o,n)}}})},e.setUpForReactNative=function(e,t){var o=r.WindowManager.getWindow();o&&!o.FKExtension&&(o.nativeModules=t,o.FKExtension={isPlatformAvailable:function(){return n.default.isPlatformAvailable()},newPlatformInstance:function(e){return new n.default(e)}},e&&(e.addListener("nativeModuleResolve",function(e){o&&o.FKExtension&&o.FKExtension.nativeModuleResolve&&o.FKExtension.nativeModuleResolve(JSON.parse(e.nativeModuleResponse))}),e.addListener("nativeModuleReject",function(e){o&&o.FKExtension&&o.FKExtension.nativeModuleReject&&o.FKExtension.nativeModuleReject(JSON.parse(e.nativeModuleError))})))},e}();t.SetupHelper=u},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=o(9),i=o(10),u=o(12),s=o(13);!function(e){e[e.PERMISSION_MODULE=0]="PERMISSION_MODULE",e[e.NAVIGATION_MODULE=1]="NAVIGATION_MODULE",e[e.CONTACTS_MODULE=2]="CONTACTS_MODULE",e[e.ANALYTICS_MODULE=3]="ANALYTICS_MODULE"}(n||(n={}));var a=function(){function e(e){this.moduleMap={},this.addModule(n.PERMISSION_MODULE,new i.PermissionsModuleImpl(e)),this.addModule(n.NAVIGATION_MODULE,new r.NavigationModuleImpl(e)),this.addModule(n.CONTACTS_MODULE,new u.ContactsModuleImpl(e)),this.addModule(n.ANALYTICS_MODULE,new s.AnalyticsModuleImpl(e))}return e.prototype.getNavigationModule=function(){return this.getModule(n.NAVIGATION_MODULE)},e.prototype.getPermissionsModule=function(){return this.getModule(n.PERMISSION_MODULE)},e.prototype.getContactsModule=function(){return this.getModule(n.CONTACTS_MODULE)},e.prototype.getAnalyticsModule=function(){return this.getModule(n.ANALYTICS_MODULE)},e.prototype.addModule=function(e,t){this.moduleMap[e]=t},e.prototype.getModule=function(e){return this.moduleMap[e]},e}();t.ModuleManager=a},function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(e){function t(t){return e.call(this,r.NativeModuleHelper.getCurrentNativeModuleProvider().NavigationModule,t)||this}return n(t,e),t.prototype.exitSession=function(){this.postMessage({methodName:"exitSession"})},t.prototype.exitToHomePage=function(){this.postMessage({methodName:"exitToHomePage"})},t.prototype.clearHistory=function(){this.postMessage({methodName:"clearHistory"})},t.prototype.startPayment=function(e){this.postMessage({methodName:"startPayment",paymentToken:e})},t.prototype.notifyPageLocationChange=function(e,t){this.postMessage({methodName:"notifyPageLocationChange",currentUri:e,isBackNavigation:t})},t.prototype.navigateToFlipkart=function(e){this.postMessage({methodName:"navigateToFlipkart",uri:e})},t}(r.NativeModule);t.NavigationModuleImpl=i},function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(11),u=function(e){function t(t){var o=e.call(this,r.NativeModuleHelper.getCurrentNativeModuleProvider().PermissionsModule,t)||this;return o.allScopes=Object.freeze({USER_NAME:i.Scope.USER_NAME,USER_EMAIL:i.Scope.USER_EMAIL,USER_MOBILE:i.Scope.USER_MOBILE}),o}return n(t,e),t.prototype.getToken=function(e){var t=this;return this.nativeModuleCallbackManager.executeOnBridge(function(o){t.postMessage({methodName:"getToken",requestId:o,scopes:JSON.stringify(e)})})},t.prototype.getScopes=function(){return this.allScopes},t}(r.NativeModule);t.PermissionsModuleImpl=u},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.USER_NAME="user.name",e.USER_EMAIL="user.email",e.USER_MOBILE="user.mobile"}(t.Scope||(t.Scope={}))},function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(e){function t(t){return e.call(this,r.NativeModuleHelper.getCurrentNativeModuleProvider().ContactsModule,t)||this}return n(t,e),t.prototype.pickPhoneNumber=function(){var e=this;return this.nativeModuleCallbackManager.executeOnBridge(function(t){e.postMessage({methodName:"pickPhoneNumber",requestId:t})})},t.prototype.getContactInfo=function(e){var t=this;return this.nativeModuleCallbackManager.executeOnBridge(function(o){t.postMessage({methodName:"getContactInfo",requestId:o,numbers:JSON.stringify(e)})})},t}(r.NativeModule);t.ContactsModuleImpl=i},function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(e){function t(t){return e.call(this,r.NativeModuleHelper.getCurrentNativeModuleProvider().AnalyticsModule,t)||this}return n(t,e),t.prototype.pushEvent=function(e){var t=this;this.nativeModuleCallbackManager.executeOnBridge(function(o){var n=e.type;delete e.type;var r=e.getValidator();r.isValid()?t.postMessage({methodName:"pushEvent",requestId:o,type:n,event:JSON.stringify(e)}):t.postMessage({methodName:"onEventValidationError",requestId:o,type:n,error:r.getErrorMessage()})})},t}(r.NativeModule);t.AnalyticsModuleImpl=i},function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=function(e){function t(t){return e.call(this,r.NativeModuleHelper.getCurrentNativeModuleProvider().AuthModule,t)||this}return n(t,e),t.prototype.init=function(e){this.postMessage({methodName:"init",clientId:e})},t}(r.NativeModule);t.AuthModuleImpl=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=o(16),i=function(){function e(){var e=this;this.nativeModuleResolve=function(t){var o=e.callbackQueue[t.requestId];o&&(delete e.callbackQueue[t.requestId],o.trySetResult(t))},this.nativeModuleReject=function(t){var o=e.callbackQueue[t.requestId];o&&(delete e.callbackQueue[t.requestId],t.code||(t.code=0),o.trySetError(t))},this.checkInit(),this.callbackQueue={}}return e.prototype.executeOnBridge=function(e){var t=new r.TaskCompletionSource,o=this.getNewCallbackId();return this.queueCallbackIfRequired(o,t),e(o),new Promise(function(e,o){t.getResultAsync().then(function(t){e({grantToken:t.grantToken,result:t.result})}).catch(function(e){o(e)})})},e.prototype.checkInit=function(){var e=n.WindowManager.getWindow();e&&e.FKExtension&&(e.FKExtension.nativeModuleResolve=this.nativeModuleResolve,e.FKExtension.nativeModuleReject=this.nativeModuleReject)},e.prototype.getNewCallbackId=function(){return e.callbackId+++""},e.prototype.queueCallbackIfRequired=function(e,t){this.callbackQueue[e]=t},e.callbackId=1,e}();t.NativeModuleCallbackManager=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5);t.TaskCompletionSource=n.TaskCompletionSource;var r=o(18);t.InstanceQM=r.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.promise=new Promise(function(t,o){e.resolveMethod=t,e.rejectMethod=o})}return e.Yield=function(){return new Promise(function(e){setTimeout(e,0)})},e.Delay=function(e){return new Promise(function(t){setTimeout(t,e)})},e.prototype.resolve=function(e){this.resolveMethod(e)},e.prototype.reject=function(e){this.rejectMethod(e)},e.prototype.getResultAsync=function(){return this.promise},e}();t.Task=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),r=function(){function e(e,t){if(this.clientStack=[],this.requestQueue=[],!t||t.length!==e)throw{message:"No of instances passes should be equal to instanceCount"};for(var o=0;o<e;o++)this.clientStack.push(t[o])}return e.prototype.getQueueSize=function(){return this.requestQueue.length},e.prototype.releaseInstance=function(e){this.requestQueue.length>0?this.requestQueue.shift().trySetResult(e):this.clientStack.push(e)},e.prototype.getFreeInstanceAsync=function(){var e=new n.TaskCompletionSource;return this.requestQueue.push(e),this._processQueue(),e.getResultAsync()},e.prototype._processQueue=function(){this.clientStack.length>0&&this.requestQueue.shift().trySetResult(this.clientStack.shift())},e}();t.default=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(20);t.Travel=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(21),r=function(){function e(e,t,o,n,r){this.type="Travel.Search",this.fromLocation=e,this.toLocation=t,this.date=o,this.roundTrip=n,this.travellerCount=r}return e.prototype.getValidator=function(){var e=new Array;return this.fromLocation&&""!==this.fromLocation||e.push("fromLocation is empty"),this.date&&0!==this.date.length||e.push("date array should have atleast 1 value"),this.travellerCount<0&&e.push("travellerCount should not be negative"),new n.EventValidator(e)},e}();t.Search=r;var i=function(){function e(e,t,o){this.type="Travel.Select",this.name=e,this.category=t,this.price=o}return e.prototype.getValidator=function(){var e=new Array;return this.name&&""!==this.name||e.push("name should not be empty"),this.category&&""!==this.category||e.push("category should not be empty"),this.price||e.push("price should not be empty"),this.price<0&&e.push("price should not be negative"),new n.EventValidator(e)},e}();t.Select=i;var u=function(){function e(e,t,o,n){this.type="Travel.ProceedToPay",this.amountToPay=e,this.offerAmount=t,this.bookingCharge=o,this.vasCharge=n}return e.prototype.getValidator=function(){var e=new Array;return this.amountToPay||e.push("amountToPay should not be empty"),this.amountToPay<0&&e.push("amountToPay should not be negative"),this.offerAmount<0&&e.push("offerAmount should not be negative"),this.bookingCharge<0&&e.push("bookingCharge should not be negative"),this.vasCharge<0&&e.push("vasCharge should not be negative"),new n.EventValidator(e)},e}();t.ProceedToPay=u},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.errorMessages=e}return e.prototype.isValid=function(){return 0===this.errorMessages.length},e.prototype.getErrorMessage=function(){return"Invalid event, ensure you resolve following issues: "+this.errorMessages},e}();t.EventValidator=n},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),r=o(6);n.SetupHelper.setUpForBrowser(),navigator&&navigator.userAgent&&r.default.setUserAgent(navigator.userAgent)}]);