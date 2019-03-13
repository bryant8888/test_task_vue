export class PeopleEntity {
    constructor(
        public name: string,
        public height: number,
        public mass: number,
        public gender: string,
        public films: Array<string>
    ) {

    }
}