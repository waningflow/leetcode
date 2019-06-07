/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  if (K === 1) {
    return N
  }
  let result = []
  for (let i = 0; i <= K; i++) {
    result[i] = Array(N + 1).fill(0)
  }
  for (let j = 1; j <= N; j++) {
    result[1][j] = j
  }
  for (let j = 1; j <= N; j++) {
    for (let i = 2; i <= K; i++) {
      result[i][j] = result[i - 1][j - 1] + result[i][j - 1] + 1
      if (result[i][j] >= N) {
        return j
      }
    }
  }
}
