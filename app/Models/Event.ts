import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Event extends BaseModel {
  public static table = 'events'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public venue: string

  @column()
  public limit: number

  @column()
  public date: Date
  
  @column()
  public artist_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
