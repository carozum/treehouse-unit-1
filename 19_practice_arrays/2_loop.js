const total = 100;


function random(num) {
  return Math.floor(Math.random() * num) + 1;
}


function createRandomList(){
  let randomList = []
  for (let i=0; i<10; i++){
    randomList.push(random(100));
  }
  return randomList;
}


const myRandomList = createRandomList();
console.log(myRandomList);


for (let i=0; i< myRandomList.length; i++){
  console.log(`Item ${i} in the array is ${myRandomList[i]}`);
}

