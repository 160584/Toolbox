Toggle Environment
==================

```js
(function () {
	const SUFFIX = '.ENV';
	if (document.location.href.search(SUFFIX) >= 0) {
		document.location.href = document.location.href.replace(SUFFIX, '');
	} else {
		document.location.href = document.location.origin + SUFFIX + document.location.pathname + document.location.search + document.location.hash;
	}
})();
```
