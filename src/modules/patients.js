const Patients = {
  add: async patient => {
    return await window.db.patients.add(patient)
  },

  getAll: async () => {
    return await window.db.patients.toArray()
  }
}

Object.freeze(Patients)
export default Patients
