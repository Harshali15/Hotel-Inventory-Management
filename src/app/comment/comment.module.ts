import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { HttpClientModule } from '@angular/common/http';
import { AppNavigationModule } from '../app-navigation/app-navigation.module';


@NgModule({
  declarations: [
    CommentComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    AppNavigationModule,
  ]
})
export class CommentModule { }
