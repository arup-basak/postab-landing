"use client";

import { InstallModal } from "@/components/ui/install-modal";
import { useModalStore } from "@/store/modal";

export const ModalProvider = () => {
  const { activeModal, modalProps, closeModal } = useModalStore();

  return (
    <InstallModal
      open={activeModal === "install"}
      onClose={closeModal}
      downloadHref={(modalProps as { downloadHref?: string }).downloadHref ?? ""}
    />
  );
};
