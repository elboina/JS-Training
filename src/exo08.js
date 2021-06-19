// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count(...args) {
    return args.reduce((acc, argument) => Object.assign(acc, {[argument]: args.filter(arg => arg === argument).length}), {});
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte")
// { Carotte: 2, Chou: 3, Patate: 1 }


// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
    const counter = count(...args);
    const maxNb = Math.max(...Object.values(counter));
    return Object.keys(counter).find(key => counter[key] === maxNb);
}

// exemple d'utilisation:
mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") === "Chou"