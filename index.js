function buildHistogram(magazine) {
  const histogram = {};
  
  magazine.forEach(l => {
    if (histogram[l]) {
      histogram[l]++;
    } else {
      histogram[l] = 1;
    }
  });
  
  return histogram;
}

function canBuildNote(magazine, note) {
  return note.split('').every(l => {
    if (magazine[l] > 0) {
      magazine[l]--;
      return true;
    } else {
      return false;
    }
  })
}