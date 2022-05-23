# Web3 Decentralized Data Specifications

The goal of the Web3 Decentralized Data Specification (W3DS) is to create a data metaverse for web3 decentralized data. This standard will build Web3 data portraits on the chain, which will help to help web3 search engine content construction, help identify specific digital content, record content metadata, intellectual property rights and interests of data holders
## W3DS Goals

The goal of W3DS is to build a common data protocol, which should satisfy the following conditions:
1. Every W3DS has a unique global identifier
1. All Changes of the metadata must be traceable
1. The schema must be extensible
1. Connecting the digital content to the corresponding intellectual property rights
1. Linking data holder journeys to provide distributable profit rules for data creators
1. Record every transaction of data and build a detailed data transaction chain
   
## W3DS Data Model

The W3DS data model is composed of [linked data](#linked-data) from different data structures shown below. W3DS data is [JSON-LD](https://json-ld.org/) compatible:

![W3DS data model](./images/w3ds_model.png)
```json
{
  "@context": {
    "@vocab": "http://w3ds.io/"
  },
  "@type": "DataPortraits",
  "@id": "",
  "timestamp": "2021-03-23T12:00:00+08:00",
  "version": 2,
  "msg": "this is the msg when data on chain",
  "links": [
    "bahuaierav3bfvm4ytx7gvn4yqeu4piiocuvtvdpyyb5f6moxniwemae4tjyq",
    "bahuaierav3bfvm4ytx7gvn4yqeu4piiocuvtvdpyyb5f6moxniwemae4tjyq"
  ],
  "fingerprints": [
    "ipfs://QmNrgEMcUygbKzZeZgYFosdd27VE9KnWbyUD73bKZJ3bGi"
  ],
  "holders":{
    "current":"current holder",
    "pre":"previous holder",
    "creator":"0x5be4663626dE48aEabddddC317d8c6Bc86eac766"
  },
  "metadata": {
    "@context": "http://schema.org/",
    "type": "video/image/doc ...",
    "name": "data's name ",
    "description": "data's description",
    "datePublished": "data's published time",
    "version": 1,
    "url": "url for data ",
    "author": "author url",
    "cid": "cid for data",
    "keywords": "matrix,recursion"
  }
}

```

## W3DS 

W3DS will integrate various public chains, such as FVM, Polygon, ETH and so on. Finally realize the cross-chain data metaverse. Add data portraits to the chain for all CID data, and feed back all data portraits to web3

## License

This repository is only for documents. All of these are licensed under the [CC-BY-SA 4.0 license](https://spdx.org/licenses/CC-BY-SA-4.0.html)
