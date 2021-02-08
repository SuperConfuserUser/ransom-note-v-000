function buildHistogram(magazine) {
  const histogram = {};
  return magazine.forEach(l => {
    if (historgram[l]) {
      historgram[l]++;
    } else {
      historgram[l] = 1;
    }
  })
}

function canBuildNote(magazine, note) {
  
}