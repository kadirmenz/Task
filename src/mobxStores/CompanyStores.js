import { makeObservable, observable, action } from "mobx";



class CompanyStoreImpl{
    companies=[];


    constructor(){
        makeObservable(this, {
            companies:observable,
            addCompany:action
        })
    }

    addCompany(title){
        const item = {
            id:Math.random().toFixed(4),
            title,
            completed:false
        }
        this.companies.push(item);
    }

}
export const CompanyStores = new CompanyStoreImpl();