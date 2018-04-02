let listeners = {},
  instance = null;

export class EventEmitter {

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  attachEvent(sender, prop, listener) {
    if (!listeners[sender]) {
      listeners[sender] = {};
    }
    listeners[sender][prop] = listener;
  }

  triggerEvent(sender, prop, args) {
    listeners[sender][prop][prop](args);
  }
};