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

export const dirtybronze = {
  name: 'dirtybronze',
  baseLevel: true,
  ingredients: ['pyrite', 'pure ferrite'],
  _pyrite: 50,
  '_pure ferrite': 100,

  get pyrite() {
    return this._pyrite;
  },

  get 'pure ferrite'() {
    return this['_pure ferrite'];
  },

  set pyrite(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'pure ferrite'(amt) {
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

export const glass = {
  name: 'glass',
  baseLevel: true,
  ingredients: ['frost crystal'],
  '_frost crystal': 40,

  get 'frost crystal'() {
    return this['_frost crystal'];
  },

  set 'frost crystal'(amt) {
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

export const heatcapacitor = {
  name: 'heatcapacitor',
  baseLevel: true,
  ingredients: ['frost crystal', 'solanium'],
  '_frost crystal': 100,
  _solanium: 200,

  get 'frost crystal'() {
    return this['_frost crystal'];
  },

  get solanium() {
    return this['_solanium'];
  },

  set 'frost crystal'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  },

  set solanium(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const herox = {
  name: 'herox',
  baseLevel: true,
  ingredients: ['ammonia', 'ionised cobalt'],
  _ammonia: 50,
  '_ionised cobalt': 50,

  get ammonia() {
    return this['_ammonia'];
  },

  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  },

  set ammonia(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'ionised cobalt'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const lemmium = {
  name: 'lemmium',
  baseLevel: true,
  ingredients: ['uranium', 'pure ferrite'],
  _uranium: 50,
  '_pure ferrite': 100,

  get uranium() {
    return this._uranium;
  },

  get 'pure ferrite'() {
    return this['_pure ferrite'];
  },

  set uranium(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'pure ferrite'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const lubricant = {
  name: 'lubricant',
  baseLevel: true,
  ingredients: ['faecium', 'gamma root'],
  _faecium: 50,
  '_gamma root': 400,

  get faecium() {
    return this._faecium;
  },

  get 'gamma root'() {
    return this['_gamma root'];
  },

  set faecium(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'gamma root'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const magnogold = {
  name: 'magnogold',
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

export const polyfibre = {
  name: 'polyfibre',
  baseLevel: true,
  ingredients: ['star bulb', 'cactus flesh'],
  '_star bulb': 200,
  '_cactus flesh': 100,

  get 'star bulb'() {
    return this['_star bulb'];
  },

  get 'cactus flesh'() {
    return this['_cactus flesh'];
  },

  set 'star bulb'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  },

  set 'cactus flesh'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

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









export const circuitboard = {
  name: 'circuitboard',
  baseLevel: false,
  ingredients: ['heat capacitor', 'poly fibre'],
  '_heat capacitor': 1,
  '_poly fibre': 1,

  get 'heat capacitor'() {
    return this['_heat capacitor'];
  },

  get 'poly fibre'() {
    return this['_poly fibre'];
  },

  set 'heat capacitor'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'poly fibre'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const cryogenicchamber = {
  name: 'cryogenicchamber',
  baseLevel: false,
  ingredients: ['cryo pump', 'living glass'],
  '_cryo pump': 1,
  '_living glass': 1,
  
  get 'cryo pump'() {
    return this['_cryo pump'];
  },

  get 'living glass'() {
    return this['_living glass'];
  },

  set 'cryo pump'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'living glass'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 
}

export const cryopump = {
  name: 'cryopump',
  baseLevel: false,
  ingredients: ['hot ice', 'thermic condensate'],
  '_hot ice': 1,
  '_thermic condensate': 1,
  
  get 'hot ice'() {
    return this['_hot ice'];
  },

  get 'thermic condensate'() {
    return this['_thermic condensate'];
  },

  set 'hot ice'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'thermic condensate'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 
}

export const geodesite = {
  name: 'geodesite',
  baseLevel: false,
  ingredients: ['dirty bronze', 'herox', 'lemmium'],
  '_dirty bronze': 1,
  _herox: 1,
  _lemmium: 1,

  get 'dirty bronze'() {
    return this['_dirty bronze'];
  },

  get 'herox'() {
    return this['_herox'];
  },

  get lemmium() {
    return this._lemmium;
  },

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

export const hotice = {
  name: 'hotice',
  baseLevel: false,
  ingredients: ['enriched carbon', 'nitrogen salt'],
  '_enriched carbon': 1,
  '_nitrogen salt': 1,
  
  get 'enriched carbon'() {
    return this['_enriched carbon'];
  },

  get 'nitrogen salt'() {
    return this['_nitrogen salt'];
  },

  set 'enriched carbon'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'nitrogen salt'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 
}

export const iridesite = {
  name: 'iridesite',
  baseLevel: false,
  ingredients: ['aronium', 'magnogold', 'grantine'],
  _aronium: 1,
  _magnogold: 1,
  _grantine: 1,
  
  get aronium() {
    return this._aronium;
  },

  get magnogold() {
    return this._magnogold;
  },

  get grantine() {
    return this._grantine;
  },

  set aronium(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set magnogold(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set grantine(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 
}

export const livingglass = {
  name: 'livingglass',
  baseLevel: false,
  ingredients: ['lubricant', 'glass'],
  _lubricant: 1,
  _glass: 5,

  get lubricant() {
    return this._lubricant;
  },

  get glass() {
    return this._glass;
  },

  set lubricant(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set glass(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const quantumprocessor = {
  name: 'quantumprocessor',
  baseLevel: false,
  ingredients: ['circuit board', 'superconductor'],
  '_circuit board': 1,
  _superconductor: 1,

  get 'circuit board'() {
    return this['_circuit board'];
  },

  get superconductor() {
    return this._superconductor;
  },

  set 'circuit board'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set superconductor(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const semiconductor = {
  name: 'semiconductor',
  baseLevel: false,
  ingredients: ['thermic condensate', 'nitrogen salt'],
  _nitrogen: 250,
  '_condensed carbon': 50,

  get 'thermic condensate'() {
    return this['_thermic condensate'];
  },

  get 'nitrogen salt'() {
    return this['_nitrogen salt'];
  },

  set 'thermic condensate'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'condensed carbon'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const stasisdevice = {
  name: 'stasisdevice',
  baseLevel: false,
  ingredients: ['quantum processor', 'cryogenic chamber', 'iridesite'],
  '_quantum processor': 1,
  '_cryogenic chamber': 1,
  _iridesite: 1,

  get 'quantum processor'() {
    return this['_quantum processor'];
  },

  get 'cryogenic chamber'() {
    return this['_cryogenic chamber'];
  },

  get iridesite() {
    return this._iridesite;
  },

  set 'quantum processor'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set 'cryogenic chamber'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  },

  set iridesite(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}

export const superconductor = {
  name: 'superconductor',
  baseLevel: false,
  ingredients: ['enriched carbon', 'semiconductor'],
  '_enriched carbon': 1,
  _semiconductor: 1,

  get 'enriched carbon'() {
    return this['_enriched carbon'];
  },

  get semiconductor() {
    return this._semiconductor;
  },

  set 'enriched carbon'(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }, 

  set semiconductor(amt) {
    console.log("WARNING: NOT ALLOWED TO EDIT THE AMOUNT REQUIRED FOR A RECIPE");
  }
}