const React = require('react');
const Layout = require('./Layout.jsx');

class Show extends React.Component {
    render(){
        const project = this.props.project;
        return(
            <Layout
            title={`${this.props.project.name.toUpperCase()} Page`}
            stylesheet="/Show.css"
            js="/show.js">
                <h2>i am Thea</h2>
                <p><a href={project.github}><img src={project.img}/></a></p>
                <ul>
                    <li style = {{color: "#b4b4b4", fontSize: "20px"}}>{project.description}</li>
                     <li><a style = {{color: "#0063ff"}} href={`/projects/${project.github}`}>{project.github}</a></li>
                </ul><br/>
                <form method="POST" id="delete-button" action={`/projects/${project._id}?_method=DELETE`} >
                <input style={{backgroundColor:"#0053ff", borderRadius: "12px"}} type="submit" value={`DELETE ${project.name.toUpperCase()}`}/>
                </form><br/>
                <form id= "editButton" action={`/projects/${project._id}/edit`}><input style={{backgroundColor:"#0053ff", borderRadius: "12px"}} type="submit" value= {`EDIT ${project.name.toUpperCase()}`}></input>
                </form>
            </Layout>
        )
    }
}

module.exports = Show;