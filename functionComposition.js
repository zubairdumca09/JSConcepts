let input = "    JAVASCRIPT    ";
let output = "<div>" + input.trim() + "</div>"

// here we need to do 2 things.
//1. we need to trim the input
//2. we need to wrap it with <div> element.

const trim = str => str.trim();
const wrap = (type, str) => `<${type}> ${str} </${type}>`;
const toLowerCase = str => str.toLowerCase();

let result = wrap("div", toLowerCase(trim(input)));

console.log(result)