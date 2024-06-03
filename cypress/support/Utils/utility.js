export default class Utility {

    constructor() {
        if (Utility.instance) {
            return Utility.instance;
        }
        Utility.instance = this;
    }

    generateRandomWord = (length) => {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let word = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            word += characters[randomIndex];
        }
        return word;
    }

    generateNumber = (length) => {
        let phoneNumber = "";
        for (let i = 0; i < length; i++) {
            phoneNumber += Math.floor(Math.random() * length);
        }
        return phoneNumber;
    }

    createTimestamp = () => {
        let currentDate = new Date();
        let timestamp = currentDate.getTime();
        return timestamp;
    }

    getRandomNumber = (value) => {
        return Math.floor(Math.random() * (value + 1));
    }

}

const utilityInstance = new Utility();
Object.freeze(utilityInstance);
