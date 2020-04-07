import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:    'app-headline',
  templateUrl: './headline.component.html',
  styleUrls:   ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
