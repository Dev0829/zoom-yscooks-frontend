import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ZoomService } from './services/zoom.service';
import { ZoomComponent } from './components/zoom/zoom.component';
import { ZoomRoutingModule } from './zoom-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZoomComponent],
  imports: [CommonModule, ZoomRoutingModule, SharedModule, FormsModule],
  providers: [ZoomService],
})
export class ZoomModule {}
