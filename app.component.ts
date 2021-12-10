import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any = 'Random number';
  subscription: any;
  timerId: any;
  counter: number[] = [];

  subject = new BehaviorSubject(0);

  ngOnInit() {
    this.timerId = setInterval(() => {
      const newValue = Math.floor(Math.random() * 1000);
      console.log(newValue)
      this.counter.push(newValue)
      
      if (this.counter.length <= 10) {
        this.subject.next(newValue);
        this.subscription = this.subject.pipe(filter(item => item > 300 && item < 1000)).subscribe((value) => {
          this.title = value;
        });
      }
      else
      this.subscription.unsubscribe()

    }, 1000);
  }
  ngOnDestroy() {
    this.timerId.unsubscribe()
  }

}
