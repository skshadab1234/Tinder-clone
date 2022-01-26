import React, { useEffect, useState } from 'react';
import database from "./firebase";
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = React.useState([]);

    useEffect(() => {
        // database    
        //  .collection("people")
        //  .onSnaphot((snapshot) =>
        // setPeople(snapshot.docs.map((doc) => doc.data())))
       
        database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div >

            <div className='tinderCards_cardContainer_ps'>
                {people.map(item => {
                    return (
                        <TinderCard
                            className='swipe'
                            key={item.name}
                            preventSwipe={['up', 'down']}
                        >
                            <div
                                style={{ backgroundImage: `url(${item.url})` }}
                                className="card">
                                <h3>{item.name}</h3>
                            </div>
                        </TinderCard>)
                })}
            </div>
        </div>
    );
}

export default TinderCards;