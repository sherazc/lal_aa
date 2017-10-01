class A{
    constructor(a1){
        let privateVar1 = 14;
        this.pubVar1 = a1*2;
        this.getPrivateVar=()=>privateVar1;
        this.setPrivateVar=newprivateVar=>privateVar1=newprivateVar;
    }
    processA()
    {
        return this.getPrivateVar()+ this.pubVar1;
    }
}
class B extends A
{
    constructor(){
        super(14);
    }
    processB(){
        return this.processA()+6;
    }
}

(function(){
    let ob= new B();
    console.log(ob.processB());
    //console.log(ob.processA());
})();