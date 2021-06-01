import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MetaService, SettingService, PageDataService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-privacy-page',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyPage implements OnInit, AfterViewInit, OnDestroy {
  private metaSubscription!: Subscription;

  private readonly pageLocalizedIds: Record<string, string> = {
    'en-US': 'privacy',
  };

  public readonly page$ = this.settingService.onLocaleChanged.pipe(
    switchMap(locale =>
      this.pageDataService.getDoc(this.pageLocalizedIds[locale], {time: 10080 /* 7 days */})
    ),
  );

  constructor(
    private metaService: MetaService,
    private settingService: SettingService,
    private pageDataService: PageDataService,
  ) {}

  ngOnDestroy(): void {
    this.metaSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.metaSubscription = this.settingService.onLocaleChanged.subscribe(locale =>
      this.metaService.changePageMetas({
        title: 'Privacy',
        description: 'The privacy policy',
      })
    );
  }
}
