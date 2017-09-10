//单例设计模式，限制类的实例化次数只能一次；
//实例不存在的情况下可以通过一个方法创建一个类来实现创建类的实例
//如果实例已经存在，返回该对象的引用

var mySingleton = (function(){
  var instance;
  function init(){
    //私有方法和变量
    function privateMethod(){
      console.log("i am a privateMethod");
    }
    var privateVar = "hello,private";
    var privateNum = Math.random();
    return {
      publicMethod: function(){
        console.log("i am a publicMethod");
      },
      publicVar: "hello,public",
      getNum: function(){
        return privateNum;
      }
    }
  };
  return{
    //获取singleton的实例，存在返回，不存在则创建
    getInstance: function(){
      if (!instance){
        instance = init();
      }
      return instance;
    }
  }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
//return true
console.log(singleA.getNum() === singleB.getNum());




//每次返回都是新的实例
var myBadSingleton = (function(){
  var instance;
  //私有的变量和函数
  function init(){
    var privateVar = "hello,private";
    var privateNum = Math.random();
    function privateMethod(){
      console.log(privateVar);
    };
    return{
      publicMethod: function(){
        console.log("this is publicMethod");
      },
      publicVar: privateVar,
      getNum: function(){
        return privateNum;
      }
     };
    }
    return {
      getInstance: function(){
        instance = init();
        return instance;
    }
  }
})();
var singleC = myBadSingleton.getInstance();
var singleD = myBadSingleton.getInstance();
//return false
console.log(singleC.getNum() === singelD.getNum());
