# crlf-lambda-parser

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

[![NPM version](https://badge.fury.io/js/crlf-lambda-parser.png)](http://npmjs.org/package/crlf-lambda-parser)

[crlf](https://github.com/organix/crlf) `lambda` language parser.

## Contributors

[@tristanls](https://github.com/tristanls)

## Installation

    npm install -g crlf-lambda-parser

## Usage

    $ crlf-lambda-parser < ./examples/identity.lambda
    $ crfl-lambda-parser < ./examples/invalid.lambda

## Releases

We follow semantic versioning policy (see: [semver.org](http://semver.org/)):

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
>MAJOR version when you make incompatible API changes,<br/>
>MINOR version when you add functionality in a backwards-compatible manner, and<br/>
>PATCH version when you make backwards-compatible bug fixes.

**caveat**: Major version zero is a special case indicating development version that may make incompatible API changes without incrementing MAJOR version.
