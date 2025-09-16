import vine from '@vinejs/vine'

/**
 * Valida a criação dos cursos (create)
 */
export const createCourseValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4),
    duration: vine.number().positive().withoutDecimals(),
  })
)

/**
 * Valida a atualização dos cursos (update)
 */
export const updateCourseValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4).optional(),
    duration: vine.number().positive().withoutDecimals().optional(),
  })
)
