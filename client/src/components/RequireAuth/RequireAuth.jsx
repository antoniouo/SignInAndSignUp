import { useSelector } from 'react-redux';

export default function RequireAuth({ children }) {
  const user = useSelector((state) => state.user);

  if (!user.id) {
    return <h1> Требуется авторизация </h1>;
  }

  return children;
}
