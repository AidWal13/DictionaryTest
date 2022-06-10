export class Inventory {
  
  constructor() {
    this['_ammonia'] = 0; //GS done
    this['_cactus flesh'] = 0;
    this['_condensed carbon'] = 0; //GS done
    this['_dioxite'] = 0; //GS done
    this['_faecium'] = 0; //GS done
    this['_frost crystal'] = 0; //GS done
    this['_gamma root'] = 0; //GS done
    this['_ionised cobalt'] = 0; //GS done
    this['_nitrogen'] = 0; //GS done
    this['_paraffinium'] = 0; //GS done
    this['_phosphorus'] = 0; //GS done
    this['_pure ferrite'] = 0; //GS done
    this['_pyrite'] = 0; //GS done
    this['_radon'] = 0; //GS done
    this['_solanium'] = 0; //GS done
    this['_star bulb'] = 0;
    this["_sulphurine"] = 0; //GS done
    this['_uranium'] = 0; //GS done
  }
  
//Getters & Setters for ingredients

  //AMMONIA-------------------------------------------
  get ammonia() {
    return this._ammonia;
  }
  
  set 'ammonia'(amt) {
    if (typeof amt === 'number'){
      this["_ammonia"] += amt;
      if (this["_ammonia"] <= 0) {
        this["_ammonia"] = 0;
      }
    } else {
      console.log("failure to assign ammonia.  Check input type");
    }
  }

  //CONDENSED CARBON-------------------------------------------
  get 'condensed carbon'() {
    return this["_condensed carbon"];
  }
  
  set 'condensed carbon'(amt) {
    if (typeof amt === 'number'){
      this["_condensed carbon"] += amt;
      if (this["_condensed carbon"] <= 0) {
        this["_condensed carbon"] = 0;
      }
    } else {
      console.log("failure to assign condensed carbon.  Check input type");
    }
  }

  //CACTUS FLESH-------------------------------------------
  get 'cactus flesh'() {
    return this["_cactus flesh"];
  }
  
  set 'cactus flesh'(amt) {
    if (typeof amt === 'number'){
      this["_cactus flesh"] += amt;
      if (this["_cactus flesh"] <= 0) {
        this["_cactus flesh"] = 0;
      }
    } else {
      console.log("failure to assign cactus flesh.  Check input type");
    }
  }

  //DIOXITE-------------------------------------------
  get dioxite() {
    return this._dioxite;
  }
  
  set dioxite(amt) {
    if (typeof amt === 'number'){
      this["_dioxite"] += amt;
      if (this["_dioxite"] <= 0) {
        this["_dioxite"] = 0;
      }
    } else {
      console.log("failure to assign dioxite.  Check input type");
    }
  }

  //FAECIUM-------------------------------------------
  get faecium() {
    return this._faecium;
  }
  
  set faecium(amt) {
    if (typeof amt === 'number'){
      this["_faecium"] += amt;
      if (this["_faecium"] <= 0) {
        this["_faecium"] = 0;
      }
    } else {
      console.log("failure to assign faecium.  Check input type");
    }
  }

  //FROST CRYSTAL-------------------------------------------
  get 'frost crystal'() {
    return this['_frost crystal'];
  }
  
  set 'frost crystal'(amt) {
    if (typeof amt === 'number'){
      this["_frost crystal"] += amt;
      if (this["_frost crystal"] <= 0) {
        this["_frost crystal"] = 0;
      }
    } else {
      console.log("failure to assign frost crystal.  Check input type");
    }
  }

  //GAMMA ROOT-------------------------------------------
  get 'gamma root'() {
    return this['_gamma root'];
  }
  
  set 'gamma root'(amt) {
    if (typeof amt === 'number'){
      this["_gamma root"] += amt;
      if (this["_gamma root"] <= 0) {
        this["_gamma root"] = 0;
      }
    } else {
      console.log("failure to assign gamma root.  Check input type");
    }
  }

  //IONISED COBALT-------------------------------------------
  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  }
  
  set 'ionised cobalt'(amt) {
    if (typeof amt === 'number'){
      this["_ionised cobalt"] += amt;
      if (this["_ionised cobalt"] <= 0) {
        this["_ionised cobalt"] = 0;
      }
    } else {
      console.log("failure to assign ionised cobalt.  Check input type");
    }
  }

  //NITROGEN-------------------------------------------
  get nitrogen() {
    return this['_nitrogen'];
  }
  
  set nitrogen(amt) {
    if (typeof amt === 'number'){
      this._nitrogen += amt;
      if (this._nitrogen <= 0) {
        this._nitrogen = 0;
      }
    } else {
      console.log("Failure to assign nitrogen.  Check input type");
    }
  }

  //PHOSPHORUS-------------------------------------------
  get paraffinium() {
    return this['_paraffinium'];
  }
  
  set paraffinium(amt) {
    if (typeof amt === 'number'){
      this._paraffinium += amt;
      if (this._paraffinium <= 0) {
        this._paraffinium = 0;
      }
    } else {
      console.log("Failure to assign paraffinium.  Check input type");
    }
  }

  //PHOSPHORUS-------------------------------------------
  get phosphorus() {
    return this['_phosphorus'];
  }
  
  set phosphorus(amt) {
    if (typeof amt === 'number'){
      this._phosphorus += amt;
      if (this._phosphorus <= 0) {
        this._phosphorus = 0;
      }
    } else {
      console.log("Failure to assign phosphorus.  Check input type");
    }
  }

  //PURE FERRITE-------------------------------------------
  get 'pure ferrite'() {
    return this['_pure ferrite'];
  }
  
  set 'pure ferrite'(amt) {
    if (typeof amt === 'number'){
      this["_pure ferrite"] += amt;
      if (this["_pure ferrite"] <= 0) {
        this["_pure ferrite"] = 0;
      }
    } else {
      console.log("failure to assign pure ferrite.  Check input type");
    }
  }

  //PYRITE-------------------------------------------
  get pyrite() {
    return this['_pyrite'];
  }
  
  set pyrite(amt) {
    if (typeof amt === 'number'){
      this._pyrite += amt;
      if (this._pyrite <= 0) {
        this._pyrite = 0;
      }
    } else {
      console.log("Failure to assign pyrite.  Check input type");
    }
  }

  //RADON-------------------------------------------
  get radon() {
    return this['_radon'];
  }
  
  set radon(amt) {
    if (typeof amt === 'number'){
      this._radon += amt;
      if (this._radon <= 0) {
        this._radon = 0;
      }
    } else {
      console.log("Failure to assign radon.  Check input type");
    }
  }

  //SOLANIUM-------------------------------------------
  get solanium() {
    return this['_solanium'];
  }
  
  set solanium(amt) {
    if (typeof amt === 'number'){
      this._solanium += amt;
      if (this._solanium <= 0) {
        this._solanium = 0;
      }
    } else {
      console.log("Failure to assign solanium.  Check input type");
    }
  }

  //STAR BULB-------------------------------------------
  get 'star bulb'() {
    return this['_star bulb'];
  }
  
  set 'star bulb'(amt) {
    if (typeof amt === 'number'){
      this["_star bulb"] += amt;
      if (this["_star bulb"] <= 0) {
        this["_star bulb"] = 0;
      }
    } else {
      console.log("failure to assign star bulb.  Check input type");
    }
  }

  //SULPHURINE-------------------------------------------
  get sulphurine() {
    return this['_sulphurine'];
  }
  
  set sulphurine(amt) {
    if (typeof amt === 'number'){
      this._sulphurine += amt;
      if (this._sulphurine <= 0) {
        this._sulphurine = 0;
      }
    } else {
      console.log("Failure to assign sulphurine.  Check input type");
    }
  }

  //URANIUM-------------------------------------------
  get uranium() {
    return this['_uranium'];
  }
  
  set uranium(amt) {
    if (typeof amt === 'number'){
      this._uranium += amt;
      if (this._uranium <= 0) {
        this._uranium = 0;
      }
    } else {
      console.log("Failure to assign uranium.  Check input type");
    }
  }
}


