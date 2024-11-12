/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Bot } from 'grammy'
import type { Context } from 'grammy'
import { GrammyConfig } from './types/main.js'

class Grammy<C extends Context = Context> extends Bot {
  constructor(config: GrammyConfig<C>) {
    super(config.apiToken, config.botConfig)
  }
}

export default Grammy
