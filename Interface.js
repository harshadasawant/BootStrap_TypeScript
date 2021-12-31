// interface interface_name {  
//     // variables' declaration  
//     // methods' declaration  
// }  
var OperatingSystem = function (type1) {
    console.log('Android ' + type1.name + ' has ' + type1.language + ' language  ' + type1.sayHi(4) + '   ' + type1.sayHi(6));
};
var Oreo = { name: 'O', language: 'Java', hello: function () { return "Hello"; }, hello1: function () { return 1; }, sayHi: function (a) { return "sayHi" + a; } };
OperatingSystem(Oreo);
var A = /** @class */ (function () {
    function A(name, language) {
        this.sayHi = function () {
            return "class A";
        };
        this.name = name;
        this.language = language;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B(name, language) {
        this.sayHi = function () {
            return "class B";
        };
        this.name = name;
        this.language = language;
    }
    return B;
}());
var os1 = new A('Harshada', 'Java');
var a = new A('Daksh', 'JavaScript'); // object is of type A  reference is OS1
var b = new B('sdf', 'sdfsd'); //object of type B reference is OS1
//   let obj =new A('abc','hgf');
//   console.log(os1.name+"  "+os1.language+" "+os1.sayHi());
//   console.log(os2.name+"  "+os2.language+" "+os2.sayHi());
var OperatingSystem1 = function (type1) {
    console.log('Android ' + type1.name + ' has ' + type1.language + ' language  ' + type1.sayHi() + '   ' + type1.sayHi());
};
//   let Oreo1 = {name: 'O', language: 'Java', sayHi:(a:number) :string=>{ return "sayHi"+a}}  
OperatingSystem1(a);
OperatingSystem1(b);
//create person interface -> person name and age attribute and create display method
//create employee class implements person-> override display method and in constructore initialise name and age
//create student class implements person-> override display method and in constructore initialise name and age
//   create function personData(person) { print all value and function call}
// create 2 objects 1. create Employee and reference is person and 2. create Student object and reference is person
// callpersondata(obj1/2);
