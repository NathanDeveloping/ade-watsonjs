var data = require('./convertcsv.json');
var dataArray = Object.values(data);

function getCours(formation, date){
    var tableau=[];
    data.forEach(function (value) {
        if(value.Date==date){
            if(value.Formation==formation){
                tableau.push(value.Intitule);
            }
        }
    });
    return tableau;
}

function getCours_heure(formation, date, heure){
    var tableau=[];
    data.forEach(function (value) {
        if(value.Date==date){
            if(value.Formation==formation){
                if(value.Heure==heure){
                    tableau.push(value.Intitule);
                }
            }
        }
    });
    return tableau;
}

function getDureeDate(formation, date){
    var duree=0;
    sammy.test.forEach(function (value) {
        if(value.Date==date){
            if(value.Formation==formation){
                duree +=value.Duree;
            }
        }
    });
    return duree;
}

function getCours_prof(formation, prof){
    var tableau=[];
    sammy.test.forEach(function (value) {
        if(value.Formation==formation){
            if(value.Enseignant==prof){
                tableau.push(value.Intitule);
            }
        }
    });
    return tableau;
}

function getVacancesProchaines() {
    var vacances=[];
    var i = 0;
    var jourDebut=new Date("1998", "01", "01");
    var jourDebutString;
    var currentJour;
    var currentJourString;
    var dataSort = dataArray.sort(compare);
    var currentDate = new Date();
    dataSort.forEach(function (value) {
        i++;
        if(i==1) {
            jourDebut= stringToDate(value.Date);
            jourDebutString=value.Date;
        } else {
            if(value.Date != jourDebutString) {
                currentJour = stringToDate(value.Date);
                currentJourString = value.Date;
                var timeDifference = Math.abs(jourDebut.getTime() - currentJour.getTime());
                var differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
                if (differentDays >= 7) {
                    if(currentJour>jourDebut) {
                        if(jourDebut >= currentDate) {
                            vacances.push({debut: jourDebutString, fin: currentJourString});
                        }
                    }
                }
                jourDebut = currentJour;
                jourDebutString = value.Date;
            }
        }
    });
    return vacances;
}

function getProchaineVacance() {
    var vacances;
    var i = 0;
    var jourDebut=new Date("1998", "01", "01");
    var jourDebutString;
    var currentJour;
    var currentJourString;
    var currentDate = new Date();
    var dataSort = dataArray.sort(compare);
    dataSort.forEach(function (value) {
        i++;
        if(i==1) {
            jourDebut= stringToDate(value.Date);
            jourDebutString=value.Date;
        } else {
            if(value.Date != jourDebutString) {
                currentJour = stringToDate(value.Date);
                    currentJourString = value.Date;
                    var timeDifference = Math.abs(jourDebut.getTime() - currentJour.getTime());
                    var differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
                    if (differentDays >= 7) {
                        if (currentJour > jourDebut) {
                            if(jourDebut >= currentDate) {
                                vacances={debut: jourDebutString, fin: currentJourString};
                            }
                        }
                    }
                jourDebut = currentJour;
                jourDebutString = value.Date;
            }
        }
    });
    return vacances;
}

function compare(a,b) {
    var dateA = stringToDate(a.Date);
    var dateB = stringToDate(b.Date);
    if (dateA < dateB)
        return -1;
    if (dateA > dateB)
        return 1;
    return 0;
}

function stringToDate(date) {
    var datePartsA = date.split("/");
    var dateA = new Date("20" + datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
    return dateA;
}
