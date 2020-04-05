import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() href = "https://www.facebook.com/CU.Blood/videos/575771536617689"

  ngOnInit(): void {
  }

}
