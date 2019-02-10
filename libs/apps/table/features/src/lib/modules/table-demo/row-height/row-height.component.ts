/* @pebula-example:ex-1 */
/* @pebula-example:ex-2 */
/* @pebula-example:ex-3 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { createDS, columnFactory } from '@pebula/table';

import { Person, DemoDataSource } from '@pebula/apps/table/shared';

const COLUMNS = columnFactory()
  .default({minWidth: 100})
  .table(
    { prop: 'id', sort: true, width: '40px' },
    { prop: 'name', sort: true },
    { prop: 'gender', width: '50px' },
    { prop: 'birthdate', type: 'date' },
    { prop: 'bio' },
    { prop: 'email', minWidth: 250, width: '250px' },
    { prop: 'language', headerType: 'language' },
  )
  .build();

@Component({
  selector: 'neg-row-height-table-example-component',
  templateUrl: './row-height.component.html',
  styleUrls: ['./row-height.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowHeightTableExampleComponent {


  columns = COLUMNS;
  ds1 = createDS<Person>().onTrigger( () => this.datasource.getPeople(0, 15) ).create();
  ds2 = createDS<Person>().onTrigger( () => this.datasource.getPeople(0, 15) ).create();
  ds3 = createDS<Person>().onTrigger( () => this.datasource.getPeople(0, 15) ).create();

  constructor(private datasource: DemoDataSource) { }
}
/* @pebula-example:ex-3 */
/* @pebula-example:ex-2 */
/* @pebula-example:ex-1 */
