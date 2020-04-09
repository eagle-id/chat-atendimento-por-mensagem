class Professional {
    
    constructor (id, name, category, maxPatients) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._maxPatients = maxPatients;
        this._actualPatients = 0;
        this._patients = [];
    }

    get id() {
        return this._id;
    }


    get name() {
        return this._name;
    }
    get category() {
        return this._category;
    }
    get maxPatients() {
        return this._maxPatients;
    }
    get total() {
        return this._actualPatients;
    }
    get patientsList() {
        return this._patients;
    }

    set addPatient(patient) {
        if (this._actualPatients < this._maxPatients) {
            this._patients.push(patient);
            this._actualPatients++;
            return true;
        } else {
            return false;
        }
    }
    set dismissPatient(patientId) {
        const index = this._patients.indexOf(patientId);
        if(index != -1) {
            this._patients.splice(index, 1);
            this._actualPatients--;
            return true;
        } else {
            return false;
        }
    }
}

class Patient {
    constructor (id, name, category, datails) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._professional = null;
        this._professionalId = null;
        this._obs = datails;
        this._inQueue = false;
        this._inTalk = false;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get category() {
        return this._category;
    }
    get professionalId() {
        return this._professionalId;
    }
    set professionalId(professionalId) {
        this._professionalId = professionalId;
    }
    get datails() {
        return this._obs;
    }
    set category(category) {
        this._category = category;
    }
    get inTalk() {
        return this._inQueue;
    }
    get inQueue() {
        return this._inTalk;
    }
    set inQueue(inQ) {
        this._inQueue = inQ;
    }
    set inTalk(inT) {
        this._inTalk = inT;
    }
}

var categoryQueue = []
/*{
    desc: 'medico',
    patientsQueue: []

}*/

function createQueue(category) {
    const created = categoryQueue.filter(x => x.desc === category).length != 0;
    if(!created) {
        categoryQueue.push({
            desc: category,
            patientsQueue: []
        });
        return true;
    }
    return false;
}
function destroyCategory(category) {
    const created = categoryQueue.filter(x => x.desc === category).length != 0;
    if(created) {
        categoryQueue = categoryQueue.filter(x => x.desc !== category);
        return true;
    }
    return false;
}
function enterQueue(category, patient) {
    const categQueue = categoryQueue.filter(x => x.desc === category);
    if(categQueue.length > 0) {
        categQueue[0].patientsQueue.push(patient);
        return true;
    }
    return false;
}

function dequeue(category) {
    const categQueue = categoryQueue.filter(x => x.desc === category);
    if(categQueue.length > 0) {
        return categQueue[0].patientsQueue.shift();
    }
    return null;
}

function exitQueue(category, patient) {
    const categQueue = categoryQueue.filter(x => x.desc === category);
    if(categQueue.length > 0) {
        const index = categQueue[0].patientsQueue.indexOf(patient);
        if(index != -1) {
            categQueue[0].patientsQueue.splice(index, 1);
            return true;
        }
    }
    return false;
}

function listQueue() {
    return categoryQueue;
}

function categoryList() {
    return categoryQueue.map(x => x.desc);
}

function getCategoryQueue(category) {
    return  categoryQueue.filter(x => x.desc === category);
}

module.exports.Professional = Professional;
module.exports.Patient = Patient;
module.exports.createQueue = createQueue;
module.exports.destroyCategory = destroyCategory;
module.exports.enterQueue = enterQueue;
module.exports.dequeue = dequeue;
module.exports.exitQueue = exitQueue;
module.exports.listQueue = listQueue;
module.exports.getCategoryQueue = getCategoryQueue;
module.exports.categoryList = categoryList;

