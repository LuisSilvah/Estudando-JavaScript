function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha (countries) {
    console.log(countries);
    linha = document.createElement("tr");
    tdcountry = document.createElement("td");
    tdcases = document.createElement("td");
    tdcountry  = innerHTML = countries.country 
    tdcases= innerHTML = countriess.cases

    linha = appendChild(tdcase);
    linha = appendChild(tdcoronavirus);

    return linha;
}

function main () {
let data = fazGet("https://coronavirus-19-api.herokuapp.com/countries")
let countries = JSON.parse(data);
let tabela = document.getElementById("tabela")
countries.forEach(element => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
});
}

main ()
