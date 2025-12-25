const BookingPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const garageId = parseInt(urlParams.get('garageId'));

    // Garage data with services for different vehicle types
    const servicesByVehicleType = {
        "four-wheeler": [
            "Engine Repair", "Brake Service", "Oil Change", "AC Repair"
        ],
        "two-wheeler": [
            "Engine Repair", "Brake Service", "Oil Change"
        ]
    };

    // Garage data with garage name
    const garageData = {
        1: {
            name: "City Auto Works"
        },
        2: {
            name: "Precision Motors"
        }
    };

    const [form, setForm] = React.useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        vehicleType: "four-wheeler",
        vehicleModel: "",
        vehicleNumber: "",
        serviceType: "", // Service type should be selected dynamically based on vehicle type
        problem: "",
        date: "",
        time: "",
        pickupOption: "self"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the form data to send to PHP backend
        const formData = new FormData();
        for (const key in form) {
            formData.append(key, form[key]);
        }
        formData.append("garageId", garageId); // Include the garageId in the form data

        // Send data to backend (submit_booking.php)
        fetch("submit_booking.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert(result); // Show success message from PHP
            window.location.href = "homepage.html"; // Redirect to homepage after booking
        })
        .catch(error => {
            console.error("Error submitting booking:", error);
            alert("Error booking. Please try again.");
        });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleVehicleTypeChange = (e) => {
        setForm({
            ...form,
            vehicleType: e.target.value,
            serviceType: "" // Reset service type when vehicle type changes
        });
    };

    return (
        <div className="booking-container">
            <div className="booking-card">
                <h1 className="booking-title">
                    <i className="fas fa-calendar-alt"></i> Book at {garageData[garageId]?.name || "Garage"}
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Personal Information Section */}
                    <section className="form-section">
                        <h2>Personal Information</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number*</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>City*</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Full Address*</label>
                            <textarea
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                                rows="3"
                            ></textarea>
                        </div>
                    </section>

                    {/* Vehicle Details Section */}
                    <section className="form-section">
                        <h2>Vehicle Details</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Vehicle Type*</label>
                                <select
                                    name="vehicleType"
                                    value={form.vehicleType}
                                    onChange={handleVehicleTypeChange}
                                    required
                                >
                                    <option value="four-wheeler">Four Wheeler</option>
                                    <option value="two-wheeler">Two Wheeler</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Vehicle Model*</label>
                                <input
                                    type="text"
                                    name="vehicleModel"
                                    value={form.vehicleModel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Vehicle Number*</label>
                                <input
                                    type="text"
                                    name="vehicleNumber"
                                    value={form.vehicleNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Service Details Section */}
                    <section className="form-section">
                        <h2>Service Details</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Service Type*</label>
                                <select
                                    name="serviceType"
                                    value={form.serviceType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Service</option>
                                    {/* Dynamically populate service types based on the selected vehicle type */}
                                    {servicesByVehicleType[form.vehicleType].map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Date*</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Time*</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Problem Description</label>
                            <textarea
                                name="problem"
                                value={form.problem}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>Pickup Option*</label>
                            <div className="pickup-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="pickupOption"
                                        value="self"
                                        checked={form.pickupOption === "self"}
                                        onChange={handleChange}
                                    />
                                    I will drop off and pick up
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="pickupOption"
                                        value="pickup"
                                        checked={form.pickupOption === "pickup"}
                                        onChange={handleChange}
                                    />
                                    Arrange pickup and return
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Form Actions */}
                    <div className="form-actions">
                        <button type="submit" className="btn-primary">
                            <i className="fas fa-check"></i> Confirm Booking
                        </button>
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={() => window.history.back()}
                        >
                            <i className="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

ReactDOM.render(<BookingPage />, document.getElementById('booking-root'));
