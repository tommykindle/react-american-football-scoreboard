import React from 'react'

function Buttons(props) {
    const { homeScore, setHomeScore, awayScore, setAwayScore } = props;

    return (
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons_touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
                <button className="homeButtons_fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons_touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
                <button className="awayButtons_fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Touchdown</button>

            </div>
        </section>
    )
}

export default Buttons;