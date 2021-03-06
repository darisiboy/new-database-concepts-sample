import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedPageComponent} from './feed-page/feed-page.component';
import {RouterModule} from "@angular/router";
import {PostComponent} from './post/post.component';
// import { HashtagComponent } from './hashtag/hashtag.component';

@NgModule({
  declarations: [FeedPageComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FeedPageComponent}
    ]),
  ]
})
export class FeedModule {
}
