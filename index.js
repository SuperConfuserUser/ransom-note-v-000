function buildHistogram(magazine) {
  const histogram = {};
  
  magazine.forEach(l => {
    if (historgram[l]) {
      historgram[l]++;
    } else {
      historgram[l] = 1;
    }
  });
  
  return historgram;
}

function canBuildNote(magazine, note) {
  
}