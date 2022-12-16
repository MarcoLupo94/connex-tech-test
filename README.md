Technical Assignment for Connex

## Getting started

Except for the regular suspects; git, Node, npm, you need these things for the app to work.
Used node v19.

## Troubleshooting

Using npm audit I found there were deprecated packages in my dependencies, after investigating further and adding and removing different packages,
I discovered "express-prometheus-middleware" has security issues and was last updated the 24/4/2021.
It's suggested enabling a security policy, we can do that here https://github.com/joao-fontenele/express-prometheus-middleware/security "

## Installation

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/MarcoLupo94/connex-tech-test.git
   cd connex-tech-test
   ```

2. Install dependencies.

   ```bash
   npm install
   cd client
   npm install
   ```

3. In the root folder you can run `npm run dev` to start the server.
4. To launch the client you can run `npm run start` from the client folder.
5. Tests suits for the server can be used by `npm run test server/__tests__` while tests for the client can be run by `npm run test` from the client folder.
