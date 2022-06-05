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

  createSong (data) {
    return http.post('/song', data)
  }
  findSongsByAlbumId (id) {
    return http.get(`/songs/${id}`)
  }
  getSong (id) {
    return http.get(`/song/${id}`)
  }
  updateSong (id, data) {
    return http.put(`/song/${id}`, data)
  }
  deleteSong (id) {
    return http.delete(`/song/${id}`)
  }
}

export default new AlbumService()
