import { Characters, Films, People, Pilots, Planets, Residents, Species, Starships, Vehicles } from "../config/constants";


export const checkStringKeys = (input) => {
    if (input === Characters || input === Species || input === Planets || input === Starships || input === Films || input === Vehicles || input === Pilots || input === People || Residents === input) {
        return true
    } else {
        false
    }
}

export const integer_to_roman = (num) => {
    if (typeof num !== 'number')
        return false;

    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}