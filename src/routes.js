import App from './components/App';
import Profile from './profilePage/profile.component';
import SomePage from './components/SomePage';
import SomeOtherPage from './components/SomeOtherPage'

export default (
    <Route path='/' component={App}>
        <Route path='/profile' component={Profile}></Route>
    </Route>
)