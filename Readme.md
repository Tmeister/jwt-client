# Simple JWT APP

The **jwt-client** helps to test the WP REST API authentication using the JWT Authentication for WP REST API on a WordPress installation.

The client signs the user using their user and password against WordPress and gets the JWT Token for future requests.

Once the user is signed, a simple dashboard is loaded with the user's information that is obtained from the `wp-json/wp/v2/users/me` endpoint; this endpoint is only accessible for signed users and with that, we test the token integrity and the authentication, if this request works, all the other restringed endpoints should work too.

Finally, there is a third call, using the Verify Token button that consumes the `jwt-auth/v1/token/validate` to ensure the token is still valid and print the response code and status.

The Logout button just reset the token on the app.

**NOTE: The app is only for testing purposes and is not ready to be used in production.**

## Run

The app is made with [React Native](https://reactnative.dev/), [Expo](https://expo.dev/) and [Tailwind](https://tailwindcss.com/) 🚀

### Clone the repo

```bash
git clone ...
```

### Install dependencies

```bash
npm install
```

### Update the target site URL

```text
Line #1 on the services/index.js file
```

### Run the app

```bash
npm run ios #or
npm run android #or
npm run start
```

**You can find more information about the depedencies and setup on the [Expo documentation](https://docs.expo.dev/get-started/installation/)**
