import data from "../__tests__/fakedata.json";

export const query = array =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
      return query([...array].filter((elm) => condition(elm[key])));
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
      return query([...array].sort((a, b) => {
        if (b[key] < a[key]) {
          return 1;
        }

        if (b[key] > a[key]) {
          return -1;
        }
        return 0;
      }));
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
      return query([...array].slice(0, number));
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", n => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map(user => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
