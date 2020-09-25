# TIMEv2 Token Contracts [![Build Status](https://travis-ci.org/smartcontractkit/LinkToken.svg?branch=master)](https://travis-ci.org/smartcontractkit/LinkToken)

The TIMEv2 token is an [EIP20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md) token with additional [ERC677](https://github.com/ethereum/EIPs/issues/677) functionality forked from LINK token by ChainLink.

To prevent accidental burns, the token does not allow transfers to the contract itself and to 0x0.

Security audit for [v0.4 version of the contracts](./contracts/v0.4/) is available [here](https://gist.github.com/Arachnid/4aa88041bd6e34835b8c0fd051245e79).

## Installation

The project contains [v0.4 contracts](./contracts/v0.4/) that were used for LINK Ethereum Mainnet deployment in 2017. For deployments moving forward, we use the updated [v0.6 contracts](./contracts/v0.6/) which use a more recent version of solc and the OpenZeppelin token standards. These updates include a minor ABI change around approval/allowance naming.

```bash
yarn install
```

## Testing

Before running tests, open a new terminal and start Ganache on port `8454`:

```bash
ganache-cli -l 8000000
```

Run tests:

```bash
yarn test
```

This will instruct the tests to run against your locally deployed instance of Ganache.

Or you can test specific version separately:

```bash
yarn test:v0.4
```

## Migration

To migrate v0.4 contracts run:

```bash
yarn migrate:v0.4
```

To migrate v0.6 contracts run:

```bash
yarn migrate:v0.6
```

This will migrate the `TIME Token` contract to your locally deployed instance of Ganache blockchain.
