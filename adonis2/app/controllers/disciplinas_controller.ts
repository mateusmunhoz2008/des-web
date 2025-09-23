import type { HttpContext } from '@adonisjs/core/http'
import Disciplina from '#models/disciplina'
import { createDisciplina, updateDisciplina } from '#validators/disciplina'
export default class DisciplinasController {
  /**
  * Display a list of resource
  */
  async index({ response }: HttpContext) {
    try {
      // const disciplinas = await Disciplina.all()
      const disciplinas = await Disciplina.query()
        .preload('curso').preload('alunos')
      return response.status(200).json({
        message: 'OK',
        data: disciplinas,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
  /**
  * Display form to create a new record
  */
  async create({ }: HttpContext) { }
  /*** Handle form submission for the create action
  */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createDisciplina)
    try {
      const disciplina = await Disciplina.create({
        ...payload,
      })
      return response.status(201).json({
        message: 'OK',
        data: disciplina,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
  /**
  * Show individual record
  */
  async show({ params, response }: HttpContext) {
    try {
      // const disciplina = await Disciplina.findOrFail(params.id)
      const disciplina = await Disciplina.query()
        .where('id', params.id).preload('curso')
        .preload('alunos').firstOrFail();
      return response.status(200).json({
        message: 'OK',
        data: disciplina,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
  /*** Edit individual record
  */
  async edit({ params }: HttpContext) { }
  /**
  * Handle form submission for the edit action
  */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(updateDisciplina)
    try {
      const disciplina = await Disciplina.findOrFail(params.id)
      await disciplina.merge({ ...payload }).save()
      return response.status(200).json({
        message: 'OK',
        data: disciplina,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
  /**
  * Delete record
  */
  async destroy({ params, response }: HttpContext) {
    try {
      const disciplina = await Disciplina.findOrFail(params.id)
      await disciplina.delete()
      return response.status(200).json({
        message: 'OK',
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
}