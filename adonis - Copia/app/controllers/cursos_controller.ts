import type { HttpContext } from '@adonisjs/core/http'
import Curso from '#models/curso'
import { createCurso, updateCurso } from '#validators/curso'
export default class CursosController {
  /**
  * Display a list of resource
  */
  async index({ response }: HttpContext) {
    try {
      // const cursos = await Curso.all()
      const cursos = await Curso.query().preload('disciplinas')
        .preload('alunos')
      return response.status(200).json({
        message: 'OK',
        data: cursos,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
  /**
  * Display form to create a new record*/
  async create({ }: HttpContext) { }
  /**
  * Handle form submission for the create action
  */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCurso)
    try {
      const curso = await Curso.create({
        ...payload,
      })
      return response.status(201).json({
        message: 'OK',
        data: curso,
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
      // const curso = await Curso.findOrFail(params.id)
      const curso = await Curso.query()
        .where('id', params.id).preload('disciplinas')
        .preload('alunos').firstOrFail();
      return response.status(200).json({
        message: 'OK',
        data: curso,
      })
    } catch (error) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }
  }
  /**
  * Edit individual record
  */
  async edit({ params }: HttpContext) { }
  /**
  * Handle form submission for the edit action
  */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(updateCurso)
    try {
      const curso = await Curso.findOrFail(params.id)
      await curso.merge({ ...payload }).save()
      return response.status(200).json({
        message: 'OK',
        data: curso,
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
      const curso = await Curso.findOrFail(params.id)
      await curso.delete()
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
