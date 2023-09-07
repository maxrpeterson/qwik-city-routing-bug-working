# Qwik City routing bug example app

This bug seems to have come up in Qwik City 1.2.8 (and exists in versions >= to 1.2.8).

This app is built with Qwik and Qwik City v1.2.7 specifically in order to demonstrate that this route matching used to work.

# Repro steps

- Clone the app
- `npm install`
- ensure Qwik & Qwik City 1.2.7 was installed:
  `npm ls @builder.io/qwik @builder.io/qwik-city`
- `npm start`
- visit a path like `http://localhost:5173/abc/xyz/static-segment/more-dynamic-123/` and notice that the expected page is rendered
- To see the same route in this same app breaking on >=1.2.8:
  - update Qwik and Qwik City to either latest or 1.2.8:
    `npm i @builder.io/qwik@latest @builder.io/qwik-city@latest`
    or
    `npm i @builder.io/qwik@1.2.8 @builder.io/qwik-city@1.2.8`
  - run the app again with `npm start`
  - visit the same path (`http://localhost:5173/abc/xyz/static-segment/more-dynamic-123/`)
  - notice that the 404 page is rendered instead
