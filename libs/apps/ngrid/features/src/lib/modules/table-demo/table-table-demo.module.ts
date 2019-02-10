import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { PblNgridModule, PblNgridRegistryService, PblNgridConfigService } from '@pebula/ngrid';
import { PblNgridDragModule } from '@pebula/ngrid/drag';
import { PblNgridTargetEventsModule } from '@pebula/ngrid/target-events';
import { PblNgridTransposeModule } from '@pebula/ngrid/transpose';
import { PblNgridBlockUiModule } from '@pebula/ngrid/block-ui';
import { PblNgridDetailRowModule } from '@pebula/ngrid/detail-row';
import { PblNgridStickyModule } from '@pebula/ngrid/sticky';
import { PblNgridMaterialModule } from '@pebula/ngrid-material';

import { SharedModule, ExampleGroupRegistryService } from '@pebula/apps/ngrid/shared';
import { RowHeightGridExampleComponent } from './row-height/row-height.component';
import { PaginatorGridExampleComponent } from './paginator';
import { NoDataGridExampleComponent } from './no-data';
import { VirtualScrollGridExampleComponent } from './virtual-scroll/virtual-scroll.component';

const MATERIAL = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule, MatNativeDateModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
];

const DECLARATION = [
  RowHeightGridExampleComponent,
  PaginatorGridExampleComponent,
  NoDataGridExampleComponent,
  VirtualScrollGridExampleComponent,
];

const ROUTES = [
  { path: 'row-height', component: RowHeightGridExampleComponent, data: { title: 'Row Height' } },
  { path: 'no-data', component: NoDataGridExampleComponent, data: { title: 'No Date' } },
  { path: 'virtual-scroll', component: VirtualScrollGridExampleComponent, data: { title: 'Virtual Scroll' } },
  { path: 'pagination', component: PaginatorGridExampleComponent, data: { title: 'Pagination' } },
];

@NgModule({
  declarations: DECLARATION,
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    MATERIAL, MatRippleModule,
    PblNgridModule,
    PblNgridDragModule,
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    PblNgridStickyModule,
    PblNgridMaterialModule,
  ],
  exports: [ MatRippleModule ], // we need this for detail-row
  providers: [ PblNgridRegistryService ],
})
export class TableTableDemoModule {
  constructor(registry: ExampleGroupRegistryService, config: PblNgridConfigService) {
    config.set('cellTooltip', { autoSetAll: true });
    registry.registerSubGroupRoutes('table', ROUTES);
  }
}
