function spaceshipCrafting() {
    let titaniumCoreElement = document.getElementById('titaniumCoreFound').value;
    let aluminiumCoreElement = document.getElementById('aluminiumCoreFound').value;
    let magnesiumCoreElement = document.getElementById('magnesiumCoreFound').value;
    let carbonCoreElement = document.getElementById('carbonCoreFound').value;
    let lossesPercentElement = document.getElementById('lossesPercent').value;

    let availableBarsElementOutput = document.querySelector('#availableBars p');
    let builtSpaceshipsElementOutput = document.querySelector('#builtSpaceships p');

    let theUndefinedShipCount = 0;
    let nullMasterShipCount = 0;
    let jsonCrewShipCount = 0;
    let falseFleetShipCount = 0;

    let losesPercent = (lossesPercentElement / 4) / 100;
    let titaniumCoresLeft = titaniumCoreElement - Math.round(titaniumCoreElement * losesPercent);
    let aluminumCoresLeft = aluminiumCoreElement - Math.round(aluminiumCoreElement * losesPercent);
    let magnesiumCoresLeft = magnesiumCoreElement - Math.round(magnesiumCoreElement * losesPercent);
    let carbonCoresLeft = carbonCoreElement - Math.round(carbonCoreElement * losesPercent);

    let titaniumBar = Math.round(titaniumCoresLeft / 25);
    let aluminiumBar = Math.round(aluminumCoresLeft / 50);
    let magnesiumBar = Math.round(magnesiumCoresLeft / 75);
    let carbonBar = Math.round(carbonCoresLeft / 100);

    let theUndefinedShipMaterials = {
        titaniumBar: 7,
        aluminiumBar: 9,
        magnesiumBar: 7,
        carbonBar: 7
    };

    let nullMasterShip = {
        titaniumBar: 5,
        aluminiumBar: 7,
        magnesiumBar: 7,
        carbonBar: 5
    };

    let jsonCrewShip = {
        titaniumBar: 3,
        aluminiumBar: 5,
        magnesiumBar: 5,
        carbonBar: 2
    };

    let falseFleetShip = {
        titaniumBar: 2,
        aluminiumBar: 2,
        magnesiumBar: 3,
        carbonBar: 1
    };

    while (true) {
        if (titaniumBar >= theUndefinedShipMaterials.titaniumBar
            && aluminiumBar >= theUndefinedShipMaterials.aluminiumBar
            && magnesiumBar >= theUndefinedShipMaterials.magnesiumBar
            && carbonBar >= theUndefinedShipMaterials.carbonBar) {

            theUndefinedShipCount++;
            titaniumBar -= theUndefinedShipMaterials.titaniumBar;
            aluminiumBar -= theUndefinedShipMaterials.aluminiumBar;
            magnesiumBar -= theUndefinedShipMaterials.magnesiumBar;
            carbonBar -= theUndefinedShipMaterials.carbonBar;

        } if (titaniumBar >= nullMasterShip.titaniumBar
            && aluminiumBar >= nullMasterShip.aluminiumBar
            && magnesiumBar >= nullMasterShip.magnesiumBar
            && carbonBar >= nullMasterShip.carbonBar) {

            nullMasterShipCount++;
            titaniumBar -= nullMasterShip.titaniumBar;
            aluminiumBar -= nullMasterShip.aluminiumBar;
            magnesiumBar -= nullMasterShip.magnesiumBar;
            carbonBar -= nullMasterShip.carbonBar;

        } if (titaniumBar >= jsonCrewShip.titaniumBar
            && aluminiumBar >= jsonCrewShip.aluminiumBar
            && magnesiumBar >= jsonCrewShip.magnesiumBar
            && carbonBar >= jsonCrewShip.carbonBar) {

            jsonCrewShipCount++;
            titaniumBar -= jsonCrewShip.titaniumBar;
            aluminiumBar -= jsonCrewShip.aluminiumBar;
            magnesiumBar -= jsonCrewShip.magnesiumBar;
            carbonBar -= jsonCrewShip.carbonBar;

        } if (titaniumBar >= falseFleetShip.titaniumBar
            && aluminiumBar >= falseFleetShip.aluminiumBar
            && magnesiumBar >= falseFleetShip.magnesiumBar
            && carbonBar >= falseFleetShip.carbonBar) {

            falseFleetShipCount++;
            titaniumBar -= falseFleetShip.titaniumBar;
            aluminiumBar -= falseFleetShip.aluminiumBar;
            magnesiumBar -= falseFleetShip.magnesiumBar;
            carbonBar -= falseFleetShip.carbonBar;

        }
        else{
            break;
        }
    }

    let contentToPrint = [];

    if (theUndefinedShipCount > 0){
        contentToPrint.push(`${theUndefinedShipCount} THE-UNDEFINED-SHIP`);
    }
    if(nullMasterShipCount > 0){
        contentToPrint.push(`${nullMasterShipCount} NULL-MASTER`);
    }
    if (jsonCrewShipCount > 0) {
        contentToPrint.push(`${jsonCrewShipCount} JSON-CREW`);
    }
    if (falseFleetShipCount > 0){
        contentToPrint.push(`${falseFleetShipCount} FALSE-FLEET`);
    }

    builtSpaceshipsElementOutput.textContent = contentToPrint.join(', ');
    availableBarsElementOutput.textContent = `${titaniumBar} titanium bars, ${aluminiumBar} aluminum bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`;
}