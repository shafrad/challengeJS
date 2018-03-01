function wordFreq(word){
    let string = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'.split(' ');
    let count = 0;
    for(var i = 0; i < string.length; i++) {
      if(string[i] === word){
        count += 1;
      }
    }
    return count;
  }
  
  console.log(wordFreq('aku'));
  console.log(wordFreq('ingin'));
  console.log(wordFreq('dapat'));