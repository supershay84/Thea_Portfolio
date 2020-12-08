const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Show extends React.Component {
    render(){
        const project = this.props.project;
        return(
            <Layout
            title={`${this.props.project.name.toUpperCase()}'s Page`}
            stylesheet="/show.css"
            js="/show.js">
                <a href={`/projects/${project._id}/edit`}>Edit {project.name}</a><br/>
                <p><img src={project.img}/></p>
                <ul>
                    <li>{project.description}</li>
                    <li>{project.github}</li>
                </ul><br/>
                <form method="POST" id="delete-button" action={`/projects/${project._id}?_method=DELETE`} >
                <input type="submit" value={`DELETE ${project.name.toUpperCase()}`}/>
                </form>
            </Layout>
        )
    }
}

module.exports = Show;