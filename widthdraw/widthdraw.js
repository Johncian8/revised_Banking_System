document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
}

document.querySelector('#deposit').onclick = ()=>{

    window.location.href = "../deposit/deposit.html"
}

document.querySelector('#checkbal').onclick = ()=>{

    window.location.href = "../checkbal/checkbal.html"
}

window.onload = ()=>{

    document.querySelector('h4').innerHTML = new Date().toDateString()
}


document.querySelector('button').onclick = ()=>{

    let widthdrawAmount = parseFloat(document.querySelector('#aWid').value)

        let balance = parseFloat(localStorage.getItem("balance"))

        if(balance <= 0 || balance < widthdrawAmount){

            alert("Insufficient balance")
        }else{

            const widthdraw = new Widthdraw(balance, widthdrawAmount)
        
            widthdraw.execute()
        
            widthdraw.thanksW()

        }

        document.querySelector('#aWid').value = ""

}

document.querySelector("input").oninput = ()=>{

    document.querySelector('button').disabled = false
}