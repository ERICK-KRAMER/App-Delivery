import { X } from "lucide-react";

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalComponent = ({ children, setIsOpen }: ModalProps) => {

  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-center`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-screen-md p-4 bg-white rounded-md">
        <X className="absolute top-2 right-2 cursor-pointer" onClick={() => setIsOpen(false)} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default ModalComponent;
