// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => Object.assign(acc, {[value]: key}), {});
}
