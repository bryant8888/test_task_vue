import {ITransform} from "@/services/transform.interface";
import {PeopleEntity} from "@/components/People.entity";
import {BackendJSON} from "@/types/backend-json";

export const jsonToPeople: ITransform<BackendJSON, PeopleEntity> = (source: BackendJSON) => {
    return new PeopleEntity(
        (source.name as string),
        (Number(source.height)),
        (Number(source.mass)),
        (source.gender as string),
        (source.films as Array<string>)
    );
};