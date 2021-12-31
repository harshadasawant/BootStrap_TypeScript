// interface interface_name {  
//     // variables' declaration  
//     // methods' declaration  
// }  

interface OS {  
    name: String;  
    language: String;  
    hello():string;
    hello1():number;
    sayHi: (a:number)=> string;//declare method
    
}  
let OperatingSystem = (type1: OS): void => {  
  console.log('Android ' + type1.name + ' has ' + type1.language + ' language  ' +type1.sayHi(4)+'   '+type1.sayHi(6));  
};  
let Oreo = {name: 'O', language: 'Java', hello(){return "Hello"}, hello1(){return 1}, sayHi:(a:number) :string=>{ return "sayHi"+a}}  
OperatingSystem(Oreo);  



interface OS1{
    name: String; 
    language: String;
      sayHi: ()=>string;
  }
  class A implements OS1{
    name: String;
    language: String;
    constructor(name:string, language:string){
      this.name = name;
      this.language = language;
    }
   sayHi = () : string=>{
      return"class A";
    }
  }

  class B implements OS1{
    name: String;
    language: String;
    constructor(name:string, language:string){
      this.name = name;
      this.language = language;
    }
   sayHi = () : string=>{
      return"class B";
    }
  }
  
  let os1:A = new A('Harshada','Java');

  let a:OS1= new A('Daksh','JavaScript'); // object is of type A  reference is OS1
  let b:OS1 = new B('sdf','sdfsd');//object of type B reference is OS1
//   let obj =new A('abc','hgf');
//   console.log(os1.name+"  "+os1.language+" "+os1.sayHi());
//   console.log(os2.name+"  "+os2.language+" "+os2.sayHi());

  let OperatingSystem1 = (type1: OS1): void => {  
    console.log('Android ' + type1.name + ' has ' + type1.language + ' language  ' +type1.sayHi()+'   '+type1.sayHi());  
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

