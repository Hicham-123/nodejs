import Succursale from "./Succursale.js";
import User from "./User.js";
import Role from "./Role.js";
import Voiture from "./Voiture.js";
import Prix_Location from "./Prix_Location.js";
import Type_Voiture from "./Type_Voiture.js";
import Location from "./Location.js";
import Etat_Location from "./Etat_Location.js";
import Problem_Location from "./Problem_Location.js";

//Les relations
User.belongsToMany(Role,{through:'userrole',foreignKey: {
    name: 'Userid',
    allowNull: false
  }})
Role.belongsToMany(User,{through:'userrole',foreignKey: {
    name: 'Roleid',
    allowNull: false
  }})

Voiture.belongsTo(Type_Voiture, { foreignKey: 'type_voiture', as: 'type'});
Voiture.belongsTo(Succursale, { foreignKey: 'succursale', as: 'succ'});
Voiture.belongsTo(Prix_Location, { foreignKey: 'prix_location', as: 'prix'});

Location.belongsTo(Voiture, { foreignKey: 'id_voiture', as: 'Voiture'});
Location.belongsTo(User, { foreignKey: 'id_user', as: 'User'});
Location.belongsTo(Etat_Location,{ foreignKey: 'etat_location', as: 'Etat_Location'});
Location.belongsToMany(Problem_Location, { through: 'Location_Problem' });
Location.belongsTo(Succursale, { foreignKey: 'succursale_reture', as: 'Succursale', allowNull: true});

/*
Etat_Location.create({ nom:"en attente" });
Etat_Location.create({ nom:"confirm" });
Etat_Location.create({ nom:"annule" });
Etat_Location.create({ nom:"problem" });
Etat_Location.create({ nom:"fini" });
*/

export {Succursale, User, Role,Voiture,Prix_Location,Type_Voiture,Location,Etat_Location,Problem_Location}