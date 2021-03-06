import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import Quiz from 'components/quiz'
import PostWall from 'components/post-wall'
import Tetris from 'components/tetris'
import BiggerFish from 'components/bigger-fish'
import TypeFast from 'components/type-fast'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
  { name: 'quiz', path: '/quiz', component: Quiz, display: 'Quiz', icon: 'question' },
  { name: 'post-wall', path: '/post-wall', component: PostWall, display: 'Post wall', icon: 'envelope' },
  { name: 'tetris', path: '/tetris', component: Tetris, display: 'Tetris', icon: 'spinner' },
  { name: 'bigger-fish', path: '/bigger-fish', component: BiggerFish, display: 'Bigger fish', icon: 'anchor' },
  { name: 'type-fast', path: '/type-fast', component: TypeFast, display: 'Type fast', icon: 'keyboard' }
];