export class ShoppingListInventory extends Inventory { 
  constructor() {
    super();
    this._relevantIngrs = [];
  }

  get relevantIngrs() {
    return this._relevantIngrs;
  }

  updateRelevantIngrs(tradegoodListObject, tradegood) {

    tradegood = tradegood.replace(/\s/g, '');

    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) { 
      
      let ingrList = tradegoodListObject[tradegood].ingredients;
      ingrList.forEach((ingr) => {
        if (!this.relevantIngrs.includes(ingr)) {
          this.relevantIngrs.push(ingr);
        }
      });

    } else {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        this.updateRelevantIngrs(tradegoodListObject, ingr);
      });

    }

  }
  
  addGoodToInv(tradegoodListObject, tradegood) {

    tradegood = tradegood.replace(/\s/g, '');
    console.log(` trade good ${tradegood}'s base level is ${tradegoodListObject[tradegood].baseLevel}`);

    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        //console.log(`this[ingr] or ${ingr} is ${this[ingr]}`);

        //ACTUAL ASSIGNMENT OCCURS HERE
        //Because of how the setters work, this HAS to be =, not +=, to work properly
        this[ingr] = tradegoodListObject[tradegood][ingr];

        //console.log(`this[ingr] or ${ingr} following assignment is ${this[ingr]}`);
      });

      return;

    } 
    else 
    {
      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        this.addGoodToInv(tradegoodListObject, ingr);
      });
    }
  }
}





