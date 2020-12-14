const Consults = {
  add: async consult => {
    return await window.db.consults.add(consult)
  },

  getAll: async () => {
    return await window.db.consults.toArray()
  },

  getBy: async (obj) => {

  },

  remove: async consultId => {
    return await window.db.consults.where('id').equals(consultId).delete()
  }
}

Object.freeze(Consults)
export default Consults
