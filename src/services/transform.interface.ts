export interface ITransform<T, C> {
    (source: T): C;
}