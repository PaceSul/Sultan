function kenaRazia(date, data) {
  //code goes here
  pelanggar = [];

  data.forEach((item, idx) => {
    // cek apakah mobil atau bukan
    if (item.type == "Mobil") {
      lewatRute = false;
      item.rute.forEach((rute) => {
        // cek rute
        if (
          rute == "Gajah Mada" ||
          rute == "Hayam Wuruk" ||
          rute == "Sisingamangaraja" ||
          rute == "Panglima Polim" ||
          rute == "Fatmawati" ||
          rute == "Tomang Raya"
        ) {
          lewatRute = true;
        }
      });

      if (lewatRute) {
        noPlat = "";
        for (let i = 0; i < item.plat.length; i++) {
          if (
            item.plat[i] == "0" ||
            item.plat[i] == "1" ||
            item.plat[i] == "2" ||
            item.plat[i] == "3" ||
            item.plat[i] == "4" ||
            item.plat[i] == "5" ||
            item.plat[i] == "6" ||
            item.plat[i] == "7" ||
            item.plat[i] == "8" ||
            item.plat[i] == "9"
          ) {
            noPlat += item.plat[i];
          }
        }

        if (
          !(
            (parseInt(noPlat[noPlat.length - 1]) % 2 == 0 && date % 2 == 0) ||
            (!(parseInt(noPlat[noPlat.length - 1]) % 2 == 0) &&
              !(date % 2 == 0))
          )
        ) {
          pelanggar.push({
            name: item.name,
            tilang: idx,
          });
        }
      }
    }
  });

  return pelanggar
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",

      plat: "B 2791 KDS",

      type: "Mobil",

      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },

    {
      name: "Toni",

      plat: "B 1212 JBB",

      type: "Mobil",

      rute: [
        "Pintu Besar Selatan",

        "Panglima Polim",

        "Depok",

        "Senen Raya",

        "Kemang",
      ],
    },

    {
      name: "Stark",

      plat: "B 444 XSX",

      type: "Motor",

      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },

    {
      name: "Anna",

      plat: "B 678 DD",

      type: "Mobil",

      rute: [
        "Fatmawati",

        "Panglima Polim",

        "Depok",

        "Senen Raya",

        "Kemang",

        "Gajah Mada",
      ],
    },
  ])
);

// [ { name: ‘Toni’, tilang: 1 }, { name: ‘Anna’, tilang: 3 } ]
