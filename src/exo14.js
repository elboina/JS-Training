export function Observable(action) {
  this.observers = [];
  action({
    emit: (value) => {
      //TODO: notifier les observateurs de la valeur émise
      this.observers.forEach(obs => obs.onValue(value));
    },
    complete: () => {
      //TODO: notifier les observateurs de la complétion
      this.observers.forEach(obs => obs.onComplete());
    }
  })
}

Observable.prototype.subscribe = function(observer) {
  //TODO: enregistrer l'observateur
  observer.unsubscribe = () => {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  this.observers.push(observer); 
  return observer
};

/* exemple d'usage: */
/*
const Loto = new Observable(function tirage ({ emit, complete }) {
  setTimeout(() => {
    emit(28)
    emit(16)
    emit(36)
    emit(42)
    complete()
  }, msAvantHeureDuTirage)
})

let michel = Loto.subscribe({
  onValue(numero){
    if(michel.numeros.includes(numero)) michel.numerosBons++;
  },
  onComplete(){
    alert(`Michel a eu ${michel.numerosBons} bons numéros`)
  }
})

michel.numeros = [7, 13, 36, 49]
michel.numerosBons = 0
if(michel.doitAllerQuelquePart) michel.unsubscribe()
*/