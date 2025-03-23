export type TableColumn = {
    type: TableColumnType,
    dataField: string,
    label?: string
}

export enum TableColumnType {
    ID = "ID",
    NUMBER = "NUMBER",
    TEXT = "TEXT",
    BIG_TEXT = "BIG_TEXT",
    FILE = "FILE"
};
