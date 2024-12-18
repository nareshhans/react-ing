// const heading = React.createElement('h1', {id:"heading"}, 'Welcome to ReactJs!');


const nested = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        React.createElement('h1', { id: 'heading' }, 'I am heading'),
        React.createElement('h1', { id: 'heading2' }, 'I am heading two')
    ),
    React.createElement(
        'div',
        { id: 'child' },
        React.createElement('h1', { id: 'heading' }, 'I am heading'),
        React.createElement('h1', { id: 'heading2' }, 'I am heading two')
    ),
    React.createElement(
        'div',
        { id: 'parent' },
        React.createElement(
            'div',
            { id: 'child' },
            React.createElement('h1', { id: 'heading' }, 'I am heading'),
            React.createElement('h1', { id: 'heading2' }, 'I am heading two')
        ),
        React.createElement(
            'div',
            { id: 'child' },
            React.createElement('h1', { id: 'heading' }, 'I am heading'),
            React.createElement('h1', { id: 'heading2' }, 'I am heading two')
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nested);