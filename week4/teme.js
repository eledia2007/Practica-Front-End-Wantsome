//Exercitiul 1
function is_string(val) {
    return typeof val === 'string';
}
//Exercitiul 2
function is_Blank(val) {
    return typeof val === 'string' && val.length === 0;
}
//Exercitiul 3
function string_to_array(val) {
    return val.split(" ");
}
//Exercitiul 4
function abbrev_name(val) {
    var nameSplit = val.split(" ");
    var firstName = nameSplit[0];
    var lastName = nameSplit[1].substring(0, 1);
    return val = firstName.concat(" ", lastName, ".");
}
//Exercitiul 5
function capitalize(val) {
    var firstLetter = val.charAt(0).toUpperCase();
    return firstLetter.concat(val.slice(1));
}
//Exercitiul 6
function truncate_string(text, nrChar) {
    var nrChar = 4;
    return text.substr(0, nrChar);
}
//Exercitiul 7
function isUpperCaseAt(text, nrCharAt) {
    var a = text.charAt(nrCharAt);
    var b = text.charAt(nrCharAt).toUpperCase();
    return a == b;
}
//Exercitiul 8
function insert(text, insertText, position) {
    var beforeInsert = text.slice(0, position);
    var afterInsert = text.slice(position);
    return beforeInsert.concat(insertText, " ", afterInsert);
}
//Exercitiul 9 
function remove_first_occurance(text, textRemoved) {
    var textRemovedIndex = text.indexOf(textRemoved);
    var textRemovedLength = textRemoved.length;
    var textRemovedLastIndex = textRemovedIndex + textRemoved.length;
    return text.slice(0, textRemovedIndex - 1).concat(text.slice(textRemovedLastIndex));
}
//Exercitiul 10
function compare_strings(string1, string2) {
    var compare = string1.toUpperCase() === string2.toUpperCase();
    return compare;
}
//Exercitiul 11
function Uncapitalize(text) {
    var uncapText = text.charAt(0).toLowerCase() + text.slice(1);
    return uncapText;
} 
