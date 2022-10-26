function AddNmbr(n){
   if(n == 0) return 0;
   return AddNmbr(Math.floor(n / 10)) + n % 10;
}

console.log(AddNmbr(1234))