export const nitrogensalt = {
  name: 'nitrogensalt',
  baseLevel: true,
  ingredients: ['nitrogen', 'condensed carbon'],
  _nitrogen: 250,
  '_condensed carbon': 50,

  get nitrogen() {
    return this._nitrogen;
  },

  get 'condensed carbon'() {
    return this['_condensed carbon'];
  },

  set nitrogen(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'condensed carbon'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
};


export const thermiccondensate = {
  name: 'thermiccondensate',
  baseLevel: true,
  ingredients: ['sulphurine', 'condensed carbon'],
  _sulphurine: 250,
  '_condensed carbon': 50,

  get sulphurine() {
    return this._sulphurine;
  },

  get 'condensed carbon'() {
    return this['_condensed carbon'];
  },

  set sulphurine(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'condensed carbon'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const enrichedcarbon = {
  name: 'enrichedcarbon',
  baseLevel: true,
  ingredients: ['radon', 'condensed carbon'],
  _radon: 250,
  '_condensed carbon': 50,

  get radon() {
    return this._radon;
  },

  get 'condensed carbon'() {
    return this['_condensed carbon'];
  },

  set radon(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'condensed carbon'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const aronium = {
  name: 'aronium',
  baseLevel: true,
  ingredients: ['paraffinium', 'ionised cobalt'],
  _paraffinium: 50,
  '_ionised cobalt': 50,

  get paraffinium() {
    return this._paraffinium;
  },

  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  },

  set paraffinium(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'ionised cobalt'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const magnogold = {
  name: 'magno-gold',
  baseLevel: true,
  ingredients: ['phosphorus', 'ionised cobalt'],
  _phosphorus: 50,
  '_ionised cobalt': 50,

  get phosphorus() {
    return this._phosphorus;
  },

  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  },

  set phosphorus(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'ionised cobalt'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const grantine = {
  name: 'grantine',
  baseLevel: true,
  ingredients: ['dioxite', 'ionised cobalt'],
  _dioxite: 50,
  '_ionised cobalt': 50,

  get dioxite() {
    return this._dioxite;
  },

  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  },

  set dioxite(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'ionised cobalt'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}






export const geodesite = {
  name: 'geodesite',
  baseLevel: false,
  ingredients: ['dirty bronze', 'herox', 'lemmium'],
  '_dirty bronze': 1,
  _herox: 1,
  _lemmium: 1,

  

  set herox(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'dirty bronze'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  },

  set lemmium(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}