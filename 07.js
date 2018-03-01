class Str {
    constructor(string) {
        this._string = string;
    }
    lower(string) {
        this._string = string;
        return this._string.toLowerCase();
    }
    upper(string) {
        this._string = string;
        return this._string.toUpperCase();
    }
    capitalize(string) {
        this._string = string;
        return this._string.replace(/\b\w/g, l => l.toUpperCase())
    }
    reverse(string) {
        this._string = string;
        
        var splitString = this._string.split(""); 
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join(""); 
        return joinArray; 
    }
    contains(string, words) {
        this._string = string;
        //words = [];
        var a = this._string;
        return a.indexOf(words) > -1;
    }
    random(length) {
        if(length !== null) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
        } else {
            length = 16;
            return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
        }
    }
    slug(string) {
        this._string = string;
        return this._string.toLowerCase().replace(/[^0-9a-z]/gi, '-');

    }
}

const str = new Str();
console.log(str.lower('MAKAN'))
console.log(str.upper('makan'))
console.log(str.capitalize('saya ingin makan'))
console.log(str.reverse('kasur'))
console.log(str.contains('Saya ingin makan sate', 'makan'))
console.log(str.contains('Saya ingin makan sate', 'rujak'))
console.log(str.contains('Saya ingin makan sate', ['sate', 'rujak']))
console.log(str.random())
console.log(str.random(6))
console.log(str.random(32))
console.log(str.slug('Kotlin & Swift semakin populer di 2018?'))