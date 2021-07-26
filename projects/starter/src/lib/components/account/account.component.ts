import { Component, OnInit, Input } from '@angular/core';
import { NavService, AuthService, UserService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() The log out text. For i18n: NGUIX_ACCOUNT.LOGOUT_TEXT
   */
  @Input() logoutText = 'Logout';

  constructor(
    /**
     * Inject() Requires the [NavService](https://ngx-useful.lamnhan.com/service/nav)
     */
    public readonly navService: NavService,
    /**
     * Inject() Requires the [AuthService](https://ngx-useful.lamnhan.com/service/auth)
     */
    public readonly authService: AuthService,
    /**
     * Inject() Requires the [UserService](https://ngx-useful.lamnhan.com/service/user)
     */
    public readonly userService: UserService,
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  signOut() {
    const yes = confirm('Sign out now?');
    if (yes) {
      this.authService
        .signOut()
        .subscribe(() => this.navService.navigate(['']));
    }
  }
}
