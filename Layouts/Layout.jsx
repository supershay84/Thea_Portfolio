const React = require("react");

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    <nav>
                        <a href="/products">Home</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;