CREATE TABLE IF NOT EXISTS puzzles (
  id SERIAL PRIMARY KEY,
  fen TEXT NOT NULL UNIQUE,
  solution JSONB NOT NULL,
  difficulty INTEGER
);

INSERT INTO puzzles (fen, solution, difficulty)
VALUES
  (
    '6k1/5ppp/8/8/8/7Q/5PPP/6K1 w - - 0 1',
    '["h3c8"]',
    800
  ),
  (
    'r1bq2r1/b4pk1/p1pp1p2/1p2pP2/1P2P1PB/3P4/1PPQ2P1/R3K2R w - - 0 1',
    '["d2h6", "g7h6", "h4f6"]',
    1200
  ),
  (
    '2r3k1/p4p2/3Rp2p/1p2P1pK/8/1P4P1/P3Q2P/1q6 b - - 0 1',
    '["b1g6", "h5g4", "g6f5", "g4h5", "f5h3"]',
    1600
  )
ON CONFLICT (fen) DO NOTHING;
