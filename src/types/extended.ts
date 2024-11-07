import type { GrammyService } from './main.js'
import type { Context } from 'grammy'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    grammy: GrammyService<Context>
  }
}
