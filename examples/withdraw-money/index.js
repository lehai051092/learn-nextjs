const K500_QTY = 2;
const K200_QTY = 5;
const K100_QTY = 10;
const K50_QTY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
    let a = 0, b = 0, c = 0, d = 0,
        totalAmount = (K500_VALUE * K500_QTY) + (K200_VALUE * K200_QTY) + (K100_VALUE * K100_QTY) + (K50_VALUE * K50_QTY),
        k500qty= K500_QTY,
        k200qty= K200_QTY,
        k100qty = K100_QTY,
        k50qty = K50_QTY;

    if (typeof amount !== 'number' || amount < 0 || amount % BASE_UNIT !== 0) return 'Invalid balance';
    if (amount > totalAmount) return 'Insufficient balance from ATM';

    do {
        if (amount >= K500_VALUE && k500qty > 0) {
            amount = amount - K500_VALUE;
            k500qty--;
            a++;
        } else {
            if (amount >= K200_VALUE && k200qty > 0) {
                amount = amount - K200_VALUE;
                k200qty--;
                b++;
            } else {
                if (amount >= K100_VALUE && k100qty > 0) {
                    amount = amount - K100_VALUE;
                    k100qty--;
                    c++;
                } else {
                    amount = amount - K50_VALUE;
                    k50qty--;
                    d++;
                }
            }
        }
    } while (amount > 0);

    return {
        k500: a,
        k200: b,
        k100: c,
        k50: d,
    };
}
