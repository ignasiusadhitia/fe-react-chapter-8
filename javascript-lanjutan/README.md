# JavaScript Lanjutan

Proyek ini mencakup topik-topik lanjutan dalam JavaScript seperti fungsi, parameter default, cakupan variabel, closure, sinkronus dan asinkronus, callback, promise, serta async/await. Berikut adalah penjelasan untuk setiap konsep yang dicontohkan dalam kode ini.

## Deklarasi Fungsi

Fungsi di JavaScript bisa dideklarasikan menggunakan cara tradisional atau dengan arrow function.

Contoh deklarasi fungsi:

```javascript
function greet(name) {
  console.log(`Hello ${name}`);
}

const greetArrow = (name) => {
  console.log(`Hello ${name}`);
};
```

## Parameter Default

Parameter default adalah nilai yang akan digunakan jika argumen tidak diberikan saat fungsi dipanggil.

```javascript
const greeting = (name = "user") => {
  console.log(`Hello ${name}`);
};

greeting(); // Output: "Hello user"
greeting("Jhon"); // Output: "Hello Jhon"
```

## Variable Scope

Cakupan variabel menentukan di mana variabel dapat diakses. Ada dua jenis cakupan dalam JavaScript:

- Global Scope: Variabel yang dideklarasikan di luar fungsi bisa diakses dari mana saja.
- Local Scope: Variabel yang dideklarasikan di dalam fungsi hanya bisa diakses dalam fungsi tersebut.

```javascript
let globalVar = "Saya variabel global";
const myFunc = () => {
  let localVar = "Saya variabel lokal";
  console.log(localVar); // Variabel lokal bisa diakses di sini
  console.log(globalVar); // Variabel global bisa diakses di mana saja
};
myFunc();
// console.log(localVar); // Ini akan error karena localVar hanya bisa diakses di dalam myFunc
```

## Closure

Closure memungkinkan sebuah fungsi memiliki akses ke variabel dari cakupan luar meskipun cakupan luar tersebut sudah selesai dieksekusi.

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

## Sinkronus dan Asinkronus

- Sinkronus: Kode dieksekusi baris demi baris, satu per satu.
- Asinkronus: Kode dapat berjalan secara bersamaan tanpa harus menunggu satu operasi selesai. Contohnya adalah setTimeout() yang asinkron.

## Callback

Callback adalah fungsi yang dipanggil setelah fungsi lain selesai dijalankan, sering digunakan untuk operasi asinkronus seperti membaca file atau pemanggilan API.

```javascript
function prosesAsinkronus(callback) {
  setTimeout(() => {
    console.log("Proses selesai!");
    callback();
  }, 2000);
}
console.log("Proses dimulai...");
prosesAsinkronus(() => {
  console.log("Callback dipanggil setelah proses selesai.");
});
```

## Promise

Promise adalah objek yang mewakili hasil akhir dari operasi asinkronus. Promise dapat berada dalam tiga status: pending, resolved, atau rejected.

```javascript
function prosesPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Proses selesai dengan sukses!");
      } else {
        reject("Proses gagal!");
      }
    }, 2000);
  });
}

prosesPromise()
  .then((pesan) => {
    console.log(pesan); // Jika resolved
  })
  .catch((error) => {
    console.error(error); // Jika rejected
  });
```

## Async/Await

`async/await` adalah cara modern untuk menangani operasi asinkronus dengan cara yang lebih mudah dipahami dan mirip dengan kode sinkronus.

```javascript
async function jalankanProses() {
  try {
    const hasil = await prosesPromise();
    console.log(hasil); // Jika promise resolved
  } catch (error) {
    console.error(error); // Jika promise rejected
  }
}
jalankanProses();
```

## Kesimpulan

Pemahaman tentang fungsi, variable scope, callback, promise, dan async/await sangat penting dalam JavaScript modern. Konsep-konsep ini akan membantu Anda dalam menulis kode yang lebih terstruktur dan lebih mudah dikelola, terutama untuk menangani operasi asinkronus.
