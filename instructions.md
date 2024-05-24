Open the `env.ts` file and paste the following code inside the `Env.rules` object.

```ts
TELEGRAM_API_TOKEN: Env.schema.string(),
TELEGRAM_SECRET_TOKEN: Env.schema.string.optional(),
```
