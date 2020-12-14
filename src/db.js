import Dexie from 'dexie'

window.db = new Dexie('klinyk')

// Indexes são criados com [embarque+desembarque+data_hora_viagem]
window.db.version(1).stores({
  reminders: '&id, date, title',
  patients: '&id, name, phone, email',
  patients_documents: '&patients_id, document',
  consults: '&id, client_name, start, end, ready_call'
})
