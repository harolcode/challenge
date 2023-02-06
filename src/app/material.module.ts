import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
exports: [MatCardModule ,FlexLayoutModule, MatIconModule]
})

export class MaterialModule {}