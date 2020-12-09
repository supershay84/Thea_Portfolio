const React = require('react');
const Layout = require('./Layout.jsx');

class Edit extends React.Component {
    render() {
        const project = this.props.project
        return(
            <Layout
            title= {`Edit ${this.props.project.name.toUpperCase()} Page`}
            stylesheet="/edit.css"
            js="/app.js">
                <form action={`/projects/${project._id}?_method=PUT`} id="forms" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Github: <input type="text" name="github"/><br/>
                    Img: <input type="text" name="img"/><br/>
                    Description: <input type="text" name="description"/><br/>
                    <input type="submit" id="update-button" name="" value="Update Project"/>
                </form>

            </Layout>
        )
    }
}

module.exports = Edit;