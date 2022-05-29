import React, {useState, useEffect} from "react";
import "../Styles/statistics.css";
import axios from 'axios';

function Statistics(){
   
    const [loading, setLoading] = useState(true);
    const [playerlist, setPlayerlist] = useState([]);

    useEffect(() => {
        axios.get('api/players').then(res=>{
            console.log(res.data.player);
            if(res.data.status === 200)
            {
                setPlayerlist(res.data.player)
            }
            setLoading(false);
        });
    }, []);


    var viewplayer_HTMLTABLE = '';
    if (loading)
    {
        return <h2>Loading Players...</h2>
    }
    else
    {
        viewplayer_HTMLTABLE =
        playerlist.map( (player) => {
            return (
                <tr key={player.id}>
                    <td>{player.user.name}</td>
                    <td>{player.nickname}</td> 
                    <td>{player.user.email}</td> 
                </tr>
            );
        });
    }

    return (
       <main className="statistics">
           <section className="title">
           <h2>Players</h2>
           </section>

            <section className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nickname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewplayer_HTMLTABLE}
                    </tbody>
                </table>
                
            </section>
            
        </main>
       
    );
}

export default Statistics;