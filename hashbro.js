/*!
 * Hashbro (v1.0.0.20180204), http://tpkn.me/
 */

function Hashbro(cb){
   if(!("onhashchange" in window)){
      console.log('"onhashchange" event is not supported');
      return;
   }

   var prev_hash = '';

   var getHash = function(){
      return window.location.hash.substring(1);
   }

   var setHash = function(hash){
      if(prev_hash != hash){
         window.location.hash = hash;
      }

      prev_hash = hash;
   }

   var goBack = function(step, splitter){
      if(typeof step !== 'number') step = 1;
      if(typeof splitter !== 'string') splitter = '/';

      var hash = getHash();
      var first_slash = hash.indexOf(splitter) == 0 ? splitter : '';
      
      hash = hash.split(splitter).filter(function(item){
         return item != '' && item.search(/\s{1,}/) == -1;
      });

      var cut_end = step > hash.length ? 0 : hash.length - step;

      setHash(first_slash + hash.slice(0, cut_end).join(splitter));
   }

   var callBack = function(){
      if(typeof cb === 'function'){
         cb(getHash());
      }
   }

   window.onhashchange = callBack;

   callBack();

   return {goto: setHash, back: goBack};
}
