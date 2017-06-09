goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('Lazy_Henderson.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36842__delegate = function (x){
if(cljs.core.truth_(Lazy_Henderson.core.on_js_reload)){
return cljs.core.apply.call(null,Lazy_Henderson.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'Lazy-Henderson.core/on-js-reload' is missing");
}
};
var G__36842 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36843__i = 0, G__36843__a = new Array(arguments.length -  0);
while (G__36843__i < G__36843__a.length) {G__36843__a[G__36843__i] = arguments[G__36843__i + 0]; ++G__36843__i;}
  x = new cljs.core.IndexedSeq(G__36843__a,0);
} 
return G__36842__delegate.call(this,x);};
G__36842.cljs$lang$maxFixedArity = 0;
G__36842.cljs$lang$applyTo = (function (arglist__36844){
var x = cljs.core.seq(arglist__36844);
return G__36842__delegate(x);
});
G__36842.cljs$core$IFn$_invoke$arity$variadic = G__36842__delegate;
return G__36842;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
