# token.registry
To submit your token to the registry, create a branch and add a new file `ERTs/{address_of_your_token}.json` following this template:

```
    "name": "My Token",
    "symbol": "SYMBOL",
    "type": "ERC20",
    "address": "0x...",
    "website": "https://myexampletoken.website/",
    "notes": "Additional notes to help the validators"
```

The create a PR. Once our validators merge your PR, it will be automagically added to the registry contract!
