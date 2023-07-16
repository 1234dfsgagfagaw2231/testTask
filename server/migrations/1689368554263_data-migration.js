exports.up = (pgm) => {
    pgm.sql(`
    INSERT INTO datasets (id, name, coordinate, labels, createdAt, updatedAt) VALUES
    ('1','Entity1', '{-5, 10}', '{"labelA", "labelB", "labelE"}', NOW(), NOW()),
    ('2','Entity2', '{3, 6}', '{"labelC", "labelD"}', NOW(), NOW()),
    ('3','Entity3', '{4, -1}', '{"labelA", "labelC"}', NOW(), NOW());
  `);
};
