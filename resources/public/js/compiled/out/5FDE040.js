goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('Lazy_Henderson.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37399__delegate = function (x){
if(cljs.core.truth_(Lazy_Henderson.core.on_js_reload)){
return cljs.core.apply.call(null,Lazy_Henderson.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'Lazy-Henderson.core/on-js-reload' is missing");
}
};
var G__37399 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37400__i = 0, G__37400__a = new Array(arguments.length -  0);
while (G__37400__i < G__37400__a.length) {G__37400__a[G__37400__i] = arguments[G__37400__i + 0]; ++G__37400__i;}
  x = new cljs.core.IndexedSeq(G__37400__a,0);
} 
return G__37399__delegate.call(this,x);};
G__37399.cljs$lang$maxFixedArity = 0;
G__37399.cljs$lang$applyTo = (function (arglist__37401){
var x = cljs.core.seq(arglist__37401);
return G__37399__delegate(x);
});
G__37399.cljs$core$IFn$_invoke$arity$variadic = G__37399__delegate;
return G__37399;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
