const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class New extends React.Component{
    render(){
        return (
            <Layout
            title="New Project Page"
            stylesheet="/new.css"
            js="/new.js">
                <form action="/projects" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Github: <input type="text" name="github"/><br/>
                    Image: <input type="text" name="image"/><br/>
                    <input type="submit" name="" id="createProject" value="Create New Project"/>
                </form>
            </Layout>
        )
    }
}

module.exports = New;