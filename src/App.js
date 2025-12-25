import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Booking from './pages/Booking';
import Header from './components/Header';
import Footer from './components/Footer';

const garages = [{
        id: 1,
        name: "City Auto Works",
        city: "Mumbai",
        location: "Andheri East",
        pincode: "400069",
        phone: "+91 9876543210",
        email: "cityautoworks@example.com",
        openingTime: "8:00 AM",
        closingTime: "8:00 PM",
        services: ["Engine Repair", "Brakes", "Oil Change", "Battery Replacement"],
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    // ... other garages
];

function App() {
    return ( <
            Router >
            <
            div className = "app" >
            <
            Header / >
            <
            Routes >
            <
            Route path = "/"
            element = { < Home garages = { garages }
                />} / >
                <
                Route path = "/details/:id"
                element = { < Details garages = { garages }
                    />} / >
                    <
                    Route path = "/booking/:id"
                    element = { < Booking garages = { garages }
                        />} / >
                        <
                        /Routes> <
                        Footer / >
                        <
                        /div> < /
                        Router >
                    );
                }

                export default App;