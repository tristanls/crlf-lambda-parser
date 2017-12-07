#!/usr/bin/env node
"use strict";

require("yargs")
    .commandDir("../commands")
    .help()
    .alias("help", "h")
    .strict()
    .argv
