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
                <p style={{color: "#b4b4b4"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus unde ullam sapiente sit atque placeat, exercitationem suscipit porro quaerat quisquam dolor veritatis nisi praesentium repellendus voluptates magnam consequatur neque quas.</p>
                <footer>
                    <ul>
                        <li className="social"><a href="https://www.facebook.com/supershay.harris"> <img src="https://res.cloudinary.com/supershay84/image/upload/c_scale,h_22/v1607562971/download_els2ql.png" alt=""/> </a> </li>
                        <li className="social"><a href="https://www.instagram.com/brown_potatoes/"> <img src="https://res.cloudinary.com/supershay84/image/upload/c_scale,h_22/v1607562946/download-1_b7a1y0.jpg" alt=""/> </a> </li>
                        <li className="social"><a href="https://www.linkedin.com/in/thea-harris-2b5056200/"> <img src="https://res.cloudinary.com/supershay84/image/upload/c_scale,h_22/v1607562961/download_fzmokp.jpg" alt=""/> </a> </li>
                    </ul>
                </footer>
            </Layout>
        )
    }
}

module.exports = Contact