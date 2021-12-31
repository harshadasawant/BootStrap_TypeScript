export
class Car {   
    public Color:string     
    constructor(color:string) {   
       this.Color = color  
    }   
 }  
 class Car1{
    display():void {  
        let t= new Car("abc");

        console.log(t.Color);  
        
    }  
    
 } 
 class Audi extends Car {   
     Price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.Price = price;  
     }  
     display():void {  
         console.log("Color of Audi car: " + this.Color);  
         console.log("Price of Audi car: " + this.Price);  
     }  
 }  
 let obj = new Audi(" Black", 8500000 );  
 obj.display();  
 
 // multilevel
 
 class Animal {   
     eat():void {   
         console.log("Eating")   
      }   
 }   
 class Dog extends Animal {   
    bark():void {   
       console.log("Barking")   
    }   
 }  
 class BabyDog extends Dog{   
     weep():void {   
         console.log("Weeping")   
      }  
 }  
 let obj1 = new BabyDog();   
 obj1.eat();  
 obj1.bark();  
 obj1.weep()  