import Rules from '../mocks/schoolSettings';
import { Math, Portuguese, History } from '../mocks/subjects';
const rules = new Rules();

export default class Core {
    getMathGrades = () => {
        return Math.grades;
    }
    getHistoryGrades = () => {
        return History.grades;
    }
    getPortugueseGrades = () => {
        return Portuguese.grades;
    }

    getStudantFouls = () => {
        let hour_fouls = ((Math.fouls + History.fouls + Portuguese.fouls) * rules.hour_day);
        let remain_school_hours = rules.hour_year - hour_fouls;
        return [ {label:"Presença", value:remain_school_hours, fill: "#34dbeb"}, {label: "Faltas", value:hour_fouls, fill: "#f5382f"} ];
    }

    getSubjectFouls = () => {
        return [
            {
                label: "Matemática",
                value: Math.fouls,
                fill: "#6002c4"
            },
            {
                label: "História",
                value: History.fouls,
                fill: "#ff8800"
            },
            {
                label: "Português",
                value: Portuguese.fouls,
                fill: "#fff200"
            },
        ]
    }
}