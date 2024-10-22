import React from 'react';
import { LuBadgeCheck } from "react-icons/lu";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Back-End Development</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">GO</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Postgres</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">MySql</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Backend;