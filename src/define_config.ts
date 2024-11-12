/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { RuntimeException } from '@poppinss/utils'
import type { GrammyConfig } from './types/main.js'
import type { Context } from 'grammy'

export function defineConfig<
  C extends Context = Context,
  T extends GrammyConfig<C> = GrammyConfig<C>,
>(config: T): T {
  if (!config) {
    throw new RuntimeException('Invalid config file')
  }

  if (!config.apiToken) {
    throw new RuntimeException('Telegram api token cannot be empty')
  }

  return config
}
