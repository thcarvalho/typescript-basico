import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      <strong>Nome: <strong>{user.name}</strong></strong><br/>
      <strong>E-Mail: <strong>{user.email}</strong></strong><br/><br/>
    </div>
  )
}

export default User