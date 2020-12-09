const React = require('react');
const Layout = require('./Layout.jsx');

class Contact extends React.Component {
    render(){
        return(
            <Layout
            title="Contact Thea"
            stylesheet="/contact.css"
            js="/app.js">
                <h2>i am Thea</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus unde ullam sapiente sit atque placeat, exercitationem suscipit porro quaerat quisquam dolor veritatis nisi praesentium repellendus voluptates magnam consequatur neque quas.</p>
            </Layout>
        )
    }
}

module.exports = Contact