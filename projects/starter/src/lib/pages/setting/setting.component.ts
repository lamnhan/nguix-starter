import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MetaService, SettingService, UserService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-setting-page',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingPage implements OnInit, AfterViewInit, OnDestroy {
  private metaSubscription!: Subscription;
  public readonly pageData$ = this.route.data;

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
    public readonly user: UserService,
    public readonly setting: SettingService
  ) { }

  ngOnDestroy(): void {
    this.metaSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.metaSubscription = this.setting.onLocaleChanged.subscribe(locale =>
      this.metaService.changePageMetas({
        title: 'Settings',
        description: 'Change app settings',
      })
    );
  }

  toggleTheme(e: any) {
    return this.setting.changeTheme(e.target.checked ? 'dark' : 'light');
  }
}
