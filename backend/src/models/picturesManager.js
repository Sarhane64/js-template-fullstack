const AbstractManager = require("./AbstractManager");

class PicturesManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "picture" as configuration
    super({ table: "picture" });
  }

  async create(picture) {
    const [result] = await this.database.query(
      `insert into ${this.table} (img) values (?)`,
      [picture.img]
    );

    // Return the ID of the newly inserted picture
    return result.insertId;
  }
}
module.exports = PicturesManager;
