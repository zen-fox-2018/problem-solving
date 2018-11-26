//RELEASE 1 =======================================
let counter = 0

for (let i = 7; i <= 31; i++) {
    let string = `Tanggal ${i}: `
    let array = []
    
    if (i % 10 === 0) {
        string = `Tanggal ${i}: Tempat Fitness Tutup`
    }
    if (i % 2 === 1) {
        array.push(`Tono`)
        counter++
        if (i % 4 === 3) {
            array.push(`Anton`)
        }
    }
    if (i % 5 === 2) {
        array.push(`Budi`)
    }

    string += array.join(`, `)
    console.log(string);
}

