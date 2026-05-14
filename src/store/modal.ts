import { create } from "zustand";

export type ModalId = "install";

type ModalPropsMap = {
  install: { downloadHref: string };
};

type ModalState = {
  activeModal: ModalId | null;
  modalProps: Partial<ModalPropsMap[ModalId]>;
  openModal: <T extends ModalId>(id: T, props: ModalPropsMap[T]) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  activeModal: null,
  modalProps: {},
  openModal: (id, props) => set({ activeModal: id, modalProps: props }),
  closeModal: () => set({ activeModal: null, modalProps: {} }),
}));
