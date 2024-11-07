/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { BotConfig, Context } from 'grammy'
import Grammy from '../grammy.js'

export interface GrammyService<C extends Context = Context> extends Grammy<C> {}

export interface GrammyConfig<C extends Context = Context> {
  apiToken: string
  secretToken?: string
  onTimeout?: 'throw' | 'return' | ((...args: any[]) => unknown)
  timeoutMilliseconds?: number
  botRouteName?: string
  botConfig?: BotConfig<C>
}
