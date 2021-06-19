export function PubSub() {
  this.events = new Map()
}

PubSub.prototype.on = function(event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  if (!this.events.has(event)) {
    this.events.set(event, []);
  }
  const callbacks = this.events.get(event);
  callbacks.push(callback);
};

PubSub.prototype.emit = function(event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`
  if (this.events.has(event)) {
    this.events.get(event).forEach(cb => cb(data));
  }
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
