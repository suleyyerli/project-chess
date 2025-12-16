const bcrypt = require("bcrypt");
const userRepository = require("../repositories/user.repository");

const SALT_ROUNDS = 10;

async function signup(payload) {
  const { email, password, pseudo, ...rest } = payload || {};

  if (!email || !password || !pseudo) {
    throw new Error("email, mot de passe et pseudo sont requis");
  }

  const normalizedEmail = email.toLowerCase();

  const existingByEmail = await userRepository.findByEmail(normalizedEmail);
  if (existingByEmail) {
    throw new Error("Email déjà utilisé");
  }

  const existingByPseudo = await userRepository.findByPseudo(pseudo);
  if (existingByPseudo) {
    throw new Error("Pseudo déjà utilisé");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const created = await userRepository.create({
    email: normalizedEmail,
    password: hashedPassword,
    pseudo,
    ...rest,
  });

  // Do not leak hashed password to the caller
  const { password: _password, ...safeUser } = created;
  return safeUser;
}

module.exports = {
  signup,
};
