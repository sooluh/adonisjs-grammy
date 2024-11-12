/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import app from '@adonisjs/core/services/app'
import type { GrammyService } from '../src/types/main.js'
import type { Context } from 'grammy'

let grammy: GrammyService<Context>

await app.booted(async () => {
  grammy = await app.container.make('grammy')
})

export { grammy as default }
