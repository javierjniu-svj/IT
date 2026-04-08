function ambilData(nama){
  var data = document.getElementsByName(nama);
  var hasil = [];

  for(var i=0; i<data.length; i++){
    if(data[i].checked){
      hasil.push(data[i].value);
    }
  }

  return hasil.join(", ");
}

function tampilkan(){
  var nama = document.getElementById("nama").value;
  var kelas = document.getElementById("kelas").value;
  var umur = ambilData("umur");
  var jk = ambilData("jk");
  var tingkatan = ambilData("tingkatan");

  var output = document.getElementById("output");

  output.innerHTML =
    "Nama: " + nama + "<br>" +
    "Kelas: " + kelas + "<br>" +
    "Umur: " + umur + "<br>" +
    "Jenis Kelamin: " + jk + "<br>" +
    "Tingkatan: " + tingkatan;
}

function bersihkan(){
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";

  var checkbox = document.querySelectorAll("input[type=checkbox]");
  for(var i=0; i<checkbox.length; i++){
    checkbox[i].checked = false;
  }

  document.getElementById("output").innerHTML = "";
}