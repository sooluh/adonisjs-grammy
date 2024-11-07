![adonisjs-grammy](https://socialify.git.ci/sooluh/adonisjs-grammy/image?description=1&descriptionEditable=Grammy%20Web%20Framework%20Adapter%20for%20AdonisJS.&font=Jost&forks=1&issues=1&logo=https%3A%2F%2Ftelegram.org%2Fimg%2Ft_logo.svg&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Auto)

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
2. Create a tunnel if running on a local machine (recomended: `cloudflared` or `loophole`)
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

# Configuration

The configuration file is located at `config/grammy.ts`. Here are the available configuration options:

## Environment Variables

| Variable | Type | Required | Description |
|----------|------|----------|-------------|
| TELEGRAM_API_TOKEN | string | Yes | Your Telegram Bot API token obtained from [@BotFather](https://t.me/BotFather) |
| TELEGRAM_SECRET_TOKEN | string | No | Optional secret token to secure your webhook endpoint |

## Configuration Options

The `config/grammy.ts` file allows you to customize the following options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| apiToken | string | `process.env.TELEGRAM_API_TOKEN` | The Telegram Bot API token |
| secretToken | string | `process.env.TELEGRAM_SECRET_TOKEN` | Optional secret token for webhook security |
| onTimeout | 'throw' \| 'return' \| Function | 'throw' | Defines behavior when webhook request times out |
| timeoutMilliseconds | number | 10_000 | Webhook request timeout in milliseconds |
| botRouteName | string | apiToken | Custom route name for the webhook endpoint |
| botConfig | object | undefined | Additional [bot configuration options](https://grammy.dev/ref/core/botconfig#botconfig) |

Example configuration:

```typescript
import env from '#start/env'
import { defineConfig } from 'adonisjs-grammy'

const grammyConfig = defineConfig({
  apiToken: env.get('TELEGRAM_API_TOKEN'),
  secretToken: env.get('TELEGRAM_SECRET_TOKEN'),
  
  // Timeout handling
  timeoutMilliseconds: 10_000, // 10 seconds
  onTimeout: 'throw', // or 'return', or custom function
  
  // Custom route name (optional)
  botRouteName: 'telegram-bot',
  
  // Additional bot configuration
  botConfig: {
    client: {
      baseFetchConfig: {
        compress: true,
      },
    },
  },
})

export default grammyConfig
```


# License

The MIT License (MIT). Please see [LICENSE](./LICENSE.md) file for more information.

# Disclaimer

This package is not officially maintained by Telegram. Telegram trademarks and logo are the
property of Telegram Messenger LLP.
