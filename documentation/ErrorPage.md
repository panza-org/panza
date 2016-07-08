`ErrorPage` (component)
=======================

Display an error, with messages and actions depending
upon the user state. Particularly useful with Relay.Renderer
when an error state and retry function are provided.

Props
-----

### `children`

type: `node`


### `detailMessage`

type: `string`
defaultValue: `'It\'s possible that our server are under heavy load, or that your internet connection is slow. Please try again.'`


### `isOffline`

type: `bool`
defaultValue: `false`


### `message`

type: `string`
defaultValue: `'Hmm, loading appears to be taking a while.'`


### `offlineMessage`

type: `string`
defaultValue: `'Please ensure that you are connected to the internet.'`


### `retry` (required)

type: `func`


### `style`

type: `any`

## Examples

### Standard Error Page
![Error page](images/ErrorPage.png)

```javascript
<ErrorPage
  retry={() => {
    console.log('retry')
  }}
/>
```
