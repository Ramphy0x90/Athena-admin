import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbObject } from '../../types/dto/db-object';
import { TextToTitlePipe } from '../../pipes/text-to-title.pipe';
import { TableColumn, TableColumnType } from '../../types/table-column';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import _ from 'lodash';

@Component({
    selector: 'app-entity-table',
    standalone: true,
    imports: [FormsModule, TextToTitlePipe],
    templateUrl: './entity-table.component.html',
    styleUrl: './entity-table.component.css'
})
export class EntityTableComponent<T extends DbObject> {
    readonly tableColumnTypeEnum = TableColumnType;

    private _data: T[] = [];
    private _dataCopy: T[] = [];

    @Input() columns: TableColumn[] = [];

    @Input() set data(newData: T[]) {
        this._data = newData;
        this._dataCopy = _.cloneDeep(newData);
    };

    get data(): T[] {
        return this._data;
    }

    @Output() onUpdate: EventEmitter<T> = new EventEmitter();

    getEntityFields(entity: T): string[] {
        return Object.keys(entity);
    }

    isImage(fieldData: unknown): boolean {
        if (typeof fieldData !== "string") {
            return false;
        }

        return (
            fieldData.startsWith('iVBORw0KGgo') ||  // PNG
            fieldData.startsWith('/9j/') ||         // JPEG
            fieldData.startsWith('R0lGOD') ||       // GIF
            fieldData.startsWith('UklGR')           // WebP
        );
    }

    saveEntity(entityIndex: number): void {
        this.onUpdate.emit(this.data[entityIndex]);
    }

    discardChanges(entityIndex: number): void {
        this._data[entityIndex] = this._dataCopy[entityIndex];
    }
}
