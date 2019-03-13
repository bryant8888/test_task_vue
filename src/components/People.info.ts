import {PeopleEntity} from "@/components/People.entity";

export class PeopleInfo {
    constructor(
        public peoples: Array<PeopleEntity>,
        public count: number
    ) {

    }
}