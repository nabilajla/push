self.addEventListener('push', (event) => {
     var options = {
           body: 'This notification was generated from a push!',
               vibrate: [100, 50, 100],
               data: {
                       dateOfArrival: Date.now(),
                           primaryKey: 1
                       },
               actions: [
                           {action: 'explore', title: 'Explore this new world',},
                               {action: 'close', title: 'Close',
                                   icon: 'images/xmark.png'},
                           ]
               };
               event.waitUntil(
                 self.registration.showNotification("Hello world!", options)
               );
});
