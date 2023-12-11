const sequelize = require("../connection");
const Role = require("../Models/role");

const rolesSeedData = require("../seeds/roleSeedsData.json");

const seedRoleData = async () => {
  await sequelize.sync({ force: true });

  const roles = await Role.bulkCreate(rolesSeedData);

  process.exit(0);
};

seedRoleData();
