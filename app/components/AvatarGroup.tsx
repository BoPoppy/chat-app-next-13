'use client';

import { User } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

type Props = {
  users?: User[];
};

const AvatarGroup = ({ users = [] }: Props) => {
  const sliceUsers = users.slice(0, 3);

  const positionMap = {
    0: 'top-0 left-[10px] md:left-[12px]',
    1: 'bottom-0',
    2: 'bottom-0 right-0',
  };

  return (
    <div className="relative h-9 w-9 md:h-11 md:w-11">
      {sliceUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block
    rounded-full overflow-hidden h-[16px] w-[16px] md:h-[21px] md:w-[21px] ${
      positionMap[index as keyof typeof positionMap]
    }`}
        >
          <Image alt="Avatar" fill src={user?.image || '/images/placeholder.jpg'} />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
