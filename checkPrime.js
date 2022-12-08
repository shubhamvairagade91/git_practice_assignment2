function check_prime(num){
  let count = 0;
  for(let i = 1; i<= num; i++){
    if(num%i==0){
      count++;
    }
  }
  if(count == 2){
    return true;
  }
  return false;
}

let num = 17; 
if(check_prime(num)==true){
  console.log("Prime");
}
else{
  console.log("Not prime");
}