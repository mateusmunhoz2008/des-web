import type { HttpContext } from '@adonisjs/core/http'
import { CourseService } from '#services/course_service'
import { createCourseValidator, updateCourseValidator } from '#validators/course'

export default class CoursesController {
  /**
   * Listar todos os cursos
   */
  async index({ response }: HttpContext) {
    const courses = await new CourseService().getAllCourses()
    return response.status(200).json({
      message: 'OK',
      data: courses,
    })
  }

  /**
   * Criar um novo curso
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCourseValidator)
    const course = await new CourseService().createCourse(payload)

    if (!course) {
      return response.status(422).json({ message: 'ERROR' })
    }
    return response.status(201).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Mostrar um curso pelo ID
   */
  async show({ response, params }: HttpContext) {
    const course = await new CourseService().getCourseById(params.id)
    if (!course) {
      return response.status(404).json({ message: 'NOT FOUND' })
    }
    return response.status(200).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Atualizar curso existente
   */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(updateCourseValidator)
    const course = await new CourseService().updateCourse(params.id, payload)

    if (!course) {
      return response.status(404).json({ message: 'NOT FOUND' })
    }
    return response.status(200).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Deletar curso
   */
  async destroy({ params, response }: HttpContext) {
    const course = await new CourseService().deleteCourse(params.id)
    if (!course) {
      return response.status(404).json({ message: 'NOT FOUND' })
    }
    return response.status(200).json({
      message: 'OK',
      data: course,
    })
  }
}
