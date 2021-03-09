# @roylines/nifty-data

![ci](https://github.com/roylines/node-nifty-data/actions/workflows/action.yml/badge.svg)
[![npm version](https://badge.fury.io/js/%40roylines%2Fnifty-data.svg)](https://badge.fury.io/js/%40roylines%2Fnifty-data)

A node module for accessing [nifty gateway](https://niftygateway.com) market data. This allows you to access the market data underpinning, for example, the [Bitcoin Angel Nifty](https://niftygateway.com/itemdetail/secondary/0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958/11400012483). Please use responsibly and within the Nifty [terms of use](https://niftygateway.com/termsofuse).

## Install

```
npm install @roylines/nifty-data
```

## Quick Start

```js
const nifty = require("@roylines/nifty-data");

const globalHistory = await nifty.getGlobalHistory({
  contractAddress: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
});

console.log("global history", globalHistory);
```
