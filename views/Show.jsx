const React = require('react');
const Layout = require('./Layout.jsx');

class Show extends React.Component {
    render(){
        const project = this.props.project;
        return(
            <Layout
            title={`${this.props.project.name.toUpperCase()} Page`}
            stylesheet="/show.css"
            js="/show.js">
                <p><a href={project.github}><img src={project.img}/></a></p>
                <ul>
                    <li>{project.description}</li>
                     <li><a href={`/projects/${project.github}`}>{project.github}</a></li>
                </ul><br/>
                <form method="POST" id="delete-button" action={`/projects/${project._id}?_method=DELETE`} >
                <input type="submit" value={`DELETE ${project.name.toUpperCase()}`}/>
                </form><br/>
                <form action={`/projects/${project._id}/edit`}><input type="submit" id= "editButton" value= {`EDIT ${project.name.toUpperCase()}`}></input>
                </form>
            </Layout>
        )
    }
}

module.exports = Show;