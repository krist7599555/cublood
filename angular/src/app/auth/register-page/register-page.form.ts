import { mapValues } from 'lodash'

const opts = mapValues({
  rh:          ["+", "-", ["unsure", "ไม่มั่นใจ"]],
  blood_type:  ["A", "B", "C", "D"],
  gender:      [["male", "ชาย / male"], ["female", "หญิง / female"]],
  status:      ["nisit", "teacher", "staff", "alumni"],
  nationality: ["thai", "foreign"],
  academic:    ["1", "2", "3", "4", "5", "6", "master", "docter"],
  birth_day:   _.range(1, 31),
  birth_year:  _.range(new Date().getFullYear() - 16, new Date().getFullYear() - 70, -1),
  birth_month: [
    [1, "มกราคม / January"],
    [2, "กุมภาพันธ์ / February"],
    [3, "มีนาคม / March"],
    [4, "เมษายน / April"],
    [5, "พฤษภาคม / May"],
    [6, "มิถุนายน / June"],
    [7, "กรกฎาคม / July"],
    [8, "สิงหาคม / August"],
    [9, "กันยายน / September"],
    [10, "ตุลาคม / October"],
    [11, "พฤศจิกายน / November"],
    [12, "ธันวาคม / December"]
  ]
}, ar => ar.map(s => _.isArray(s) ? [...s] : [s, s]))
