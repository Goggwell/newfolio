import { util } from './util'

declare let self: ServiceWorkerGlobalScope

util()

self.addEventListener('message', (e) => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  console.log(e?.data)
})

self.addEventListener('push', (event) => {
  const data = JSON.parse(event?.data.text() || '{}')
  event?.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.message,
      icon: '/icons/icon-192x192.png',
    })
  )
})

self.addEventListener('notificationclick', (event) => {
  event?.notification.close()
  event?.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (clientList) {
        if (clientList.length > 0) {
          let client = clientList[0]
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i]
            }
          }
          return client.focus()
        }
        return self.clients.openWindow('/')
      })
  )
})
