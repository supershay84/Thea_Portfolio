const React = require('react');
const Layout = require('./Layout.jsx');

class New extends React.Component{
    render(){
        return (
            <Layout
            title="New Project Page"
            stylesheet="/new.css"
            js="/app.js">
                <form action="/projects" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Github: <input type="text" name="github"/><br/>
                    Img: <input type="text" name="img"/><br/>
                    Description: <input type="text" name="description"/><br/>
                    <input type="submit" name="" id="createProject" value="Create New Project"/>
                </form>
            </Layout>
        )
    }
}

module.exports = New;