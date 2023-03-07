import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import CreateEventValidator from 'App/Validators/CreateEventValidator'

export default class EventsController {
  public async index(ctx: HttpContextContract) {
    const events = await (await Event.query().paginate(1, 1)).serialize()

    ctx.response.send(events)
  }

  public async store(ctx: HttpContextContract) {
    const payload = await ctx.request.validate(CreateEventValidator)
    const event = await Event.create(payload)
    ctx.response.send(event)
  }

  public async show(ctx: HttpContextContract) {
    ctx.response.send(await Event.find(ctx.params.id))
  }

  public async update(ctx: HttpContextContract) {
    const payload = await ctx.request.validate(CreateEventValidator)
    await Event.query().where('id', ctx.params.id).update(payload)
    ctx.response.send(await Event.find(ctx.params.id))
  }

  public async destroy(ctx: HttpContextContract) {
    const event = await Event.findOrFail(ctx.params.id)
    await event.delete()
    ctx.response.send({
      message: 'Event Deleted Successfully',
    })
  }
}
