const currencyData = [
  // 1 ريال - 10 عملات
  { serial: "1-1-143-256", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-783", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-490", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-631", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-872", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-103", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-675", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-508", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-920", amount: 1, owner: "الحكومة", id: "0000" },
  { serial: "1-1-143-344", amount: 1, owner: "الحكومة", id: "0000" },

  // 5 ريال - 15 عملة
  { serial: "1-5-143-186", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-509", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-724", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-610", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-832", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-445", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-937", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-290", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-681", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-217", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-358", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-902", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-104", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-563", amount: 5, owner: "الحكومة", id: "0000" },
  { serial: "1-5-143-722", amount: 5, owner: "الحكومة", id: "0000" },

  // 10 ريال - 20 عملة
  { serial: "1-10-143-654", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-832", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-198", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-471", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-612", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-280", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-709", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-365", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-507", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-120", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-397", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-811", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-156", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-790", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-218", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-643", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-459", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-874", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-615", amount: 10, owner: "الحكومة", id: "0000" },
  { serial: "1-10-143-950", amount: 10, owner: "الحكومة", id: "0000" },

  // 100 ريال - 4 عملات
  { serial: "1-100-143-232", amount: 100, owner: "الحكومة", id: "0000" },
  { serial: "1-100-143-541", amount: 100, owner: "الحكومة", id: "0000" },
  { serial: "1-100-143-376", amount: 100, owner: "الحكومة", id: "0000" },
  { serial: "1-100-143-830", amount: 100, owner: "الحكومة", id: "0000" },

  // 500 ريال - 1 عملة
  { serial: "1-500-143-307", amount: 500, owner: "الحكومة", id: "0000" }
];

const persons = {
  "الحكومة": "0000",
  "بيان سعد الشهراني": "1234",
  "وجدان سعد الشهراني": "2345",
  "محمد سعد الشهراني": "3456"
};
