export const addAliasForProperties = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // de déclarer des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return new Proxy(object, {
    get: (obj, key) => {
      const prop = key in obj ? key : alias[key];
      return Reflect.get(obj, prop);
    },
    set: (obj, key, value) => {
      const prop = key in alias ? alias[key] : key;
      return Reflect.set(obj, prop, value);
    }
  });
};

// exemple d'utilisation:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "first" }
);

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = fn => {
  // TODO: retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // à récupérer via fn.count
  let count = 0;
  return new Proxy(fn, {
    get: (obj, key) => key === 'count' ? count : Reflect.get(obj, key),
    apply: (obj, thisArg, argArray) => {
      count++;
      return Reflect.apply(obj, thisArg, argArray);
    }  
  });
};

// exemple d'utilisation:
const fn = countFunctionCalls(n => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
