const React = require('react');
const Layout = require('./Layout.jsx');

class Index extends React.Component{
    render(){
        return(
            <Layout
            title="My Projects"
            stylesheet="/Index.css"
            js="./app.js">
                <h2>i am Thea</h2>
                <ul>
                     {
                        this.props.projects.map((project,index)=> {
                            return (
                                <li>
                                    <a style= {{color: "#b4b4b4", fontSize: "20px"}} href={`/projects/${project.id}`}>
                                        <img src={project.img}/><br/>
                                        {project.name}
                                    </a><br/>
                                </li>
                            )
                        })
                    }
                     <form  id= "createProject" action= {`/projects/new`}>
                        <input style={{backgroundColor:"#0053ff", borderRadius: "12px"}} type="submit"   value="Create New Project"/>
                    </form><br/>
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;