import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdaysto corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birtday Parties</li>
                    <li>Anniversary celebration</li>
                    <li>Wedding receptions</li>
                    <li>Baby shower</li>
                    <li>Graduation parties</li>
                    <li>Family reunion</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festival</li>
                    <li>Film screening</li>
                    <li>Comedy shows</li>
                    <li>art exhibitaion</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising Events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neiborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            <section className='features'>

            </section>
            <section className='testimonials'>

            </section>
            <section className='contact'>

            </section>
        </div>
    );
};

export default EventPlanner;
