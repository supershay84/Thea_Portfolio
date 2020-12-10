const React = require('react');
const Layout = require('./Layout.jsx');

class New extends React.Component{
    render(){
        return (
            <Layout
            title="New Project Page"
            stylesheet="/new.css"
            js="/app.js">
                <h2>i am Thea</h2>
                <form id="forms" action="/projects" method="POST">
                    Name: <input style ={{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="name"/><br/>
                    Github: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="github"/><br/>
                    Img: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="img"/><br/>
                    Description: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="description"/><br/>
                </form>
                <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="submit" name="" id="createNewProject" value="Create New Project"/>
            </Layout>
        )
    }
}

module.exports = New;