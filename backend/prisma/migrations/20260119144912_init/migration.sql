-- CreateTable
CREATE TABLE "friends" (
    "id" SERIAL NOT NULL,
    "requester_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_players" (
    "id" SERIAL NOT NULL,
    "match_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_winner" BOOLEAN NOT NULL DEFAULT false,
    "puzzles_solved" INTEGER NOT NULL DEFAULT 0,
    "trophies_delta" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "match_players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "mode" TEXT NOT NULL,
    "finished_at" TIMESTAMPTZ(6),
    "state" JSONB,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puzzles" (
    "id" SERIAL NOT NULL,
    "fen" TEXT NOT NULL,
    "solution" JSONB NOT NULL,
    "elo" INTEGER NOT NULL,
    "themes" TEXT[],

    CONSTRAINT "puzzles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puzzles_mate_raw" (
    "fen" TEXT,
    "moves" TEXT,
    "rating" INTEGER,
    "themes" TEXT
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "reporter_id" INTEGER NOT NULL,
    "reported_id" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "avatar" BYTEA,
    "banner" TEXT,
    "emblem" TEXT,
    "trophy" INTEGER NOT NULL DEFAULT 0,
    "nbgame" INTEGER NOT NULL DEFAULT 0,
    "nbwin" INTEGER NOT NULL DEFAULT 0,
    "nblose" INTEGER NOT NULL DEFAULT 0,
    "nbdraw" INTEGER NOT NULL DEFAULT 0,
    "bio" TEXT,
    "joined_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL DEFAULT 'user',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "nbreport" INTEGER NOT NULL DEFAULT 0,
    "is_banned" BOOLEAN NOT NULL DEFAULT false,
    "ban_reason" TEXT,
    "last_seen" TIMESTAMPTZ(6),
    "reset_password_token" TEXT,
    "reset_password_expires" TIMESTAMPTZ(6),
    "ban_label" TEXT,
    "banned_until" TIMESTAMPTZ(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "challenges" (
    "id" SERIAL NOT NULL,
    "from_user_id" INTEGER NOT NULL,
    "to_user_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "challenges_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_friends_receiver" ON "friends"("receiver_id");

-- CreateIndex
CREATE INDEX "idx_friends_requester" ON "friends"("requester_id");

-- CreateIndex
CREATE INDEX "idx_friends_status" ON "friends"("status");

-- CreateIndex
CREATE UNIQUE INDEX "uq_friends_pair" ON "friends"("requester_id", "receiver_id");

-- CreateIndex
CREATE INDEX "idx_match_players_match_id" ON "match_players"("match_id");

-- CreateIndex
CREATE INDEX "idx_match_players_user_id" ON "match_players"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_match_players" ON "match_players"("match_id", "user_id");

-- CreateIndex
CREATE INDEX "idx_matches_finished_at" ON "matches"("finished_at");

-- CreateIndex
CREATE INDEX "idx_reports_reported_id" ON "reports"("reported_id");

-- CreateIndex
CREATE INDEX "idx_reports_reporter_id" ON "reports"("reporter_id");

-- CreateIndex
CREATE INDEX "idx_reports_status" ON "reports"("status");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_pseudo_key" ON "users"("pseudo");

-- CreateIndex
CREATE INDEX "idx_users_email" ON "users"("email");

-- CreateIndex
CREATE INDEX "idx_users_pseudo" ON "users"("pseudo");

-- CreateIndex
CREATE INDEX "idx_users_last_seen" ON "users"("last_seen");

-- CreateIndex
CREATE INDEX "idx_users_reset_expires" ON "users"("reset_password_expires");

-- CreateIndex
CREATE INDEX "idx_users_reset_token" ON "users"("reset_password_token");

-- CreateIndex
CREATE INDEX "idx_users_ban_label" ON "users"("ban_label");

-- CreateIndex
CREATE INDEX "idx_users_banned_until" ON "users"("banned_until");

-- CreateIndex
CREATE INDEX "idx_challenges_created_at" ON "challenges"("created_at");

-- CreateIndex
CREATE INDEX "idx_challenges_from_user_id" ON "challenges"("from_user_id");

-- CreateIndex
CREATE INDEX "idx_challenges_status" ON "challenges"("status");

-- CreateIndex
CREATE INDEX "idx_challenges_to_user_id" ON "challenges"("to_user_id");

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match_players" ADD CONSTRAINT "match_players_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match_players" ADD CONSTRAINT "match_players_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_reported_id_fkey" FOREIGN KEY ("reported_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_reporter_id_fkey" FOREIGN KEY ("reporter_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "challenges" ADD CONSTRAINT "fk_challenges_from_user" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "challenges" ADD CONSTRAINT "fk_challenges_to_user" FOREIGN KEY ("to_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
