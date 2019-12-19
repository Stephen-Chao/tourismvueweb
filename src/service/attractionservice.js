import Api from '@/service/api'

export default {
  fetchAttractions () {
    return Api().get('/tourism')
  },
  AddAttraction (tourism) {
    return Api().post('/tourism/', tourism,
      {headers: {'Content-type': 'application/json'}})
  },
  increaseRemainticket (id) {
    return Api().put(`/tourism/${id}/increase_tickets`)
  },
  decreaseRemainticket (id) {
    return Api().put(`/tourism/${id}/decrease_tickets`)
  },
  deleteAttraction (id) {
    return Api().delete(`/tourism/${id}`)
  }

}
