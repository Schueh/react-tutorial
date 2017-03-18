'use strict';

const React = require('react'),
    ReactDOM = require('react-dom');

const TeamMember = require('./TeamMember'),
    teamMembers = require('./teamMembers.js');

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Team</h1>
                <ul>
                    {teamMembers.map(member =>
                        <TeamMember key={member.name} name={member.name}
                            email={member.email} />)}
                </ul>
            </div>

        );
    }
});

ReactDOM.render(<App />, document.getElementById('reactApp'));