export class UserInventory extends Inventory {
  constructor() {
    super()
  }
  
  collectInputs() {
    let relevantInputs = document.querySelectorAll("#divOfInputs .ingrInput");

    relevantInputs.forEach((input) => {
      if ( input.value === "" ) {
        console.log(`Need to input what you have of ${input.name}`)
      } else {
      let inputtedValue = parseInt(input.value);
      let ingr = input.name;
      this[ingr] = inputtedValue;
      }
    });
    console.log(this);
  }
}





export class RemainingInventory extends Inventory {
  constructor() {
    super()
    this._relevantIngrs = [];
  }

  get relevantIngrs() {
    return this._relevantIngrs;
  }

  //AMMONIA-------------------------------------------
  get ammonia() {
    return this._ammonia;
  }

  set 'ammonia'(amt) {
    if (typeof amt === 'number'){
      this["_ammonia"] += amt;
    } else {
      console.log("failure to assign ammonia.  Check input type");
    }
  }

  //CONDENSED CARBON-------------------------------------------
  get 'condensed carbon'() {
    return this["_condensed carbon"];
  }

  set 'condensed carbon'(amt) {
    if (typeof amt === 'number'){
      this["_condensed carbon"] += amt;
    } else {
      console.log("failure to assign condensed carbon.  Check input type");
    }
  }

  //CACTUS FLESH-------------------------------------------
  get 'cactus flesh'() {
    return this["_cactus flesh"];
  }

  set 'cactus flesh'(amt) {
    if (typeof amt === 'number'){
      this["_cactus flesh"] += amt;
    } else {
      console.log("failure to assign cactus flesh.  Check input type");
    }
  }

  //DIOXITE-------------------------------------------
  get dioxite() {
    return this._dioxite;
  }

  set dioxite(amt) {
    if (typeof amt === 'number'){
      this["_dioxite"] += amt;
    } else {
      console.log("failure to assign dioxite.  Check input type");
    }
  }

  //FAECIUM-------------------------------------------
  get faecium() {
    return this._faecium;
  }

  set faecium(amt) {
    if (typeof amt === 'number'){
      this["_faecium"] += amt;
    } else {
      console.log("failure to assign faecium.  Check input type");
    }
  }

  //FROST CRYSTAL-------------------------------------------
  get 'frost crystal'() {
    return this['_frost crystal'];
  }

  set 'frost crystal'(amt) {
    if (typeof amt === 'number'){
      this["_frost crystal"] += amt;
    } else {
      console.log("failure to assign frost crystal.  Check input type");
    }
  }

  //GAMMA ROOT-------------------------------------------
  get 'gamma root'() {
    return this['_gamma root'];
  }

  set 'gamma root'(amt) {
    if (typeof amt === 'number'){
      this["_gamma root"] += amt;
    } else {
      console.log("failure to assign gamma root.  Check input type");
    }
  }

