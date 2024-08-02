const Hero = ({setShowLearnMore}) => {
    return (
        <section id="HomeSection" className="hero_section">
            <h1>Welcome to Care Tech Hub <br /> Advancing Society with Technology</h1>
            <button onClick={()=> setShowLearnMore(true)} className="main_learn_more_btn">Learn More</button>
        </section>
    );
};
export default Hero;
