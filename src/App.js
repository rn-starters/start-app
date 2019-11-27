import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './scenes/Home'
import About from './scenes/About'

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    About: {screen: About},
},
    {
        headerMode: 'none',
    });

const App = createAppContainer(MainNavigator);

export default App;
