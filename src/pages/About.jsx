import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <div className="magic-header">
                <h1>Panda Bite 🐼</h1>
                <h2>Where Culinary Magic Comes to Life!</h2>
            </div>

            <div className="about-section">
                <h3>✨ Our Story</h3>
                <p>
                    Welcome to Panda Bite, born from a love for food and the belief that cooking should never be ordinary. 
                    Just like the playful nature of a panda, our recipes are designed to surprise and enchant. Each dish 
                    is crafted to add a dash of whimsy and fun to your kitchen.
                </p>
            </div>

            <div className="about-section">
                <h3>🎩 What Makes Us Magical</h3>
                <ul>
                    <li><strong>Unique Ingredients:</strong> Everyday ingredients meet exotic spices and magical twists.</li>
                    <li><strong>Visual Feasts:</strong> Dishes that are as stunning as they are tasty.</li>
                    <li><strong>Healthy and Fun:</strong> Wholesome ingredients with a creative and flavorful twist.</li>
                </ul>
            </div>

            <div className="about-section">
                <h3>🍽️ Our Magic Touch</h3>
                <ul>
                    <li><strong>Panda Powders:</strong> Secret spice blends for that extra magic.</li>
                    <li><strong>Enchanting Sauces:</strong> Sauces inspired by fantastical lands and creatures.</li>
                    <li><strong>Mystical Desserts:</strong> Desserts with hidden layers and surprises.</li>
                    <li><strong>Interactive Recipes:</strong> Step-by-step guides with magical tips and tricks!</li>
                </ul>
            </div>

            <div className="about-section">
                <h3>🌱 Our Mission</h3>
                <p>
                    At Panda Bite, we believe in creating food that nourishes the body, delights the senses, and brings people together. 
                    Our mission is to transform everyday ingredients into extraordinary experiences while promoting sustainability, 
                    inclusivity, and creativity in every dish.
                </p>
            </div>

            <div className="about-section">
                <h3>💖 Our Values</h3>
                <ul>
                    <li><strong>Creativity:</strong> Every dish is a canvas, and we love adding an artistic touch to every meal.</li>
                    <li><strong>Community:</strong> Food brings people together, and we value creating connections through our recipes.</li>
                    <li><strong>Sustainability:</strong> We focus on using eco-friendly ingredients and reducing waste in our kitchen.</li>
                    <li><strong>Inclusivity:</strong> Our recipes cater to various dietary preferences, from vegan to gluten-free, ensuring everyone has a seat at the table.</li>
                </ul>
            </div>

            <div className="about-section">
                <h3>🧑‍🍳 Customer Love</h3>
                <p>
                    Our customers mean the world to us! At Panda Bite, we aim to inspire home cooks of all skill levels. Whether you're 
                    a novice chef or a culinary artist, we hope our recipes spark joy and creativity in your kitchen. Here are some 
                    kind words from our community:
                </p>
                <blockquote>
                    "Panda Bite turned my kitchen into a magical space! The recipes are easy to follow, and the results are always 
                    stunning. My kids especially love the mystical desserts!" — Emma L.
                </blockquote>
                <blockquote>
                    "The Panda Powders and enchanting sauces have elevated my cooking game. I feel like a professional chef every time 
                    I use them." — James R.
                </blockquote>
                <blockquote>
                    "Healthy, fun, and creative—Panda Bite has it all! I love how their recipes are inclusive and thoughtful about 
                    different dietary needs." — Sarah K.
                </blockquote>
            </div>
        </div>
    );
};

export default About;