  //IONISED COBALT-------------------------------------------
  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  }

  set 'ionised cobalt'(amt) {
    if (typeof amt === 'number'){
      this["_ionised cobalt"] += amt;
    } else {
      console.log("failure to assign ionised cobalt.  Check input type");
    }
  }

  //NITROGEN-------------------------------------------
  get nitrogen() {
    return this['_nitrogen'];
  }

  set nitrogen(amt) {
    if (typeof amt === 'number'){
      this._nitrogen += amt;
    } else {
      console.log("Failure to assign nitrogen.  Check input type");
    }
  }

  
  //PHOSPHORUS-------------------------------------------
  get paraffinium() {
    return this['_paraffinium'];
  }

  set paraffinium(amt) {
    if (typeof amt === 'number'){
      this._paraffinium += amt;
    } else {
      console.log("Failure to assign paraffinium.  Check input type");
    }
  }

  //PHOSPHORUS-------------------------------------------
  get phosphorus() {
    return this['_phosphorus'];
  }

  set phosphorus(amt) {
    if (typeof amt === 'number'){
      this._phosphorus += amt;
    } else {
      console.log("Failure to assign phosphorus.  Check input type");
    }
  }

  //PURE FERRITE-------------------------------------------
  get 'pure ferrite'() {
    return this['_pure ferrite'];
  }

  set 'pure ferrite'(amt) {
    if (typeof amt === 'number'){
      this["_pure ferrite"] += amt;
    } else {
      console.log("failure to assign pure ferrite.  Check input type");
    }
  }

  //PYRITE-------------------------------------------
  get pyrite() {
    return this['_pyrite'];
  }

  set pyrite(amt) {
    if (typeof amt === 'number'){
      this._pyrite += amt;
    } else {
      console.log("Failure to assign pyrite.  Check input type");
    }
  }

  //RADON-------------------------------------------
  get radon() {
    return this['_radon'];
  }

  set radon(amt) {
    if (typeof amt === 'number'){
      this._radon += amt;
    } else {
      console.log("Failure to assign radon.  Check input type");
    }
  }

  //SOLANIUM-------------------------------------------
  get solanium() {
    return this['_solanium'];
  }

  set solanium(amt) {
    if (typeof amt === 'number'){
      this._solanium += amt;
    } else {
      console.log("Failure to assign solanium.  Check input type");
    }
  }

  //STAR BULB-------------------------------------------
  get 'star bulb'() {
    return this['_star bulb'];
  }

  set 'star bulb'(amt) {
    if (typeof amt === 'number'){
      this["_star bulb"] += amt;
    } else {
      console.log("failure to assign star bulb.  Check input type");
    }
  }

  //SULPHURINE-------------------------------------------
  get sulphurine() {
    return this['_sulphurine'];
  }

  set sulphurine(amt) {
    if (typeof amt === 'number'){
      this._sulphurine += amt;
    } else {
      console.log("Failure to assign sulphurine.  Check input type");
    }
  }

  //URANIUM-------------------------------------------
  get uranium() {
    return this['_uranium'];
  }

  set uranium(amt) {
    if (typeof amt === 'number'){
      this._uranium += amt;
    } else {
      console.log("Failure to assign uranium.  Check input type");
    }
  }

  updateRelevantIngrs(neededinv) {
    neededinv.relevantIngrs.forEach((ingr) => {
      this._relevantIngrs.push(ingr);
    })
  }

  updateWhatsRemaining(userinv, neededinv) {
    this.relevantIngrs.forEach((ingredient) => {
      this[ingredient] = userinv[ingredient] - neededinv[ingredient];
    });
  }

  createResultElements(location, tradegoodListObject, tradegood) {
    this.relevantIngrs.forEach((ingredient) => {

      let ingrResultEl = document.createElement('h3');

      if (this[ingredient] >= 0) {
        ingrResultEl.innerText = `You have enough ${ingredient}.`;
      } else {
        ingrResultEl.innerHTML = `You do not have enough ${ingredient}. You need ${Math.abs(this[ingredient])} more. <a target="_blank" href="https://nomanssky.fandom.com/wiki/${tradegoodListObject[tradegood].id}#Source">Sources of ${ingredient}</a>`;
      }

      location.appendChild(ingrResultEl)
      location.appendChild(document.createElement("br"));

    });
  }
}