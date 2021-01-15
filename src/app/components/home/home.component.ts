import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { of } from 'rxjs';


@Component({
  selector: 'cnsms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  classApplied = false;





  constructor() {}

  ngOnInit(): void {

  }



  isValidTypeBoolean: boolean = true;



  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}
