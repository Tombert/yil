module.exports = {
  callback: function(){
    //Convert to regular array to allow popping
    var args = Array.prototype.slice.call(arguments);
    var myScope = null; 
    if(typeof args[0] == 'function'){
      var myFunction = args[0]
    }
    else {
      var myFunction = args[0].func
      var myScope = args[0].scope
    }
    args.shift()
    return function(cb){
      args.push(cb)
      myFunction.apply(myScope, args)
    }
  }
}
