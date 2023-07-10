const seleksiNilai = (awal, akhir, arrayParam) => {

    if (akhir < awal) {
        return "Nilai akhir harus lebih besar dari nilai awal"
    } else if (arrayParam.length < 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    }

    let output = []

    arrayParam.forEach(el => {
        if (el > awal && el < akhir) {
            output.push(el)
        }
    })

    if (output.length === 0) {
        return "Nilai tidak ditemukan"
    } else {
        return output.sort((a, b) => a - b)
    }
}

console.log(
    seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
)

console.log(
    seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
)

console.log(
    seleksiNilai(5, 17, [2, 25, 7])
)

console.log(
    seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
)
