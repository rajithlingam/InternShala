const txt = " Hello RL Hello ";
console.log("String-txt:", txt);

const replaceTxt = txt.replace("Hello", "Vanakam");
console.log("txt.replace:", replaceTxt);

const replaceTxtAll = txt.replaceAll("Hello", "Vanakkam");
console.log("txt.replaceAll:", replaceTxtAll, replaceTxtAll.length);

const stringSplit = replaceTxtAll.split(" ");
console.log(stringSplit);

const stringTrim = replaceTxtAll.trim();
console.log(stringTrim, stringTrim.length);

const strTrimStart = replaceTxtAll.trimStart();
console.log(strTrimStart, strTrimStart.length);

const strTrimEnd = replaceTxtAll.trimEnd();
console.log(strTrimEnd, strTrimEnd.length);

const strTrimSplit = stringTrim.split(" ");
const strTrimStartSplit = strTrimStart.split(" ");
const strTrimEndSplit = strTrimEnd.split(" ");

console.log(strTrimSplit, strTrimStartSplit, strTrimEndSplit);

const fn = "Murugan.";
const ln = "Rajithlingam";

const strConcat = fn.concat(ln);
console.log(strConcat);

const strCharAt = strConcat.charAt(7);
const strCharCodeAt = strConcat.charCodeAt(7);
console.log("char:", strCharAt, "charCode:", strCharCodeAt);

const strAt = strConcat.at( -7 );
console.log("strConcat.at( -7 ):",strAt);

const strSlice = strConcat.slice( 0, 6 )
console.log(strSlice);

