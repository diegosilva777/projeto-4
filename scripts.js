let button = document.getElementById("convert-button")
let select = document.getElementById("currency-select")

let dolar = 4.97
let euro = 5.35
let bitoin = 213006.31

let convertValues = () => {
    let inputReais = document.getElementById("input-real").value
    let realvalue = document.getElementById("real-value")
    let currencyValue= document.getElementById("currency-value-txt")

    realvalue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if(select.value === "US$ Dólar americano"){
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputReais / dolar)

}

if(select.value === "€ Euro"){
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputReais / euro)
}

if(select.value === "₿ Bitcoin"){
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8,
    }).format(inputReais / bitoin)
}

convertValues()
}




changeCurrency = () => {
    let currencyName = document.getElementById("currency-name")
    let currencyImg = document.getElementById("currency-img")

    if(select.value === "US$ Dólar americano"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./estados-unidos.png"
    }
    if(select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./euro.png"
    }
    if(select.value === "₿ Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./bitcoin.png"
    }

}


button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
