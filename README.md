# vitest-test

## Project Setup

```sh
npm install
```

```sh
npm run test:unit
```

## Details
This is a test repo to demonstrate mocked hooks. Check out the files `HelloWorld.vue`, `HelloWorld.spec.ts`, and `useHook.ts`.  

In the test file I'm attempting to mock the `useHook` function which is imported from `useHook.ts` and use the factory funciton to provide new values.  

When I console log `useHook`, I get undefined. This only happens when I'm using the factory function though. If the factory function is removed, I seem to get a mocked function, which is expected.  


