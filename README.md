# rest-api-code-view

> Use: https://runkit.com/garik-code/rest-api-code-view

Read the source code for a portal that does not want this.

---

npm install racv

```javascript

const RACV = require('racv')

RACV.url('https://blackmoon.net/_next/static/GdcSUDy8aNOaxTTi_H4hc/pages/login.js')
.then(success => console.log(success), err => console.log(err))

```

or 
```javascript
cd /racv
pm2 start ecosystem.config.js 
```
and

```javascript
view-source:http://localhost:3333/https:||blackmoon.net|_next|static|GdcSUDy8aNOaxTTi_H4hc|pages|login.js
```
