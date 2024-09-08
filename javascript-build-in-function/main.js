// Built-in Function toUpperCase() dan toLowerCase()
const str = 'Hello World!';
console.log(str.toUpperCase()); // Mengubah menjadi huruf besar
console.log(str.toLowerCase()); // Mengubah menjadi huruf kecil

// Built-in Function includes()
console.log(str.includes('World')); // Mengecek apakah 'World' ada dalam string

// Built-in Function split()
console.log(str.split(' ')); // Memisahkan string menjadi array berdasarkan spasi

// Built-in Function replace()
console.log(str.replace('Hello', 'Goodbye')); // Mengganti 'Hello' dengan 'Goodbye'

// Built-in Function map()
const names = ["Deni", "Mari", "Kim"];
names.map(function (item, index) {
    console.log(`Nama ke-${index + 1}: ${item}`);
});

// Built-in Function filter()
const longNames = names.filter(function (item) {
    return item.length >= 4; // Menyaring nama yang memiliki panjang >= 4
});
console.log(longNames);

// Built-in Function find()
const findName = names.find(function (item) {
    return item === "Deni"; // Mencari nama 'Deni'
});
console.log(findName);
