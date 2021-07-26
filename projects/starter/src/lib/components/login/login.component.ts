import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, NativeUserCredential } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Register page router link
   */
  @Input() registerRouterLink: string | string[] = ['register'];

  /**
   * Input() The email input label. For i18n: NGUIX_LOGIN.EMAIL_LABEL
   */
  @Input() emailLabel = 'Email';

  /**
   * Input() The email input placeholder. For i18n: NGUIX_LOGIN.EMAIL_PLACEHOLDER
   */
  @Input() emailPlaceholder = 'Your email';

  /**
   * Input() The password input label. For i18n: NGUIX_LOGIN.PASSWORD_LABEL
   */
  @Input() passwordLabel = 'Password';

  /**
   * Input() The password input placeholder. For i18n: NGUIX_LOGIN.PASSWORD_PLACEHOLDER
   */
  @Input() passwordPlaceholder = 'Your password';

  /**
   * Input() Submit text. For i18n: NGUIX_LOGIN.SUBMIT_TEXT
   */
  @Input() submitText = "Sign In";

  /**
   * Input() Forgot password text. For i18n: NGUIX_LOGIN.FORGOT_PASSWORD
   */
  @Input() forgotPassword = "Forgot password?";

  /**
   * Input() Social text. For i18n: NGUIX_LOGIN.SOCIAL_TEXT
   */
  @Input() socialText = 'Using social accounts:';

  /**
   * Input() Register link text. For i18n: NGUIX_LOGIN.REGISTER_TEXT
   */
  @Input() registerText = 'create now?';

  /**
   * Input() Register link description. For i18n: NGUIX_LOGIN.REGISTER_DESCRIPTION
   */
  @Input() registerDescription = 'Don\'t have an account';

  /**
   * Input() With socials signin: google, facebook, github
   */
  @Input() withSocials?: string[];

  /**
   * Output() Sign in completed
   */
  @Output() signedIn = new EventEmitter<NativeUserCredential>();

  /**
   * Output() Sign in error
   */
  @Output() error = new EventEmitter<any>();

  /**
   * @ignore
   */
  lockdown = false;

  /**
   * @ignore
   */
  message?: string;

  /**
   * @ignore
   */
  isGoogleOauth = false;
  
  /**
   * @ignore
   */
  isFacebookOauth = false;

  /**
   * @ignore
   */
  isGithubOauth = false;

  public readonly loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    /**
     * Inject() Requires the [AuthService](https://ngx-useful.lamnhan.com/service/auth)
     */
     public readonly authService: AuthService,
  ) {
    this.loginFormGroup = this.formBuilder.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(7)
      ])
    });
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    if (this.withSocials) {
      this.isGoogleOauth = this.withSocials.includes('google');
      this.isFacebookOauth = this.withSocials.includes('facebook');
      this.isGithubOauth = this.withSocials.includes('github');
    }
  }

  /**
   * @ignore
   */
  signIn() {
    if (!this.authService.authenticated && !this.lockdown) {
      this.beforeSignin();
      const email: string = this.loginFormGroup.get('email')?.value;
      const password: string = this.loginFormGroup.get('password')?.value;
      this.authService.signInWithEmailAndPassword(email, password).subscribe(
        credential => this.onSignedIn(credential),
        error => this.onError(error)
      );
    }
  }

  /**
   * @ignore
   */
  signInWithPopupForGoogle() {
    if (!this.authService.authenticated && !this.lockdown) {
      this.beforeSignin();
      this.authService.signInWithPopupForGoogle().subscribe(
        credential => this.onSignedIn(credential),
        error => this.onError(error)
      );
    }
  }

  /**
   * @ignore
   */
  signInWithPopupForFacebook() {
    if (!this.authService.authenticated && !this.lockdown) {
      this.beforeSignin();
      this.authService.signInWithPopupForFacebook().subscribe(
        credential => this.onSignedIn(credential),
        error => this.onError(error)
      );
    }
  }

  /**
   * @ignore
   */
  signInWithPopupForGithub() {
    if (!this.authService.authenticated && !this.lockdown) {
      this.beforeSignin();
      this.authService.signInWithPopupForGithub().subscribe(
        credential => this.onSignedIn(credential),
        error => this.onError(error)
      );
    }
  }

  /**
   * @ignore
   */
  resetPassword() {
    if (!this.authService.authenticated && !this.lockdown) {
      // TODO: implement better prompt/alert
      const email = prompt('Please enter your email:');
      if (
        email
        && (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.toLowerCase())
      ) {
        const done = () => alert('Email sent, now open your inbox and follow the instruction.');
        this.authService.sendPasswordResetEmail(email).subscribe(
          () => done(),
          () => done()
        );
      }
    }
  }

  private beforeSignin() {
    this.lockdown = true;
    this.message = undefined;
  }

  private onSignedIn(credential: NativeUserCredential) {
    this.lockdown = false;
    this.signedIn.emit(credential);
  }

  private onError(error: any) {
    // default error handling
    const {code, message, email} = error;
    if (code === 'auth/account-exists-with-different-credential') {
      this.authService
        .handleAccountExistsWithDifferentCredential(email as string)
        .subscribe(() => this.message = message);
    } else {
      this.message = message;
    }
    // events
    this.lockdown = false;
    this.error.emit(error);
  }
}