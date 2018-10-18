## Auth0 and React boilerplate template.

- Fork the repo
- create `.env` file in your root directory and copy and paste from `.env_example`
- Change values to your own variables
- run `npm install` or `yarn` inside your project directory
- Make sure you have a backend that accepts whatever info is needed in `setSession` method inside `Auth.js`

```
setSession = async authResult => {
...
...
    const user = {
      email: decoded.email,
      username: decoded.nickname
    };
...
...
}
```
