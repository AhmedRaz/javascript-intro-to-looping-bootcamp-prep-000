function forLoop(array)  {
  for(var index = 0; index < 25; index++)
  { 
    if (index === 1)  {
      array[index] = "I am 1 strange loop.";
    }
    else  {
      array[index] = `I am ${index} strange loops.`;
    }
  }
  return array;
}

