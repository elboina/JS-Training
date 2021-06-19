export const range = (start, end) => {
  // retourner un itérable itérant entre les deux bornes numériques
  /*return  {
    [Symbol.iterator]: function*(){
      let count = start
      while (count <= end) {
        yield count;
        count ++;
      }
    }
  };*/

  return {
    [Symbol.iterator]: function() {
      let count = start - 1;
      return {
        next() {
          count++;
          return {
            value: count,
            done: count > end
          }
        }
      }
    }
  }
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
