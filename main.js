function whatIsInAName(arr, source) {
  const keys = Object.keys(source);
  
  return arr.filter(item => {
    // Check if every key in the source object matches the item's value
    return keys.every(key => item[key] === source[key]);
  });
}
