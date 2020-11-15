const main = document.getElementById('main');


function formatMoney(value){
    value = Math.ceil(value * 100)/100;
    value = value.toFixed(2);
    return '$' + value
}

function formatSplit(value){
    if (value === '1'){
        return value + ' person';
    }else {
        return value + ' people';
    }
}

function update(){

    const bill = Number(document.getElementById('yourBill').value);
    const tip = document.getElementById('tipInput').value;
    const split = document.getElementById('splitInput').value;

    let tipValue = bill * (tip/100);
    let tipEach = tipValue / split;
    let billEach = (bill + tipValue)/split;

    document.getElementById('tipPercent').innerHTML = tip + '%';
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML =formatMoney(bill + tipValue);
    document.getElementById('splitValue').innerHTML =formatSplit(split);
    document.getElementById('billEach').innerHTML =formatMoney(billEach);
    document.getElementById('tipEach').innerHTML =formatMoney(tipEach);
}


main.addEventListener('input', update);