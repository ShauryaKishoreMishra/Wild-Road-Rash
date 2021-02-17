class FirstPage{
    constructor(){
        this.title= createElement('h1');
        this.title.html('Wild Road Rash');
        this.input= createInput('Name:');
        this.button= createButton('Play');
        this.greeting= createElement('h2');
        
    }
     display(){
         this.title.position(500,100)
         this.input.position(500,200)
         this.button.position(550,300)
         this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name= this.input.value();
        this.greeting.html("Hello "+name);
        this.greeting.position(500,200)
         })
     }
}