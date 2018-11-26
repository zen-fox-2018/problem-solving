let days = 31
for (let i = 7; i <= days; i++) {
    let name = []
    let day = i-7
    if(i % 5 === 0) {
        console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
    } else {
        if (day % 2 === 0) {
            name.push("Tono")
        }
        if (day % 4 === 0) {
            name.push("Anton")
        }
        if (day % 5 === 0) {
            name.push("Budi")
        }
        if (name.length === 1) {
            console.log(`Tanggal ${i}: ${name[0]}`)
        } else if (name.length === 2) {
            console.log(`Tanggal ${i}: ${name.join(' & ')}`);
        } else if (name.length >= 3){
            let koma = name.splice(0, name.length-1)
            // console.log(koma);
            console.log(`Tanggal ${i}: ${koma.join(', ')} & ${name[name.length-1]}`);
        }
    }
}
