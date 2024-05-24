/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Grammy from '../grammy.js'

export interface GrammyService extends Grammy {}

export interface GrammyConfig {
  apiToken: string
  secretToken?: string
  onTimeout?: 'throw' | 'return' | ((...args: any[]) => unknown)
  timeoutMilliseconds?: number
}
