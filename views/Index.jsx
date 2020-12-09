const React = require('react');
const Layout = require('./Layout.jsx');

class Index extends React.Component{
    render(){
        return(
            <Layout
            title="My Projects"
            stylesheet="/index.css"
            js="./app.js">
                <ul>
                    <form action= {`/projects/new`}>
                        <input type="submit" id= "createProject" value="Create New Project"/>
                    </form><br/>
                    {
                        this.props.projects.map((project,index)=> {
                            return (
                                <li>
                                    <a href={`/projects/${project.id}`}>
                                        <img src={project.img}/><br/>
                                        {project.name}
                                    </a><br/>
                                </li>
                            )
                        })
                    }
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;