class Professional {
    constructor (id, name, categori, maxPatients) {
        this.id = id;
        this.name = name;
        this.categori = categori;
        this.maxPatients = maxPatients;
        this.actualPatients = 0;
        this.patients = [];
    }

    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get categori() {
        return this.categori;
    }
    get maxPatients() {
        return this.maxPatients;
    }
    get total() {
        return this.actualPatients;
    }
    get patientsList() {
        return this.patients;
    }
    set addPatient(patient) {
        if (this.actualPatients < this.maxPatients) {
            this.patients.push(patient);
            this.actualPatients++;
            return true;
        } else {
            return false;
        }
    }
    set dismissPatient(patientId) {
        const index = this.patients.indexOf(patientId);
        if(index != -1) {
            this.patients.splice(index, 1);
            this.actualPatients--;
            return true;
        } else {
            return false;
        }
    }
}

class Patient {
    constructor (id, name, categori, professionalId, datails) {
        this.id = id;
        this.name = name;
        this.categori = categori;
        this.professional = professionalId;
        this.obs = datails
    }

    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get categori() {
        return this.categori;
    }
    get professionalId() {
        return this.professionalId;
    }
    get datails() {
        return this.obs;
    }
    set categori(categori) {
        this.categori = categori;
    }
}

const categoriQueue = []
/*{
    desc: 'medico',
    patientsQueue: []

}*/

function createQueue(categori) {
    const created = categoriQueue.filter(x => x === categori).length != 0;
    if(!created) {
        categoriQueue.push({
            desc: categori,
            patientsQueue: []
        });
        return true;
    }
    return false;
}
function enterQueue(categori, patient) {
    const categQueue = categoriQueue.filter(x => x === categori);
    if(categQueue.length > 0) {
        categQueue.patientsQueue.push(patient);
        return true;
    }
    return false;
}

function dequeue(categori) {
    const categQueue = categoriQueue.filter(x => x === categori);
    if(categQueue.length > 0) {
        return categQueue.patientsQueue.shift();
    }
    return null;
}

function exitQueue(categori, patient) {
    const categQueue = categoriQueue.filter(x => x === categori);
    if(categQueue.length > 0) {
        const index = this.categQueue.patientsQueue.indexOf(patient);
        if(index != -1) {
            this.categQueue.patientsQueue.splice(index, 1);
            return true;
        }
    }
    return null;
}

function listQueue() {
    return categoriQueue;
}

module.exports.Professional = Professional;
module.exports.Patient = Patient;
module.exports.createQueue = createQueue;
module.exports.enterQueue = enterQueue;
module.exports.dequeue = dequeue;
module.exports.exitQueue = exitQueue;
module.exports.listQueue = listQueue;

