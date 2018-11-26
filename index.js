//  PSEUDOCODE
/*
  FOR every number between 7 - 31
    SET people equal to empty array

    IF i divisible by 5
      PUSH `Tempat fitness tutup` inside people
    ELSE 
      IF i-7 divisible by 2
        PUSH `Tono` inside people
      IF i-7 divisible by 4
        PUSH `Anton` inside people
      IF i-7 divisible by 5
        PUSH `Budi` inside people

    DISPLAY `Tanggal i : join people using ','`

  END LOOP
*/



function gym() {
  for(var i = 7 ; i <= 31 ; i++){
    let people = []

    if(i % 5 == 0) {
      people.push(`Tempat fitness tutup`)
    } else {
      if((i-7)% 2 == 0){
        people.push(`Tono`)
      }
      if((i-7) % 4 == 0) {
        people.push(`Anton`)
      }
      if ((i-7) % 5 == 0) {
        people.push(`Budi`)
      }
    }
    console.log(`Tanggal ${i} : ${people.join(',')}`)
  }
}
gym()
