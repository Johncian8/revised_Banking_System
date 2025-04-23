class Account{

    constructor(balance){

        if(this.constructor == Account){

            throw new Error("This cannot be stanciated")
        }
        this.balance = balance

        if (localStorage.getItem("balance") === null || isNaN(parseFloat(localStorage.getItem("balance")))) {
      this.balance = 0;
      localStorage.setItem("balance", 0)
    } else {
      this.balance = parseFloat(localStorage.getItem("balance"));
        }
        
    }

    execute(){

        throw new Error("This must be override")
    }

    thanksW(){
        alert("Thank you for withdrawing " + this.wMoney)
    }
    
    thanksD(){
        alert("Thank you for depositing " + this.dMoney)
    }

}

class Widthdraw extends Account{

    constructor(balance, wMoney){

        super(balance)
        this.wMoney = wMoney
    }

    execute(){

        if(this.balance < this.wMoney){

            alert("Insuffecient balance")
        }else{

            let balance = this.balance - this.wMoney

            localStorage.setItem("balance", balance)
        }

    }
}

class Deposit extends Account{

    constructor(balance, dMoney){

        super(balance)
        this.dMoney = dMoney
    }

    execute(){

        if(this.dMoney < 0){

            alert("Cannot deposit negative money")
        }else{

            let total = this.balance + this.dMoney

            localStorage.setItem("balance", total)
        }

    }
}

class Check extends Account{

    checkbal(){
        return localStorage.getItem("balance")
    }
}
