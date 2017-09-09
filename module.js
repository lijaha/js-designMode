//javascript中创建模块的几种方法：
//1.对象字面量表示法
var Person = {
  name: "lijaha",
  age: 22,
  sex: "man",
  getName: function(){
    var self = this;
    console.log(self.name);
  },
  getAge: function(){
    var self = this;
    console.log(self.age);
  },
  getSex: function(){
    var self = this;
    console.log(self.sex);
  }
}
var name = Person.name;
Person.getName();

//2.module模式
//module模式使用闭包封装私有状态和组织。他提供了一种包装混合公有私有方法和变量的方式，
//防止泄漏在全局作用域，形成自己独立的作用域，避免与其他开发人员的接口发生冲突。
//通过该模式只需要返回一个公有API，其他一切维持在闭包里面
var Person = (function(){
  var name = "lijaha";
  var age = 21;
  return {
    getName: function(){
      console.log(name);
    },
    increatmentAge: function(){
      return ++age;
    },
    getAge: function(){
      console.log(age);
    }
  };
})();
Person.getName();
Person.increatmentAge();
Person.getAge();

//包含命名空间、公有、私有变量的module模式：
var myNameSpace = (function(){
  //私有变量
  var myPrivateVar = 0;
  //私有函数
  var privateMethod = function(){
    console.log('privateMethod');
  };
  return {
    // 公有变量
    myPublicVar: 'public',
    //调用私有变量和方法的公有函数
    myPublicMethod: function(){
      ++myPrivateVar;
      privateMethod();
    }
  }
})();

//引入，比如引入jquery并在本地取个别名
var myModule = (function(JQ){
  function privateMethod(){
      JQ(".info").html("info");
  }
  return {
      publicMethod: function(){
        this.privateMethod();
      }
  }
})(jQuery);
myModule.publicMethod();

//引出
var myModule = function(){
  var module = {}, privateVar = "hello";
  function privateMethod(){
    console.log(privateVar);
  };
  module.publicVar = "hi";
  module.publicMethod = function(){
    console.log(privateVar)
  }
  return module;
}
myModule.module.publicMethod();

//揭示模式，优点：可读性好，在模块底部容易指出哪些函数和变量可以被公开访问
var myRevealingModule = function(){
  var privateVar = "privateName";
  var publicVar = "publicVar";
  function privateMethod(){
    console.log("Name: " + privateVar);
  }
  function publicSetName(newName){
    privateVar = newName;
  }
  function publicGetName(){
    privateMethod();
  }
//将暴露的公有指针指向到私有函数和属性上
  return {
    setName: publicSetName,
    getName: publicGetName,
    greeting: publicVar
  };
}();
myRevealingModule.getName();
myRevealingModule.setName('lijaha');
