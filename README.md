![image](https://github.com/user-attachments/assets/625f5433-133b-46e2-91e8-633465f0f2f7)

![image](https://github.com/user-attachments/assets/fbc336b1-e51f-4c74-9e6f-a6c6d3c93cf3)

![image](https://github.com/user-attachments/assets/092f0502-d3b0-4fe8-b71c-e5d94bad708c)

![image](https://github.com/user-attachments/assets/a51ac6c9-bd7e-4ad4-97b6-733d86f0a082)

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
