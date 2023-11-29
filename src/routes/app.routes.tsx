import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';
import { News } from '@screens/News';

import { useUser } from '../contexts/userContext';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { signed } = useUser();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      {signed ? (
        <>
          <Screen name="news" component={News} />
        </>
      ) : (
        <>
          <Screen name="login" component={Login} />
        </>
      )}
    </Navigator>
  );
}