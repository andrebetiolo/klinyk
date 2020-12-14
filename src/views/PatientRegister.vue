<template>
  <form @submit.prevent="registerPatient">
    <div class="mb-3">
      <label for="name" class="form-label">Nome do paciente*</label>
      <input type="text" class="form-control" id="name" required v-model="patient.name">
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">Celular*</label>
      <input type="tel" class="form-control" id="phone" required v-model="patient.phone">
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" v-model="patient.email">
    </div>

    <button class="btn btn-primary">Cadastrar Paciente</button>
  </form>
</template>

<script>
import { notify, uuid } from '../toolset'

export default {
  data () {
    return {
      patient: {}
    }
  },

  methods: {
    async registerPatient () {
      try {
        const patient = {
          id: uuid(),
          name: this.patient.name,
          phone: this.patient.phone,
          email: this.patient.email
        }

        await window.db.patients.add(patient)
        notify('Usuário cadastrado!', 'success')
        this.clearPatient()
      } catch (e) {
        console.log(e)
        notify(e, 'error')
      }
    },

    clearPatient () {
      this.patient = {}
    }
  }
}
</script>
