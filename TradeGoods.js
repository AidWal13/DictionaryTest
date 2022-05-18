//THERMIC CONDENSATE OBJECT
export const thermiccondensate = {
  name: 'thermiccondensate',
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
  },
};

//NITROGEN SALT OBJECT
export const nitrogensalt = {
  name: 'nitrogensalt',
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
  },
};