import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  classMethod = 'btn btn-primary';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.classMethod = 'btn btn-success';
    }, 4000);
  }

}
