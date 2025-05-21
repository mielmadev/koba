// Utilidad para dividir un array en filas equilibradas, máximo n elementos por fila
// Ver documentación: wiki/diccionario.md#dividirenfilas

/**
 * Divide un array en filas lo más equilibradas posible, con un máximo de elementos por fila.
 * @param {Array} items - Array de elementos a dividir.
 * @param {number} maxPorFila - Máximo de elementos por fila.
 * @returns {Array[]} Array de filas (arrays).
 */
export default function dividirEnFilasMenuDesplegable(items, maxPorFila) {
  if (!Array.isArray(items) || typeof maxPorFila !== "number" || maxPorFila < 1) return []
  const total = items.length
  if (total === 0) return []
  const numFilas = Math.ceil(total / maxPorFila)
  const base = Math.floor(total / numFilas)
  const resto = total % numFilas
  const filas = []
  let i = 0
  for (let f = 0; f < numFilas; f++) {
    const tam = base + (f < resto ? 1 : 0)
    filas.push(items.slice(i, i + tam))
    i += tam
  }
  return filas
}
