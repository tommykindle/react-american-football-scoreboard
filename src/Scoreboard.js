import React from 'react'
import BottomRow from "./BottomRow";
import Timer from "./Timer";

function Scoreboard(props) {
    const { homeScore, awayScore } = props;
    return (
        <section className="scoreboard">
            <div className="topRow">
                <div className="home">
                    <h2 className="home_name">Lions</h2>
                    <div className="home_score">{homeScore}</div>
                </div>
                <Timer />
                <div className="away">
                    <h2 className="away_name">Tigers</h2>
                    <div className="away_score">{awayScore}</div>
                </div>
            </div>
            <BottomRow />
        </section>
    );
}

export default Scoreboard;
