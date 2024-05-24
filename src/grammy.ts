/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Bot } from 'grammy'
import { GrammyConfig } from './types/main.js'

class Grammy extends Bot {
  constructor(config: GrammyConfig) {
    super(config.apiToken)
  }
}

export default Grammy
