(()=>{var e,n,r,t={"john wick":"John wick is a movie series, where a retired assassin seeks vengeance for his dog's death.",avengers:"Avengers is a movie series, where a group of superheroes fight against the evil forces.",harryPotter:"Harry Potter is a movie series, where a young wizard fights against the dark lord.",batman:"Batman is a movie series,  where a rich",superman:"Superman is a movie series, where an alien superhero fights against the evil forces."};function i(e){var n=new Map,r=[];return{get:function(e){return console.log("cache from get",n),e in n?((r=r.filter((function(n){return n!==e}))).unshift(e),n[e]):null},set:function(t,i){if(console.log("cache from set",n),r.length+1>=e){var s=r.pop();delete n[s]}n[t]=i,r.unshift(t)}}}function s(){return n||(n=new i(arguments.length>0&&void 0!==arguments[0]?arguments[0]:2))}r=document.getElementById("submit-btn"),document.getElementById("search-input").addEventListener("change",(function(n){return function(n){var r;e=(null===(r=n.target)||void 0===r?void 0:r.value)||""}(n)})),r.addEventListener("click",(function(n){return i=function(e){var n=s(3),r=n.get(e);if(!r){console.log("Server hit...........");var i=t[e];return n.set(e,i),i}return console.log("Cache hit..........."),r}(e),r=i,void(document.getElementById("search-result").innerHTML=r);var r,i}))})();
//# sourceMappingURL=app4.bundle.js.map