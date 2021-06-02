import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nguix-oauth-popup-page',
  templateUrl: './oauth-popup.component.html',
  styleUrls: ['./oauth-popup.component.scss']
})
export class OauthPopupPage implements OnInit {
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    if (window.opener !== null && !window.opener.closed) {
      window.opener.handleOauthResult(window.location.hash);
    }
    window.close();
  }
}
