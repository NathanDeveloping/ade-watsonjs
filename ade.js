var data = require('./convertcsv.json');

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