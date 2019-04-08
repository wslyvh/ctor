# Ctor

[![Build Status](https://travis-ci.org/wslyvh/ctor.svg?branch=master)](https://travis-ci.org/wslyvh/ctor)
[![codecov](https://codecov.io/gh/wslyvh/ctor/branch/master/graph/badge.svg)](https://codecov.io/gh/wslyvh/ctor)

## Overview

A smart contract management toolkit.

- **Ctor UI** - lets you visualize and interact with a smart contract's resources

## Installation

Install the NPM package, within your Truffle smart contract project.

```
$ npm install ctor-ui
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

## Github Project structure

- [Cli](cli/) - command line interface to run Ctor UI
- [Client](client/) - client UI
- [Server](server/) - express server
- [Smart Contracts - Example](truffle/) - truffle example project

## Feedback

We really appreciate and value contributions. All bugs, feature requests, pull requests, feedback, etc., are welcome.
Feel free to post them [here](https://github.com/wslyvh/ctor/issues/new).

## License

Ctor is released under the GNU General Public License. See [LICENSE](LICENSE).
