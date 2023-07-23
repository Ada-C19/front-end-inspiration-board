import React, {useState, useEffect} from 'react';
import Barbies from './Barbies.js';
import BoardForm from './BoardForm.js';
import CardForm from './CardForm.js';
import CardsList from './CardsList.js';
import NavBar from './NavBar.js';
import SelectedBoard from './SelectedBoard.js';
import './Dashboard.css';


const Dashboard = (props) => {
    return (
        <div className={`${props.selectedTheme}-Dashboard`}>
            <header className={`${props.selectedTheme}-dashboard-header`}>
                <NavBar boards={props.boards} deleteBoard={props.deleteBoard} selectBoard={props.selectBoard} selectedTheme={props.selectedTheme}/>
            </header>

            <section className={`dashboard-${props.selectedTheme}-banner`}>
                <Barbies selectedTheme={props.selectedTheme}/> 
            </section>

            <main className={`${props.selectedTheme}-dashboard-body`}>
                <aside>
                    <BoardForm createBoard={props.createBoard} selectedTheme={props.selectedTheme}></BoardForm>
                    <CardForm createCard={props.createCard} selectedTheme={props.selectedTheme}/>
                </aside>

                <section>
                    { props.selectedBoard && 
                        <SelectedBoard 
                        selectedBoard={props.selectedBoard} 
                        cards={props.cards} 
                        createCard={props.createCard} 
                        deleteCard={props.deleteCard}
                        increaseLikedCount={props.increaseLikedCount}
                        selectedTheme={props.selectedTheme}
                        />
                    }
                    <CardsList 
                        cards={props.cards} 
                        deleteCard = {props.deleteCard} 
                        increaseLikedCount={props.increaseLikedCount}
                        selectedTheme={props.selectedTheme}
                        >
                    </CardsList>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;