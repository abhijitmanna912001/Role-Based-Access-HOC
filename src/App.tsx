import MyComponent from "./components/MyComponent";
import NonAuthorized from "./components/NonAuthorized";
import { withAccessControl } from "./utils/withAccessControl";

const MyComponentWithAccessControl = withAccessControl(MyComponent);

const App = () => {
  return (
    <div>
      <MyComponentWithAccessControl
        roles={["admin", "manager"]}
        // roles={["user", "guest"]}
        fallbackComponent={NonAuthorized}
        message="Hello, Admin!"
        injectedProps={{
          userName: "Abhijit Manna",
          userPermissions: ["view_dashboard", "edit_settings"],
        }}
      />
    </div>
  );
};

export default App;
