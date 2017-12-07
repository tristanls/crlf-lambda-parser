"use strict";

const parse = require("./parse.js");

exports.command = "*";

exports.desc = parse.desc;
exports.builder = parse.builder;
exports.handler = parse.handler;
