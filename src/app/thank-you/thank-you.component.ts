import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public value: number;
  private ngUnSubscribe = new Subject();

  constructor(private _helperService: HelperService) { }

  ngOnInit() {

    //To take the current value of onValueChanged
    this.value = this._helperService.onValueChanged.value;

    //To take the value of onValueChanged whenever it gets changed
    this._helperService.onValueChanged
            .pipe(takeUntil(this.ngUnSubscribe))
            .subscribe(response => {
              this.value = response;
            });
  }

}
