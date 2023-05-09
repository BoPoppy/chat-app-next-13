import React from 'react';

type Props = {
  params: {
    conversationId: string;
  };
};

const ConversationId = async ({ params: { conversationId } }: Props) => {
  return <div>ConversationId</div>;
};

export default ConversationId;
