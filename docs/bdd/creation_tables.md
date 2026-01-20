```sql
-- =====================================================
-- CHESSBATTLE DATABASE SCHEMA
-- PostgreSQL
-- =====================================================

-- =========================
-- USERS
-- =========================
CREATE TABLE IF NOT EXISTS users (
  id                     SERIAL PRIMARY KEY,
  email                  TEXT NOT NULL UNIQUE,
  password               TEXT NOT NULL,
  pseudo                 TEXT NOT NULL UNIQUE,
  avatar                 BYTEA,
  banner                 TEXT,
  emblem                 TEXT,
  trophy                 INTEGER NOT NULL DEFAULT 0,
  nbgame                 INTEGER NOT NULL DEFAULT 0,
  nbwin                  INTEGER NOT NULL DEFAULT 0,
  nblose                 INTEGER NOT NULL DEFAULT 0,
  nbdraw                 INTEGER NOT NULL DEFAULT 0,
  bio                    TEXT,
  joined_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  role                   TEXT NOT NULL DEFAULT 'user',
  is_active              BOOLEAN NOT NULL DEFAULT TRUE,
  nbreport               INTEGER NOT NULL DEFAULT 0,
  is_banned              BOOLEAN NOT NULL DEFAULT FALSE,
  ban_reason             TEXT,
  last_seen              TIMESTAMPTZ,
  reset_password_token   TEXT,
  reset_password_expires TIMESTAMPTZ,
  ban_label              TEXT,
  banned_until           TIMESTAMPTZ,

  CONSTRAINT users_role_check
    CHECK (role IN ('user', 'admin'))
);

CREATE INDEX IF NOT EXISTS idx_users_email
  ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_pseudo
  ON users(pseudo);
CREATE INDEX IF NOT EXISTS idx_users_last_seen
  ON users(last_seen);
CREATE INDEX IF NOT EXISTS idx_users_reset_expires
  ON users(reset_password_expires);
CREATE INDEX IF NOT EXISTS idx_users_reset_token
  ON users(reset_password_token);
CREATE INDEX IF NOT EXISTS idx_users_ban_label
  ON users(ban_label);
CREATE INDEX IF NOT EXISTS idx_users_banned_until
  ON users(banned_until);

-- =========================
-- PUZZLES
-- =========================
CREATE TABLE IF NOT EXISTS puzzles (
  id       SERIAL PRIMARY KEY,
  fen      TEXT NOT NULL,
  solution JSONB NOT NULL,
  elo      INTEGER NOT NULL,
  themes   TEXT[] NOT NULL
);

-- =========================
-- MATCHES
-- =========================
CREATE TABLE IF NOT EXISTS matches (
  id          SERIAL PRIMARY KEY,
  mode        TEXT NOT NULL,
  finished_at TIMESTAMPTZ,
  state       JSONB,

  CONSTRAINT matches_mode_check
    CHECK (mode IN ('solo', 'multi'))
);

CREATE INDEX IF NOT EXISTS idx_matches_finished_at
  ON matches(finished_at);

-- =========================
-- MATCH_PLAYERS
-- =========================
CREATE TABLE IF NOT EXISTS match_players (
  id             SERIAL PRIMARY KEY,
  match_id       INTEGER NOT NULL,
  user_id        INTEGER NOT NULL,
  is_winner      BOOLEAN NOT NULL DEFAULT FALSE,
  puzzles_solved INTEGER NOT NULL DEFAULT 0,
  trophies_delta INTEGER NOT NULL DEFAULT 0,

  CONSTRAINT fk_match_players_match
    FOREIGN KEY (match_id)
    REFERENCES matches(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_match_players_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT uq_match_players
    UNIQUE (match_id, user_id),

  CONSTRAINT match_players_puzzles_check
    CHECK (puzzles_solved >= 0)
);

CREATE INDEX IF NOT EXISTS idx_match_players_match_id
  ON match_players(match_id);
CREATE INDEX IF NOT EXISTS idx_match_players_user_id
  ON match_players(user_id);

-- =========================
-- FRIENDS
-- =========================
CREATE TABLE IF NOT EXISTS friends (
  id           SERIAL PRIMARY KEY,
  requester_id INTEGER NOT NULL,
  receiver_id  INTEGER NOT NULL,
  status       TEXT NOT NULL DEFAULT 'pending',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_friends_requester
    FOREIGN KEY (requester_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_friends_receiver
    FOREIGN KEY (receiver_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT friends_no_self
    CHECK (requester_id <> receiver_id),

  CONSTRAINT uq_friends_pair
    UNIQUE (requester_id, receiver_id)
);

CREATE INDEX IF NOT EXISTS idx_friends_requester
  ON friends(requester_id);
CREATE INDEX IF NOT EXISTS idx_friends_receiver
  ON friends(receiver_id);
CREATE INDEX IF NOT EXISTS idx_friends_status
  ON friends(status);

-- =========================
-- CHALLENGES
-- =========================
CREATE TABLE IF NOT EXISTS challenges (
  id           SERIAL PRIMARY KEY,
  from_user_id INTEGER NOT NULL,
  to_user_id   INTEGER NOT NULL,
  status       TEXT NOT NULL DEFAULT 'PENDING',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_challenges_from_user
    FOREIGN KEY (from_user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_challenges_to_user
    FOREIGN KEY (to_user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT challenges_no_self
    CHECK (from_user_id <> to_user_id),

  CONSTRAINT challenges_status_check
    CHECK (status IN ('PENDING', 'ACCEPTED', 'REFUSED'))
);

CREATE INDEX IF NOT EXISTS idx_challenges_from_user_id
  ON challenges(from_user_id);
CREATE INDEX IF NOT EXISTS idx_challenges_to_user_id
  ON challenges(to_user_id);
CREATE INDEX IF NOT EXISTS idx_challenges_status
  ON challenges(status);
CREATE INDEX IF NOT EXISTS idx_challenges_created_at
  ON challenges(created_at);

-- =========================
-- REPORTS
-- =========================
CREATE TABLE IF NOT EXISTS reports (
  id          SERIAL PRIMARY KEY,
  reporter_id INTEGER NOT NULL,
  reported_id INTEGER NOT NULL,
  reason      TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status      TEXT NOT NULL DEFAULT 'pending',

  CONSTRAINT fk_reports_reporter
    FOREIGN KEY (reporter_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_reports_reported
    FOREIGN KEY (reported_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

  CONSTRAINT reports_no_self
    CHECK (reporter_id <> reported_id)
);

CREATE INDEX IF NOT EXISTS idx_reports_reporter_id
  ON reports(reporter_id);
CREATE INDEX IF NOT EXISTS idx_reports_reported_id
  ON reports(reported_id);
CREATE INDEX IF NOT EXISTS idx_reports_status
  ON reports(status);

-- =====================================================
-- END OF SCRIPT
-- =====================================================
```
