//创建对象
//1.点语法创建对象
person.name = 'lijaha';
//获取对象的值
var name = person.name;


//2.中括号语法
person["name"] = 'lijaha';
var name = person["name"]

//ES5语法
//3.Object.defineProperty
 Object.defineProperty(person,"name",{
  value: "lijaha",
  writable: true,
  enumerable: true，
  configurable:true
})
//通过函数传值
 var setProperty = function(obj, key, value){
  config.value = value;
  Object.defineProperty(obj, key, config);
}

//创建空对象
var person = {};
setProperty(person, "name", "lijaha");
setProperty(person, "age", "33");

//4.Object.defineProperties
Object.defineProperties(person,{
  "name":{
    value: "lijaha",
    writable: true
  },
  "age":{
    value: "22",
    writable: true
  }
});

//Constructor构造器
//5.构造函数创建对象,所创建的对象都是单独的，无法实现实例之间共享
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.getName = function(){
    console.log(this.name);
  }
}
var lijaha = new Person("lijaha", 22, "man");
lijaha.getName();

//6.原型构造函数创建对象
function Person(name, age, sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Person.prototype.getName = function(){
  console.log(this.name);
}
Person.prototype.getAge = function(){
  console.log(this.age);
}
Person.prototype.getSex = function(){
  console.log(this.sex);
}

var lijaha = new Person("lijaha", 22, "man");
lijaha.getName();

//7.工厂模式创建对象
function Person(name, age, sex){
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  return obj;
}
var lijaha = new  Person("lijaha", 22, "man");
