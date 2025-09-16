import logger from '@adonisjs/core/services/logger'

let courses: any[] = []
let currentId = 1

export class CourseService {
  getAllCourses() {
    logger.info('index')
    return courses
  }

  createCourse(courseData: any) {
    logger.info('create')
    if (!courseData.name || !courseData.duration) {
      return null
    }
    const newCourse = { id: currentId++, ...courseData }
    courses.push(newCourse)
    return newCourse
  }

  getCourseById(id: number) {
    logger.info('show')
    return courses.find(course => course.id == id)
  }

  updateCourse(id: number, courseData: any) {
    logger.info('update')
    if (!courseData.name && !courseData.duration) {
      return null
    }
    const index = courses.findIndex(course => course.id == id)
    if (index != -1) {
      courses[index] = { ...courses[index], ...courseData, id }
      return courses[index]
    }
    return null
  }

  deleteCourse(id: number) {
    logger.info('delete')
    const index = courses.findIndex(course => course.id == id)
    if (index != -1) {
      return courses.splice(index, 1)
    }
    return null
  }
}
