// Deklarasi fungsi
function greet(name) {
    console.log(`Hello ${name}`);
}

const greetArrow = (name) => {
    console.log(`Hello ${name}`);
}

greet("Deni");
greetArrow("Maya");

// Parameter default
const greeting = (name = "user") => {
    console.log(`Hello ${name}`);
}
greeting(); // Menggunakan nilai default
greeting("Jhon");

// Cakupan variabel (Variable Scope)
let globalVar = "Saya variabel global";
const myFunc = () => {
    let localVar = "Saya variabel lokal";
    console.log(localVar);
    console.log(globalVar);
};
myFunc();
// console.log(localVar); // Ini akan error karena localVar hanya bisa diakses dalam fungsi myFunc

// Closure
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

// Fungsi asinkronus dengan callback
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

// Penggunaan Promise
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
        console.log(pesan);
    })
    .catch((error) => {
        console.error(error);
    });

// Async/Await
async function jalankanProses() {
    try {
        const hasil = await prosesPromise();
        console.log(hasil);
    } catch (error) {
        console.error(error);
    }
}
jalankanProses();
