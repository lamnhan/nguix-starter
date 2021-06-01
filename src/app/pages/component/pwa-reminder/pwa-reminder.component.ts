import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pwa-reminder-page',
  templateUrl: './pwa-reminder.component.html',
  styleUrls: ['./pwa-reminder.component.scss']
})
export class PwaReminderComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

  toggleReminder() {
    const el = document.querySelector('.nguix-pwa-reminder');
    if (el) {
      el.classList.toggle('show');
    }
  }

}
