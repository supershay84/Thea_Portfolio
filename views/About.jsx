const React = require('react');
const Layout = require('./Layout.jsx');

class About extends React.Component {
    render(){
        return(
            <Layout
            title="About Me"
            stylesheet="/about.css"
            js="/app.js">
            <h2>i am Thea</h2>
            <p style = {{color: "#b4b4b4"}}>Now, this is a story all about how
my life got flipped, turned upside down.
And I'd like to take a minute,
just sit right there.
I'll tell you how I became the prince of a town called Bel Air. <br/>
In west Philadelphia born and raised,
on the playground was where I spent most of my days.
Chillin' out, maxin', relaxin' all cool,
and all, shootin some b-ball outside of the school,
when a couple of guys who were up to no good,
started making trouble in my neighborhood.
I got in one little fight and my mom got scared.
She said 'You're movin' with your auntie and uncle in Bel Air'. <br/>
I begged and pleaded with her day after day.
But she packed my suit case and sent me on my way.
She gave me a kiss and then she gave me my ticket.
I put my Walkman on and said, 'I might as well kick it'. <br/>
First class, yo this aint bad.
Drinking orange juice out of a champagne glass.
Is this what the people of Bel-Air living like?
Hmmmmm this might be alright. <br/>
But wait I hear they're prissy, bourgeois, all that.
Is this the type of place that they just send this cool cat?
I don't think so.
I'll see when I get there.
I hope they're prepared for the prince of Bel-Air. <br/>
Well, the plane landed and when I came out,
there was a dude who looked like a cop standing there with my name out.
I ain't trying to get arrested yet.
I just got here.
I sprang with the quickness like lightning, disappeared. <br/>
I whistled for a cab and when it came near,
the license plate said fresh and it had dice in the mirror.
If anything I could say that this cab was rare
but I thought 'Nah, forget it' - 'Yo, home to Bel Air'. <br/>
I pulled up to the house about 7 or 8
and I yelled to the cabbie 'Yo homie smell ya later!'.
I looked at my kingdom.
I was finally there.
To sit on my throne as the Prince of Bel Air.</p>
            </Layout>
        )
    }
}

module.exports = About