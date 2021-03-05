import { Component } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent {
   count = 0;
    countNumber() {
        this.count = this.count + 1;
    }
  title = 'demo-Angular';

}
