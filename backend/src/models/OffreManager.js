const AbstractManager = require("./AbstractManager");

class OffreManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "offre" as configuration
    super({ table: "offre" });
  }

  // The C of CRUD - Create operation

  async create(offre) {
    // Execute the SQL INSERT query to add a new offre to the "offre" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title,img,prix,resumes,adresse,pro,category_id) values (?,?,?,?,?,?,?)`,
      [
        offre.title,
        offre.img,
        offre.prix,
        offre.resumes,
        offre.adresse,
        offre.pro,
        offre.category_id,
      ]
    );

    // Return the ID of the newly inserted offre
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific offre by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the offre
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all offres from the "offre" table
    const [rows] = await this.database.query(
      `SELECT o.*, c.category_type AS categorie FROM offre o JOIN categories c ON c.id = o.category_id;`
    );

    // Return the array of offres
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing offre

  async update(id, offre) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, img = ?, prix = ?, resumes = ?, adresse = ?, pro = ?, category_id = ? WHERE id = ?`,
      [
        offre.title,
        offre.img,
        offre.prix,
        offre.resumes,
        offre.adresse,
        offre.pro,
        offre.category_id,
        id,
      ]
    );
    return rows.affectedRows;
  }
  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an offre by its ID

  async delete(id) {
    // Execute the SQL SELECT query to retrieve a specific offre by its ID
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    // Return the first row of the result, which represents the offre
    return rows[0];
  }
}
module.exports = OffreManager;
