module.exports = function toReadable(number) {
    const zero = 'zero';
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const complexTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const getDigit = (n, dig) => Math.floor(n / 10 ** dig);

    const getDigitFromSource = (source, n, dig) => source[getDigit(n, dig)];

    const getRest = (n, dig) => n % 10 ** dig;

    const getOnes = n => ones[n];

    const getComplexTens = n => complexTens[n - 10];

    const getTens = n => {
        if (n >= 20) return `${getDigitFromSource(tens, n, 1)} ${getOnes(getRest(n, 1))}`.trim();
        if (n >= 10 && n < 20) return getComplexTens(n);
        if (n < 10) return getOnes(n);
    };

    const getHundreds = n => n > 99 ? `${getDigitFromSource(ones, n, 2)} hundred ${getTens(getRest(n, 2))}`.trim() : getTens(n);

    return number === 0 ?  zero : getHundreds(number);
};
