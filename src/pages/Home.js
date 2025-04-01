import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { style } from "framer-motion/client";

const Background = styled.div`
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    overflow: hidden;
`;

const GlassCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 50px;
    background-filter: blur(10px);
    text-align: center;
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.1);
`;

const Title = styled(motion.h1)`
    font-size: 3.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(90deg, #00f5a0, #00d9f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const SubText = styled(motion.p)`
    font-size: 1.2rem;
    color: #e0e0e0;
    margin: 20px 0;
`;

const Button = styled(motion(Link))`
    display: inline-block;
    padding: 12px 25px;
    font-size: 1rem;
    color: white;
    background: linear-gradient(90deg, #ff3cac, #562b7c);
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3);
    
    &:hover {
      transform: scale(1.1);
      background: linear-gradient(90deg, #ff3cac, #562b7c, #00f5a0);
    }
`;

const Leaf = styled(motion.div)`
    position: absolute;
    width: 20px;
    height: 20px;
    background: url('https://cdn-icons-png.flaticon.com/128/4150/4150956.png') no-repeat center/contain;
    opacity: 0.7;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.2));
`;

const leafVariants = {
    animate: {
        y: [0, 100, 200, 300, 400, 500],
        x: [0, 20, -20, 10, -10, 0],
        rotate: [0, 30, -30, 15, -15, 0],
        opacity: [0, 1, 1, 1, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};


function Home() {
    return (
        <Background>
            {/* Floating Particles for animation */}
            {[...Array(8)].map((_, i) => (
                <Leaf
                    key={i}
                    variants={leafVariants}
                    animate="animate"
                    style={{
                        top: `${Math.random() * 10}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
            <GlassCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                trnsition={{ duration: 1 }}
            />
            <Title
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Connecting People Across Faiths & Interests (Communication Hub)
            </Title>

            <SubText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                ConmmunicationHub helps you to find and create events that bring communities together through events.
                Connecting people of all faiths through events & community support.
            </SubText>
            <Button
                to="/events"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Explore Events
            </Button>
        </Background>
    );
}

export default Home;