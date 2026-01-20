import { useEffect, useState } from "react";
import Card from "../ui/Card/Card";
import styles from "./HeroProfil.module.css";
import { toImageSrc } from "../../utils/image";
import { RiCheckFill, RiPencilFill, RiImageEditFill } from "react-icons/ri";

const HeroProfil = ({
  avatar,
  pseudo,
  bio,
  inscriptionLabel,
  statusLabel,
  onUpdateBio,
  onUpdateAvatar,
}) => {
  const avatarSrc = toImageSrc(avatar);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioDraft, setBioDraft] = useState(bio ?? "");
  const [bioError, setBioError] = useState("");
  const [saving, setSaving] = useState(false);
  const [avatarError, setAvatarError] = useState("");
  const [avatarMessage, setAvatarMessage] = useState("");

  useEffect(() => {
    setBioDraft(bio ?? "");
  }, [bio]);

  const canEdit = typeof onUpdateBio === "function";
  const canEditAvatar = typeof onUpdateAvatar === "function";
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

  const handleAvatarFile = async (file) => {
    if (!canEditAvatar) return;
    setAvatarError("");
    setAvatarMessage("");

    if (!file) return;
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
    ];
    const name = (file.name || "").toLowerCase();
    const looksLikeJpeg = name.endsWith(".jpg") || name.endsWith(".jpeg");
    const looksLikePng = name.endsWith(".png");
    const typeOk =
      allowedTypes.includes(file.type) ||
      (!file.type && (looksLikeJpeg || looksLikePng));

    if (!typeOk) {
      setAvatarError("Format accepté: PNG ou JPEG");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setAvatarError("Image trop lourde (max 3MB)");
      return;
    }

    setSaving(true);
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Impossible de lire l'image"));
        reader.readAsDataURL(file);
      });

      await onUpdateAvatar(dataUrl);
      setAvatarMessage("Avatar mis à jour !");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Avatar upload failed:", err);
      setAvatarError(err?.message || "Impossible de mettre à jour l'avatar");
    } finally {
      setSaving(false);
    }
  };

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

          {canEditAvatar && (
            <label className={styles.avatarEdit} title="Changer l'avatar">
              <RiImageEditFill />
              <input
                type="file"
                accept="image/png,image/jpeg"
                className={styles.avatarFileInput}
                disabled={saving}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  // allow selecting the same file twice
                  e.target.value = "";
                  handleAvatarFile(file);
                }}
              />
            </label>
          )}
        </div>
        {avatarMessage && (
          <p className={styles.avatarSuccess}>{avatarMessage}</p>
        )}
        {avatarError && <p className={styles.avatarError}>{avatarError}</p>}
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
                aria-label={
                  isEditingBio ? "Enregistrer la bio" : "Modifier la bio"
                }
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
