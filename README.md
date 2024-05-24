![adonisjs-grammy](https://socialify.git.ci/sooluh/adonisjs-grammy/image?description=1&descriptionEditable=Use%20Webhook%20on%20Telegram%20Bot%20Framework.&font=Jost&forks=1&issues=1&logo=https%3A%2F%2Ftelegram.org%2Fimg%2Ft_logo.svg&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Auto)

# Introduction

`adonisjs-grammy` makes it easy for you to integrate AdonisJS with the Telegram Bot Framework
-[Grammy](https://grammy.dev)-, allowing you to implement Webhooks instead of using Long Polling.
[Learn more here](https://grammy.dev/guide/deployment-types#how-to-use-webhooks) and find out that
Grammy doesn't support AdonisJS.

# Installation

```bash
node ace add adonisjs-grammy
```

## Next steps?

1. Adjust the env configuration.
2. Create a tunnel if running on a local machine (recomended: <sup><sub>`cloudflared`</sub></sup>
   or <sup><sub>`loophole`</sub></sup>)
3. Set the webhook to `http://<tunneling-addres>/<bot-token>` using the following API.

   ```
   https://api.telegram.org/bot<bot-token>/setWebhook?url=http://<tunneling-address>/<bot-token>
   ```

4. Continue developing!

# Usage

Open `start/grammy.ts` and do whatever you want, as documented in the official
[Grammy documentation](https://grammy.dev/guide/getting-started).

## Example

```ts
import grammy from 'adonisjs-grammy/services/main'

// handle the /start command
grammy.command('start', (ctx) => ctx.reply('Welcome! Up and running.'))

// handle other messages
grammy.on('message', (ctx) => ctx.reply('Got another message!'))
```

# License

The MIT License (MIT). Please see [LICENSE](./LICENSE.md) file for more information.

# Disclaimer

This package is not officially maintained by Telegram. Telegram trademarks and logo are the
property of Telegram Messenger LLP.
