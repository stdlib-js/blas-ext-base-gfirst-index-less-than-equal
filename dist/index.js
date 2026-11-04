"use strict";var y=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=y(function(z,d){
function T(a,r,e,i,s,v,f){var u,n,o,c,t,x,q;for(u=r.data,n=s.data,o=r.accessors[0],c=s.accessors[0],t=i,x=f,q=0;q<a;q++){if(o(u,t)<=c(n,x))return q;t+=e,x+=v}return-1}d.exports=T
});var l=y(function(A,b){
var p=require('@stdlib/array-base-arraylike2object/dist'),P=g();function j(a,r,e,i,s,v,f){var u,n,o,c,t;if(a<=0)return-1;if(o=p(r),c=p(s),o.accessorProtocol||c.accessorProtocol)return P(a,o,e,i,c,v,f);for(u=i,n=f,t=0;t<a;t++){if(r[u]<=s[n])return t;u+=e,n+=v}return-1}b.exports=j
});var I=y(function(B,E){
var h=require('@stdlib/strided-base-stride2offset/dist'),k=l();function m(a,r,e,i,s){return k(a,r,e,h(a,e),i,s,h(a,s))}E.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=I(),R=l();O(L,"ndarray",R);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
