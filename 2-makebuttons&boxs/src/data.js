import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block — compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description: 'Small, reusable pieces of UI.',
    code: `function Greeting(){\n  return <h1>Hello</h1>\n}`
  },
  jsx: {
    title: 'JSX',
    description: 'JSX lets you write HTML-like syntax in JavaScript.',
    code: `const element = <div>Hello JSX</div>`
  },
  props: {
    title: 'Props',
    description: 'Pass data into components via props.',
    code: `function Welcome(props){\n  return <h1>Hello {props.name}</h1>\n}`
  },
  state: {
    title: 'State',
    description: 'Components can hold internal state to create interactivity.',
    code: `const [count, setCount] = useState(0)`
  }
};