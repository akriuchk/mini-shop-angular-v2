import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability-status-icon',
  templateUrl: './availability-status-icon.component.html',
  styleUrls: ['./availability-status-icon.component.scss']
})
export class AvailabilityStatusIconComponent implements OnInit {
  @Input() isAvailable: boolean;
  icon: string;
  constructor() { }

  ngOnInit() {    
    if (this.isAvailable) {
      this.icon = "check_circle_outline"
    } else {
      this.icon = "history_toggle_off"
    }
    
  }

}
