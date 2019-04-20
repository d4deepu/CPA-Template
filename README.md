# CPA Page Template



## Project setup
```
npm install
```

### Compiles and hot-reloads for development

Run this while testing and coding

```
npm run serve
```

### Compiles and minifies for production

After completion build for production. Final output will be in `dist/` folder

```
npm run build
```

### Lints and fixes files

Ignore for now

```
npm run lint
```

# More info

## Edit Locker URL

Edit `link` in `src/App.vue` to change url of the locker
```js
data() {
    return {
      ...,
      ...,
      ...,
      link: "https://www.hostedfiles.net/cl.php?id=270355d0033eee9e2e2f38c23b93ed8d"
    }
}
```

## Locker Redirect after completion URL

(When creating the locker)

Redirect the locker to 

`https://mywebsite.com/game/#/success`

`whatever-url#/success`

to go to the success page after locker offers completion