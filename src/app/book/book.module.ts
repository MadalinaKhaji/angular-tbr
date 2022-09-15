import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';



@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookItemComponent,
    BookFilterComponent,
    BookAddComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }
