export default  class Addition{  
    private x:number;
    y:number;
    constructor(x: number, y: number){  
        this.x=x;
        this.y = y;
    }  
    Sum(){  
        console.log("SUM: " +(this.x + this.y));  
    }  
}  

export  class Substraction{  
    x:number;
    y:number;
    constructor(x: number, y: number){  
        this.x=x;
        this.y = y;
    }  
    Substract(){  
        console.log("SUBSTRACTION: " +(this.x - this.y));  
    }  
}  