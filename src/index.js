const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    let decodeBase = {
        "10": ".",
        "11": "-"
    }
    let phrase = "";
    let decodedToMorse = [];
    let combination = "";

    for (let i = 0; i < expr.length; i++) {

        if (expr[i] === "*") {
            i += 10;
            phrase += " ";
        }

        combination += expr[i];

        if (i % 2) {
            decodedToMorse.push(decodeBase[combination]);
            combination = "";
        }

        if (!((i + 1) % 10)) {
            phrase += MORSE_TABLE[decodedToMorse.filter(item => item !== undefined).join("")];
            decodedToMorse = [];
        }
    }

    return phrase;
}

module.exports = {
    decode
}