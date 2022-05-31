import http from '../http-common'
class AlbumService {
  getAll () {
    return http.get('/album')
  }

  get (id) {
    return http.get(`/album/${id}`)
  }

  create (data) {
    return http.post('/album', data)
  }

  update (id, data) {
    return http.put(`/album/${id}`, data)
  }

  delete (id) {
    return http.delete(`/album/${id}`)
  }

  deleteAll () {
    return http.delete(`/album`)
  }

  findByTitle (title) {
    return http.get(`/album?title=${title}`)
  }
}

export default new AlbumService()
