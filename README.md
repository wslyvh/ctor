# Ctor

[![Build Status](https://travis-ci.org/wslyvh/ctor.svg?branch=master)](https://travis-ci.org/wslyvh/ctor)
[![codecov](https://codecov.io/gh/wslyvh/ctor/branch/master/graph/badge.svg)](https://codecov.io/gh/wslyvh/ctor)
[![NPM](https://img.shields.io/npm/v/ctor-ui.svg)](https://www.npmjs.com/package/ctor-ui)
[![NPM](https://img.shields.io/npm/l/ctor-ui.svg)](https://www.npmjs.com/package/ctor-ui)
[![NPM](https://img.shields.io/npm/dt/ctor-ui.svg)](https://www.npmjs.com/package/ctor-ui)

## Overview

A smart contract management toolkit.

- **Ctor UI** - lets you visualize and interact with a smart contract's resources
- **Online demo** - https://ctor-ui.herokuapp.com/

## Installation

Install the [NPM package](https://www.npmjs.com/package/ctor-ui) globally.

```
$ npm install ctor-ui -g
```

## Quickstart

Follow the Truffle documentation for the basics of a Truffle project and deploying your first smart contract.
https://www.truffleframework.com/docs/truffle/quickstart

## Usage

Ctor is configured with default settings to run out of the box (see Quickstart).

```
ctor [-p port] [-b build_dir] [-h host]
```

### Options

| command   | flag | description             | default                |
| --------- | ---- | ----------------------- | ---------------------- |
| version   | -v   | show package version    | -                      |
| port      | -p   | port to serve Ctor from | 5500                   |
| build_dir | -b   | truffle build directory | ./build/contracts/     |
| host      | -h   | rpc server url          | http://localhost:7545/ |
| networkId | -i   | network id              | 5777                   |

## Github Project structure

- [Cli](cli/) - command line interface to run Ctor UI
- [Client](client/) - client UI
- [Landing](landing/) - landing page
- [Server](server/) - express server
- [Smart Contract example](truffle/) - truffle example project

## Feedback

We really appreciate and value contributions. All bugs, feature requests, pull requests, feedback, etc., are welcome.
Feel free to post them [here](https://github.com/wslyvh/ctor/issues/new).

## License

Ctor is released under the GNU General Public License. See [LICENSE](LICENSE).
