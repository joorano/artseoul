class Seoul {
    constructor() {
        this.apiKey = '596f5075527472653732416e6f4551';
        //this.apiKey = '69666c465a7472653630446e546e6a';
        //this.state = state;
    }
    // Fetch Info from API
    async getInfo(keyword) {
        //http://openapi.seoul.go.kr:8088/(인증키)/xml/MgisArtPlace/1/5/
        //const response = await fetch(`http://openapi.seoul.go.kr:8088/${this.apiKey}/json/GetParkInfo/1/5`)
        const response = await fetch(`http://openapi.seoul.go.kr:8088/${this.apiKey}/json/MgisArtPlace/1/354/`)

        const responseData = await response.json();

        return responseData;

    }


}