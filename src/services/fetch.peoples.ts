import {IFetch} from "@/services/fetch.interface";
import {PeopleEntity} from "@/components/People.entity";
import {PeopleInfo} from "@/components/People.info";
import axios, {AxiosResponse} from 'axios';
import {BackendJSON} from "@/types/backend-json";
import {AppUrls} from "@/configuration/url";
import {EntitiesNames} from "@/configuration/entities-names";
import {jsonToPeople} from "@/services/transform.json-people";
import {RequestPeople} from "@/services/entities/request.entity";

export const fetchPeoples: IFetch<PeopleInfo, RequestPeople> = (request: RequestPeople): Promise<PeopleInfo> => {
    const url: string = `${AppUrls.DataSource}${EntitiesNames.People}?page=${request.page}${request.name ? `&search=${request.name}`  : ''}`;
    return axios
        .get<BackendJSON>(url)
        .then((response: AxiosResponse<BackendJSON>): PeopleInfo => {
            const peoples: Array<PeopleEntity> = (response.data.results as Array<BackendJSON>)
                .map((jsonData: BackendJSON): PeopleEntity => jsonToPeople(jsonData));

            return new PeopleInfo(peoples, Number(response.data.count));
        });
};