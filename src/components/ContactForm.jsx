import React, {useState} from "react";
import "./Style.css"

const ContactForm = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",

       
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "information":
                let information = [...userData.information];
                if (e.target.checked) {
                    information.push(value);
                } else {
                    const informationIndex = information.findIndex(
                        (information) => information === value
                    );
                    information.splice(informationIndex, 1);
                }
                console.log(information);
                return setUserData({
                    ...userData,
                    information: information,
                });

            default:
                return setUserData({
                    ...userData,
                    [name]: value,
                });
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };
    return (
        <div className="reg">
            <h2 className="reg_h2"> CONTACT </h2>
            <form
                className="reg_form"
                onSubmit={handleFormSubmit}
            >

                <div className="reg_section_firstName_lastName_email">
                    <div className="reg_section">
                        <label htmlFor="firstName" className="reg_label">
                            <h2 className="reg_label_h2"> First Name* </h2>
                        </label>
                        <input
                            required
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name..."
                            className="reg_input"
                            value={userData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="reg_section">
                        <label htmlFor="lastName" className="reg_label">
                            <h2 className="reg_label_h2">   Last Name* </h2>
                        </label>
                        <input
                            required
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name..."
                            className="reg_input"
                            value={userData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="reg_section">
                        <label htmlFor="email" className="reg_label">
                            <h2 className="reg_label_h2">    Email* </h2>
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email..."
                            className="reg_input"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <section className="reg_box_textarea">
                    <label htmlFor="message"  className="reg_label_textarea">
                        <h2 className="reg_label_textarea_h2">   Message*  </h2>
                    </label>
                    <textarea
                        required
                        name="message"
                        id="message"
                        className="reg_input_textarea"
                        placeholder="Write Here..."
                        value={userData.message}

                        onChange={handleInputChange}
                    />
                </section>

                <section>
                    <button
                        type="submit"
                        className="reg_button"
                    >
                        <h2 className="reg_button_h2">  TO SEND  </h2>

                    </button>
                </section>
            </form>
        </div>
    );
};

export default ContactForm;