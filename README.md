Yil
===

YilJS - A library to convert callback'd functions into synchronous yields

Mindset
=======

You just learned about the ```yield``` keyword in ECMAScript 6, you want to
play it, but drat, you're stuck with a library that depends on the last
argument being a callback.  What a drag.  

Yil helps skirt this by creating an easy wrapper to write synchrnous code. 

Requirements
============
Technically, this library doesn't contain any code that won't work in Node
0.8.  However, since the whole point is to generate ```yield```-friendly code,
you're probably going to want Node 0.11 or later with the ```--harmony```
flag. 

How to Use
==========
Ah, now the real fun.  

To use Yil with a function where the last argument is a callback: 
```
var myAsyncFunction = function(arg1, arg2, callback){
    //do stuff
    callback(data); 
}

var myYieldFunction = function(){
    var thing = yield yil.callback(myAsyncFunction, arg1, arg2); 
}
```
