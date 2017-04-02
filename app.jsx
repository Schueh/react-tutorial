'use strict';

const React = require('react'),
    ReactDOM = require('react-dom');

const TeamMember = require('./TeamMember'),
    TeamMemberAdd = require('./TeamMemberAdd'),
    teamMembers = require('./teamMembers.js');

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Team</h1>
                <TeamMemberAdd onAdd={this.handleAddTeamMember} />
                <ul>
                    {this.state.teamMembers.map(member =>
                        <TeamMember key={member.name} name={member.name}
                            email={member.email} />)}
                </ul>
            </div>

        );
    },
    getInitialState() {
        return {
            teamMembers
        };
    },
    handleAddTeamMember(teamMember) {
        this.setState({
            teamMembers: this.state.teamMembers.push(teamMember)
        });
    }
});

ReactDOM.render(<App />, document.getElementById('reactApp'));