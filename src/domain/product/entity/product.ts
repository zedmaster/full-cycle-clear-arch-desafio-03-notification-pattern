import AbstractEntity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import ProductInterface from "./product.interface";


export default class Product extends AbstractEntity implements ProductInterface{

    private _name: string = "";
    private _price: number = 0;


    constructor(id: string, name: string, price: number) {
        super();
        this._id = id;
        this._name = name;
        this._price = price;

        this.validate();
        if(this.notification.hasErrors()){
            throw new NotificationError(this.notification.errors);
        }
    }


    get id() {
        return this._id;
    }


    get price() {
        return this._price;
    }


    get name() {
        return this._name;
    }


    validate(){

        if (this._id.length === 0) {
            this.notification.addError({
                context: "Product",
                message: "Id is required"
            })
        }

        if (this._name.length === 0) {
            this.notification.addError({
                context: "Product",
                message: "Name is required"
            })
        }

        if(this._price <= 0){
            this.notification.addError({
                context: "Product",
                message: "Price must be greater than 0"
            })
        }       
    }

        
    changePrice(price: number) {
        this._price = price;
        this.validate();
    }
    

    changeName(name: string) {
        this._name = name;
        this.validate();
    }   

}