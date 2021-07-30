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
  verifyEmail() {
    const yes = confirm('Verify email now?');
    if (yes) {
      return this.userService.verifyEmail()
        .subscribe(() => alert('Please check your inbox for instruction.'));
    }
    return null;
  }

  /**
   * @ignore
   */
  openPublicProfile() {
    if (this.userService.username && this.userService.publicData?.status === 'publish') {
      return this.navService.navigate(this.userService.username);
    } else {
      const yes = confirm('Your profile is private, make it public now?');
      if (yes) {
        return this.userService.changePublicity(true);
      }
      return null;
    }
  }

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

  /**
   * @ignore
   */
  updatePublicity(e: any) {
    const toPublic = e.target.checked;
    return this.userService.changePublicity(toPublic);
  }

  /**
   * @ignore
   */
  updateDisplayName() {
    const value = prompt('Please input your display name:');
    if (value && this.userService.data?.displayName !== value) {
      return this.userService.updateProfile({ displayName: value });
    }
    return null;
  }

  /**
   * @ignore
   */
  updateIntro(value: string) {
    return this.userService.updateProfile({ intro: value });
  }

  /**
   * @ignore
   */
  updateEmailPublicly(isPublic: boolean) {
    return this.userService.updatePublicly({ email: isPublic });
  }
}
