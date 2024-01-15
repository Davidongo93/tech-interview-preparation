function FindNeedle(haystack, needle) {
  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    index = i;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        index = -1;
        break;
      }
    }
    if (index !== -1) {
      return index;
    }
  }
  return index;
}
//this aproximation has a complexity of O(n*m)
module.exports = FindNeedle;
/*
Una forma de reducir la complejidad es utilizar una estrategia de búsqueda más eficiente. Puedes implementar un algoritmo conocido como "Knuth-Morris-Pratt" (KMP) o "Boyer-Moore" para realizar la búsqueda de manera más eficiente. Estos algoritmos son más avanzados y están diseñados para buscar coincidencias de manera más inteligente, aprovechando información sobre coincidencias parciales para evitar reevaluaciones innecesarias.

Ambos algoritmos tienen una complejidad de tiempo de O(n + m), lo que los hace más eficientes que la versión actual con complejidad O(n * m).

Aquí hay un ejemplo simple utilizando el algoritmo Boyer-Moore en JavaScript:
function FindNeedle(haystack, needle) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (needleLength === 0) {
    return 0; // Si el needle es una cadena vacía, siempre es una coincidencia.
  }

  const badCharacter = {};
  for (let i = 0; i < needleLength - 1; i++) {
    badCharacter[needle[i]] = needleLength - 1 - i;
  }

  let i = needleLength - 1;
  let j = needleLength - 1;

  while (i < haystackLength) {
    if (haystack[i] === needle[j]) {
      if (j === 0) {
        return i; // Se encontró una coincidencia completa.
      }
      i--;
      j--;
    } else {
      i += Math.max(1, j - (badCharacter[haystack[i]] || -1));
      j = needleLength - 1;
    }
  }

  return -1; // No se encontró ninguna coincidencia completa.
}

// Ejemplo de uso
console.log(FindNeedle("react-redux", "redux")); // Salida esperada: 6
console.log(FindNeedle("pinky", "puntual")); // Salida esperada: -1
Este es solo un ejemplo y hay diferentes variaciones de estos algoritmos. Reducir la complejidad de un algoritmo generalmente implica utilizar estrategias más avanzadas y específicas para el problema que estás resolviendo. Estos algoritmos también tienden a ser más eficientes en casos donde needle es relativamente pequeño en comparación con haystack.
*/
