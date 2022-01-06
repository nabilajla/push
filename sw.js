self.addEventListener('push', (event) => {
     event.registration.showNotification('Hello world!')
});
