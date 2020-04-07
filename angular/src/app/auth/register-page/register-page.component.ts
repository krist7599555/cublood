import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core'
import { AuthService } from '../auth.service'
import * as _ from 'lodash'
import * as $ from 'jquery'

@Component({
  selector:    'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls:   ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit, AfterViewInit {
  host_el: JQuery<HTMLElement>
  inputs_el: Record<string, JQuery<HTMLInputElement>> = {}
  constructor(private auth: AuthService, private host: ElementRef) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    const root = $(this.host.nativeElement)
    this.host_el = root
    root.find('input[name], select[name]').each((i, el) => {
      this.inputs_el[$(el).attr('name')] = $(el)
    })
    const opts_util = s => (_.isArray(s) ? [...s] : [s, s])
    const opts = {
      rh:         ['+', '-', ['unsure', 'ไม่มั่นใจ']].map(opts_util),
      blood_type: ['A', 'B', 'C', 'D'].map(opts_util),
      gender:     [
        ['male', 'ชาย / male'],
        ['female', 'หญิง / female'],
      ].map(opts_util),
      status:      ['nisit', 'teacher', 'staff', 'alumni'].map(opts_util),
      nationality: ['thai', 'foreign'].map(opts_util),
      academic:    ['1', '2', '3', '4', '5', '6', 'master', 'docter'].map(
        opts_util,
      ),
      birth_day:  _.range(1, 31).map(opts_util),
      birth_year: _.range(
        new Date().getFullYear() - 16,
        new Date().getFullYear() - 70,
        -1,
      ).map(opts_util),
      birth_month: [
        [1, 'มกราคม / January'],
        [2, 'กุมภาพันธ์ / February'],
        [3, 'มีนาคม / March'],
        [4, 'เมษายน / April'],
        [5, 'พฤษภาคม / May'],
        [6, 'มิถุนายน / June'],
        [7, 'กรกฎาคม / July'],
        [8, 'สิงหาคม / August'],
        [9, 'กันยายน / September'],
        [10, 'ตุลาคม / October'],
        [11, 'พฤศจิกายน / November'],
        [12, 'ธันวาคม / December'],
      ],
    }

    for (const field in opts) {
      const inner = opts[field]
        .map(
          ([value, label]) => `
        <option value="${value}">${label}</option>
      `,
        )
        .join('')

      this.inputs_el[field].html('<option></option>' + inner)
    }
  }

  getForm() {
    const form = _.mapValues(this.inputs_el, el =>
      el.attr('type') == 'checkbox' ? el.prop('checked') : el.val(),
    )
    form.birth = new Date(+form.birth_year, +form.birth_month, +form.birth_day)
    delete form.birth_year
    delete form.birth_month
    delete form.birth_day
    console.log(form)
    return form
  }

  onSubmit() {
    this.host_el.find('span[data-validate-message]').remove()
    return this.auth.register(this.getForm()).subscribe(
      () => {
        console.log('success')
      },
      err => {
        const validate = err?.error?.validate
        if (!validate) {
          console.error('error', err.message)
        } else {
          for (const field in validate) {
            this.host_el.find(`label[for=${field}]`).parent().append(`
                <span data-validate-message class='relative text-primary text-sm' style='top: -1.2rem'>
                  ${validate[field][0]}
                </span>`)
          }
        }
      },
    )
  }
}
