import { jsx } from 'react/jsx-runtime';

const Header = ({ text }) => {
    return jsx("h1", { children: text });
};

export { Header };
