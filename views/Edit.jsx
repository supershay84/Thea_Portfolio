const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Edit extends React.Component {
    render() {
        const project = this.props.projectl
        return(
            <Layout
            title= {`Edit ${this.props.project.name.toUpperCase()} Page`}
            stylesheet="/edit.css"
            js="/edit.js">
                <form action={`/products/${product._id}?_method=PUT`} id="forms" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Github: <input type="text" name="github"/><br/>
                    Image: <input type="text" name="image"/><br/>
                    Description: <input type="text" name="description"/><br/>
                    <input type="submit" id="update-button" name="" value="Update Product"/>
                </form>

            </Layout>
        )
    }
}

module.exports = Edit;