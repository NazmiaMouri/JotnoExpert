export class DataTableSearchParam {
    draw: number;
    start: number;
    length: number;
    search: SearchParam;
    columns: any[];
    order: OrderParam[];

    constructor(start, length, columns, order) {
        this.start = start;
        this.length = length;
        this.columns = columns;
        this.order = order;
        this.search = new SearchParam();
    }
}

export class SearchParam {
    value: string;
    regex: boolean;
}


export class OrderParam {
    column: number;
    dir: string;
}

export class Column {
    search: SearchParam;
    data: string;
}