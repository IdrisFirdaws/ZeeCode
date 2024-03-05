import React from 'react'

const Hero = () => {
    return (
        <div className='hero sub'>
            <div className="heroRight"><h1 className='intro'>
                Develop your skill in a new and unique way
            </h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit omnis, aspernatur incidunt distinctio cupiditate adipisci placeat architecto maiores accusamus, magnam nesciunt ipsum. Unde nisi distinctio ipsum aliquam doloribus nemo sequi?</p>

                <div className="buttons">
                    <button className="btn1">Start Now</button>
                    <button className="btn2">
                        <img src="assets/menu.svg" alt="" />
                        Watch video
                    </button>
                </div></div>

            <div className="heroLeft">
                <div className="bigCircle">
                    <img src="assets/heroImg.png" alt="" className='heroImg' />
                    <div className="smallCircle">

                        <div className="tag free">
                            <img src="assets/menu.svg" alt="" />
                            completely free
                        </div>

                        <div className="tag courses">
                            <img src="assets/menu.svg" alt="" />
                            50+ courses
                        </div>

                        <div className="tag students">
                            <img src="assets/menu.svg" alt="" />
                            <div className='text'>
                                1000+ online students

                                <div className="images">
                                    <img src="assets/persons/1.jpg" alt="" />
                                    <img src="assets/persons/2.jpg" alt="" />
                                    <img src="assets/persons/3.jpg" alt="" />
                                    <img src="assets/persons/4.jpg" alt="" />
                                    <img src="assets/persons/1.jpg" alt="" />
                                    <img src="assets/persons/2.jpg" alt="" />
                                    <img src="assets/persons/1.jpg" alt="" />
                                    <img src="assets/persons/2.jpg" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Hero
