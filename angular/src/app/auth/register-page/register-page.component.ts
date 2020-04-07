import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core'
import { AuthService } from '../auth.service'
import * as _ from 'lodash'
import * as $ from 'jquery'
import { merge_day_month_year, selects_option, register_from_translate_type } from './register-page.form';

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
    root.find('input[name], select[name]').each((i, e) => {
      const el = $(e);
      const name = el.attr('name')
      this.inputs_el[name] = el
      el.on('propertychange input', () => {
        root.find(`span[data-validate-message=${name}]`).remove()
        // console.log($(el).parent().find('[data-validate-message]'))
      })
    })

    for (const field in selects_option) {
      const inner = selects_option[field]
        .map(([value, label]) => `
          <option value="${value}">${label}</option>
        `)
        .join('')

      this.inputs_el[field].html('<option></option>' + inner)
    }
  }

  getForm() {
    const form = _.mapValues(this.inputs_el, el =>
      el.attr('type') == 'checkbox' ? el.prop('checked') : el.val(),
    )
    register_from_translate_type(form)
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
          let top = 1000;
          for (const field in validate) {
            const p = this.host_el.find(`label[for=${field}]`).parent()
            top = _.min([top, p.offset().top])
            p.append(`
                <span data-validate-message="${field}" class='relative text-primary text-sm' style='top: -1.2rem'>
                  ${validate[field][0]}
                </span>`)
          }
          // console.log(top)
          $([document.documentElement, document.body]).animate({
            scrollTop: top - 30
          }, 700);
        }
      },
    )
  }
}
