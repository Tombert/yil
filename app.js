module.exports = {
  callback: function(){
    //Convert to regular array to allow popping
    var args = Array.prototype.slice.call(arguments);
    var myFunction = args[0]
    args.shift()
    return function(cb){
      args.push(cb)
      myFunction.apply(null, args)
    }
  }
}
