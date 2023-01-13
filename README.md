# Ethereum Registry of Tokens
To submit your token to the registry, create a branch and add a new file `ERTs/{unique symbol for your token}.json` following this template:

```
{
  "name": "The name of the token",
  "symbol": "The symbol of the token. This must be unique.",
  "decimals": "The number of decimals to include when your token is shown in human-readable format",
  "address": "The address of the token on Ethereum Mainnet",
  "details": "Further information to help others understand the significance of the token",
  "website": "URL of the official website for the token"
}

```

Then create a pull request. Once our validators merge your pull request, it will be automagically added to the registry contract!
