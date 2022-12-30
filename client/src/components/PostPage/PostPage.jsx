import React from 'react';
import { useSelector } from 'react-redux';

export default function PostPage() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user.id && <div>Тут будут очень секретные данные</div>}
    </div>
  );
}
