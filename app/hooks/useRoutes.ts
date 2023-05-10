import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUser } from 'react-icons/hi2';
import { TbSettings } from 'react-icons/tb';
import { signOut } from 'next-auth/react';
import useConversation from './useConversation';

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/conversations',
        icon: HiChat,
        active: pathname === '/conversations' || !!conversationId,
      },
      {
        label: 'Users',
        href: '/users',
        icon: HiUser,
        active: pathname === '/users',
      },
      {
        label: 'Setting',
        href: '',
        icon: TbSettings,
      },
      {
        label: 'Logout',
        href: '#',
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [conversationId, pathname]
  );

  return routes;
};

export default useRoutes;
