alert("Belajar JavaScript");

function kirim() {
let nama = document.getElementById("nama").value;
console.log("Nama: " + nama);
let saran = document.getElementById("saran").value;

//document.getElementById('list-pesan').innerHTML = nama;
//document.getElementById('list-pesan').innerHTML += "<li>" + nama + "</li>";
//document.getElementById("list-pesan").innerHTML += `<li>${nama}: ${saran}</li>`;
document.getElementById("list-pesan").innerHTML += `<tr><td>${nama}</td><td>${saran}</td></tr>`;
}