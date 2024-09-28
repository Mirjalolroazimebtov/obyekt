
const pl = cartObj();
let totalPrice = 0;
let dastavka = 11000;
let value = " Buyurtmangiz "

for (const key in pl) {
    totalPrice += pl[key].price;
    value += pl[key].info;
}
totalPrice += dastavka;
console.log(`${value} \n\n Umumiy hisob: ${totalPrice} Yetkazib berish narxi: ${dastavka} so'm`);



