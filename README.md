# iost-helloworld-dapp

![Hello world](/iost-sampledapp.gif)

```
npm install
npm run local
```

To use this, valid contract address should be in `src/components/HelloWorld.js` 's `hello` method.
`src/components/HelloWorld.js`
```
 hello = () => {
    const contractAddress = '' // fill contract address in it!
    const { someone } = this.state
    window.iost.callABI(
      contractAddress,
      'hello',
      [someone]
    )
```

After installing iost-extension, fill name on the input like above screenshot, finally click the 'hello' button.

Warning: To send a transaction, iost chrome extension should be installed before! 

[Download extension](https://chrome.google.com/webstore/detail/kedmnhnnafebhgojijhcfbonfkbppmkk)
