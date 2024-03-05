import React from 'react'

const Search = () => {
    return (
        <div className='search section'>

            <div className="title">Search tutorials</div>

            <div className="searchBox">
                <input type="text" placeholder='search for tutorials' />
                <button className="searchbtn btn1">
                    <img src="assets/menu.svg" alt="" />
                </button>
            </div>

            <div className="content">
                <div className="contentLeft">
                    <div className="box1">
                        <div className="box2">
                            <img src="assets/posts/2.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="contentRight">
                    <div className="title">
                        <span>Benefits </span> of our online tutorials
                    </div>

                    <ul className="benefitList">
                        <li className="benefitItem">
                            <img src="assets/menu.svg" alt="" />
                            <div className="text">
                                <h4 className="subTitle">
                                    some title
                                </h4>
                                <p className="contentText">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi magnam, expedita excepturi ipsum rerum laudantium placeat ad iure reiciendis voluptates nobis debitis. Laudantium adipisci, aliquam omnis accusamus a quas officia.
                                </p>
                            </div>
                        </li>

                        <li className="benefitItem">
                            <img src="assets/menu.svg" alt="" />
                            <div className="text">
                                <h4 className="subTitle">
                                    some title
                                </h4>
                                <p className="contentText">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi magnam, expedita excepturi ipsum rerum laudantium placeat ad iure reiciendis voluptates nobis debitis. Laudantium adipisci, aliquam omnis accusamus a quas officia.
                                </p>
                            </div>
                        </li>
                        <li className="benefitItem">
                            <img src="assets/menu.svg" alt="" />
                            <div className="text">
                                <h4 className="subTitle">
                                    some title
                                </h4>
                                <p className="contentText">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi magnam, expedita excepturi ipsum rerum laudantium placeat ad iure reiciendis voluptates nobis debitis. Laudantium adipisci, aliquam omnis accusamus a quas officia.
                                </p>
                            </div>
                        </li>

                    </ul>
                    <button className="btn1">Start Now</button>
                </div>
            </div>

        </div >
    )
}

export default Search
