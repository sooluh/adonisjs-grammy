import { GrammyService } from './main.js'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    grammy: GrammyService
  }
}
