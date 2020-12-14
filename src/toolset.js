import Snackbar from 'node-snackbar'

/**
* Função utilizada notificar uma mensagem, ela tem a aparencia de uma Snackbar/Toast
*
* @param {string} text - Texto da mensagem
* @param {string} type - Tipo da mensagem, pode ser: success/error/info
*/
export function notify (text, type) {
  let icon
  switch (type) {
    case 'success':
      icon = '<i class="fa fa-check" aria-hidden="true" style="color: #4caf50"></i>'
      break

    case 'error':
      icon = '<i class="fa fa-times-circle" aria-hidden="true" style="color: #f44336"></i>'
      break

    case 'info':
      icon = '<i class="fa fa-exclamation-triangle" aria-hidden="true" style="color: #ffeb3b"></i>'
      break

    default:
      icon = ''
      break
  }

  Snackbar.show({ text: `${icon} ${text}`, actionText: 'Fechar' })
}

export function deepClone (o) {
  var output, v, key
  output = Array.isArray(o) ? [] : {}
  for (key in o) {
    v = o[key]
    output[key] = typeof v === 'object' ? deepClone(v) : v
  }
  return output
}

export function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

/**
* Remove the accents of the string
*/
export function removeAccents (strToReplace) {
  const stringWithAccents = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ'
  const stringWithoutAccents = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC'
  let result = ''
  for (var i = 0; i < strToReplace.length; i++) {
    if (stringWithAccents.indexOf(strToReplace.charAt(i)) !== -1) {
      result += stringWithoutAccents.substr(stringWithAccents.search(strToReplace.substr(i, 1)), 1)
    } else {
      result += strToReplace.substr(i, 1)
    }
  }
  return result
}

export default {}
