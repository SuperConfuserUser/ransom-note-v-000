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
    try {
      magazine[l]--;
    } catch(e) {
      return false;
    }
  })
}