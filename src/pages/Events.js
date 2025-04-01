import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";

const Background = styled.div`
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    min-height: 100vh;
    padding: 30px;
    color: white;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-transform: uppercase;
    background: linear-gradient(90deg, #ff9a9e, #fad0c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const EventList = styled.div`
    margin-top: 20px;
`;
const EventCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin: 15px auto;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-left: 4px solid ${(props) => (props.category === "Religious" ? "#ff3cac" : props.category === "Charity" ? "00f5a0" : "#ffce00")};
`;

const Button = styled(motion.button)`
    background: linear-gradient(90deg, #ff3cac, #562b7c);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 1rem;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3);

    &:hover {
        transform: scale(1.1);
        background: linear-gradient(90deg, #ff3cac, #562b7c, #00f5a0);
    }
`;

const FormContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    width: 50%
    margin: auto;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    outline:none;
`; 

const Select = styled.select`
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    outline: none;
`;
const eventsData = [
    { id: 1, title: "Charity Drive", date: "15-03-2025", category: "Charity", location: "Community Hall" },
    { id: 2, title: "Interfaith Dialogue", date: "20-03-2025", category: "Religious", location: "Community Hall" },
    { id: 3, title: "Community Picnic", date: "25-03-2025", category: "Social", location: "Community Hall" },
];

function Events() {
    const [events, setEvents] = useState(eventsData);
    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        location: "",
        category: "",
    });

    const  toggleForm = () => {
        setShowForm((prev) => !prev);
    }
    const handleAddEvent = () => {
        if (newEvent.title && newEvent.date) {
            setEvents([...events, newEvent]);
            setNewEvent({ title: "", date: "", Category: "", Location: "" });
            setShowForm(false);
        }
    };

    return (
        <Background>
            <h1>✨Upcoming Events✨</h1>
            <EventList>
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>Category: {event.category}</p>
                        <p>Location: {event.location}</p>
                    </EventCard>
                ))}
            </EventList>

            {/* "Add Event" button- visible at all times */}
            <Button onClick={toggleForm} whileHover={{ scale: 1.1 }}>
                {showForm ? "Close Form" : "Add Event"}
            </Button>

            {/* form to add events - shows when "Add Events" is clicked */}
            {showForm && (
                <FormContainer>
                    <input
                        type="text"
                        placeholder="Enter the event title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                    <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    />
                    <select
                        value={newEvent.category}
                        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                    >
                        <option value="">Select Category</option>
                        <option value="Religious">Religious</option>
                        <option value="Social">Social</option>
                        <option value="Charity">Charity</option>
                        <option value="Others">Others</option>
                    </select>
                    <Button onClick={handleAddEvent}>Save Event</Button>
                </FormContainer>
            )}
        </Background>
    );
}

export default Events;