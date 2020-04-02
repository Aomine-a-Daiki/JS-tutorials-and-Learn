const phone_price = 99.99,
accessory_price = 9.99,
tax_rate = 0.08;

let bank_account = prompt('Баланс на карте составляет:' )
amount = 0;

function taxCalculate(amount){
    return amount * tax_rate;
}

function formatPrice(amount){
    return amount.toFixed(2) + '$'
}

while (amount < bank_account){
    amount += phone_price;
    if(bank_account - amount < phone_price)
    amount += accessory_price;
}

amount += taxCalculate(amount);
alert(`Ваша покупка составляет ${formatPrice(amount)}`);

if(bank_account > amount)
alert(`К оплате ${formatPrice(amount)}`);
else 
alert(`Вы не можете себе позволить эту покупку`);
    

