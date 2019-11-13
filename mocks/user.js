export default class User {
    constructor() {
        this.name = "Bruno Campos Neves";
        this.email = "bcneves13@gmail.com";
        this.password = "123456";
        this.idade = 16;
        this.ano_letivo = "2º ano Colegial";
    }
    getData = () => {
        let objArr = [];
        objArr.push({"label": "Nome", "value": this.name});
        objArr.push({"label": "Idade", "value": this.idade});
        objArr.push({"label": "Ano letivo", "value": this.ano_letivo});
        return objArr;
    }
}