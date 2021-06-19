// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
    return x == null || (typeof x !== 'function' && typeof x !== 'object');
}
