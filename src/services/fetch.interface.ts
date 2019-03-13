export interface IFetch<T, R> {
    (request: R): Promise<T>;
}