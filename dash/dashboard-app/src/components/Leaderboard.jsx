import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        axios.get('YOUR_BACKEND_URL/api/leaderboard/')
            .then(response => {
                setLeaders(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the leaderboard!', error);
            });
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                {leaders.map((leader, index) => (
                    <li key={index}>{leader.name}: {leader.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
