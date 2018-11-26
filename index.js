
function fitness() {
  let tono = 2
  let anton = 4
  let budi = 5
  let pembukaan = 7
  let yangDatang = []

  for (let i = pembukaan; i <= 31; i++) {
    if (i % 5 === 0) {
      yangDatang = []
      yangDatang = ['Tempat Fitness Tutup']
      console.log(`Tanggal ${i}: ${yangDatang.join(", ")}`);
    }
    else if ((i - pembukaan) % 2 === 0) {
      yangDatang = []
      yangDatang.push("Tono")
      if ((i - pembukaan) % 4 === 0) {
        yangDatang.push("Anton")
        if ((i - pembukaan) % 5 === 0) {
          yangDatang.push("Budi")
        }
      }
      else if ((i - pembukaan) % 5 === 0) {
        yangDatang.push("Budi")
      }
      console.log(`Tanggal ${i}: ${yangDatang.join(", ")}`);
    }
    else if ((i - pembukaan) % 5 === 0) {
      yangDatang = []
      yangDatang.push("Budi")
      console.log(`Tanggal ${i}: ${yangDatang.join(", ")}`);
    }
    else if (i === pembukaan) {
      yangDatang = []
      yangDatang.push("Tono")
      yangDatang.push("Anton")
      yangDatang.push("Budi")
      console.log(`Tanggal ${i}: ${yangDatang.join(", ")}`);
    }
    else {
      yangDatang = []
      console.log(`Tanggal ${i}: ${yangDatang.join(", ")}`);
    }
  }
}

fitness()