import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavigationComponent } from './app-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppNavigationComponent
  ],
  imports: [
    CommonModule, 
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    AppNavigationComponent,
    
  ]
})

export class AppNavigationModule { }
