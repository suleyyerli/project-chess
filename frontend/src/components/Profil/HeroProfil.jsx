import { useEffect, useState } from "react";
import Card from "../ui/Card/Card";
import styles from "./HeroProfil.module.css";
import { toImageSrc } from "../../utils/image";
import { RiCheckFill, RiPencilFill } from "react-icons/ri";

const HeroProfil = ({
  avatar,
  pseudo,
  bio,
  inscriptionLabel,
  statusLabel,
  onUpdateBio,
}) => {
  const avatarSrc = toImageSrc(avatar);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioDraft, setBioDraft] = useState(bio ?? "");
  const [bioError, setBioError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setBioDraft(bio ?? "");
  }, [bio]);

  const canEdit = typeof onUpdateBio === "function";
  const cleanDraft = (bioDraft ?? "").trim().slice(0, 30);
  const cleanBio = (bio ?? "").trim().slice(0, 30);
  const canSave = canEdit && isEditingBio && !saving && cleanDraft !== cleanBio;

  const saveBio = async () => {
    if (!canSave) return;
    setBioError("");
    setSaving(true);
    try {
      await onUpdateBio(cleanDraft);
      setIsEditingBio(false);
    } catch (err) {
      setBioError(err?.message || "Impossible de mettre à jour la bio");
    } finally {
      setSaving(false);
    }
  };

  const displayBio = (bio ?? "").trim()
    ? (bio ?? "").trim().slice(0, 30)
    : "Nouvelle Bio";

  return (
    <Card variant="dark" className={styles.hero}>
      <div>
        <div className={styles.avatarWrapper}>
          {avatarSrc ? (
            <img
              className={styles.avatar}
              src={avatarSrc}
              alt={`Avatar de ${pseudo}`}
            />
          ) : (
            <div className={styles.avatarPlaceholder} aria-hidden="true">
              {pseudo?.slice?.(0, 2)?.toUpperCase?.() ?? "?"}
            </div>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.pseudo}>{pseudo}</h1>
        <div className={styles.bioBlock}>
          <div className={styles.bioLine}>
            {!canEdit || !isEditingBio ? (
              <p
                className={[
                  styles.bioValue,
                  displayBio === "Nouvelle Bio" ? styles.bioPlaceholder : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {displayBio}
              </p>
            ) : (
              <input
                className={styles.bioInput}
                type="text"
                value={bioDraft}
                onChange={(e) => {
                  setBioDraft(e.target.value);
                  setBioError("");
                }}
                placeholder="Nouvelle Bio"
                maxLength={30}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    saveBio();
                  }
                  if (e.key === "Escape") {
                    e.preventDefault();
                    setBioDraft(bio ?? "");
                    setBioError("");
                    setIsEditingBio(false);
                  }
                }}
                autoFocus
              />
            )}

            {canEdit && (
              <button
                type="button"
                className={styles.bioIconButton}
                onClick={() => {
                  if (isEditingBio) {
                    saveBio();
                  } else {
                    setBioError("");
                    setIsEditingBio(true);
                  }
                }}
                disabled={saving || (isEditingBio && !canSave)}
                aria-label={isEditingBio ? "Enregistrer la bio" : "Modifier la bio"}
                title={isEditingBio ? "Enregistrer" : "Modifier"}
              >
                {isEditingBio ? <RiCheckFill /> : <RiPencilFill />}
              </button>
            )}
          </div>
          {bioError && <p className={styles.bioError}>{bioError}</p>}
        </div>
        <p className={styles.meta}>{inscriptionLabel}</p>
        <p className={styles.meta}>{statusLabel}</p>
      </div>
    </Card>
  );
};

export default HeroProfil;
