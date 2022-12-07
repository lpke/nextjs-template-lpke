# next.js template

My preferred base template/structure for building websites with [React](https://reactjs.org/)/[NextJS](https://nextjs.org/) and deploying on the [Vercel](https://vercel.com) platform. Uses:

- Typescript
- Tailwind
- Prettier / ESLint
- MDX

## NextJS Basic Tips

* Pages added to the `pages` folder are automatically routed by NextJS. The folder structure is used as the site's page subtree automatically.
* `pages/_app.js` is the app wrapper and where global styles should be imported.
* `pages/_document.js` is the overarching site wrapper and is not generated on the client side. Only use this for high level html and not for state.
* Import `next/head` to use the `<Head>` component in any page to add metadata
* Import `next/link` to use the `<Link>` component on a page, which is NextJS's way of telling React router where a link should route to.