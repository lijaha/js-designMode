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
