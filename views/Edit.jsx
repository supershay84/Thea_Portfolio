const React = require('react');
const Layout = require('./Layout.jsx');

class Edit extends React.Component {
    render() {
        const project = this.props.project
        return(
            <Layout
            title= {`Edit ${this.props.project.name.toUpperCase()}`}
            stylesheet="/Edit.css"
            js="/app.js">
                <h2>i am Thea</h2>
                <form  method="POST" id="forms" action={`/projects/${project._id}?_method=PUT`}>
                    Name: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="name"/><br/>
                    Github: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="github"/><br/>
                    Img: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="img"/><br/>
                    Description: <input style= {{backgroundColor:"#0053ff", borderRadius: "12px"}} type="text" name="description"/><br/>
                </form>
                <input id="update-button" style={{backgroundColor:"#0053ff", borderRadius: "12px"}} type="submit" value= {`EDIT ${project.name.toUpperCase()}`}></input>

            </Layout>
        )
    }
}

module.exports = Edit;