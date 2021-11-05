/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('Service: Ready!')
    },
    registered () {
      console.log('Service: Successfully registered to this Project!')
    },
    cached () {
      console.log("Service: Content Has been cached!\n Now you can browse the content if you don't have a Internet Connection.")
    },
    updatefound () {
      console.log("Service: New Content detected!\n Downloading for offline use!")
    },
    updated () {
      console.log('Service: New Content updated!, Please Refresh the page')
    },
    offline () {
      console.log('Service: Disconnected from Internet, Entering Offline mode')
    },
    error (error) {
      console.error('Service: Cannot Register worker in this project!\n', error)
    }
  })
}
