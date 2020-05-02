const querystring = require('querystring');

let parse=querystring.parse("foo=bar&abc=xyz&abc=123")
console.log("parse",parse.foo)

let formate = querystring.stringify({foo:'bat',abc:['xyz abc',123]})

console.log("format----",formate)

let escape = querystring.escape("hello welcome");

console.log("escape---",escape)

let unescape = querystring.unescape(escape);
console.log("unescape-------",unescape)