const firstYearCompleted = true; // booleano (true)
const yearsCompleted = 1;        // numero (1)

// == (uguaglianza debole)
// Converte automaticamente i tipi prima di confrontarli
// true viene convertito in 1, quindi diventa 1 == 1 che fa true
yearsCompleted == firstYearCompleted // true

// === (uguaglianza stretta)
// NON converte i tipi, confronta sia valore che tipo
// 1 è un number, true è un boolean, tipi diversi, false
yearsCompleted === firstYearCompleted // false
