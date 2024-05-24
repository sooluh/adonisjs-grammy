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

export function defineConfig<T extends GrammyConfig>(config: T): T {
  if (!config) {
    throw new RuntimeException('Invalid config file')
  }

  if (!config.apiToken) {
    throw new RuntimeException('Telegram api token cannot be empty')
  }

  return config
}
