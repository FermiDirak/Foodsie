-- ************************************** askinternets db

DROP TABLE answer;

DROP TABLE question;

DROP TABLE user;


-- ************************************** user

CREATE TABLE user(
  id         INT unsigned NOT NULL AUTO_INCREMENT ,
  name       VARCHAR(16) NOT NULL ,
  created_at DATE NOT NULL ,

  PRIMARY KEY (id)
);


-- ************************************** question

CREATE TABLE question(
  id         INT unsigned NOT NULL AUTO_INCREMENT ,
  content    VARCHAR(2000) NOT NULL ,
  user_id    INT unsigned NOT NULL ,
  likes      INT unsigned zerofill NOT NULL ,
  created_at DATE NOT NULL ,

  PRIMARY KEY (id),

  FOREIGN KEY (user_id) REFERENCES user(id)
);


-- ************************************** answer

CREATE TABLE answer(
  id          INT unsigned NOT NULL AUTO_INCREMENT ,
  content     VARCHAR(2000) NOT NULL ,
  likes       INT unsigned zerofill NOT NULL ,
  user_id     INT unsigned ,
  question_id INT unsigned NOT NULL ,
  created_at  DATE NOT NULL ,

  PRIMARY KEY (id),

  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (question_id) REFERENCES question(id)
);
