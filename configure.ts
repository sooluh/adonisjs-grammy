/**
 * adonisjs-grammy
 *
 * (c) Abu Masyail
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { stubsRoot } from './stubs/main.js'
import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  /**
   * Publish config file
   */
  await codemods.makeUsingStub(stubsRoot, 'config/grammy.stub', {})

  /**
   * Publish start file
   */
  await codemods.makeUsingStub(stubsRoot, 'start/grammy.stub', {})

  /**
   * Add provider and preload
   */
  await codemods.updateRcFile((rcFile: any) => {
    rcFile.addProvider('adonisjs-grammy/grammy_provider').addPreloadFile('#start/grammy')
  })

  /**
   * Define env variables for the selected transports
   */
  await codemods.defineEnvVariables({
    TELEGRAM_API_TOKEN: '',
    TELEGRAM_SECRET_TOKEN: '',
  })

  /**
   * Define env variables validation for the selected transports
   */
  await codemods.defineEnvValidations({
    leadingComment: 'Variables for configuring the grammy package',
    variables: {
      TELEGRAM_API_TOKEN: 'Env.schema.string()',
      TELEGRAM_SECRET_TOKEN: 'Env.schema.string.optional()',
    },
  })
}
