export interface BackendJSON {
    [key: string]: string | Array<string> | boolean | Array<boolean> | number | Array<number> | Array<BackendJSON>;
}