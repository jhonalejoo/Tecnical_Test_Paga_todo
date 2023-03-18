import { getData, storeData } from "../../storage";
import { baseURL } from "../../utils/env";


export const getBanks = () => {

    return getData('@banks').then(json => {
        if (json) {
            return json
        } else {
           return fetch(baseURL).then(res => res.json())
                .then(json => {
                    storeData(json, '@banks')
                    return json
                })
        }
    })
        .catch(err => {
            throw err
        })
};