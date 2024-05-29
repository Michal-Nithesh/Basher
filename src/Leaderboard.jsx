import React,{ useState , useEffect } from 'react';
import crownIcon from '../src/leaderboard_files/crown.svg';
import cupIcon from '../src/leaderboard_files/cup.svg';
import medalIcon from '../src/leaderboard_files/medal.svg';
import gemIcon from '../src/leaderboard_files/gem_002.svg';
import ani17 from '../src/leaderboard_files/ani-17.png';
import ani18 from '../src/leaderboard_files/ani-18.png';
import './Leaderboard.css';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {
    fetch('https://improved-enigma-6jj6x655796c47xg-8000.app.github.dev//api/leaderboard/')
    .then(response => response.json())
    .then(data => {
         setLeaderboard(data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);
    
    return (
        <div className="leaderboard">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="leaderboard_top_rank">
                            <div className="ani-17"><img src={ani17} alt="" /></div>
                            <div className="ani-18"><img src={ani18} alt="" /></div>
                            <div className="top_rank">
                                <div className="d-flex crown rank_ani1">
                                    <div className="rank_icon"><img src={crownIcon} alt="" /></div>
                                    <div className="flex-grow-1"><span className="circle"></span>
                                        <h6>First 1</h6>
                                        <h5>Peter Jay Smith Was</h5>
                                        <p>19.280G</p>
                                    </div>
                                    <div className="prize">
                                        <h4>9.800</h4>
                                        <div className="prize_gem"><span>Prize</span><img src={gemIcon} alt="" /></div>
                                    </div>
                                </div>
                                <div className="d-flex cup rank_ani2">
                                    <div className="rank_icon"><img src={cupIcon} alt="" /></div>
                                    <div className="flex-grow-1"><span className="circle"></span>
                                        <h6>Second 2</h6>
                                        <h5>Peter Jay Smith Was</h5>
                                        <p>19.280G</p>
                                    </div>
                                    <div className="prize">
                                        <h4>9.800</h4>
                                        <div className="prize_gem"><span>Prize</span><img src={gemIcon} alt="" /></div>
                                    </div>
                                </div>
                                <div className="d-flex medal rank_ani1">
                                    <div className="rank_icon"><img src={medalIcon} alt="" /></div>
                                    <div className="flex-grow-1"><span className="circle"></span>
                                        <h6>Third 3</h6>
                                        <h5>Peter Jay Smith Was</h5>
                                        <p>19.280G</p>
                                    </div>
                                    <div className="prize">
                                        <h4>9.800</h4>
                                        <div className="prize_gem"><span>Prize</span><img src={gemIcon} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="leaderboard_content">
                            <div className="leaderboard_tab">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="alltime">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Place</th>
                                                        <th scope="col">User</th>
                                                        <th scope="col">Credit <img src={gemIcon} alt="" /></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {leaderboard.map((user, index) => (
                                                        <tr key={user.id} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td className="user_circle"><span className="circle"></span>{user.username}</td>
                                                            <td>{user.points} <img src={gemIcon} alt="" /></td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <th scope="row">06</th>
                                                        <td className="user_circle"><span className="circle user3"></span>Magda Hera</td>
                                                        <td>13.200 <img src={gemIcon} alt="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">07</th>
                                                        <td className="user_circle"><span className="circle user4"></span>Danielad Dan</td>
                                                        <td>13.200 <img src={gemIcon} alt="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">08</th>
                                                        <td className="user_circle"><span className="circle user5"></span>Henry</td>
                                                        <td>13.200 <img src={gemIcon} alt="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">09</th>
                                                        <td className="user_circle"><span className="circle user6"></span>Thomas C</td>
                                                        <td>13.200 <img src={gemIcon} alt="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">10</th>
                                                        <td className="user_circle"><span className="circle user7"></span>Paijoo</td>
                                                        <td>13.200 <img src={gemIcon} alt="" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="load_more"><a href="#">Load More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
