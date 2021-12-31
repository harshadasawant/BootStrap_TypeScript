//Union |
export const fun = () => {
    let val1: number | string;
    val1 = 12
    console.log("numeric value of val " + val1)
    val1 = "This is a string"
    console.log("string value of val " + val1)

    // Array of same data type
    let fruits: string[] = ['Apple', 'Orange', 'Banana'];
    console.log(fruits[0])
    console.log(fruits[1])
    console.log(fruits[2])


    //tuples-> array of diff data type
    var mytuple = [10, "Hello"]; //create a  tuple 
    console.log(mytuple[0]);
    console.log(mytuple[1]);

}

fun();
//========Function Overloading=======================
function add(a:any,b:any):any;
//Function with string type parameter  
function add(a:string, b:string): string; 
//Function with number type parameter  
function add(a:number, b:number): number;  
 
 //Function Definition 
function add(a: any, b:any): any {  
    return a + b;  
}
 
//Result  
console.log("Addition: " +add("Hello ",12));   
console.log("Addition: "+add(30, 20));  

//deafult and optional parameter
function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('Harshada'));   //Returns "Hello Harshada"  
console.log(displayName('Harshada', 'Hi'));   //Returns "Hi Harshada".  
console.log(displayName('Daksh'));    //Returns "Hello Daksh"  


