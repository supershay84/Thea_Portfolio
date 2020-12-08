const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Index extends React.Component{
    render(){
        return(
            <Layout
            title="I am Thea"
            stylesheet="/index.css"
            js="/index.js">
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