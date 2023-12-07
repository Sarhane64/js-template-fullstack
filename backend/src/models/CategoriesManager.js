const AbstractManager = require("./AbstractManager");

class categoriesManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "categorie" as configuration
    super({ table: "categories" });
  }

  // The C of CRUD - Create operation

  async create(categorie) {
    // Execute the SQL INSERT query to add a new categorie to the "categorie" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [categorie.title]
    );

    // Return the ID of the newly inserted categorie
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific categorie by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the categorie
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "categorie" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of categories
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing categorie

  // async update(categorie) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an categorie by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = categoriesManager;
