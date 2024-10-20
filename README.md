The bug:

```
✘ [ERROR] Deployment failed!

  Failed to publish your Function. Got error: Uncaught Error: No such module
  "crypto".
    imported from "chunk-OZ42KACK.mjs"
```

Appears to occur precisely when one attempts to initialize a service utilizing a library that expects to have the WebCrypto (crypto.subtle) package polyfilled, but then finds nothing.


