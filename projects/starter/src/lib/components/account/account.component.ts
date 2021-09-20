import { Component, OnInit, Input } from '@angular/core';
import { NavService, AlertService, AuthService, UserService } from '@lamnhan/ngx-useful';

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
   * Input() Public profile url segment
   */
  @Input() profileUrlSegment = '';

  /**
   * Input() The email verification text. For i18n: NGUIX_ACCOUNT.VERIFY_EMAIL
   */
  @Input() VERIFY_EMAIL = 'Verify Email';

  /**
   * Input() The view profile text. For i18n: NGUIX_ACCOUNT.VIEW_PROFILE
   */
  @Input() VIEW_PROFILE = 'View Public Profile';

  /**
   * Input() The general title text. For i18n: NGUIX_ACCOUNT.GENERAL_TITLE
   */
  @Input() GENERAL_TITLE = 'General';

  /**
   * Input() The intro label. For i18n: NGUIX_ACCOUNT.INTRO_LABEL
   */
  @Input() INTRO_LABEL = 'Intro';

  /**
   * Input() The log out text. For i18n: NGUIX_ACCOUNT.LOGOUT_TEXT
   */
  @Input() LOGOUT_TEXT = 'Logout';

  constructor(
    /**
     * Inject() Requires the [NavService](https://ngx-useful.lamnhan.com/service/nav)
     */
    public readonly navService: NavService,
    /**
     * Inject() Requires the [AlertService](https://ngx-useful.lamnhan.com/service/alert)
     */
    public readonly alertService: AlertService,
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
    return this.alertService.confirm(
      {
        message: 'Verify email now?',
        confirmText: 'Send verification'
      },
      yes => {
        if (yes) {
          this.userService.verifyEmail().subscribe(() =>
            this.alertService.alert({
              message: 'Please check your inbox for instruction.'
            })
            .show()
          );
        }
      }
    )
    .show();
  }

  /**
   * @ignore
   */
  openPublicProfile() {
    if (this.userService.username && this.userService.publicData?.status === 'publish') {
      const routerLink = !this.profileUrlSegment
        ? [this.userService.username]
        : [this.profileUrlSegment, this.userService.username];
      return this.navService.navigate(routerLink);
    } else {
      return this.alertService.confirm(
        {
          message: 'Your profile is private, make it public now?',
          confirmText: 'Make public'
        },
        yes => {
          if (yes) {
            this.userService.changePublicity(true);
          }
        }
      )
      .show();
    }
  }

  /**
   * @ignore
   */
  signOut() {
    return this.alertService.confirm(
      {
        message: 'Are your sure want to sign out?',
        confirmText: 'Sign out',
      },
      yes => {
        if (yes) {
          this.authService
            .signOut()
            .subscribe(() => this.navService.navigate(['']));
        }
      }
    )
    .show();
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
    return this.alertService.prompt(
      {
        message: 'Please input your display name:',
        inputValue: this.userService.data?.displayName,
        confirmText: 'Change name'
      },
      value => {
        if (value && this.userService.data?.displayName !== value) {
          this.userService.updateProfile({ displayName: value });
        }
      }
    )
    .show();
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
    this.userService.updatePublicly({ email: isPublic });
    return this.alertService.alert({
        message: 'Email status is changed to public.',
      })
      .show();
  }
}
