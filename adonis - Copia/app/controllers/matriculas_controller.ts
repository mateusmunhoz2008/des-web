import Disciplina from '#models/disciplina'
import type { HttpContext } from '@adonisjs/core/http'
import Matricula from '#models/matricula'
import { createMatricula } from '#validators/matricula'
export default class MatriculasController {
  /**
  * Display a list of resource
  */
  async index({ response }: HttpContext) {
    try {
      // const matriculas = await Matricula.all()
      const matriculas = await Matricula.query()
        .preload('aluno').preload('disciplina')
      return response.status(200).json({
        message: 'OK',
        data: matriculas,
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
  /**
  * Handle form submission for the create action
  */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMatricula)
    try {
      const matricula = await Matricula.create({
        ...payload,
      })
      return response.status(201).json({
        message: 'OK',
        data: matricula,
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
  async show({ params }: HttpContext) { }
  /**
  * Edit individual record
  */
  async edit({ params }: HttpContext) { }
  /**
  * Handle form submission for the edit action
  */
  async update({ params, request }: HttpContext) { }
  /**
  * Delete record
  */
  async destroy({ params, response }: HttpContext) {
    try {
      const matricula = await Matricula.query()
        .where('aluno_id', params.alunoId)
        .where('disciplina_id', params.disciplinaId).firstOrFail()
      await matricula.delete()
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
