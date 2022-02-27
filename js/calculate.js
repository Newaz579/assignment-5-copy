//get input value
function getInputValue(goods) {
    const goodsInput = document.getElementById(goods);
    const goodsInputConvert = parseFloat(goodsInput.value);
    return goodsInputConvert;
}
//get innerText value using function
// function getTextValue(givenText) {
//     const textInput = document.getElementById(givenText);
//     return textInput;
// }

//show notice
function showNotice(isTrue) {
    const successMessage = document.getElementById('notify-succes');
    const faildMessage = document.getElementById('notify-fail');
    if (isTrue) {
        faildMessage.style.display = 'block';
        successMessage.style.display = 'none';

    }
    else {
        successMessage.style.display = 'block';
        faildMessage.style.display = 'none';

    }

}
document.getElementById('calculation').addEventListener('click', function () {
    const monthlyIncome = getInputValue('income');
    const foodInputConvert = getInputValue('food-cost');
    const rentInputConvert = getInputValue('rent-cost');
    const clothesInputConvert = getInputValue('clothes-cost');
    const cost = foodInputConvert + rentInputConvert + clothesInputConvert;
    if ((isNaN(monthlyIncome) || isNaN(foodInputConvert) || isNaN(rentInputConvert) || isNaN(clothesInputConvert)) || (monthlyIncome <= 0 || foodInputConvert < 0 || rentInputConvert < 0 || clothesInputConvert < 0) || (cost > monthlyIncome)) {
        showNotice(true);
    }
    else {
        const totalCost = document.getElementById('total-cost');
        totalCost.innerText = cost;
        const currentBalance = document.getElementById('current-balance');
        const availableBalance = monthlyIncome - cost;
        currentBalance.innerText = availableBalance;
        showNotice(false);
    }

});

//monthly savings
document.getElementById('save').addEventListener('click', function () {
    const monthlyIncome = getInputValue('income');
    const savingParcent = getInputValue('saving-parcent');
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    const totalSavings = (monthlyIncome * savingParcent) / 100;
    if (totalSavings > currentBalance || isNaN(savingParcent) || savingParcent < 0) {
        showNotice(true);
    }
    else {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = totalSavings;
        const remainingBalance = document.getElementById('remaining-balance');
        const totalTk = currentBalance - totalSavings;
        remainingBalance.innerText = totalTk;
        showNotice(false);
    }

});