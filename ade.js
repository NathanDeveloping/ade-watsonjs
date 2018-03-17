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

function getExamen(formation){
    var tableau=[];
    data.forEach(function (value) {
        if(value.Formation==formation){
            temp=value.Intitule.split(' ');
            //console.log(temp);
            for (var i = 0; i < temp.length; i++) {
                if(temp[i]=="Examen"){
                    tableau.push(value.Intitule);
                }
            }

        }
    });
    return tableau;
}
function getDureeDate(formation, date){
    var duree=0;
    data.forEach(function (value) {
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
    data.forEach(function (value) {
        if(value.Formation==formation){
            if(value.Enseignant==prof){
                tableau.push(value.Intitule);
            }
        }
    });
    return tableau;
}

function getSalle(formation,date,heure){
    var salle;
    data.forEach(function (value) {
        if(value.Formation==formation){
            if(value.Date==date){
                if(value.Heure==heure){
                    salle=value.Lieu;
                }

            }
        }
    });
    return salle;
}
var pd =getSalle('Master Informatique','12/03/18','16:15');
console.log(pd);