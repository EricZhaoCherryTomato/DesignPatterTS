//In object-oriented design, the chain-of-responsibility pattern is a design pattern consisting of 
//a source of command objects and a series of processing objects.Each processing object contains 
//logic that defines the types of command objects that it can handle; the rest are passed to the next 
//processing object in the chain. A mechanism also exists for adding new processing objects to the end 
//of this chain.

abstract class PurchasePower {
    protected static BASE : number = 500;
    protected successor : PurchasePower;

    protected abstract  getAllowable() : number;
    protected abstract  getRole() : string;

    public setSuccessor(successor : PurchasePower) : void {
        this.successor = successor;
    }

    public processRequest(request : PurchaseRequest) {
        if (request.getAmount() < this.getAllowable()) {
            return this.getRole() + " will approve $" + request.getAmount();
        } else if (this.successor != null) {
            this.successor.processRequest(request);
        }
    }

}