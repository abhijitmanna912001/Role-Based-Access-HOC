import { WrappedComponentProps } from "../types/access-control.types";

const MyComponent = ({
  userName,
  userPermissions,
  message,
}: WrappedComponentProps) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Welcome, {userName}</p>
      <p>Your permissions: {userPermissions?.join(", ")}</p>
    </div>
  );
};

export default MyComponent;
