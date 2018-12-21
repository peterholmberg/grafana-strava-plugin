export class StravaDatasource {
    name: string;
    id: number;
    baseUrl: string;

    /** @ngInject */
    constructor(instanceSettings, private backendSrv) {
        this.name = instanceSettings.name;
        this.id = instanceSettings.id;
        this.baseUrl = instanceSettings.url + `/strava`;
    }

    testDatasource() {
        return this.backendSrv.datasourceRequest({
            url: this.baseUrl + '/athlete',
            method: 'GET',
        }).then(response => {
            if (response.status === 200) {
                return {
                    status: 'success',
                    message: 'Successfully queried the Strava Api.',
                    title: 'Success',
                };
            }

            return {
                status: 'Error'
            };
        }).catch(error => {
            console.log(error);
        })
    }
}
