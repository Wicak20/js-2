//built in array
// nomor 1
//array.pop()
//digunakan untuk mengambil item terakhir dari array dan menghapusnya dari array utama
const arrayKu = [1, 2, 3, 4, 5]
const arrayMu = arrayKu.pop()

console.log(arrayKu)
console.log(arrayMu)

// nomor 2
//array.push()
//digunakan untuk memasukkan nilai kedalam array
const arrayKita = [1, 2, 3, 4, 5]
arrayKita.push(6)
console.log(arrayKita)

//filter()
// nomor 3
//filter digunakan untuk mengiterasi suatu array untuk membuat array baru berdasarkan kriteria yang dibuat
const arraySatu = [10, 5, 3, 14, 17, 2, 11]
const arrayHasil = arraySatu.filter(item => item < 10)
console.log(arrayHasil)

// nomor 4
//Math math adalah sekumpulan built-in function JS untuk memanipulasi angka

//Math.round()
//Math.round() digunakan untuk membulatkan suatu angka desimal ke bilangan bulat terdekat
console.log(Math.round(14.89))

// nomor 5
//Math.floor()
//Math.floor() digunakan untuk pembulatan bilangan desimal ke bilangan bulat dengan pembulatan kebawah
console.log(Math.floor(14.99))

// nomor 6
//Math.ceil()
//Math.ceil() digunakan untuk pembulatan bilangan desimal ke bilangan bulat dengan pembulatan keatas
console.log(Math.ceil(6.2))

//string adalah built-in function untuk memanipulasi string
// nomor 7
//string.toUpperCase()
//digunakan untuk mengubah suatu string menjadi huruf kapital semua
console.log("Halo Nama Saya Wicak".toUpperCase())

// nomor 8
//string.toLowerCase()
//digunakan untuk mengubah suatu string menjadi huruf kapital semua
console.log("Halo Nama Saya Wicak".toLowerCase())

// nomor 9
//string.replace()
//digunakan untuk mengubah rangkaian karakter pertama dalam string menjadi karakter
console.log("saya Wicak, saya tinggal di bekasi".replace("saya", "kamu"))

// nomor 10
//string.replace()
//digunakan untuk mengubah semua rangkaian karakter dalam string menjadi karakter
console.log("saya Wicak, saya tinggal di bekasi".replaceAll("saya", "kamu"))