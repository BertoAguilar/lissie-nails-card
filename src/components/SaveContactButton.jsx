import { Contact } from "lucide-react";
import { useTranslation } from "react-i18next";
import { business } from "../config/business";
import { downloadVCard } from "../utils/vcard";
import logoPng from "../assets/brand/simbolo_verde.svg";
import ActionButton from "./ActionButton";

export default function SaveContactButton() {
  const { t } = useTranslation();

  return (
    <ActionButton
      icon={Contact}
      label={t("actions.saveContact")}
      onClick={() => downloadVCard(business, logoPng)}
    />
  );
}
