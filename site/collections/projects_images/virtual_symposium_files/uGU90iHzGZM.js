if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometMemoriesRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4525674667536345"}),null);
__d("CometMemoriesRootQuery$Parameters",["CometMemoriesRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMemoriesRootQuery_facebookRelayOperation"),metadata:{},name:"CometMemoriesRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSaveDashboardRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3088484357943011"}),null);
__d("CometSaveDashboardRootQuery$Parameters",["CometSaveDashboardRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSaveDashboardRootQuery_facebookRelayOperation"),metadata:{},name:"CometSaveDashboardRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSavePrimaryNavigationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3433429736669283"}),null);
__d("CometSavePrimaryNavigationQuery$Parameters",["CometSavePrimaryNavigationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSavePrimaryNavigationQuery_facebookRelayOperation"),metadata:{},name:"CometSavePrimaryNavigationQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMemoriesRoot.entrypoint",["CometMemoriesRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{memoriesReference:{parameters:b("CometMemoriesRootQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:0,feedLocation:"GOODWILL_THROWBACK_PERMALINK",focusCommentID:null,goodwillTimestamp:a.routeProps.goodwillTimestamp,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"throwback_composer",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}}}},root:c("JSResourceForInteraction")("CometMemoriesRoot.react").__setRef("CometMemoriesRoot.entrypoint")};g["default"]=a}),98);
__d("buildSaveRoute.entrypoint",["CometSavePrimaryNavigationQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometSaveRoot.react").__setRef("buildSaveRoute.entrypoint"),function(a){return{navigationQueryReference:{parameters:b("CometSavePrimaryNavigationQuery$Parameters"),variables:{}}}});g["default"]=a}),98);
__d("CometSaveDashboardRoot.entrypoint",["CometSaveDashboardRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildSaveRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildSaveRoute.entrypoint")(c("JSResourceForInteraction")("CometSaveDashboardRoot.react").__setRef("CometSaveDashboardRoot.entrypoint"),function(a){var b=a.routeProps,e=b.content_filter,f=b.referrer;b=b.section;a=a.routeParams;var g=a.hoisted_item_id;a=a.notif_id;return{extraProps:{routeProps:{referrer:f,section:b}},queries:{rootQueryRef:{parameters:c("CometSaveDashboardRootQuery$Parameters"),variables:{content_filter:e!=null?[e]:null,hoisted_item_id:g!=null?String(g):null,notif_id:a!=null?String(a):null,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);