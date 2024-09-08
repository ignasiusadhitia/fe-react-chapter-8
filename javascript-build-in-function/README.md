# JavaScript Built-in Function

Proyek ini memperkenalkan beberapa **built-in function** dalam JavaScript yang sangat berguna untuk memanipulasi string dan array. Berikut adalah penjelasan dari setiap fungsi yang digunakan dalam kode ini.

## toUpperCase() dan toLowerCase()

Fungsi `toUpperCase()` mengubah seluruh huruf dalam string menjadi huruf besar, sedangkan `toLowerCase()` mengubah seluruh huruf menjadi huruf kecil.

```javascript
const str = "Hello World!";
console.log(str.toUpperCase()); // Output: 'HELLO WORLD!'
console.log(str.toLowerCase()); // Output: 'hello world!'
```

## includes()

Fungsi `includes()` digunakan untuk mengecek apakah sebuah string mengandung substring tertentu. Jika substring ditemukan, fungsi ini akan mengembalikan nilai `true`.

```javascript
console.log(str.includes("World")); // Output: true
```

## split()

Fungsi `split()` memisahkan string berdasarkan karakter tertentu dan mengembalikan hasilnya dalam bentuk array.

```javascript
console.log(str.split(" ")); // Output: ['Hello', 'World!']
```

## replace()

Fungsi `replace()` mengganti bagian dari string dengan string baru. Fungsi ini hanya mengganti kecocokan pertama yang ditemukan.

```javascript
console.log(str.replace("Hello", "Goodbye")); // Output: 'Goodbye World!'
```

## map()

Fungsi `map()` digunakan untuk membuat array baru dengan menerapkan fungsi tertentu pada setiap elemen array yang ada.

```javascript
const names = ["Deni", "Mari", "Kim"];
names.map(function (item, index) {
  console.log(`Nama ke-${index + 1}: ${item}`);
});
```

- Pada contoh di atas, `map()` akan mencetak setiap nama dalam array dengan indeksnya.

## filter()

Fungsi `filter()` membuat array baru dengan hanya memasukkan elemen-elemen yang memenuhi kondisi tertentu.

```javascript
const longNames = names.filter(function (item) {
  return item.length >= 4; // Menyaring nama yang memiliki panjang >= 4 karakter
});
console.log(longNames); // Output: ['Deni']
```

## find()

Fungsi `find()` mengembalikan elemen pertama dalam array yang memenuhi kondisi tertentu. Jika tidak ada elemen yang memenuhi kondisi, undefined akan dikembalikan.

```javascript
const findName = names.find(function (item) {
  return item === "Deni"; // Mencari nama 'Deni'
});
console.log(findName); // Output: 'Deni'
```

## Kesimpulan

JavaScript menyediakan banyak built-in functions yang sangat memudahkan developer dalam memanipulasi data tanpa perlu menulis ulang fungsi dari nol. Dengan memahami dan menggunakan fungsi-fungsi seperti `toUpperCase(), includes(), split(), map(), filter(), dan find()`, Anda dapat bekerja dengan data secara lebih efisien dan cepat.
