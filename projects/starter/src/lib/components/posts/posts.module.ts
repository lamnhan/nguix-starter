import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule, O2aPipeModule, O1iPipeModule } from '@lamnhan/ngx-useful';

import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    O2aPipeModule,
    O1iPipeModule,
  ],
  exports: [PostsComponent]
})
export class NguixPostsComponentModule {}
