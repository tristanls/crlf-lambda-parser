"use strict";

const fs = require("fs");
const ohm = require("ohm-js");

const desc = fs.readFileSync("./lambda.ohm", "utf8");
const lambda = ohm.grammars(desc).Lambda;

const semantics = lambda.createSemantics().addOperation("parse",
    {
        Expr_abstraction: (_, ident, __, expr) =>
        (
            {
                kind: "abstraction",
                parameter: ident.parse(),
                body: expr.parse()
            }
        ),
        Expr_application: (left, _, right, __) =>
        (
            {
                kind: "application",
                operator: left.parse(),
                operand: right.parse()
            }
        ),
        Expr_variable: ident =>
        (
            {
                kind: "variable",
                name: ident.parse()
            }
        ),
        Ident: (letter, alnums) => `${letter.sourceString}${alnums.sourceString}`
    }
);

module.exports =
{
    grammar: lambda,
    semantics
};
