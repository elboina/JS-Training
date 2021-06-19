export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  let valeur = obj[prop];
  Object.defineProperty(obj, prop, {
    get: () => {
      getter();
     return valeur;
    },
    set: value => {
      setter(value);
      valeur = value;
    }
  })
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  for (let prop in obj) {
    const isReadOnly = /[A-Z]/.test(prop[0]);
    Object.defineProperty(obj, prop, {
      enumerable: !prop.startsWith('_'),
      writable: !isReadOnly,
      configurable: !isReadOnly
    });
  }
}