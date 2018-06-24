let mysql = require('mysql');
let faker = require('faker');

let connection = mysql.createConnection({
  database: 'askinternets',
  host: 'localhost',
  user: 'student',
  password: 'student',
});

connection.connect();

// add 10000 random users

for (let i = 0; i < 1000; ++i) {
  let username = faker.internet.userName().substr(0, 15);

  let insert_user = `
    INSERT INTO user (name, created_at) VALUES
    (${connection.escape(username)}, NOW());
  `;

  connection.query(insert_user, (error, results, fields) => {
    if (error) {
      throw error;
    }
  });

  for (let j = 0; j < 10; ++j) {
    let question = (
      Math.random() > 0.5 ? faker.lorem.sentence() : faker.lorem.sentences()
    ).substr(0, 2000);
    let question_likes = Math.floor(Math.random() * 3000);
    let created_at = faker.date.recent(20).toISOString().substr(0, 10);

    let insert_question = `
      INSERT INTO question (content, user_id, likes, created_at) VALUES
      (
        ${connection.escape(question)},
        ${i},
        ${connection.escape(question_likes)},
        ${connection.escape(created_at)}
      );
    `;

    connection.query(insert_question, (error, results, fields) => {
      if (error) {
        throw error;
      }
    });
  }

}