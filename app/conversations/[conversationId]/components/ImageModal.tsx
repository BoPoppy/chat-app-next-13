import Modal from '@/app/components/Modal';
import Image from 'next/image';
import React from 'react';

type Props = {
  src: string | null;
  isOpen: boolean;
  onClose: () => void;
};

const ImageModal = ({ src, isOpen, onClose }: Props) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
