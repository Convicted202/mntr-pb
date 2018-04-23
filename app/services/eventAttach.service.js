export class EventAttach {
  attachEvent (objects, eventType, handler) {
    if (objects.length)
      objects.forEach(item => {
        item.addEventListener(eventType, handler);
      });

    else
      objects.addEventListener(eventType, handler);
  }
}
