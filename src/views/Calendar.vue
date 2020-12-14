<template>
  <button class="btn btn-primary mb-2" @click="openModal">
    <i class="fas fa-book-medical me-2"></i>
    <span>Adicionar consulta</span>
  </button>

  <div id="calendar"></div>

  <div id="consult-modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Adicionar consulta</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="consultform" @submit.prevent="addConsult()">
            <div class="mb-3">
              <label for="name" class="form-label">Nome do paciente</label>
              <input list="patientsList" class="form-control" id="name" v-model="consult.client_name">
              <datalist id="patientsList">
                <option v-for="patient in patients" :key="patient.id" :value="patient.name"></option>
              </datalist>
            </div>

            <div class="mb-3">
              <label for="date" class="form-label">Data e hora</label>
              <input type="datetime-local" class="form-control" id="date" v-model="consult.date">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="submit" form="consultform" class="btn btn-primary">Salvar consulta</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import locale from '@fullcalendar/core/locales/pt-br'

import dayjs from 'dayjs'

import Patients from '../modules/patients'
import Consults from '../modules/consults'
import { uuid } from '../toolset'

export default {
  data () {
    return {
      calendar: null,
      consult: {},
      calendarOptions: {
        locale,
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        navLinks: true,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay, timeGridWeek, dayGridMonth, listWeek'
        },
        initialView: 'dayGridMonth',
        events: Consults.getAll(),
        eventAdd: event => console.log('eventAdd:', event),
        eventRemove: event => console.log('eventRemove:', event),
        eventChange: event => console.log('eventChange:', event),
        eventClick: info => console.log('info', this.removeEvent(info.event.id))
      }

    }
  },

  async mounted () {
    var calendarEl = document.getElementById('calendar')

    this.calendarOptions.events = await Consults.getAll()

    this.calendar = new Calendar(calendarEl, this.calendarOptions)

    this.renderCalendar()
  },

  methods: {
    getPatients () {
      this.patients = Patients.getAll()
    },

    renderCalendar () {
      this.calendar.render()
    },

    openModal () {
      const modalEl = new window.bootstrap.Modal(document.getElementById('consult-modal'), {
        keyboard: true
      })

      this.consult.date = dayjs().format('YYYY-MM-DDTHH:mm')

      modalEl.show()
    },

    modalClose () {
      document.querySelector('.modal .btn-close').click()
    },

    clearConsult () {
      this.consult = {}
    },

    addEvent (event) {
      console.log(event)
      this.calendar.addEvent(event)
      Consults.add(event)
    },

    removeEvent (eventId) {
      const event = this.calendar.getEventById(eventId)
      event.remove()
      Consults.remove(eventId)
    },

    setCalendarView (type) {
      console.log(type)
    },

    addConsult () {
      const event = {}
      event.id = uuid()
      event.title = this.consult.client_name
      event.start = this.consult.date
      this.addEvent(event)
      this.modalClose()
      this.clearConsult()
    }
  }
}
</script>
