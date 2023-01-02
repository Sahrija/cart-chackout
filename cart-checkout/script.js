function write_down_data(nama,email,jam,tujuan,tiket) {
    parent = document.getElementById("result");
    parent.style.display = "block";
    
    document.getElementById("tiket-nama").value = nama;
    document.getElementById("tiket-email").value = email;
    document.getElementById("tiket-jam").value = jam;
    document.getElementById("tiket-tujuan").value = tujuan;
    document.getElementById("tiket-tiket").value = tiket;
}
function write_below(form) {
    var checkbox = document.getElementById("toggle")

    var nama_pelanggan = document.forms.writes.nama_pelanggan.value;
    var email_pelanggan = document.forms.writes.email_pelanggan.value;
    var jam_keberangkatan = document.forms.writes.jam_keberangkatan.value;
    var tujuan_keberangkatan = document.forms.writes.tujuan_keberangkatan.value;
    var jumlah_tiket = document.forms.writes.jumlah_tiket.value;
    if (checkbox.checked == 0) {
        if ((nama_pelanggan == "Ahmad Sahrija") && (email_pelanggan == "sahrija@gmail.com") && (jam_keberangkatan == "09:00") && (tujuan_keberangkatan == "jepang") && (jumlah_tiket == "4")) {
            write_down_data(nama_pelanggan, email_pelanggan, jam_keberangkatan, tujuan_keberangkatan, jumlah_tiket)
        }
        else {
            alert("data didn't match!")
        }
    }
    else {
        write_down_data(nama_pelanggan, email_pelanggan, jam_keberangkatan, tujuan_keberangkatan, jumlah_tiket)
    }

    return false;
}
