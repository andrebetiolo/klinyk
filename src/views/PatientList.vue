<template>
  <input type="search" class="form-control mb-2" id="patient" required placeholder="Pesquise um nome" @keyup="filterPatients" v-model="patientSearch">

  <div class="card">
    <ul class="list-group list-group-flush">
      <li v-for="patient in patients" :key="patient.id" class="list-group-item">
        <span>{{patient.name}} - {{patient.phone}} - {{patient.email}}</span>
        <div class="actions">
          <span class="me-2" @click="editPatient(patient)">Editar <i class="far fa-edit"></i></span>
          <span @click="deletePatient(patient.id)">Excluir <i class="far fa-trash-alt"></i></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { notify, removeAccents } from '../toolset'

export default {
  data () {
    return {
      patientSearch: null,
      patients: []
    }
  },

  async mounted () {
    await this.refreshPatients()
  },

  methods: {
    async refreshPatients () {
      this.patients = await this.getPatients()
    },

    async getPatients () {
      return await window.db.patients.toArray()
    },

    async deletePatient (patientid) {
      await window.db.patients.where('id').equals(patientid).delete()
      notify('Usuário deletado com sucesso!', 'success')
      await this.refreshPatients()
    },

    async filterPatients () {
      if (!this.patientSearch) {
        return this.getPatients()
      }

      function formatString (str) {
        return removeAccents(str.toLowerCase())
      }

      this.patients = await window.db.patients
        .filter(patient => {
          const patientInfoNormalized = formatString(patient.name) + formatString(patient.phone) + formatString(patient.email)
          const searchNormalized = formatString(this.patientSearch)
          return patientInfoNormalized.includes(searchNormalized)
        })
        .toArray()
    },

    async editPatient (patient) {
    }
  }
}
</script>

<style lang="scss" scoped>

.list-group-item {
  display: flex;
  justify-content: space-between;
}

</style>
