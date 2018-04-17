import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import Quiz from 'components/quiz'
import PostWall from 'components/post-wall'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
  { name: 'quiz', path: '/quiz', component: Quiz, display: 'Quiz', icon: 'envelope' },
  { name: 'post-wall', path: '/post-wall', component: PostWall, display: 'Post wall', icon: 'envelope' }
];
