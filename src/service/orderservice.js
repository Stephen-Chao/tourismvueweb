import Api from '@/service/api'

export default {
  fetchOrder () {
    return Api().get('/order')
  },
  AddOrder (order) {
    return Api().post('/order/', order,
      {headers: {'Content-type': 'application/json'}})
  },
  increaseBooked (id) {
    return Api().put(`/order/${id}/increase_booked`)
  },
  decreaseBooked (id) {
    return Api().put(`/order/${id}/decrease_booked`)
  },
  deleteOrder (id) {
    return Api().delete(`/order/${id}`)
  }
}
