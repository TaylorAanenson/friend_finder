DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT,
    name TEXT NOT NULL,
    pic TEXT NOT NULL,
    q1 INT NOT NULL,
    q2 INT NOT NULL,
    q3 INT NOT NULL,
    q4 INT NOT NULL,
    q5 INT NOT NULL,
    q6 INT NOT NULL,
    q7 INT NOT NULL,
    q8 INT NOT NULL,
    q9 INT NOT NULL,
    q10 INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE matches (
    id INT NOT NULL AUTO_INCREMENT,
    match_1_name TEXT NOT NULL,
    match_2_name TEXT NOT NULL,
    match_1_pic TEXT NOT NULL,
    match_2_pic TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO friends (name,pic,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
VALUES ('Taylor Aanenson','https://avatars0.githubusercontent.com/u/36938288?s=460&v=4',5,5,4,1,5,5,4,1,5,5);

-- INSERT INTO friends (name,scores) VALUES (?,?)

-- UPDATE friends
-- SET pic='https://i.pinimg.com/originals/dd/77/ca/dd77ca006cb1fd822b5c5db467bce093.png'
-- WHERE id='5';

-- UPDATE matches
-- SET match_1_pic='https://i.pinimg.com/originals/dd/77/ca/dd77ca006cb1fd822b5c5db467bce093.png'
-- WHERE id='4';

-- DELETE FROM friends
-- WHERE id="9";

-- DELETE FROM matches
-- WHERE id="8";

-- SELECT g1.name, g2.name, abs(g2.q1 - g1.q1) AS a1, abs(g2.q2 - g1.q2) AS a2, abs(g2.q3 - g1.q3) AS a3, abs(g2.q4 - g1.q4) AS a4, abs(g2.q5 - g1.q5) AS a5, abs(g2.q6 - g1.q6) AS a6, abs(g2.q7 - g1.q7) AS a7, abs(g2.q8 - g1.q8) AS a8, abs(g2.q9 - g1.q9) AS a9, abs(g2.q10 - g1.q10) AS a10, (abs(g2.q1 - g1.q1)+abs(g2.q2 - g1.q2)+abs(g2.q3 - g1.q3)+abs(g2.q4 - g1.q4)+abs(g2.q5 - g1.q5)+abs(g2.q6 - g1.q6)+abs(g2.q7 - g1.q7)+abs(g2.q8 - g1.q8)+abs(g2.q9 - g1.q9)+abs(g2.q10 - g1.q10)) AS total
-- FROM friends g1
-- CROSS JOIN friends g2
-- WHERE g1.id != g2.id
-- AND g1.name = 'wade wilson'
-- ORDER BY total ASC;

-- SELECT g1.name, g2.name, g1.pic, g2.pic, abs(g2.q1 - g1.q1) AS a1, abs(g2.q2 - g1.q2) AS a2, abs(g2.q3 - g1.q3) AS a3, abs(g2.q4 - g1.q4) AS a4, abs(g2.q5 - g1.q5) AS a5, abs(g2.q6 - g1.q6) AS a6, abs(g2.q7 - g1.q7) AS a7, abs(g2.q8 - g1.q8) AS a8, abs(g2.q9 - g1.q9) AS a9, abs(g2.q10 - g1.q10) AS a10, (abs(g2.q1 - g1.q1)+abs(g2.q2 - g1.q2)+abs(g2.q3 - g1.q3)+abs(g2.q4 - g1.q4)+abs(g2.q5 - g1.q5)+abs(g2.q6 - g1.q6)+abs(g2.q7 - g1.q7)+abs(g2.q8 - g1.q8)+abs(g2.q9 - g1.q9)+abs(g2.q10 - g1.q10)) AS total
-- FROM friends g1
-- CROSS JOIN friends g2
-- WHERE g1.id != g2.id
-- AND g1.name = 'taylor aanenson'
-- ORDER BY total ASC LIMIT 1;

-- 1 | Taylor Aanenson     5 5 4 1 5 5 4 1 5 5
-- 2 | Rhenzie Anne Franco 5 5 5 4 2 5 5 4 4 1
-- 3 | Audrey Aanenson     3 4 5 3 5 1 5 5 1 5
-- 5 | Doc Brown           5 1 3 5 5 5 1 1 1 1
-- 6 | Timmy Turner        5 5 1 5 2 1 5 5 5 1
-- 7 | Jimmy Neutron       5 1 1 5 1 3 1 3 3 1
-- 8 | Mary Hunt           5 4 5 1 2 3 3 2 4 4
-- 9 | Wade Wilson         5 1 1 1 5 1 5 5 5 5 

-- SELECT id, name, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
-- FROM friends;

-- SELECT id, match_1_name, match_2_name
-- FROM matches;