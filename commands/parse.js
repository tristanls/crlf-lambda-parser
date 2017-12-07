"use strict";

const parser = require("../index.js");

exports.command = "parse";

exports.desc = "Parse lambda source.";

exports.builder = function(yargs)
{
    return yargs;
};

exports.handler = function(args)
{
    let content = "";
    process.stdin.resume();
    process.stdin.on("data", data => content += data.toString());
    process.stdin.on("end", () => parse(content));
};

const parse = content =>
{
    const match = parser.grammar.match(content);
    if (match.failed())
    {
        console.error(match.message);
        return;
    }
    const crlf =
    {
        lang: "lambda",
        ast: parser.semantics(match).parse()
    };
    console.log(JSON.stringify(crlf, null, 2));
};
