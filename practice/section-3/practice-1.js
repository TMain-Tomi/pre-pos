'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var valueb = objectB.value;
    for(let i = 0;i<valueb.length;i++){
      for(let index in collectionA){
        if(valueb[i]==collectionA[index].key){
          collectionA[index].count--;
          break;
        }
    }
  }
  return collectionA;
}
