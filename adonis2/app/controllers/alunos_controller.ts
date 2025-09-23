import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@adonisjs/core'
import Aluno from '#models/aluno'
import { createAluno, updateAluno } from '#validators/aluno'
export default class AlunosController {
  /**
  * Display a list of resource
  */
  async index({ response }: HttpContext) {
    try {
      // const alunos = await Aluno.all()
      const alunos = await Aluno.query().preload('curso')
        .preload('disciplinas')
      return response.status(200).json({
        message: 'OK',
        data: alunos,
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
    const payload = await request.validateUsing(createAluno)
    try {
      const aluno = await Aluno.create({
        ...payload,
      })
      return response.status(201).json({
        message: 'OK',
        data: aluno,
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
      // const aluno = await Aluno.findOrFail(params.id)
      const aluno = await Aluno.query()
        .where('id', params.id).preload('curso')
        .preload('disciplinas').firstOrFail();
      return response.status(200).json({
        message: 'OK',
        data: aluno,
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
  async edit({ params }: HttpContext) { }/**
* Handle form submission for the edit action
*/
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(updateAluno)
    try {
      const aluno = await Aluno.findOrFail(params.id)
      await aluno.merge({ ...payload }).save()
      return response.status(200).json({
        message: 'OK',
        data: aluno,
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
      const aluno = await Aluno.findOrFail(params.id)
      await aluno.delete()
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