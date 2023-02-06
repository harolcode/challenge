import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
exports: [MatCardModule ,FlexLayoutModule, MatIconModule, MatSlideToggleModule]
})

export class MaterialModule {}