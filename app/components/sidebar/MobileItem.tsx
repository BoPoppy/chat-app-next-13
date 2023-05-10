'use client';
import clsx from 'clsx';
import Link from 'next/link';
import SettingsModal from './SettingsModal';
import { useState } from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from '@prisma/client';

type Props = {
  icon: any;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  currentUser: User;
};

const MobileItem = ({ icon: Icon, href, onClick, active, currentUser }: Props) => {
  const [isOpenSettingModal, setIsOpenSettingModal] = useState<boolean>(false);
  const handleClick = () => {
    if (onClick) return onClick();
  };

  if (!href)
    return (
      <>
        <SettingsModal
          currentUser={currentUser}
          isOpen={isOpenSettingModal}
          onClose={() => setIsOpenSettingModal(false)}
        />
        <div
          onClick={() => setIsOpenSettingModal(true)}
          className="group cursor-pointer flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100"
        >
          <Icon className="h-6 w-6" />
        </div>
      </>
    );

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
            group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100
        `,
        active && 'bg-gray-100 text-black'
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
