The bug:

```
✘ [ERROR] Deployment failed!

  Failed to publish your Function. Got error: Uncaught Error: No such module
  "crypto".
    imported from "chunk-OZ42KACK.mjs"
```

Appears to occur precisely when one attempts to initialize a service utilizing a library that expects to have the WebCrypto (crypto.subtle) package polyfilled, but then finds nothing.

----------------------------------------

Solved: Issue is an SSR problem, and adding an exclusion in _routes.json is not enough on its own to inform the compiler that the server will not need to use the module.

We solved it using isPlatformBrowser:

```
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export class NobleService {
  private p384: any

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Only run this code in the browser
      import('@noble/curves/p384').then(module => {
        this.p384 = module.p384
      });
    }
  }

}
```
