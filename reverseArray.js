bool almostIncreasingSequence(int[] sequence) {
  int count = 0;
  int continueFrom = 0;
  for (int i = 1; i < sequence.Length; i++){
      int j = i - 1;
      while(j < sequence.Length){
          if(sequence[j] > sequence[i]){
              count++;
          }
      }
  }
  Console.WriteLine(count);
}