import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit, OnDestroy {
  filters: FormGroup;
  valueSub: Subscription;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)]
    });
    this.valueSub = this.filters.valueChanges.subscribe(value => {
      console.log('The Form has changed', value);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.valueSub.unsubscribe();
  }

  submit() {
    console.log('Video Form Submmited' + this.filters.value);
  }

}
