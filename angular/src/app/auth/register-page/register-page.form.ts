import * as _ from 'lodash'
import * as dayjs from 'dayjs'
import 'dayjs/locale/th'
dayjs.locale('th')

function options_format(s): [string, string] {
  return _.isArray(s) ? [s[0], s[1]] : [s, s]
}
export function merge_day_month_year({ year, month, day }) {
  return year && month && day ? dayjs(`${year}-${month}-${day}`).format() : ""
}
export const selects_option: Record<string, [string, string][]> = _.mapValues({
  rh:          ["+", "-", ["unsure", "ไม่มั่นใจ"]],
  blood_type:  ["A", "B", "O", "AB"],
  gender:      [["male", "ชาย / male"], ["female", "หญิง / female"]],
  status:      [["nisit", "นิสิต / nisit"], ["teacher", "อาจารย์ / teacher"], ["staff", "บุคลากร / staff"], ["alumni", "ศิษเก่า / alumni"]],
  nationality: [["thai", "ไทย / thai"], ["foreign", "ต่างชาติ / foreign"]],
  academic:    [["1", "ปี 1"], ["2", "ปี 2"], ["3", "ปี 3"], ["4", "ปี 4"], ["5", "ปี 5"], ["6", "ปี 6"], ["master", "ปริญาโท / master"], ["docter", "ปริญาเอก / docter"]],
  shirt:       [[36, "36 นิ้ว - S"], [40, "40 นิ้ว - M"], [44, "44 นิ้ว - L"], [48, "48 นิ้ว - XL"]],
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
  ],
  faculty: [
    [20, "บัณฑิตวิทยาลัย / GRADUATE SCHOOL"],
    [21, "วิศวกรรมศาสตร์ / ENGINEERING"],
    [22, "อักษรศาสตร์ / ARTS"],
    [23, "วิทยาศาสตร์ / SCIENCE"],
    [24, "รัฐศาสตร์ / POLITICAL SCIENCE"],
    [25, "สถาปัตยกรรมศาสตร์ / ARCHITECTURE"],
    [26, "พาณิชยศาสตร์และการบัญชี / COMMERCE AND ACCOUNTANCY"],
    [27, "ครุศาสตร์ / EDUCATION"],
    [28, "นิเทศศาสตร์ / COMMUNICATION ARTS"],
    [29, "เศรษฐศาสตร์ / ECONOMICS"],
    [30, "แพทยศาสตร์ / MEDICINE"],
    [31, "สัตวแพทยศาสตร์ / VETERINARY SCIENCE"],
    [32, "ทันตแพทยศาสตร์ / DENTISTRY"],
    [33, "เภสัชศาสตร์ / PHARMACEUTICAL SCIENCES"],
    [34, "นิติศาสตร์ / LAW"],
    [35, "ศิลปกรรมศาสตร์ / FINE AND APPLIED ARTS"],
    [36, "พยาบาลศาสตร์ / NURSING"],
    [37, "สหเวชศาสตร์ / ALLIED HEALTH SCIENCES"],
    [38, "จิตวิทยา / PSYCHOLOGY"],
    [39, "วิทยาศาสตร์การกีฬา / SPORTS SCIENCE"],
    [40, "สำนักวิชาทรัพยากรการเกษตร / SCHOOL OF AGRICULTURAL RESOURCES"],
    [51, "วิทยาลัยประชากรศาสตร์ / COLLEGE OF POPULATION STUDIES"],
    [53, "วิทยาลัยวิทยาศาสตร์สาธารณสุข / COLLEGE OF PUBLIC HEALTH SCIENCES"],
    [55, "สถาบันภาษา / LANGUAGE INSTITUTE"],
    [56, "สถาบันนวัตกรรมบูรณาการ / SCHOOL OF INTEGRATED INNOVATION"],
    [58, "สถาบันบัณฑิตบริหารธุรกิจ ศศินทร์ฯ / SASIN GRADUATE INSTITUTE OF BUSINESS ADMINISTION"],
    [99, "มหาวิทยาลัยอื่น / OTHER UNIVERSITY"],
  ]
}, ar => _.map(ar, options_format))

export function register_from_translate_type(form) {
  form.shirt = +form.shirt
  form.weight = +form.weight
  form.faculty = +form.faculty
  form.birth = merge_day_month_year({
    year:  form.birth_year,
    month: form.birth_month,
    day:   form.birth_day
  })
  delete form.birth_year
  delete form.birth_month
  delete form.birth_day
  return form
}


