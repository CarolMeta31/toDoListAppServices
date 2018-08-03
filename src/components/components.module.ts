import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DoingListComponent } from './doing-list/doing-list';
import { CompleteListComponent } from './complete-list/complete-list';
@NgModule({
	declarations: [DoingListComponent,
    CompleteListComponent],
	imports: [IonicModule],
     exports: [DoingListComponent,
    CompleteListComponent]
})
export class ComponentsModule {}
