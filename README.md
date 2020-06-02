# simple-ipfs-file-uploader-via-browser
A minimalist IPFS file uploader via browser using Javascript + IpfsHttpClient


Demo: https://anarkrypto.github.io/simple-ipfs-file-uploader-via-browser/





<strong>Note</strong>: If you load your app from a different domain than the one the daemon is running (most probably), you will need to set up CORS, see https://github.com/ipfs/js-ipfs-http-client#cors to learn how to do that.

A quick (and dirty way to get it done) is:

```bash
> ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
> ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"
```
